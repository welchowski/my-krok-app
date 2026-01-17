// src/components/FlashCard.tsx — тимчасовий тестовий варіант
import { useState } from 'react'

export default function FlashCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {!isFlipped ? (
        <div className="tailwind css-myl2ny css-exq74d">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-gray-800">
                <h1 className="text-3xl font-bold text-gray-800">
                  Кардіологія
                </h1>
              </div>
            </div>
            <div className="w-full max-w-6xl mx-auto p-4">
              <div className="bg-white rounded-3xl shadow-xl border-4 border-blue-100 overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-center p-4 border-b-2 border-gray-100 gap-6">
                  {/* Ліва кнопка */}
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="lucide lucide-bookmark w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                    <span className="font-semibold">
                      Зберегти
                    </span>
                  </button>
                  {/* Блок прогресу посередині */}
                  <div className="flex-1 max-w-xl mx-auto p-0 space-y-1">
                    <div className="flex justify-between items-center">
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2" style={{ 'width': '33.3333%' }}>
                          <span className="text-white font-bold text-sm">
                            33% (1/3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Права кнопка */}
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="lucide lucide-circle-help w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                    <span className="font-semibold">
                      Підтримка
                    </span>
                  </button>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="bg-gray-50 rounded-2xl p-8 h-full flex items-center">
                        <p className="text-2xl text-gray-800 leading-relaxed">
                          Які основні камери має серце людини і яка їх
                            функція?
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <img alt="Питання" className="w-full h-80 object-cover rounded-2xl shadow-md" src="photo-1650562373852-04c5682ec2e7" />
                      </div>
                    </div>
                    <div className="cursor-pointer text-center text-gray-500 hover:text-gray-700 transition-colors pt-2">
                      <p className="text-base font-medium">
                        Натисніть, щоб повернутися до питання
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (
       
          <div className="tailwind css-myl2ny css-exq74d">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
          <div className="max-w-6xl mx-auto space-y-1">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">
                Кардіологія
              </h1>
            </div>
            <div className="w-full max-w-6xl mx-auto p-4">
              <div className="bg-white rounded-3xl shadow-xl border-4 border-blue-100 overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-center p-4 border-b-2 border-gray-100 gap-6">
                  {/* Ліва кнопка */}
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="lucide lucide-bookmark w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                    <span className="font-semibold">
                      Зберегти
                    </span>
                  </button>
                  {/* Блок прогресу посередині */}
                  <div className="flex-1 max-w-xl mx-auto p-0 space-y-1">
                    <div className="flex justify-between items-center">
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2" style={{ 'width': '33.3333%' }}>
                          <span className="text-white font-bold text-sm">
                            33% (1/3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Права кнопка */}
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="lucide lucide-circle-help w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                    <span className="font-semibold">
                      Підтримка
                    </span>
                  </button>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center gap-4 flex-wrap">
                      <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-gray-200 text-gray-400 cursor-not-allowed" disabled={true}>
                        <svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m12 19-7-7 7-7" />
                          <path d="M19 12H5" />
                        </svg>
                      </button>
                      <button className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all hover:scale-105">
                        <svg className="lucide lucide-square-check-big w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        Завершити проходження
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-gray-200  text-white shadow-md hover:scale-105">
                        <svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="rounded-2xl p-8 border-2 h-full flex items-center" style={{ 'borderColor': 'rgb(147, 197, 253)' }}>
                        <p className="text-2xl text-gray-800 leading-relaxed">
                          <strong>
                            Відповідь:
                          </strong>
                          Серце
                            складається з чотирьох камер: двох
                            передсердь (ліве і праве) та двох шлуночків (лівий і правий). Передсердя приймають кров, а
                            шлуночки викачують її в артерії.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <img alt="Відповідь" className="w-full h-80 object-cover rounded-2xl shadow-md" src="photo-1559757175-0eb30cd8c063" />
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center flex-wrap mt-8">
                      <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 flex items-center gap-3">
                        <svg className="lucide lucide-circle-check-big w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>
                          Знаю
                        </span>
                      </button>
                      <button className="rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 flex items-center gap-3" style={{ 'backgroundColor': '#ffe100', 'color': '#000000' }}>
                        <svg className="lucide lucide-brain w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
                          </path>
                          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
                          </path>
                          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                          <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                          <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                          <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                          <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                          <path d="M6 18a4 4 0 0 1-1.967-.516" />
                          <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                        </svg>
                        <span>
                          Пам'ятаю
                        </span>
                      </button>
                      <button className="rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 flex items-center gap-3 text-black hover:brightness-110 hover:shadow-xl" style={{ 'backgroundColor': '#ff8000' }}>
                        <svg className="lucide lucide-circle-x w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m15 9-6 6" />
                          <path d="m9 9 6 6" />
                        </svg>
                        <span>
                          Не знаю
                        </span>
                      </button>
                    </div>
                    <div className="text-center mt-6">
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl px-8 py-4 font-semibold transition-all shadow-md">
                        📚
                          Приховати лекцію
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 space-y-6 mt-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Детальна інформація
                      </h3>
                      <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
                        Серце – це м'язовий
                          орган, що забезпечує циркуляцію крові в організмі.

                          БУДОВА СЕРЦЯ:
                          • Праве передсердя – приймає венозну кров з організму
                          • Правий шлуночок – викачує кров в легені для насичення киснем
                          • Ліве передсердя – приймає артеріальну кров з легень
                          • Лівий шлуночок – найпотужніша камера, викачує кров в аорту

                          КЛАПАНИ СЕРЦЯ:
                          • Тристулковий клапан (між правим передсердям і шлуночком)
                          • Клапан легеневого стовбура
                          • Мітральний клапан (між лівим передсердям і шлуночком)
                          • Аортальний клапан

                          ФУНКЦІЇ:
                          Серце скорочується в середньому 60-100 разів на хвилину, перекачуючи близько 5-6 літрів крові
                          за хвилину в стані спокою.

                          Систола – скорочення серця
                          Діастола – розслаблення серця
                      </p>
                    </div>
                    <div className="cursor-pointer text-center text-gray-500 hover:text-gray-700 transition-colors pt-2">
                      <p className="text-base font-medium">
                        Натисніть, щоб повернутися до питання
                      </p>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-2">
                      <h3 className="text-lg mb-4 text-gray-900">
                        Схожі матеріали
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <button className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-4 shadow-md transition-all hover:scale-105">
                          <svg className="lucide lucide-video w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5">
                            </path>
                            <rect height="12" rx="2" width="14" x="2" y="6" />
                          </svg>
                          <span className="font-semibold">
                            Відео
                          </span>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl px-6 py-4 shadow-md transition-all hover:scale-105">
                          <svg className="lucide lucide-headphones w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
                            </path>
                          </svg>
                          <span className="font-semibold">
                            Аудіо
                          </span>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-6 py-4 shadow-md transition-all hover:scale-105">
                          <svg className="lucide lucide-file-text w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                          </svg>
                          <span className="font-semibold">
                            Тести
                          </span>
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
        
      )}
    </div>
    
  )
}