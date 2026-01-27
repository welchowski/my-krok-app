import './lectionRun.css'; // або назви файл як хочеш

import TestResultModal from './TestResultModal';
import { useState } from 'react';
import { CircleQuestionMark } from 'lucide-react';
import Selectvariant from './Selectvariant';

interface TestQuestionsProps {
    showAudio?: boolean;
    showFlashCards?: boolean;
    showTests?: boolean;
    showLectures?: boolean;
    showVideo?: boolean;
}

export default function TestQuestions({
    showAudio = false,
    showFlashCards = true,
    showTests = false,
    showLectures = true,
    showVideo = true,
}: TestQuestionsProps) {
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
    const [showModal, setShowModal] = useState(false);

    // Твої реальні дані після тесту
    const [results, setResults] = useState({
        correct: 0,
        incorrect: 0,
        skipped: 0,
        score: 0,
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle');
    const [selected, setSelected] = useState<number | null>(null);

    const current = questionsMOKUP[currentQuestion];
    const answers = current.answers;
    const correctIndex = answers.findIndex(a => a.isCorrect);

    const getButtonClass = (i: number) => {
        if (state === 'idle') return "bg-blue-50 hover:bg-blue-100 hover:shadow-md hover:scale-[1.02] text-gray-900";
        if (i === correctIndex) return "bg-green-500 text-white shadow-lg scale-102";
        if (i === selected) return "bg-orange-400 text-white shadow-lg scale-101";
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
        const isCorrect = i === correctIndex;

        setState(isCorrect ? 'correct' : 'wrong');

        setResults(prev => ({
            ...prev,
            correct: isCorrect ? prev.correct + 1 : prev.correct,
            incorrect: isCorrect ? prev.incorrect : prev.incorrect + 1,
            score: isCorrect ? prev.score + 5 : prev.score,
        }));
    };

    const nextQuestion = () => {
        setState('idle');
        setSelected(null);
        setCurrentQuestion(prev => Math.min(prev + 1, questionsMOKUP.length - 1));
    };



    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 mt-8">
            <h2 className="text-xl mb-0 mt-0 text-gray-900 pb-4 text-center">
                Перевірка знань
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-6">
                {/* Панель з кнопками Зберегти / Прогрес / Підтримка */}
                <div className="flex justify-between items-center p-4 border-b-2 border-gray-100 gap-6 pb-4">

                    {/* Підтримка */}
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <CircleQuestionMark className="w-6 h-6" />
                        <span className="font-semibold">Підтримка</span>
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
                    {/* Зберегти */}
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <svg className="lucide lucide-bookmark w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                        <span className="font-semibold">Зберегти</span>
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
                            {state === 'correct' && (() => { results.correct += 1; return null; })()}
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

                        onClick={() => {
                            // скільки питань вже оброблено (правильно + неправильно + пропущено)
                            const processed = results.correct + results.incorrect + results.skipped;
                            const total = questionsMOKUP.length;
                            const remaining = total - processed;

                            if (remaining > 0) {
                                // додаємо всі залишені питання до skipped
                                setResults(prev => ({
                                    ...prev,
                                    skipped: prev.skipped + remaining,
                                }));
                            }

                            // відкриваємо модалку
                            setShowModal(true);
                        }}


                    >
                        Завершити
                    </button>
                    <TestResultModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        correct={results.correct}
                        incorrect={results.incorrect}
                        skipped={results.skipped}
                        score={results.score}
                    />
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


            <div className="flex justify-between items-center mb-6">
                <button className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center gap-2"
                    onClick={() => {
                        // скільки питань вже оброблено (правильно + неправильно + пропущено)
                        const processed = results.correct + results.incorrect + results.skipped;
                        const total = questionsMOKUP.length;
                        const remaining = total - processed;

                        if (remaining > 0) {
                            // додаємо всі залишені питання до skipped
                            setResults(prev => ({
                                ...prev,
                                skipped: prev.skipped + remaining,
                            }));
                        }

                        // відкриваємо модалку
                        setShowModal(true);
                    }}


                > <svg className="lucide lucide-circle-check-big w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                    </svg>
                    Позначити як переглянуте

                </button>
                <TestResultModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    correct={results.correct}
                    incorrect={results.incorrect}
                    skipped={results.skipped}
                    score={results.score}
                />



            </div>
                        <Selectvariant
                                showAudio={showAudio}
                                showFlashCards={showFlashCards}
                                showTests={showTests}
                                showLectures={showLectures}
                                showVideo={showVideo}
                        />
        </div>
    )
}