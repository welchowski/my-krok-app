import { NavLink } from 'react-router-dom';
import './lectionRun.css'; // або назви файл як хочеш
import BH from '/BH.png';  // або правильний відносний шлях
import KHF from '/Diagram_of_the_human_heart_uk.svg';
import { useState } from 'react';
const questionsMOKUP = [
  {
    question: "Яка камера серця отримує кисневу кров з легень?",
    answers: [
      { letter: "A", text: "Правий шлуночок", isCorrect: false },
      { letter: "B", text: "Ліве передсердя", isCorrect: true },
      { letter: "C", text: "Правий передсердя", isCorrect: false },
      { letter: "D", text: "Лівий шлуночок", isCorrect: false },
      { letter: "E", text: "Аорта", isCorrect: false }
    ],
    explanation: "Киснева кров повертається з легень через легеневі вени до лівого передсердя."
  },
  {
    question: "Який клапан розташований між лівим передсердям та лівим шлуночком?",
    answers: [
      { letter: "A", text: "Трикуспідальний", isCorrect: false },
      { letter: "B", text: "Мітральний", isCorrect: true },
      { letter: "C", text: "Аортальний", isCorrect: false },
      { letter: "D", text: "Легеневий", isCorrect: false },
      { letter: "E", text: "Венозний", isCorrect: false }
    ],
    explanation: "Мітральний (двостулковий) клапан регулює потік крові з лівого передсердя в лівий шлуночок."
  },
  {
    question: "Яка частина серця має найтовстішу м'язову стінку?",
    answers: [
      { letter: "A", text: "Правий передсердя", isCorrect: false },
      { letter: "B", text: "Ліве передсердя", isCorrect: false },
      { letter: "C", text: "Правий шлуночок", isCorrect: false },
      { letter: "D", text: "Лівий шлуночок", isCorrect: true },
      { letter: "E", text: "Міжшлуночкова перегородка", isCorrect: false }
    ],
    explanation: "Лівий шлуночок має найтовстішу стінку, бо виштовхує кров у велике коло кровообігу."
  },
  {
    question: "Через яку судину кров виходить з лівого шлуночка?",
    answers: [
      { letter: "A", text: "Легенева артерія", isCorrect: false },
      { letter: "B", text: "Верхня порожниста вена", isCorrect: false },
      { letter: "C", text: "Аорта", isCorrect: true },
      { letter: "D", text: "Легеневі вени", isCorrect: false },
      { letter: "E", text: "Коронарні артерії", isCorrect: false }
    ],
    explanation: "Аорта — найбільша артерія, яка несе кисневу кров від лівого шлуночка до всього організму."
  },
  {
    question: "Який клапан стоїть між правим шлуночком та легеневою артерією?",
    answers: [
      { letter: "A", text: "Мітральний", isCorrect: false },
      { letter: "B", text: "Трикуспідальний", isCorrect: false },
      { letter: "C", text: "Аортальний", isCorrect: false },
      { letter: "D", text: "Легеневий", isCorrect: true },
      { letter: "E", text: "Синусний", isCorrect: false }
    ],
    explanation: "Легеневий клапан запобігає зворотному току крові з легеневої артерії назад у правий шлуночок."
  }
];

export default function FlashCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [selected, setSelected] = useState<number | null>(null);

  const current = questionsMOKUP[currentQuestion];
  const answers = current.answers;
  const correctIndex = answers.findIndex(a => a.isCorrect);

  const getButtonClass = (i: number) => {
    if (state === 'idle') return "hover:bg-gray-100 bg-white";
    if (i === correctIndex) return "bg-green-100 border-green-400";
    if (i === selected) return "bg-red-100 border-red-400";
    return "bg-white opacity-70";
  };

  const getLetterClass = (i: number) => {
    if (state === 'idle') return "bg-gray-200 text-gray-700";
    if (i === correctIndex) return "bg-green-600 text-white";
    if (i === selected) return "bg-red-600 text-white";
    return "bg-gray-200 text-gray-700";
  };

  const handleAnswer = (i: number) => {
    if (state !== 'idle') return;
    setSelected(i);
    setState(i === correctIndex ? 'correct' : 'wrong');
  };

  const nextQuestion = () => {
    setState('idle');
    setSelected(null);
    setCurrentQuestion(prev => Math.min(prev + 1, questionsMOKUP.length - 1));
  };



  return (

    <div className="tailwind css-myl2ny css-10v5rb">
      <div className="min-h-screen">
        <div className="min-h-screen p-6 bg_base">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="max-w-4xl mx-auto">
                  <NavLink to="/dashboard/module" className="mb-6 px-6 py-3 rounded-xl flex items-center gap-2 text-gray-900 bg-gray-100 border border-gray-200">
                    <svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                    Назад
                  </NavLink>
                  <h1 className="text-4xl mb-8 text-gray-900">
                    Анатомія серця: Повний курс
                  </h1>
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-2">
                    <h2 className="text-2xl mb-6 text-gray-900">
                      Анатомія серця: Теоретична частина
                    </h2>
                    <div className="text-gray-900 leading-relaxed space-y-6">
                      <h3 className="text-xl mb-3">
                        Вступ до кардіології
                      </h3>
                      <p>
                        Серце — це м'язовий орган, що забезпечує циркуляцію крові по організму. Воно розташоване в
                        грудній клітці між легенями, трохи зліва від серединної лінії. Розмір серця приблизно
                        дорівнює розміру стиснутого кулака людини та важить від 250 до 350 грамів у дорослих.
                      </p>
                      <img alt="Heart anatomy" className="float-right mr-6 mb-4 w-1/2 h-auto rounded-2xl shadow-lg" src={BH} />
                      <h3 className="text-xl mb-3">
                        Будова серця
                      </h3>
                      <p>
                        Серце складається з чотирьох камер: двох передсердь (праве та ліве) і двох шлуночків
                        (правий та лівий). Передсердя розташовані у верхній частині серця, а шлуночки — у нижній.
                        Між передсердями та шлуночками знаходяться атріовентрикулярні клапани, які забезпечують
                        односпрямований рух крові.
                      </p>
                      <p>
                        Серцева стінка складається з трьох шарів: внутрішнього (ендокард), середнього м'язового
                        (міокард) і зовнішнього (епікард). Міокард є найтовстішим шаром і відповідає за
                        скорочувальну функцію серця. Серце оточене серцевою сумкою — перикардом, який захищає його
                        та зменшує тертя при скороченнях.
                      </p>
                      <div className="clear-both" />
                      <h3 className="text-xl mb-3 mt-6">
                        Камери серця та їх функції
                      </h3>
                      <img alt="Medical diagram" className="float-left mr-6 mb-4 w-1/2 h-auto rounded-2xl shadow-lg" src={KHF} />
                      <p className="mb-3">
                        <strong>
                          Праве передсердя
                        </strong>
                        отримує венозну (бідну киснем) кров з усього
                        організму через верхню та нижню порожнисті вени. З правого передсердя кров через
                        тристулковий клапан потрапляє до правого шлуночка.
                      </p>
                      <p className="mb-3">
                        <strong>
                          Правий шлуночок
                        </strong>
                        відкачує венозну кров через легеневий клапан
                        у легеневу артерію, яка доставляє її до легень для насичення киснем. Це єдина артерія в
                        організмі, яка несе венозну кров.
                      </p>
                      <p className="mb-3">
                        <strong>
                          Ліве передсердя
                        </strong>
                        отримує артеріальну (збагачену киснем) кров з
                        легень через чотири легеневі вени. З лівого передсердя кров через мітральний (двостулковий)
                        клапан надходить до лівого шлуночка.
                      </p>
                      <p className="mb-3">
                        <strong>
                          Лівий шлуночок
                        </strong>
                        — найпотужніша камера серця. Він відкачує
                        артеріальну кров через аортальний клапан в аорту, яка розподіляє кров по всьому організму.
                        Стінки лівого шлуночка значно товщі, ніж правого, оскільки йому необхідно створювати більший
                        тиск для проштовхування крові по всій системі кровообігу.
                      </p>
                      <div className="clear-both" />
                      <h3 className="text-xl mb-3 mt-6">
                        Клапани серця
                      </h3>
                      <p>
                        Чотири серцеві клапани забезпечують односпрямований рух крові та запобігають її зворотному
                        потоку:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>
                            Тристулковий клапан
                          </strong>
                          — розташований між правим передсердям і правим
                          шлуночком, має три стулки
                        </li>
                        <li>
                          <strong>
                            Легеневий клапан
                          </strong>
                          — знаходиться на виході з правого шлуночка в легеневу
                          артерію
                        </li>
                        <li>
                          <strong>
                            Мітральний клапан
                          </strong>
                          — розташований між лівим передсердям і лівим
                          шлуночком, має дві стулки
                        </li>
                        <li>
                          <strong>
                            Аортальний клапан
                          </strong>
                          — знаходиться на виході з лівого шлуночка в аорту
                        </li>
                      </ul>
                      <h3 className="text-xl mb-3 mt-6">
                        Коронарне кровопостачання
                      </h3>
                      <p>
                        Серцевий м'яз потребує постійного постачання кисню та поживних речовин. Цю функцію
                        виконують коронарні артерії, які відходять від аорти безпосередньо над аортальним клапаном.
                        Права коронарна артерія постачає кров переважно до правих відділів серця, а ліва коронарна
                        артерія (яка ділиться на передню міжшлуночкову та огинаючу гілки) — до лівих відділів серця.
                      </p>
                      <p>
                        Порушення кровопостачання серцевого м'яза через коронарні артерії може призвести до
                        ішемічної хвороби серця, стенокардії або інфаркту міокарда. Тому здоров'я коронарних артерій
                        є критично важливим для нормальної роботи серця.
                      </p>
                      <h3 className="text-xl mb-3 mt-6">
                        Серцевий цикл
                      </h3>
                      <p>
                        Робота серця відбувається циклічно і складається з двох основних фаз: систоли (скорочення)
                        та діастоли (розслаблення). Під час систоли передсердь кров виштовхується в шлуночки, а під
                        час систоли шлуночків — у великі судини (аорту та легеневу артерію). Діастола — це період
                        розслаблення та наповнення камер серця кров'ю. Нормальна тривалість серцевого циклу при
                        частоті серцевих скорочень 70-75 ударів на хвилину становить близько 0.8 секунди.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-xl mb-0 mt-0 text-gray-900 pb-4 text-center">
                      Перевірка знань
                    </h2>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-6">
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
                              style={{ width: `${((currentQuestion + 1) / questionsMOKUP.length) * 100}%` }}
                            >
                              {Math.round(((currentQuestion + 1) / questionsMOKUP.length) * 100)}% ({currentQuestion + 1}/{questionsMOKUP.length})
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
                          
                        >
                          Завершити
                        </button>
                        {state !== 'idle' && currentQuestion + 1 < questionsMOKUP.length && (
                          <button
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            onClick={nextQuestion}
                          >
                            Наступне питання
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      <NavLink
                        to="/dashboard/VideoRun"
                        className="block transition-all h over:scale-105"
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                          // или window.scrollTo(0, 0);
                        }}
                      >
                        <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                              <svg className="lucide lucide-play w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="6 3 20 12 6 21 6 3" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-gray-900">
                                Відео-лекція
                              </h3>
                              <p className="text-sm text-gray-600">
                                45 хвилин
                              </p>
                            </div>
                          </div>
                        </div></NavLink>
                      <NavLink
                        to="/dashboard/VideoRun"
                        className="block transition-all h over:scale-105"
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                          // или window.scrollTo(0, 0);
                        }}
                      >
                        <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                              <svg className="lucide lucide-credit-card w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <rect height="14" rx="2" width="20" x="2" y="5" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-gray-900">
                                Флеш-картки
                              </h3>
                              <p className="text-sm text-gray-600">
                                25 карток
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                      <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <svg className="lucide lucide-file-text w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="M10 9H8" />
                              <path d="M16 13H8" />
                              <path d="M16 17H8" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-gray-900">
                              Лекція
                            </h3>
                            <p className="text-sm text-gray-600">
                              6 питань
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <svg className="lucide lucide-mic w-6 h-6 text-white"
                              fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                              <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-gray-900">
                              Аудіо
                            </h3>
                            <p className="text-sm text-gray-600">
                              6 питань
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br bg-yellow-400 rounded-xl flex items-center justify-center">
                            <svg className="lucide lucide-list-checks w-6 h-6 text-white"
                              fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="m3 10 2.5 2.5L11 6" />
                              <path d="m3 17 2.5 2.5L11 13" />
                              <path d="M13 6h8" />
                              <path d="M13 13h8" />
                              <path d="M13 17h8" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-gray-900">
                              Тести
                            </h3>
                            <p className="text-sm text-gray-600">
                              6 питань
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <button className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center gap-2">
                        <svg className="lucide lucide-circle-check-big w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        Позначити як переглянуте
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}