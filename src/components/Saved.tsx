// src/pages/dashboard/Saved.tsx
import { useState } from 'react';
import { Bookmark, FileText } from 'lucide-react'; // або твої іконки

export default function Saved() {
    const [activeTab, setActiveTab] = useState<'tests' | 'flashcards'>('tests');
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-6 pt-20">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Заголовок */}
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Bookmark className="w-8 h-8 text-emerald-600" />
                        Збережено
                    </h1>
                </div>

                {/* Вкладки */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('tests')}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors ${activeTab === 'tests'
                                    ? 'bg-emerald-50 text-emerald-700 border-b-4 border-emerald-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <FileText className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setActiveTab('flashcards')}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors ${activeTab === 'flashcards'
                                    ? 'bg-emerald-50 text-emerald-700 border-b-4 border-emerald-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <svg className="lucide lucide-credit-card w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect height="14" rx="2" width="20" x="2" y="5" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                            Збережені картки
                        </button>
                    </div>

                    {/* Вміст вкладок */}
                    <div className="p-6">
                        {activeTab === 'tests' ? (
                            <div className="space-y-4">

                                {/* Приклад картки тесту */}
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200  flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium ">Всі тести</h3>
                                        <p className="text-sm text-gray-500">38 питань</p>
                                    </div>
                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => setShowPopup(true)}
                                            className="px-4 py-2 bg-red-10 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Видалити
                                        </button>
                                        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg">
                                            Пройти
                                        </button>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800  mt-12">Тести по темам</h2>


                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">Анатомія: Серцево-судинна система</h3>
                                        <p className="text-sm text-gray-500">26 питань</p>
                                    </div>
                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => setShowPopup(true)}
                                            className="px-4 py-2 bg-red-10 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Видалити
                                        </button>
                                        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg">
                                            Пройти
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">Фармація: Огранічна хімія</h3>
                                        <p className="text-sm text-gray-500">12 питань</p>
                                    </div>
                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => setShowPopup(true)}
                                            className="px-4 py-2 bg-red-10 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Видалити
                                        </button>
                                        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg">
                                            Пройти
                                        </button>
                                    </div>
                                </div>

                                {/* Додай ще картки або список з бекенду */}
                            </div>
                        ) : (
                            <div className="space-y-4">

                                {/* Приклад картки набору карток */}
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">Всі флеш картки</h3>
                                        <p className="text-sm text-gray-500">38 карток</p>
                                    </div>
                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => setShowPopup(true)}
                                            className="px-4 py-2 bg-red-10 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Видалити
                                        </button>
                                        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg">
                                            Пройти
                                        </button>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mt-12">Флеш-картки по темам</h2>

                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">Анатомія: Серцево-судинна система</h3>
                                        <p className="text-sm text-gray-500">26 карток</p>
                                    </div>
                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => setShowPopup(true)}
                                            className="px-4 py-2 bg-red-10 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Видалити
                                        </button>
                                        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg">
                                            Пройти
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">Фармація: Огранічна хімія</h3>
                                        <p className="text-sm text-gray-500">12 карток</p>
                                    </div>
                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => setShowPopup(true)}
                                            className="px-4 py-2 bg-red-10 text-red-700 rounded hover:bg-red-200"
                                        >
                                            Видалити
                                        </button>
                                        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg">
                                            Пройти
                                        </button>
                                    </div>
                                </div>

                                {/* Додай ще картки або список */}
                            </div>


                        )}

                    </div>

                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-80 shadow-xl text-center">
                        <p className="text-lg font-medium mb-6">Видалити?</p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowPopup(false)}
                                className="flex-1 py-3 bg-gray-200 rounded-lg"
                            >
                                Ні
                            </button>
                            <button
                                onClick={() => {
                                    // Тут буде твоя логіка видалення
                                    console.log("Видаляємо елемент");
                                    setShowPopup(false);
                                }}
                                className="flex-1 py-3 -2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                            >
                                Так
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
}