import { NavLink } from 'react-router-dom';
import './lectionRun.css'; // або назви файл як хочеш
import heartImage from '/photo-1690306816872-91063f6de36b.png';  // або правильний відносний шлях

export default function FlashCard() {
    
    
    
    return (

            <div className="tailwind css-myl2ny css-10v5rb">
        <div className="min-h-screen">
          <div className="min-h-screen p-6 bg_base">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-6">
                <div className="flex-1">
                  <div>
                   <NavLink to="/dashboard/module" className="mb-6 px-6 py-3 rounded-xl flex items-center gap-2  text-gray-900 bg_base border border-gray-200">
                      <svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                      </svg>
                      Назад
                    </NavLink>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h2 className="text-3xl mb-6 text-gray-900">
                        Анатомія серця: Основи
                      </h2>
                      <div className="relative mb-8">
                        <img alt="Анатомія серця: Основи" className="w-full h-96 object-cover rounded-2xl" src={heartImage} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
                          <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all">
                            <svg className="lucide lucide-play w-12 h-12 text-gray-900 ml-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <polygon points="6 3 20 12 6 21 6 3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="px-4 py-2 rounded-full text-sm bg_base text-gray-700">
                          Тривалість:
                            45:30
                        </span>
                       
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6 mb-8">
                      <h2 className="text-xl mb-0 mt-0 text-gray-900 pb-4 ">
                        Перевірка знань
                      </h2>
                      <div className="bg-white p-8 rounded-3xl mb-8 shadow-xl ">
                        <div className="flex justify-between items-center p-0 border-b-2 border-gray-100 gap-6 ">
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
                        <div className="border-b-4 border-gray-200 mt-2 mb-2" />
                        <h2 className="text-xl mb-2 mt-6 text-gray-900 pb-4 ">
                          Що є основною функцією
                            мітохондрій у клітині?
                        </h2>
                        <div className="space-y-3">
                          <button className="w-full p-3 text-left rounded-tl-2xl rounded-br-2xl transition-all shadow-sm bg-orange-400 text-white shadow-md" disabled={true}>
                            <span className="inline-block w-7 h-7 rounded-full text-center leading-7 mr-3 text-sm font-semibold bg-white text-orange-500">
                              A
                            </span>
                            Синтез
                              білків
                          </button>
                          <button className="w-full p-3 text-left rounded-tl-2xl rounded-br-2xl transition-all shadow-sm bg-green-500 text-white shadow-lg scale-105" disabled={true}>
                            <span className="inline-block w-7 h-7 rounded-full text-center leading-7 mr-3 text-sm font-semibold bg-white text-green-500">
                              B
                            </span>
                            Виробництво
                              АТФ (енергії)
                          </button>
                          <button className="w-full p-3 text-left rounded-tl-2xl rounded-br-2xl transition-all shadow-sm bg_base text-gray-400" disabled={true}>
                            <span className="inline-block w-7 h-7 rounded-full text-center leading-7 mr-3 text-sm font-semibold bg-blue-200 text-blue-700">
                              C
                            </span>
                            Зберігання
                              генетичної інформації
                          </button>
                          <button className="w-full p-3 text-left rounded-tl-2xl rounded-br-2xl transition-all shadow-sm bg_base text-gray-400" disabled={true}>
                            <span className="inline-block w-7 h-7 rounded-full text-center leading-7 mr-3 text-sm font-semibold bg-blue-200 text-blue-700">
                              D
                            </span>
                            Детоксикація
                              речовин
                          </button>
                        </div>
                        <div className="mt-6 p-5 rounded-2xl shadow-md bg-orange-50 border-2 border-orange-300">
                          <p className="font-semibold mb-3 text-gray-900 text-lg flex items-center gap-2">
                            ✗ На жаль, це не
                              правильно
                          </p>
                          <div className="bg-white p-3 rounded-lg mb-2">
                            <p className="text-sm text-gray-700">
                              <span className="font-semibold text-green-600">
                                Правильна
                                  відповідь:
                              </span>
                              Виробництво АТФ (енергії)
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <span className="font-semibold text-blue-600">
                                Пояснення:
                              </span>
                              Мітохондрії є 'енергетичними
                                станціями' клітини. Вони виробляють АТФ (аденозинтрифосфат) через процес окисного
                                фосфорилування, забезпечуючи енергією всі клітинні процеси.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 mb-1 mt-8">
                          <button className="flex-1 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                            Наступне
                              питання
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
                        </div>
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




)}