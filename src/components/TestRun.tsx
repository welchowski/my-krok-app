import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; // ← імпортуй свій клієнт Supabase
import './test-run.css';

type AnswerState = 'idle' | 'correct' | 'wrong';

export default function TestRun() {
  const [state, setState] = useState<AnswerState>('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const selectedDisciplines = (location.state?.selectedDisciplines as string[]) || [];
const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const current = questions[currentQuestion] || {};
  const answers = [
    { letter: 'A', text: current.option_a || '' },
    { letter: 'B', text: current.option_b || '' },
    { letter: 'C', text: current.option_c || '' },
    { letter: 'D', text: current.option_d || '' },
    { letter: 'E', text: current.option_e || '' },
    { letter: 'F', text: current.option_f || '' },
  ].filter(a => a.text); // тільки заповнені варіанти

  const correctIndex = ['A','B','C','D','E','F'].indexOf(current.correct_option || '');

  useEffect(() => {
    async function loadQuestions() {
      let query = supabase.from('krok_tests').select('*').order('id');

      if (selectedDisciplines.length > 0) {
        query = query.in('discipline', selectedDisciplines);
      }

      const { data, error } = await query.limit(50); // обмеження для прикладу

      if (!error && data) {
        setQuestions(data);
      }
      setLoading(false);
    }

    loadQuestions();
  }, [selectedDisciplines]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Завантаження...</div>;
  if (questions.length === 0) return <div className="min-h-screen flex items-center justify-center">Питань не знайдено</div>;
  if (currentQuestion >= questions.length) return <div className="min-h-screen flex items-center justify-center">Тест завершено!</div>;

  const getButtonClass = (i: number) => {
  if (state === 'idle') {
    return 'bg-blue-50 hover:bg-blue-100 hover:shadow-md hover:scale-[1.02] text-gray-900';
  }

  if (i === correctIndex) {
    return 'bg-green-500 text-white shadow-lg scale-102';
  }

  // Якщо це варіант, який обрав користувач і він неправильний
  if (selectedAnswer !== null && i === selectedAnswer && state === 'wrong') {
    return 'bg-orange-400 text-white shadow-lg scale-101';
  }

  return 'bg-gray-100 text-gray-400 opacity-70';
};

const getLetterClass = (i: number) => {
  if (state === 'idle') return 'bg-blue-200 text-blue-700';

  if (i === correctIndex) return 'bg-white text-green-600 font-bold';

  if (selectedAnswer !== null && i === selectedAnswer && state === 'wrong') {
    return 'bg-white text-red-600 font-bold';
  }

  return 'bg-gray-100 text-gray-400';
};

 const handleAnswer = (i: number) => {
  setSelectedAnswer(i);
  setState(i === correctIndex ? 'correct' : 'wrong');
  if (i === correctIndex) setScore(s => s + 5);
};
  const nextQuestion = () => {
    setState('idle');
    setCurrentQuestion(prev => prev + 1);
  };

  return (
    <div className="min-h-screen  bg_base  to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-gray-900">{current.module_name || 'Загальна анатомія та фізіологія'}</h1>
          <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg border-2 border-yellow-300">
            <span className="text-2xl">🌟</span>
            <div>
              <p className="text-xs text-gray-600">Бали</p>
              <p className="text-xl font-bold text-yellow-600">{score}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
          {/* Панель з кнопками Зберегти / Прогрес / Підтримка */}
          <div className="flex justify-between items-center p-4 border-b-2 border-gray-100 gap-6 pb-4">
            {/* Зберегти */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="lucide lucide-bookmark w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
              <span className="font-semibold">Зберегти</span>
            </button>

            {/* Прогрес */}
            <div className="flex-1 max-w-xl mx-auto space-y-1">
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2 text-white font-bold text-sm"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                >
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% ({currentQuestion + 1}/{questions.length})
                </div>
              </div>
            </div>

            {/* Підтримка */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="lucide lucide-circle-help w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span className="font-semibold">Підтримка</span>
            </button>
          </div>

          <h2 className="text-xl mb-6 text-gray-900 pt-6">{current.question}</h2>

          <div className="space-y-3">
            {answers.map((ans, i) => (
              <button
                key={i}
                className={`w-full p-3 text-left rounded-tl-2xl rounded-br-2xl transition-all shadow-sm ${getButtonClass(i)}`}
                onClick={() => handleAnswer(i)}
                disabled={state !== 'idle'}
              >
                <span className={`inline-block w-7 h-7 rounded-full text-center leading-7 mr-3 text-sm font-semibold ${getLetterClass(i)}`}>
                  {ans.letter}
                </span>
                {ans.text}
              </button>
            ))}
          </div>

         {state !== 'idle' && (
  <div className={`mt-6 p-5 rounded-2xl shadow-md border-2 ${state === 'correct' ? 'bg-green-50 border-green-300' : 'bg-orange-50 border-orange-300'}`}>
    <p className="font-semibold mb-3 text-lg flex items-center gap-2 text-gray-900">
      {state === 'correct' ? (
        <>✓ Відмінно! Правильна відповідь <span className="text-yellow-600 font-bold ml-2">+5 балів 🌟</span></>
      ) : (
        '✗ На жаль, це не правильно'
      )}
    </p>

    {/* Показуємо правильну відповідь ТІЛЬКИ якщо відповідь була НЕПРАВИЛЬНА */}
    {state === 'wrong' && (
      <div className="bg-white p-3 rounded-lg mb-2 text-sm">
        <span className="font-semibold text-green-600">Правильна відповідь:</span> {answers[correctIndex]?.text || '—'}
      </div>
    )}

    <div className="bg-white p-3 rounded-lg text-sm text-gray-700">
      <span className="font-semibold text-blue-600">Пояснення:</span> {current.explanation || 'Немає пояснення'}
    </div>
  </div>
)}

          <div className="mt-8 flex gap-4 justify-center">
            <button
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              onClick={() => navigate('/dashboard')}
            >
              Завершити
            </button>

            {state !== 'idle' && currentQuestion + 1 < questions.length && (
              <button
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={nextQuestion}
              >
                Наступне питання
              </button>
            )}
          </div>
        </div>

        {/* Схожі матеріали - оригінальний дизайн */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h3 className="text-lg mb-4 text-gray-900">Схожі матеріали</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="p-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors flex flex-col items-center gap-2">
              <svg className="lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
              </svg>
              <span className="text-xs">Флеш картки</span>
            </button>

            <button className="p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors flex flex-col items-center gap-2">
              <svg className="lucide lucide-video" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect height="12" rx="2" width="14" x="2" y="6" />
              </svg>
              <span className="text-xs">Відео</span>
            </button>

            <button className="p-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors flex flex-col items-center gap-2">
              <svg className="lucide lucide-file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <span className="text-xs">Лекції</span>
            </button>

            <button className="p-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors flex flex-col items-center gap-2">
              <svg className="lucide lucide-headphones" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
              </svg>
              <span className="text-xs">Аудіо</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}