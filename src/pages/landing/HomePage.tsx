// src/pages/HomePage.tsx
import  { useState } from 'react';

import './home-page.css';  // твої стилі залишаються
import AuthModal from '../../components/AuthModal';
import { useAuth } from '../../hooks/useAuth';
export default function HomePage() {
  useAuth({ requireAuth: false });
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const openAuth = (wantedMode: 'login' | 'register') => {
    setMode(wantedMode);
    setModalOpen(true);
  };

  return (
    <div id="container">
      <div className="">
        <div className="">
          <div className="tailwind css-myl2ny css-exq74d">
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
              <header className="fixed top-0 left-0 right-0 z-50">
                <div className="backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <svg className="lucide lucide-activity w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
                            </path>
                          </svg>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          KROK
                          Platform
                        </span>
                      </div>
                      <nav className="hidden md:flex items-center gap-8">
                        <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#hero">
                          Головна
                        </a>
                        <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#advantages">
                          Переваги
                        </a>
                        <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#learning">
                          Функції
                        </a>
                        <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#pricing">
                          Тарифи
                        </a>
                        <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#contact">
                          Контакти
                        </a>
                      </nav>
                      <div className="hidden md:flex items-center gap-4">
                        <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => openAuth('login')}>
                          Вхід
                        </button>
                        <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all" onClick={() => openAuth('register')}>
                          Почати
                          навчання
                        </button>
                      </div>

                      <button className="md:hidden p-2">
                        <svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <line x1="4" x2="20" y1="12" y2="12">
                          </line>
                          <line x1="4" x2="20" y1="6" y2="6">
                          </line>
                          <line x1="4" x2="20" y1="18" y2="18">
                          </line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <main>
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" id="hero">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 10v6M2 10l10-6 10 6-10 6-10-6z">
                            </path>
                            <path d="M6 13v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6">
                            </path>
                          </svg>
                          <span className="text-sm">
                            Найкраща освітня платформа для студентів-медиків
                          </span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                          Підготуйся до
                          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                            KROK
                          </span>
                          з нами!
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                          Зручна платформа для підготовки до медичних
                          іспитів
                          <strong>
                            KROK 1, 2, 3, М, Б.
                          </strong>
                          Всі матеріали в одному місці, гейміфікація, зручний
                          пошук та вигідні
                          тарифи.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                          <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                              <svg className="lucide lucide-award w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                </path>
                                <circle cx="12" cy="8" r="6">
                                </circle>
                              </svg>
                            </div>
                            <span className="text-sm">
                              Освітні матеріали
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                              <svg className="lucide lucide-trending-up w-4 h-4 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17">
                                </polyline>
                                <polyline points="16 7 22 7 22 13">
                                </polyline>
                              </svg>
                            </div>
                            <span className="text-sm">
                              Статистика
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                              <svg className="lucide lucide-sparkles w-4 h-4 text-orange-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                                </path>
                                <path d="M20 3v4">
                                </path>
                                <path d="M22 5h-4">
                                </path>
                                <path d="M4 17v2">
                                </path>
                                <path d="M5 18H3">
                                </path>
                              </svg>
                            </div>
                            <span className="text-sm">
                              Тестування
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <input className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" placeholder="Ваш email" type="email" />
                          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                            Спробувати
                            безкоштовно
                            <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12h14">
                              </path>
                              <path d="m12 5 7 7-7 7">
                              </path>
                            </svg>
                          </button>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                          Безкоштовний доступ. Без кредитної картки.
                        </p>
                      </div>
                      <div className="relative">
                        <div className="relative rounded-2xl overflow-visible shadow-2xl">
                          <img alt="Студент-медик навчається" className="w-full h-auto" src="photo-1651804810223-6997a7d3fe7c.png" />
                          <div className="absolute bottom-3.5 left-6 right-6 backdrop-blur-lg bg-white/70 rounded-xl p-4 border border-white/20 shadow-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">
                                  Твій прогрес
                                </p>
                                <p className="font-bold text-gray-900">
                                  Level 12 • 2,450 балів
                                </p>
                              </div>
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                                <span className="text-white font-bold">
                                  85%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-xl flex items-center justify-center">
                          <svg className="lucide lucide-award w-10 h-10 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                            </path>
                            <circle cx="12" cy="8" r="6">
                            </circle>
                          </svg>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-full shadow-xl flex items-center justify-center">
                          <svg className="lucide lucide-trending-up w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17">
                            </polyline>
                            <polyline points="16 7 22 7 22 13">
                            </polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-20 px-4 sm:px-6 lg:px-8" id="advantages">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Чому ми
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          кращі
                        </span>
                        за конкурентів?
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Наша платформа поєднує найкращі практики освітніх
                        технологій та зручність використання
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad0)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad0" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6">
                                </stop>
                                <stop offset="100%" stopColor="#2563eb">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Освітня платформа
                          </h3>
                          <p className="text-gray-600">
                            Повністю українська платформа, розроблена для навчання та підготовки до
                            іспитів
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad1)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#22c55e">
                                </stop>
                                <stop offset="100%" stopColor="#16a34a">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z">
                                </path>
                                <path d="M12 22V12">
                                </path>
                                <polyline points="3.29 7 12 12 20.71 7">
                                </polyline>
                                <path d="m7.5 4.27 9 5.15">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Все в одному місці
                          </h3>
                          <p className="text-gray-600">
                            Всі матеріали для підготовки до KROK зібрані на одній платформі
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad2)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#f97316">
                                </stop>
                                <stop offset="100%" stopColor="#ea580c">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <line x1="12" x2="12" y1="2" y2="22">
                                </line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Вигідні тарифи
                          </h3>
                          <p className="text-gray-600">
                            Найкращі ціни на ринку освітніх платформ для студентів
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad3)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad3" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#a855f7">
                                </stop>
                                <stop offset="100%" stopColor="#9333ea">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10">
                                </circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2">
                                </path>
                                <line x1="9" x2="9.01" y1="9" y2="9">
                                </line>
                                <line x1="15" x2="15.01" y1="9" y2="9">
                                </line>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Зручний інтерфейс
                          </h3>
                          <p className="text-gray-600">
                            Інтуїтивно зрозумілий дизайн, створений для комфортного навчання
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad4)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad4" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#eab308">
                                </stop>
                                <stop offset="100%" stopColor="#ca8a04">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                </path>
                                <circle cx="12" cy="8" r="6">
                                </circle>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Гейміфікація
                          </h3>
                          <p className="text-gray-600">
                            Бали, рівні, стріки, лідерборди та винагороди за досягнення
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad5)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad5" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#14b8a6">
                                </stop>
                                <stop offset="100%" stopColor="#0d9488">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                </path>
                                <path d="m9 11 3 3L22 4">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Обґрунтовані відповіді
                          </h3>
                          <p className="text-gray-600">
                            Детальні пояснення до кожного питання з посиланнями на джерела
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad6)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad6" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#ec4899">
                                </stop>
                                <stop offset="100%" stopColor="#db2777">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Аудіо та відео
                          </h3>
                          <p className="text-gray-600">
                            Мультимедійний контент для кращого засвоєння матеріалу
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad7)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad7" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#6366f1">
                                </stop>
                                <stop offset="100%" stopColor="#4f46e5">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <rect height="20" rx="2" ry="2" width="14" x="5" y="2">
                                </rect>
                                <path d="M12 18h.01">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Багатоплатформенність
                          </h3>
                          <p className="text-gray-600">
                            Доступ з веб-браузера, iOS та Android додатків
                          </p>
                        </div>
                      </div>
                      <div className="group">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad8)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad8" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4">
                                </stop>
                                <stop offset="100%" stopColor="#0891b2">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8">
                                </circle>
                                <path d="m21 21-4.3-4.3">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            Зручний пошук
                          </h3>
                          <p className="text-gray-600">
                            Швидкий пошук матеріалів по темах, дисциплінах та ключовим словам
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-50 to-green-50 border border-white/20">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                            <svg className="lucide lucide-award w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                              </path>
                              <circle cx="12" cy="8" r="6">
                              </circle>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-2">
                            Переваги над конкурентами
                          </h3>
                          <p className="text-gray-600">
                            На відміну від
                            <strong>
                              test.testcentr.org.ua, doctrina.space, krok-lead
                            </strong>
                            та інших, ми пропонуємо повний освітній процес, підготовку до будь якого КРОК, гейміфікацію, мультимедіа,
                            статистику та доступ з будь-якого пристрою
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
                  <div className="max-w-7xl mx-auto space-y-32">
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Навчання по модулям та дисциплінам
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Структурований підхід до вивчення кожної
                          медичної дисципліни
                        </p>
                      </div>
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">
                              Мої дисципліни
                            </h3>
                            <p className="text-blue-100">
                              Навчання по модулям
                            </p>
                          </div>
                          <div className="p-6 space-y-4">
                            <div className="p-4 rounded-xl border-2 transition-all border-gray-200 hover:border-blue-500 cursor-pointer">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold">
                                      Анатомія людини
                                    </h4>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    20/24 уроків
                                  </p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                  85%
                                </div>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all" style={{ 'width': '85%' }}>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 rounded-xl border-2 transition-all border-gray-200 hover:border-blue-500 cursor-pointer">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold">
                                      Фізіологія
                                    </h4>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    11/18 уроків
                                  </p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold">
                                  60%
                                </div>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all" style={{ 'width': '60%' }}>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 rounded-xl border-2 transition-all border-gray-200 hover:border-blue-500 cursor-pointer">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold">
                                      Біохімія
                                    </h4>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    9/20 уроків
                                  </p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                  45%
                                </div>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all" style={{ 'width': '45%' }}>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 rounded-xl border-2 transition-all border-gray-100 opacity-60">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold">
                                      Патологія
                                    </h4>
                                    <svg className="lucide lucide-lock w-4 h-4 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                      <rect height="11" rx="2" ry="2" width="18" x="3" y="11">
                                      </rect>
                                      <path d="M7 11V7a5 5 0 0 1 10 0v4">
                                      </path>
                                    </svg>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    0/22 уроків
                                  </p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                                  0%
                                </div>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all" style={{ 'width': '0%' }}>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                            <p className="text-sm mb-1 opacity-90">
                              Анатомія людини
                            </p>
                            <h3 className="text-2xl font-bold mb-2">
                              Серцево-судинна система
                            </h3>
                            <p className="text-purple-100">
                              Урок 21 з 24
                            </p>
                          </div>
                          <div className="p-6">
                            <div className="mb-6">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-gray-600">
                                  Прогрес уроку
                                </span>
                                <span className="font-bold">
                                  50%
                                </span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-[50%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <p className="font-bold mb-3">
                                Теми уроку:
                              </p>
                              <div className="flex items-center gap-3 p-3 rounded-lg transition-all bg-green-50">
                                <svg className="lucide lucide-circle-check-big w-5 h-5 text-green-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                  </path>
                                  <path d="m9 11 3 3L22 4">
                                  </path>
                                </svg>
                                <span className="">
                                  Будова серця
                                </span>
                              </div>
                              <div className="flex items-center gap-3 p-3 rounded-lg transition-all bg-green-50">
                                <svg className="lucide lucide-circle-check-big w-5 h-5 text-green-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                  </path>
                                  <path d="m9 11 3 3L22 4">
                                  </path>
                                </svg>
                                <span className="">
                                  Коронарні судини
                                </span>
                              </div>
                              <div className="flex items-center gap-3 p-3 rounded-lg transition-all bg-purple-50 border-2 border-purple-500">
                                <svg className="lucide lucide-circle-play w-5 h-5 text-purple-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10">
                                  </circle>
                                  <polygon points="10 8 16 12 10 16 10 8">
                                  </polygon>
                                </svg>
                                <span className="font-bold">
                                  Провідна система серця
                                </span>
                              </div>
                              <div className="flex items-center gap-3 p-3 rounded-lg transition-all bg-gray-50">
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0">
                                </div>
                                <span className="">
                                  Серцевий цикл
                                </span>
                              </div>
                            </div>
                            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                              <svg className="lucide lucide-circle-play w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10">
                                </circle>
                                <polygon points="10 8 16 12 10 16 10 8">
                                </polygon>
                              </svg>
                              <span>
                                Продовжити навчання
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Зручний інтерфейс
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Інтуїтивний дизайн, створений спеціально для
                          медичного навчання
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="p-6">
                            <div className="relative mb-6">
                              <input className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none" placeholder="Шукай по темах, дисциплінах, ключових словах..." readOnly={true} type="text" value="серцево-судинна система" />
                              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                  <span className="text-white">
                                    🔍
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <p className="text-sm text-gray-500">
                                Знайдено 156 результатів
                              </p>
                              <div className="space-y-3" data-fg-9eq9="1.47:1.2723:/src/app/components/SearchDemo.tsx:48:9:1431:1232:e:div">
                                <div className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group" data-fg-9eq11="1.47:1.2723:/src/app/components/SearchDemo.tsx:52:15:1576:1043:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" data-fg-9eq12="1.47:1.2723:/src/app/components/SearchDemo.tsx:59:17:1934:172:e:div">
                                    <svg className="lucide lucide-book size-6" data-fg-9eq13="1.47:1.2723:/src/app/components/SearchDemo.tsx:60:19:2056:27:e:Icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20">
                                      </path>
                                    </svg>
                                  </div>
                                  <div className="flex-1" data-fg-9eq14="1.47:1.2723:/src/app/components/SearchDemo.tsx:62:17:2123:358:e:div">
                                    <h4 className="text-gray-900 mb-1" data-fg-9eq15="1.47:1.2723:/src/app/components/SearchDemo.tsx:63:19:2166:54:e:h4">
                                      Анатомія серцево-судинної системи
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-600" data-fg-9eq17="1.47:1.2723:/src/app/components/SearchDemo.tsx:64:19:2239:219:e:div">
                                      <span data-fg-9eq18="1.47:1.2723:/src/app/components/SearchDemo.tsx:65:21:2323:26:e:span">
                                        Навчальний
                                        матеріал
                                      </span>
                                      <span data-fg-9eq20="1.47:1.2723:/src/app/components/SearchDemo.tsx:66:21:2370:14:e:span">
                                        •
                                      </span>
                                      <span data-fg-9eq22="1.47:1.2723:/src/app/components/SearchDemo.tsx:67:21:2405:28:e:span">
                                        Модуль
                                        3
                                      </span>
                                    </div>
                                  </div>
                                  <svg className="lucide lucide-chevron-right size-5 text-gray-400 group-hover:text-gray-700 transition-colors" data-fg-9eq24="1.47:1.2723:/src/app/components/SearchDemo.tsx:70:17:2498:93:e:ChevronRight::::::C6QQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m9 18 6-6-6-6">
                                    </path>
                                  </svg>
                                </div>
                                <div className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group" data-fg-9eq11="1.47:1.2723:/src/app/components/SearchDemo.tsx:52:15:1576:1043:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" data-fg-9eq12="1.47:1.2723:/src/app/components/SearchDemo.tsx:59:17:1934:172:e:div">
                                    <svg className="lucide lucide-file-text size-6" data-fg-9eq13="1.47:1.2723:/src/app/components/SearchDemo.tsx:60:19:2056:27:e:Icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z">
                                      </path>
                                      <path d="M14 2v4a2 2 0 0 0 2 2h4">
                                      </path>
                                      <path d="M10 9H8">
                                      </path>
                                      <path d="M16 13H8">
                                      </path>
                                      <path d="M16 17H8">
                                      </path>
                                    </svg>
                                  </div>
                                  <div className="flex-1" data-fg-9eq14="1.47:1.2723:/src/app/components/SearchDemo.tsx:62:17:2123:358:e:div">
                                    <h4 className="text-gray-900 mb-1" data-fg-9eq15="1.47:1.2723:/src/app/components/SearchDemo.tsx:63:19:2166:54:e:h4">
                                      Тест KROK 2 - Кардіологія
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-600" data-fg-9eq17="1.47:1.2723:/src/app/components/SearchDemo.tsx:64:19:2239:219:e:div">
                                      <span data-fg-9eq18="1.47:1.2723:/src/app/components/SearchDemo.tsx:65:21:2323:26:e:span">
                                        Тестування
                                      </span>
                                      <span data-fg-9eq20="1.47:1.2723:/src/app/components/SearchDemo.tsx:66:21:2370:14:e:span">
                                        •
                                      </span>
                                      <span data-fg-9eq22="1.47:1.2723:/src/app/components/SearchDemo.tsx:67:21:2405:28:e:span">
                                        200
                                        питань
                                      </span>
                                    </div>
                                  </div>
                                  <svg className="lucide lucide-chevron-right size-5 text-gray-400 group-hover:text-gray-700 transition-colors" data-fg-9eq24="1.47:1.2723:/src/app/components/SearchDemo.tsx:70:17:2498:93:e:ChevronRight::::::C6QQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m9 18 6-6-6-6">
                                    </path>
                                  </svg>
                                </div>
                                <div className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group" data-fg-9eq11="1.47:1.2723:/src/app/components/SearchDemo.tsx:52:15:1576:1043:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                                  <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" data-fg-9eq12="1.47:1.2723:/src/app/components/SearchDemo.tsx:59:17:1934:172:e:div">
                                    <svg className="lucide lucide-video size-6" data-fg-9eq13="1.47:1.2723:/src/app/components/SearchDemo.tsx:60:19:2056:27:e:Icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5">
                                      </path>
                                      <rect height="12" rx="2" width="14" x="2" y="6">
                                      </rect>
                                    </svg>
                                  </div>
                                  <div className="flex-1" data-fg-9eq14="1.47:1.2723:/src/app/components/SearchDemo.tsx:62:17:2123:358:e:div">
                                    <h4 className="text-gray-900 mb-1" data-fg-9eq15="1.47:1.2723:/src/app/components/SearchDemo.tsx:63:19:2166:54:e:h4">
                                      Відеолекція: ЕКГ діагностика
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-600" data-fg-9eq17="1.47:1.2723:/src/app/components/SearchDemo.tsx:64:19:2239:219:e:div">
                                      <span data-fg-9eq18="1.47:1.2723:/src/app/components/SearchDemo.tsx:65:21:2323:26:e:span">
                                        Відео
                                      </span>
                                      <span data-fg-9eq20="1.47:1.2723:/src/app/components/SearchDemo.tsx:66:21:2370:14:e:span">
                                        •
                                      </span>
                                      <span data-fg-9eq22="1.47:1.2723:/src/app/components/SearchDemo.tsx:67:21:2405:28:e:span">
                                        45
                                        хв
                                      </span>
                                    </div>
                                  </div>
                                  <svg className="lucide lucide-chevron-right size-5 text-gray-400 group-hover:text-gray-700 transition-colors" data-fg-9eq24="1.47:1.2723:/src/app/components/SearchDemo.tsx:70:17:2498:93:e:ChevronRight::::::C6QQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m9 18 6-6-6-6">
                                    </path>
                                  </svg>
                                </div>
                              </div>
                              <div className="p-4 border-2 border-gray-100 rounded-xl hover:border-blue-500 transition-all cursor-pointer">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-bold mb-1">
                                      ЕКГ: основи інтерпретації
                                    </h4>
                                    <div className="flex gap-2">
                                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                                        Флеш-картки
                                      </span>
                                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                        Діагностика
                                      </span>
                                    </div>
                                  </div>
                                  <svg className="lucide lucide-circle-check-big w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                    </path>
                                    <path d="m9 11 3 3L22 4">
                                    </path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Гейміфікація навчання
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Бали, рівні, стріки, лідерборди та винагороди
                          за досягнення
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <p className="text-sm opacity-90">
                                  Твій рівень
                                </p>
                                <p className="text-3xl font-bold">
                                  12
                                </p>
                              </div>
                              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="lucide lucide-award w-10 h-10" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                  </path>
                                  <circle cx="12" cy="8" r="6">
                                  </circle>
                                </svg>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
                                <div className="h-full w-[65%] bg-white rounded-full">
                                </div>
                              </div>
                              <span className="text-sm">
                                2,450 / 3,000
                              </span>
                            </div>
                          </div>
                          <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                                  <svg className="lucide lucide-flame w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z">
                                    </path>
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-bold">
                                    Streak
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    7 днів підряд
                                  </p>
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-orange-600">
                                🔥
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                  <svg className="lucide lucide-star w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                    </path>
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-bold">
                                    Нагороди
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    15 отримано
                                  </p>
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-yellow-600">
                                ⭐
                              </div>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-xl">
                              <div className="flex items-center justify-between mb-3">
                                <p className="font-bold">
                                  🏆 Лідерборд
                                </p>
                                <span className="text-sm text-blue-600">
                                  Твоє місце:
                                  #42
                                </span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 rounded-lg bg-white">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold w-6">
                                      #1
                                    </span>
                                    <span className="text-sm">
                                      Олександр К.
                                    </span>
                                  </div>
                                  <span className="text-sm font-medium">
                                    5230
                                    pts
                                  </span>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-lg bg-white">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold w-6">
                                      #2
                                    </span>
                                    <span className="text-sm">
                                      Марія П.
                                    </span>
                                  </div>
                                  <span className="text-sm font-medium">
                                    4890
                                    pts
                                  </span>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-100">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold w-6">
                                      #42
                                    </span>
                                    <span className="text-sm">
                                      Ти
                                    </span>
                                  </div>
                                  <span className="text-sm font-medium">
                                    2450 pts
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Обґрунтовані відповіді
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Детальні пояснення з посиланнями на джерела до
                          кожного питання
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
                            <div className="flex justify-between items-center">
                              <span className="font-bold">
                                Тестування KROK
                                2
                              </span>
                              <span>
                                Питання 15/150
                              </span>
                            </div>
                            <div className="mt-2 w-full h-2 bg-white/30 rounded-full overflow-hidden">
                              <div className="h-full w-[15%] bg-white rounded-full">
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">
                              Анатомія • Складність: Середня
                            </p>
                            <p className="text-lg font-medium mb-4">
                              Яка структура формує передню стінку пахвинного каналу?
                            </p>
                            <div className="space-y-3 mb-6">
                              <div className="flex items-start gap-3 p-4 bg-red-100 border border-red-400 rounded-lg">
                                <svg className="lucide lucide-circle-x size-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10">
                                  </circle>
                                  <path d="m15 9-6 6">
                                  </path>
                                  <path d="m9 9 6 6">
                                  </path>
                                </svg>
                                <div className="flex-1">
                                  <div className="font-medium text-gray-900 mb-2">
                                    <span className="font-medium">
                                      A.
                                    </span>
                                    T-лімфоцити
                                  </div>
                                  <div className="text-sm text-gray-700">
                                    T-лімфоцити відповідають за клітинний імунітет, але не виробляють антитіла
                                  </div>
                                </div>
                              </div>
                              <button className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all">
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full border-2 border-gray-300">
                                  </div>
                                  <span>
                                    Поперечна
                                    фасція
                                  </span>
                                </div>
                              </button>
                              <button className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all">
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full border-2 border-gray-300">
                                  </div>
                                  <span>
                                    Внутрішній косий
                                    м'яз живота
                                  </span>
                                </div>
                              </button>
                              <button className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all">
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full border-2 border-gray-300">
                                  </div>
                                  <span>
                                    Пахвинна
                                    зв'язка
                                  </span>
                                </div>
                              </button>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg" data-fg-ndt15="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:24:13:996:1286:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                              <svg className="lucide lucide-circle-check-big size-6 text-green-600 mt-0.5 flex-shrink-0" data-fg-ndt16="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:30:15:1275:70:e:CheckCircle::::::XKp" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                </path>
                                <path d="m9 11 3 3L22 4">
                                </path>
                              </svg>
                              <div className="flex-1" data-fg-ndt17="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:31:15:1360:896:e:div">
                                <div className="text-gray-900 mb-3" data-fg-ndt18="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:32:17:1401:137:e:div">
                                  <span className="font-medium" data-fg-ndt19="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:33:19:1456:39:e:span">
                                    B.
                                  </span>
                                  Апоневроз зовнішнього косого м'яза
                                </div>
                                <div className="bg-white/80 p-4 rounded-md border border-green-100" data-fg-ndt22="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:35:17:1555:680:e:div">
                                  <div className="flex items-start gap-2" data-fg-ndt23="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:36:19:1642:570:e:div">
                                    <div className="text-sm text-gray-700" data-fg-ndt25="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:38:21:1786:401:e:div">
                                      <strong className="text-green-700" data-fg-ndt26="1.68:1.4141:/src/app/components/AnswerExplanationDemo.tsx:39:23:1848:64:e:strong">
                                      </strong>
                                      Апоневроз зовнішнього косого м'яза живота - це широка плоска сухожильна
                                      пластинка, в яку переходять волокна однойменного м'яза.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Мультимедійне навчання
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Відео-лекції, аудіо матеріали та інтерактивний
                          контент
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg className="lucide lucide-play w-10 h-10 text-blue-600 ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polygon points="6 3 20 12 6 21 6 3">
                                  </polygon>
                                </svg>
                              </button>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="backdrop-blur-lg bg-white/20 rounded-lg p-3">
                                <div className="flex items-center justify-between text-white text-sm mb-2">
                                  <span>
                                    05:23
                                  </span>
                                  <span>
                                    15:47
                                  </span>
                                </div>
                                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                  <div className="h-full w-[34%] bg-white rounded-full">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                              Фізіологія нервової системи
                            </h3>
                            <p className="text-gray-600 mb-4">
                              Лекція 12 • Тривалість: 15:47
                            </p>
                            <div className="flex gap-3">
                              <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                                <svg className="lucide lucide-volume2 lucide-volume-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z">
                                  </path>
                                  <path d="M16 9a5 5 0 0 1 0 6">
                                  </path>
                                  <path d="M19.364 18.364a9 9 0 0 0 0-12.728">
                                  </path>
                                </svg>
                                <span className="text-sm">
                                  Аудіо версія
                                </span>
                              </button>
                              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                                <span className="text-sm">
                                  📄 Конспект
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Багатоплатформенність
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Навчайся з будь-якого пристрою: веб, iOS або
                          Android
                        </p>
                      </div>
                      <div className="mt-16" data-fg-cuqk60="1.18:1.7135:/src/app/components/AdvantagesSection.tsx:180:9:6701:397:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                        <div className="grid md:grid-cols-3 gap-6" data-fg-cigc0="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:7:5:195:4850:e:div::1">
                          <div data-fg-cigc2="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:9:7:272:1385:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 text-center hover:shadow-lg transition-shadow h-full" data-fg-cigc3="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:15:9:465:1172:e:Card:::::s:CuJ6:1" data-fg-elfm0="0.19:0.1988:/src/app/components/ui/card.tsx:7:5:149:178:e:div::1" data-slot="card">
                              <div className="bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" data-fg-cigc4="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:16:11:551:203:e:div">
                                <svg className="lucide lucide-monitor size-10 text-white" data-fg-cigc5="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:17:13:695:42:e:Monitor::::::hHd" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <rect height="14" rx="2" width="20" x="2" y="3">
                                  </rect>
                                  <line x1="8" x2="16" y1="21" y2="21">
                                  </line>
                                  <line x1="12" x2="12" y1="17" y2="21">
                                  </line>
                                </svg>
                              </div>
                              <h3 className="text-xl mb-2 text-gray-900" data-fg-cigc6="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:19:11:765:61:e:h3">
                                Веб-платформа
                              </h3>
                              <p className="text-gray-600 mb-4" data-fg-cigc8="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:20:11:837:97:e:p">
                                Повний функціонал у твоєму браузері
                              </p>
                              <div className="space-y-2 text-sm text-left" data-fg-cigc10="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:23:11:945:676:e:div">
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc11="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:24:13:1003:190:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc12="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:25:15:1073:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc13="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:26:15:1145:29:e:span">
                                    Без
                                    встановлення
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc15="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:28:13:1206:194:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc16="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:29:15:1276:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc17="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:30:15:1348:33:e:span">
                                    Всі
                                    функції доступні
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc15="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:28:13:1206:194:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc16="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:29:15:1276:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc17="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:30:15:1348:33:e:span">
                                    Всі
                                    функції доступні
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc19="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:32:13:1413:191:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc20="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:33:15:1483:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc21="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:34:15:1555:30:e:span">
                                    Десктоп
                                    та мобільная версія
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-fg-cigc24="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:41:7:1687:1648:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full border-2 border-blue-200" data-fg-cigc25="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:47:9:1892:1423:e:Card:::::s:CuJ6:1" data-fg-elfm0="0.19:0.1988:/src/app/components/ui/card.tsx:7:5:149:178:e:div::1" data-slot="card">
                              <div className="bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="lucide lucide-smartphone size-10 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <rect height="20" rx="2" ry="2" width="14" x="5" y="2">
                                  </rect>
                                  <path d="M12 18h.01">
                                  </path>
                                </svg>
                              </div>
                              <h3 className="text-xl mb-2 text-gray-900" data-fg-cigc28="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:51:11:2218:59:e:h3">
                                iOS додаток
                              </h3>
                              <p className="text-gray-600 mb-4" data-fg-cigc30="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:52:11:2288:80:e:p">
                                Для iPhone та iPad
                              </p>
                              <div className="space-y-2 text-sm text-left mb-4" data-fg-cigc32="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:55:11:2379:668:e:div">
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc33="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:56:13:2442:186:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc34="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:57:15:2512:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc35="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:58:15:2584:25:e:span">
                                    Офлайн
                                    режим
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc37="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:60:13:2641:189:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc38="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:61:15:2711:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc39="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:62:15:2783:28:e:span">
                                    Push-сповіщення
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc41="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:64:13:2843:187:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc42="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:65:15:2913:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc43="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:66:15:2985:26:e:span">
                                    Синхронізація
                                  </span>
                                </div>
                              </div>
                              <button className="w-full text-white px-4 py-2 rounded-lg text-sm hover:bg-black transition-colors duration-300 flex items-center justify-center gap-3 shadow-md" style={{ 'backgroundColor': '#1f2937 !important' }}>
                                <img alt="App Store" className="h-8" src="https://developer.apple.com/assets/elements/icons/download-on-the-app-store/download-on-the-app-store.svg" />
                              </button>
                            </div>
                          </div>
                          <div data-fg-cigc50="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:77:7:3369:1665:e:motion.div" style={{ 'opacity': '1', 'transform': 'none' }}>
                            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full border-2 border-green-200" data-fg-cigc51="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:83:9:3574:1440:e:Card:::::s:CuJ6:1" data-fg-elfm0="0.19:0.1988:/src/app/components/ui/card.tsx:7:5:149:178:e:div::1" data-slot="card">
                              <div className="bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" data-fg-cigc52="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:84:11:3686:201:e:div">
                                <svg className="lucide lucide-tablet size-10 text-white" data-fg-cigc53="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:85:13:3829:41:e:Tablet::::::EKwl" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <rect height="20" rx="2" ry="2" width="16" x="4" y="2">
                                  </rect>
                                  <line x1="12" x2="12.01" y1="18" y2="18">
                                  </line>
                                </svg>
                              </div>
                              <h3 className="text-xl mb-2 text-gray-900" data-fg-cigc54="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:87:11:3898:63:e:h3">
                                Android додаток
                              </h3>
                              <p className="text-gray-600 mb-4" data-fg-cigc56="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:88:11:3972:88:e:p">
                                Для всіх Android пристроїв
                              </p>
                              <div className="space-y-2 text-sm text-left mb-4" data-fg-cigc58="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:91:11:4071:668:e:div">
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc59="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:92:13:4134:186:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc60="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:93:15:4204:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc61="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:94:15:4276:25:e:span">
                                    Офлайн
                                    режим
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc63="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:96:13:4333:189:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc64="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:97:15:4403:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc65="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:98:15:4475:28:e:span">
                                    Push-сповіщення
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700" data-fg-cigc67="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:100:13:4535:187:e:div">
                                  <svg className="lucide lucide-check size-4 text-green-600 flex-shrink-0" data-fg-cigc68="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:101:15:4605:57:e:Check::::::BUmF" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6 9 17l-5-5">
                                    </path>
                                  </svg>
                                  <span data-fg-cigc69="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:102:15:4677:26:e:span">
                                    Синхронізація
                                  </span>
                                </div>
                              </div>
                              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-3 shadow-md" data-fg-cigc71="1.35:1.5194:/src/app/components/MobileAppsShowcase.tsx:105:11:4750:248:e:button">
                                <img alt="Get it on Google Play" className="h-24 w-auto scale-150" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-12">
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                        Детальна статистика
                      </h3>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Відстежуй прогрес, аналізуй результати та
                        покращуй знання
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">
                              Твоя статистика
                            </h3>
                            <p className="text-blue-100">
                              За останній місяць
                            </p>
                          </div>
                          <div className="p-6">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              <div className="text-center p-4 bg-blue-50 rounded-xl">
                                <svg className="lucide lucide-trending-up w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17">
                                  </polyline>
                                  <polyline points="16 7 22 7 22 13">
                                  </polyline>
                                </svg>
                                <p className="text-2xl font-bold text-blue-600">
                                  87%
                                </p>
                                <p className="text-xs text-gray-600">
                                  Успішність
                                </p>
                              </div>
                              <div className="text-center p-4 bg-green-50 rounded-xl">
                                <svg className="lucide lucide-circle-check-big w-8 h-8 text-green-600 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                  </path>
                                  <path d="m9 11 3 3L22 4">
                                  </path>
                                </svg>
                                <p className="text-2xl font-bold text-green-600">
                                  245
                                </p>
                                <p className="text-xs text-gray-600">
                                  Тестів
                                </p>
                              </div>
                              <div className="text-center p-4 bg-orange-50 rounded-xl">
                                <svg className="lucide lucide-award w-8 h-8 text-orange-600 mx-auto mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                  </path>
                                  <circle cx="12" cy="8" r="6">
                                  </circle>
                                </svg>
                                <p className="text-2xl font-bold text-orange-600">
                                  127
                                </p>
                                <p className="text-xs text-gray-600">
                                  Годин
                                </p>
                              </div>
                            </div>
                            <div className="mb-6">
                              <p className="font-bold mb-3">
                                Успішність по дисциплінах
                              </p>
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>
                                      Анатомія
                                    </span>
                                    <span className="font-bold">
                                      92%
                                    </span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ 'width': '92%' }}>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>
                                      Фізіологія
                                    </span>
                                    <span className="font-bold">
                                      85%
                                    </span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ 'width': '85%' }}>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>
                                      Біохімія
                                    </span>
                                    <span className="font-bold">
                                      78%
                                    </span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ 'width': '78%' }}>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>
                                      Патологія
                                    </span>
                                    <span className="font-bold">
                                      88%
                                    </span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{ 'width': '88%' }}>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                              <p className="font-bold mb-3">
                                Розподіл за складністю
                              </p>
                              <div className="flex gap-2">
                                <div className="flex-1 text-center p-3 bg-green-100 rounded-lg">
                                  <p className="text-sm text-gray-600 mb-1">
                                    Легкі
                                  </p>
                                  <p className="font-bold text-green-700">
                                    95%
                                  </p>
                                </div>
                                <div className="flex-1 text-center p-3 bg-yellow-100 rounded-lg">
                                  <p className="text-sm text-gray-600 mb-1">
                                    Середні
                                  </p>
                                  <p className="font-bold text-yellow-700">
                                    82%
                                  </p>
                                </div>
                                <div className="flex-1 text-center p-3 bg-red-100 rounded-lg">
                                  <p className="text-sm text-gray-600 mb-1">
                                    Складні
                                  </p>
                                  <p className="font-bold text-red-700">
                                    67%
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8" data-fg-cj1y58="2.21:2.13144:/src/app/components/Dashboard10.tsx:128:9:6446:4181:e:div">
                      <h3 className="text-xl font-bold text-gray-900 mb-6" data-fg-cj1y59="2.21:2.13144:/src/app/components/Dashboard10.tsx:129:11:6537:86:e:h3">
                        Поглиблений
                        аналіз дисциплін
                      </h3>
                      <div className="overflow-x-auto" data-fg-cj1y61="2.21:2.13144:/src/app/components/Dashboard10.tsx:130:11:6634:3978:e:div">
                        <table className="w-full" data-fg-cj1y62="2.21:2.13144:/src/app/components/Dashboard10.tsx:131:13:6680:3915:e:table">
                          <thead data-fg-cj1y63="2.21:2.13144:/src/app/components/Dashboard10.tsx:132:15:6721:753:e:thead">
                            <tr className="border-b border-gray-200" data-fg-cj1y64="2.21:2.13144:/src/app/components/Dashboard10.tsx:133:17:6745:706:e:tr">
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600" data-fg-cj1y65="2.21:2.13144:/src/app/components/Dashboard10.tsx:134:19:6805:87:e:th">
                                ДИСЦИПЛІНА
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600" data-fg-cj1y67="2.21:2.13144:/src/app/components/Dashboard10.tsx:135:19:6911:93:e:th">
                                РІВЕНЬ ВОЛОДІННЯ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600" data-fg-cj1y69="2.21:2.13144:/src/app/components/Dashboard10.tsx:136:19:7023:89:e:th">
                                СЛАБКІ МІСЦЯ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600" data-fg-cj1y71="2.21:2.13144:/src/app/components/Dashboard10.tsx:137:19:7131:91:e:th">
                                СИЛЬНІ СТОРОНИ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600" data-fg-cj1y73="2.21:2.13144:/src/app/components/Dashboard10.tsx:138:19:7241:89:e:th">
                                РЕКОМЕНДАЦІЯ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600" data-fg-cj1y75="2.21:2.13144:/src/app/components/Dashboard10.tsx:139:19:7349:80:e:th">
                                ДІЯ
                              </th>
                            </tr>
                          </thead>
                          <tbody data-fg-cj1y77="2.21:2.13144:/src/app/components/Dashboard10.tsx:142:15:7489:3085:e:tbody">
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors" data-fg-cj1y79="2.21:2.13144:/src/app/components/Dashboard10.tsx:144:19:7572:2959:e:tr">
                              <td className="py-4 px-4" data-fg-cj1y80="2.21:2.13144:/src/app/components/Dashboard10.tsx:145:21:7679:313:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y81="2.21:2.13144:/src/app/components/Dashboard10.tsx:146:23:7728:238:e:div">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" data-fg-cj1y82="2.21:2.13144:/src/app/components/Dashboard10.tsx:147:25:7794:48:e:BookOpen::::::CXRQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14">
                                    </path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900" data-fg-cj1y83="2.21:2.13144:/src/app/components/Dashboard10.tsx:148:25:7867:70:e:span">
                                    Терапія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y85="2.21:2.13144:/src/app/components/Dashboard10.tsx:151:21:8013:1260:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y86="2.21:2.13144:/src/app/components/Dashboard10.tsx:152:23:8062:1185:e:div">
                                  <div className="flex-1" data-fg-cj1y87="2.21:2.13144:/src/app/components/Dashboard10.tsx:153:25:8128:673:e:div">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden" data-fg-cj1y88="2.21:2.13144:/src/app/components/Dashboard10.tsx:154:27:8179:591:e:div">
                                      <div className="h-full bg-green-500" data-fg-cj1y89="2.21:2.13144:/src/app/components/Dashboard10.tsx:155:29:8275:462:e:div" style={{ 'width': '92%' }}>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-green-600" data-fg-cj1y90="2.21:2.13144:/src/app/components/Dashboard10.tsx:166:25:8826:392:e:span">
                                    92%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y93="2.21:2.13144:/src/app/components/Dashboard10.tsx:176:21:9294:303:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y94="2.21:2.13144:/src/app/components/Dashboard10.tsx:177:23:9343:228:e:div">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" data-fg-cj1y95="2.21:2.13144:/src/app/components/Dashboard10.tsx:178:25:9409:44:e:XCircle::::::ClFn" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m15 9-6 6">
                                    </path>
                                    <path d="m9 9 6 6">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y96="2.21:2.13144:/src/app/components/Dashboard10.tsx:179:25:9478:64:e:span">
                                    3
                                    теми
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y99="2.21:2.13144:/src/app/components/Dashboard10.tsx:182:21:9618:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y100="2.21:2.13144:/src/app/components/Dashboard10.tsx:183:23:9667:236:e:div">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" data-fg-cj1y101="2.21:2.13144:/src/app/components/Dashboard10.tsx:184:25:9733:51:e:CheckCircle2::::::DMDP" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m9 12 2 2 4-4">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y102="2.21:2.13144:/src/app/components/Dashboard10.tsx:185:25:9809:65:e:span">
                                    15
                                    тем
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y105="2.21:2.13144:/src/app/components/Dashboard10.tsx:188:21:9950:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y106="2.21:2.13144:/src/app/components/Dashboard10.tsx:189:23:9999:236:e:div">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" data-fg-cj1y107="2.21:2.13144:/src/app/components/Dashboard10.tsx:190:25:10065:48:e:Lightbulb::::::X1m" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6">
                                    </path>
                                    <path d="M10 22h4">
                                    </path>
                                  </svg>
                                  <span className="text-sm text-gray-700" data-fg-cj1y108="2.21:2.13144:/src/app/components/Dashboard10.tsx:191:25:10138:68:e:span">
                                    Інфекційні
                                    хвороби
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y110="2.21:2.13144:/src/app/components/Dashboard10.tsx:194:21:10282:225:e:td">
                                <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm" data-fg-cj1y111="2.21:2.13144:/src/app/components/Dashboard10.tsx:195:23:10331:150:e:button">
                                  Переглянути
                                  →
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors" data-fg-cj1y79="2.21:2.13144:/src/app/components/Dashboard10.tsx:144:19:7572:2959:e:tr">
                              <td className="py-4 px-4" data-fg-cj1y80="2.21:2.13144:/src/app/components/Dashboard10.tsx:145:21:7679:313:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y81="2.21:2.13144:/src/app/components/Dashboard10.tsx:146:23:7728:238:e:div">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" data-fg-cj1y82="2.21:2.13144:/src/app/components/Dashboard10.tsx:147:25:7794:48:e:BookOpen::::::CXRQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14">
                                    </path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900" data-fg-cj1y83="2.21:2.13144:/src/app/components/Dashboard10.tsx:148:25:7867:70:e:span">
                                    Хірургія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y85="2.21:2.13144:/src/app/components/Dashboard10.tsx:151:21:8013:1260:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y86="2.21:2.13144:/src/app/components/Dashboard10.tsx:152:23:8062:1185:e:div">
                                  <div className="flex-1" data-fg-cj1y87="2.21:2.13144:/src/app/components/Dashboard10.tsx:153:25:8128:673:e:div">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden" data-fg-cj1y88="2.21:2.13144:/src/app/components/Dashboard10.tsx:154:27:8179:591:e:div">
                                      <div className="h-full bg-blue-500" data-fg-cj1y89="2.21:2.13144:/src/app/components/Dashboard10.tsx:155:29:8275:462:e:div" style={{ 'width': '87%' }}>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-blue-600" data-fg-cj1y90="2.21:2.13144:/src/app/components/Dashboard10.tsx:166:25:8826:392:e:span">
                                    87%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y93="2.21:2.13144:/src/app/components/Dashboard10.tsx:176:21:9294:303:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y94="2.21:2.13144:/src/app/components/Dashboard10.tsx:177:23:9343:228:e:div">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" data-fg-cj1y95="2.21:2.13144:/src/app/components/Dashboard10.tsx:178:25:9409:44:e:XCircle::::::ClFn" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m15 9-6 6">
                                    </path>
                                    <path d="m9 9 6 6">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y96="2.21:2.13144:/src/app/components/Dashboard10.tsx:179:25:9478:64:e:span">
                                    5
                                    теми
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y99="2.21:2.13144:/src/app/components/Dashboard10.tsx:182:21:9618:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y100="2.21:2.13144:/src/app/components/Dashboard10.tsx:183:23:9667:236:e:div">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" data-fg-cj1y101="2.21:2.13144:/src/app/components/Dashboard10.tsx:184:25:9733:51:e:CheckCircle2::::::DMDP" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m9 12 2 2 4-4">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y102="2.21:2.13144:/src/app/components/Dashboard10.tsx:185:25:9809:65:e:span">
                                    12
                                    тем
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y105="2.21:2.13144:/src/app/components/Dashboard10.tsx:188:21:9950:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y106="2.21:2.13144:/src/app/components/Dashboard10.tsx:189:23:9999:236:e:div">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" data-fg-cj1y107="2.21:2.13144:/src/app/components/Dashboard10.tsx:190:25:10065:48:e:Lightbulb::::::X1m" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6">
                                    </path>
                                    <path d="M10 22h4">
                                    </path>
                                  </svg>
                                  <span className="text-sm text-gray-700" data-fg-cj1y108="2.21:2.13144:/src/app/components/Dashboard10.tsx:191:25:10138:68:e:span">
                                    Травматологія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y110="2.21:2.13144:/src/app/components/Dashboard10.tsx:194:21:10282:225:e:td">
                                <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm" data-fg-cj1y111="2.21:2.13144:/src/app/components/Dashboard10.tsx:195:23:10331:150:e:button">
                                  Переглянути
                                  →
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors" data-fg-cj1y79="2.21:2.13144:/src/app/components/Dashboard10.tsx:144:19:7572:2959:e:tr">
                              <td className="py-4 px-4" data-fg-cj1y80="2.21:2.13144:/src/app/components/Dashboard10.tsx:145:21:7679:313:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y81="2.21:2.13144:/src/app/components/Dashboard10.tsx:146:23:7728:238:e:div">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" data-fg-cj1y82="2.21:2.13144:/src/app/components/Dashboard10.tsx:147:25:7794:48:e:BookOpen::::::CXRQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14">
                                    </path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900" data-fg-cj1y83="2.21:2.13144:/src/app/components/Dashboard10.tsx:148:25:7867:70:e:span">
                                    Педіатрія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y85="2.21:2.13144:/src/app/components/Dashboard10.tsx:151:21:8013:1260:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y86="2.21:2.13144:/src/app/components/Dashboard10.tsx:152:23:8062:1185:e:div">
                                  <div className="flex-1" data-fg-cj1y87="2.21:2.13144:/src/app/components/Dashboard10.tsx:153:25:8128:673:e:div">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden" data-fg-cj1y88="2.21:2.13144:/src/app/components/Dashboard10.tsx:154:27:8179:591:e:div">
                                      <div className="h-full bg-green-500" data-fg-cj1y89="2.21:2.13144:/src/app/components/Dashboard10.tsx:155:29:8275:462:e:div" style={{ 'width': '94%' }}>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-green-600" data-fg-cj1y90="2.21:2.13144:/src/app/components/Dashboard10.tsx:166:25:8826:392:e:span">
                                    94%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y93="2.21:2.13144:/src/app/components/Dashboard10.tsx:176:21:9294:303:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y94="2.21:2.13144:/src/app/components/Dashboard10.tsx:177:23:9343:228:e:div">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" data-fg-cj1y95="2.21:2.13144:/src/app/components/Dashboard10.tsx:178:25:9409:44:e:XCircle::::::ClFn" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m15 9-6 6">
                                    </path>
                                    <path d="m9 9 6 6">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y96="2.21:2.13144:/src/app/components/Dashboard10.tsx:179:25:9478:64:e:span">
                                    2
                                    теми
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y99="2.21:2.13144:/src/app/components/Dashboard10.tsx:182:21:9618:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y100="2.21:2.13144:/src/app/components/Dashboard10.tsx:183:23:9667:236:e:div">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" data-fg-cj1y101="2.21:2.13144:/src/app/components/Dashboard10.tsx:184:25:9733:51:e:CheckCircle2::::::DMDP" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m9 12 2 2 4-4">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y102="2.21:2.13144:/src/app/components/Dashboard10.tsx:185:25:9809:65:e:span">
                                    18
                                    тем
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y105="2.21:2.13144:/src/app/components/Dashboard10.tsx:188:21:9950:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y106="2.21:2.13144:/src/app/components/Dashboard10.tsx:189:23:9999:236:e:div">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" data-fg-cj1y107="2.21:2.13144:/src/app/components/Dashboard10.tsx:190:25:10065:48:e:Lightbulb::::::X1m" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6">
                                    </path>
                                    <path d="M10 22h4">
                                    </path>
                                  </svg>
                                  <span className="text-sm text-gray-700" data-fg-cj1y108="2.21:2.13144:/src/app/components/Dashboard10.tsx:191:25:10138:68:e:span">
                                    Неонатологія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y110="2.21:2.13144:/src/app/components/Dashboard10.tsx:194:21:10282:225:e:td">
                                <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm" data-fg-cj1y111="2.21:2.13144:/src/app/components/Dashboard10.tsx:195:23:10331:150:e:button">
                                  Переглянути
                                  →
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors" data-fg-cj1y79="2.21:2.13144:/src/app/components/Dashboard10.tsx:144:19:7572:2959:e:tr">
                              <td className="py-4 px-4" data-fg-cj1y80="2.21:2.13144:/src/app/components/Dashboard10.tsx:145:21:7679:313:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y81="2.21:2.13144:/src/app/components/Dashboard10.tsx:146:23:7728:238:e:div">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" data-fg-cj1y82="2.21:2.13144:/src/app/components/Dashboard10.tsx:147:25:7794:48:e:BookOpen::::::CXRQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14">
                                    </path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900" data-fg-cj1y83="2.21:2.13144:/src/app/components/Dashboard10.tsx:148:25:7867:70:e:span">
                                    Акушерство
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y85="2.21:2.13144:/src/app/components/Dashboard10.tsx:151:21:8013:1260:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y86="2.21:2.13144:/src/app/components/Dashboard10.tsx:152:23:8062:1185:e:div">
                                  <div className="flex-1" data-fg-cj1y87="2.21:2.13144:/src/app/components/Dashboard10.tsx:153:25:8128:673:e:div">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden" data-fg-cj1y88="2.21:2.13144:/src/app/components/Dashboard10.tsx:154:27:8179:591:e:div">
                                      <div className="h-full bg-yellow-500" data-fg-cj1y89="2.21:2.13144:/src/app/components/Dashboard10.tsx:155:29:8275:462:e:div" style={{ 'width': '79%' }}>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-yellow-600" data-fg-cj1y90="2.21:2.13144:/src/app/components/Dashboard10.tsx:166:25:8826:392:e:span">
                                    79%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y93="2.21:2.13144:/src/app/components/Dashboard10.tsx:176:21:9294:303:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y94="2.21:2.13144:/src/app/components/Dashboard10.tsx:177:23:9343:228:e:div">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" data-fg-cj1y95="2.21:2.13144:/src/app/components/Dashboard10.tsx:178:25:9409:44:e:XCircle::::::ClFn" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m15 9-6 6">
                                    </path>
                                    <path d="m9 9 6 6">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y96="2.21:2.13144:/src/app/components/Dashboard10.tsx:179:25:9478:64:e:span">
                                    8
                                    теми
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y99="2.21:2.13144:/src/app/components/Dashboard10.tsx:182:21:9618:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y100="2.21:2.13144:/src/app/components/Dashboard10.tsx:183:23:9667:236:e:div">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" data-fg-cj1y101="2.21:2.13144:/src/app/components/Dashboard10.tsx:184:25:9733:51:e:CheckCircle2::::::DMDP" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m9 12 2 2 4-4">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y102="2.21:2.13144:/src/app/components/Dashboard10.tsx:185:25:9809:65:e:span">
                                    9
                                    тем
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y105="2.21:2.13144:/src/app/components/Dashboard10.tsx:188:21:9950:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y106="2.21:2.13144:/src/app/components/Dashboard10.tsx:189:23:9999:236:e:div">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" data-fg-cj1y107="2.21:2.13144:/src/app/components/Dashboard10.tsx:190:25:10065:48:e:Lightbulb::::::X1m" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6">
                                    </path>
                                    <path d="M10 22h4">
                                    </path>
                                  </svg>
                                  <span className="text-sm text-gray-700" data-fg-cj1y108="2.21:2.13144:/src/app/components/Dashboard10.tsx:191:25:10138:68:e:span">
                                    Патологія
                                    вагітності
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y110="2.21:2.13144:/src/app/components/Dashboard10.tsx:194:21:10282:225:e:td">
                                <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm" data-fg-cj1y111="2.21:2.13144:/src/app/components/Dashboard10.tsx:195:23:10331:150:e:button">
                                  Переглянути
                                  →
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors" data-fg-cj1y79="2.21:2.13144:/src/app/components/Dashboard10.tsx:144:19:7572:2959:e:tr">
                              <td className="py-4 px-4" data-fg-cj1y80="2.21:2.13144:/src/app/components/Dashboard10.tsx:145:21:7679:313:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y81="2.21:2.13144:/src/app/components/Dashboard10.tsx:146:23:7728:238:e:div">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" data-fg-cj1y82="2.21:2.13144:/src/app/components/Dashboard10.tsx:147:25:7794:48:e:BookOpen::::::CXRQ" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14">
                                    </path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900" data-fg-cj1y83="2.21:2.13144:/src/app/components/Dashboard10.tsx:148:25:7867:70:e:span">
                                    Фармакологія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y85="2.21:2.13144:/src/app/components/Dashboard10.tsx:151:21:8013:1260:e:td">
                                <div className="flex items-center gap-3" data-fg-cj1y86="2.21:2.13144:/src/app/components/Dashboard10.tsx:152:23:8062:1185:e:div">
                                  <div className="flex-1" data-fg-cj1y87="2.21:2.13144:/src/app/components/Dashboard10.tsx:153:25:8128:673:e:div">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden" data-fg-cj1y88="2.21:2.13144:/src/app/components/Dashboard10.tsx:154:27:8179:591:e:div">
                                      <div className="h-full bg-blue-500" data-fg-cj1y89="2.21:2.13144:/src/app/components/Dashboard10.tsx:155:29:8275:462:e:div" style={{ 'width': '88%' }}>
                                      </div>
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-blue-600" data-fg-cj1y90="2.21:2.13144:/src/app/components/Dashboard10.tsx:166:25:8826:392:e:span">
                                    88%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y93="2.21:2.13144:/src/app/components/Dashboard10.tsx:176:21:9294:303:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y94="2.21:2.13144:/src/app/components/Dashboard10.tsx:177:23:9343:228:e:div">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" data-fg-cj1y95="2.21:2.13144:/src/app/components/Dashboard10.tsx:178:25:9409:44:e:XCircle::::::ClFn" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m15 9-6 6">
                                    </path>
                                    <path d="m9 9 6 6">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y96="2.21:2.13144:/src/app/components/Dashboard10.tsx:179:25:9478:64:e:span">
                                    4
                                    теми
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y99="2.21:2.13144:/src/app/components/Dashboard10.tsx:182:21:9618:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y100="2.21:2.13144:/src/app/components/Dashboard10.tsx:183:23:9667:236:e:div">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" data-fg-cj1y101="2.21:2.13144:/src/app/components/Dashboard10.tsx:184:25:9733:51:e:CheckCircle2::::::DMDP" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10">
                                    </circle>
                                    <path d="m9 12 2 2 4-4">
                                    </path>
                                  </svg>
                                  <span className="text-gray-700" data-fg-cj1y102="2.21:2.13144:/src/app/components/Dashboard10.tsx:185:25:9809:65:e:span">
                                    14
                                    тем
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y105="2.21:2.13144:/src/app/components/Dashboard10.tsx:188:21:9950:311:e:td">
                                <div className="flex items-center gap-2" data-fg-cj1y106="2.21:2.13144:/src/app/components/Dashboard10.tsx:189:23:9999:236:e:div">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" data-fg-cj1y107="2.21:2.13144:/src/app/components/Dashboard10.tsx:190:25:10065:48:e:Lightbulb::::::X1m" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6">
                                    </path>
                                    <path d="M10 22h4">
                                    </path>
                                  </svg>
                                  <span className="text-sm text-gray-700" data-fg-cj1y108="2.21:2.13144:/src/app/components/Dashboard10.tsx:191:25:10138:68:e:span">
                                    Кардіопрепарати
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4" data-fg-cj1y110="2.21:2.13144:/src/app/components/Dashboard10.tsx:194:21:10282:225:e:td">
                                <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm" data-fg-cj1y111="2.21:2.13144:/src/app/components/Dashboard10.tsx:195:23:10331:150:e:button">
                                  Переглянути
                                  →
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          Флеш-картки для швидкого повторення
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          Ефективний спосіб закріплення знань
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-full max-w-md mx-auto perspective-1000">
                          <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-[300px] flex flex-col justify-center items-center text-center">
                            <p className="text-xs text-gray-500 mb-4">
                              Картка 47/120
                            </p>
                            <h3 className="text-2xl font-bold mb-6">
                              Що таке синусовий вузол?
                            </h3>
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                              Показати
                              відповідь
                            </button>
                            <p className="text-xs text-gray-500 mt-6">
                              Клікніть для перегортання
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50" id="learning">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Як ми
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          навчаємо?
                        </span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Різноманітні формати навчання для максимальної
                        ефективності
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-file-text w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z">
                            </path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4">
                            </path>
                            <path d="M10 9H8">
                            </path>
                            <path d="M16 13H8">
                            </path>
                            <path d="M16 17H8">
                            </path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Текстові матеріали
                        </h3>
                        <p className="text-gray-600">
                          Структуровані лекції по всіх дисциплінах
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-image w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <rect height="18" rx="2" ry="2" width="18" x="3" y="3">
                            </rect>
                            <circle cx="9" cy="9" r="2">
                            </circle>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21">
                            </path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Зображення та схеми
                        </h3>
                        <p className="text-gray-600">
                          Анатомічні атласи та діаграми
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-square-check-big w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5">
                            </path>
                            <path d="m9 11 3 3L22 4">
                            </path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Тестування
                        </h3>
                        <p className="text-gray-600">
                          Симуляція іспитів KROK
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-credit-card w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <rect height="14" rx="2" width="20" x="2" y="5">
                            </rect>
                            <line x1="2" x2="22" y1="10" y2="10">
                            </line>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Флеш-картки
                        </h3>
                        <p className="text-gray-600">
                          Швидке повторення матеріалу
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-headphones w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
                            </path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Аудіо-лекції
                        </h3>
                        <p className="text-gray-600">
                          Навчання в будь-який час
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-video w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5">
                            </path>
                            <rect height="12" rx="2" width="14" x="2" y="6">
                            </rect>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Відео-уроки
                        </h3>
                        <p className="text-gray-600">
                          Детальні розбори тем
                        </p>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-3xl font-bold mb-6">
                          Система тестування
                        </h3>
                        <div className="space-y-6">
                          <div className="flex gap-4 p-4 rounded-xl backdrop-blur-lg bg-white/60 border border-white/20">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                                <svg className="lucide lucide-graduation-cap w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                  </path>
                                  <path d="M22 10v6">
                                  </path>
                                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-1">
                                Тестування KROK
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Повна симуляція іспитів KROK 1, 2, 3, М, Б з таймером та
                                умовами реального іспиту
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4 p-4 rounded-xl backdrop-blur-lg bg-white/60 border border-white/20">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                                <svg className="lucide lucide-book-open w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 7v14">
                                  </path>
                                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-1">
                                По модулях
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Перевір знання з конкретного модулю чи дисципліни
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4 p-4 rounded-xl backdrop-blur-lg bg-white/60 border border-white/20">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                                <svg className="lucide lucide-square-check-big w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5">
                                  </path>
                                  <path d="m9 11 3 3L22 4">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold mb-1">
                                Адаптивне тестування
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Система підбирає питання відповідно до твого рівня знань
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-50 to-green-50 border border-white/20">
                          <h4 className="font-bold mb-4">
                            Особливості тестування:
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-700">
                              <svg className="lucide lucide-square-check-big w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5">
                                </path>
                                <path d="m9 11 3 3L22 4">
                                </path>
                              </svg>
                              <span>
                                Детальні обґрунтування відповідей
                              </span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                              <svg className="lucide lucide-square-check-big w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5">
                                </path>
                                <path d="m9 11 3 3L22 4">
                                </path>
                              </svg>
                              <span>
                                Посилання на джерела та літературу
                              </span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                              <svg className="lucide lucide-square-check-big w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5">
                                </path>
                                <path d="m9 11 3 3L22 4">
                                </path>
                              </svg>
                              <span>
                                Збереження результатів та прогресу
                              </span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                              <svg className="lucide lucide-square-check-big w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5">
                                </path>
                                <path d="m9 11 3 3L22 4">
                                </path>
                              </svg>
                              <span>
                                Можливість повторити помилки
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <img alt="Медична освіта" className="w-full h-auto" src="photo-1758691463087-43ac1462410f.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-20 px-4 sm:px-6 lg:px-8" id="statistics">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Твоя особиста
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          статистика
                        </span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Відстежуй свій прогрес, аналізуй результати та
                        покращуй знання
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-trending-up w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17">
                            </polyline>
                            <polyline points="16 7 22 7 22 13">
                            </polyline>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold mb-1">
                          87%
                        </div>
                        <div className="font-medium mb-1">
                          Загальна успішність
                        </div>
                        <div className="text-sm text-gray-600">
                          Середній результат тестів
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-target w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10">
                            </circle>
                            <circle cx="12" cy="12" r="6">
                            </circle>
                            <circle cx="12" cy="12" r="2">
                            </circle>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold mb-1">
                          245
                        </div>
                        <div className="font-medium mb-1">
                          Виконано тестів
                        </div>
                        <div className="text-sm text-gray-600">
                          За останній місяць
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-clock w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10">
                            </circle>
                            <polyline points="12 6 12 12 16 14">
                            </polyline>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold mb-1">
                          127 год
                        </div>
                        <div className="font-medium mb-1">
                          Часу на навчання
                        </div>
                        <div className="text-sm text-gray-600">
                          Загальний час
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                          <svg className="lucide lucide-award w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                            </path>
                            <circle cx="12" cy="8" r="6">
                            </circle>
                          </svg>
                        </div>
                        <div className="text-3xl font-bold mb-1">
                          12
                        </div>
                        <div className="font-medium mb-1">
                          Рівень
                        </div>
                        <div className="text-sm text-gray-600">
                          2,450 балів
                        </div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                              <svg className="lucide lucide-chart-column w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16">
                                </path>
                                <path d="M18 17V9">
                                </path>
                                <path d="M13 17V5">
                                </path>
                                <path d="M8 17v-3">
                                </path>
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold">
                              Детальна статистика
                            </h3>
                          </div>
                          <ul className="space-y-3 ml-15">
                            <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mt-2">
                              </div>
                              <span className="text-gray-700">
                                Графіки прогресу по дисциплінах
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mt-2">
                              </div>
                              <span className="text-gray-700">
                                Аналіз помилок та слабких місць
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mt-2">
                              </div>
                              <span className="text-gray-700">
                                Порівняння з середніми показниками
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                              <svg className="lucide lucide-brain w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
                                </path>
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
                                </path>
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4">
                                </path>
                                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375">
                                </path>
                                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5">
                                </path>
                                <path d="M3.477 10.896a4 4 0 0 1 .585-.396">
                                </path>
                                <path d="M19.938 10.5a4 4 0 0 1 .585.396">
                                </path>
                                <path d="M6 18a4 4 0 0 1-1.967-.516">
                                </path>
                                <path d="M19.967 17.484A4 4 0 0 1 18 18">
                                </path>
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold">
                              Персоналізація
                            </h3>
                          </div>
                          <ul className="space-y-3 ml-15">
                            <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mt-2">
                              </div>
                              <span className="text-gray-700">
                                Рекомендації по темах для вивчення
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mt-2">
                              </div>
                              <span className="text-gray-700">
                                Адаптивна складність питань
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mt-2">
                              </div>
                              <span className="text-gray-700">
                                Індивідуальний план підготовки
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-50 to-green-50 border border-white/20">
                          <h4 className="font-bold mb-4">
                            Для викладачів:
                          </h4>
                          <p className="text-gray-700">
                            Викладачі можуть переглядати статистику своїх студентів, відстежувати
                            їх прогрес та надавати персоналізовані рекомендації для покращення результатів
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <img alt="Статистика навчання" className="w-full h-auto" src="photo-1659353886114-9aa119aef5aa.png" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 backdrop-blur-lg bg-white/80 rounded-xl p-4 border border-white/20 shadow-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                              <svg className="lucide lucide-award w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                </path>
                                <circle cx="12" cy="8" r="6">
                                </circle>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">
                                Нова нагорода!
                              </p>
                              <p className="font-bold">
                                18 днів підряд
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Наші
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          плани
                        </span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Постійно розвиватися та розширювати можливості
                        нашої платформи
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                      <div className="group relative">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad9)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad9" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#22c55e">
                                </stop>
                                <stop offset="100%" stopColor="#16a34a">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2v2">
                                </path>
                                <path d="M5 2v2">
                                </path>
                                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1">
                                </path>
                                <path d="M8 15a6 6 0 0 0 12 0v-3">
                                </path>
                                <circle cx="20" cy="10" r="2">
                                </circle>
                              </svg>
                            </g>
                          </svg>
                          <div className="absolute top-4 right-4">
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                              Планується
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Платформа для фахівців
                          </h3>
                          <p className="text-gray-600">
                            Наукові матеріали та курси підвищення кваліфікації за спеціальністю
                          </p>
                        </div>
                      </div>
                      <div className="group relative">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad10)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad10" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6">
                                </stop>
                                <stop offset="100%" stopColor="#2563eb">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10">
                                </circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20">
                                </path>
                                <path d="M2 12h20">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <div className="absolute top-4 right-4">
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                              Планується
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Міжнародна експансія
                          </h3>
                          <p className="text-gray-600">
                            Підготовка до USMLE та IFOM для студентів з усього світу
                          </p>
                        </div>
                      </div>
                      <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                          <rect fill="url(#grad11)" height="56" rx="12" width="56">
                          </rect>
                          <defs>
                            <linearGradient id="grad11" x1="0%" x2="100%" y1="0%" y2="100%">
                              <stop offset="0%" stopColor="#f97316">
                              </stop>
                              <stop offset="100%" stopColor="#ea580c">
                              </stop>
                            </linearGradient>
                          </defs>
                          <g transform="translate(10,10)">
                            <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">
                              </path>
                              <circle cx="9" cy="7" r="4">
                              </circle>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87">
                              </path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75">
                              </path>
                            </svg>
                          </g>
                        </svg>
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                            Планується
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Спільнота медиків
                        </h3>
                        <p className="text-gray-600">
                          Форум, обмін досвідом та групове навчання
                        </p>
                      </div>
                      <div className="group relative">
                        <div className="h-full p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                          <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="url(#grad12)" height="56" rx="12" width="56">
                            </rect>
                            <defs>
                              <linearGradient id="grad12" x1="0%" x2="100%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#a855f7">
                                </stop>
                                <stop offset="100%" stopColor="#9333ea">
                                </stop>
                              </linearGradient>
                            </defs>
                            <g transform="translate(10,10)">
                              <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                                </path>
                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                                </path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0">
                                </path>
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5">
                                </path>
                              </svg>
                            </g>
                          </svg>
                          <div className="absolute top-4 right-4">
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                              2026-2027
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Аудіо та відео
                          </h3>
                          <p className="text-gray-600">
                            Зручне пояснення матеріалу в аудіолекціях та відео
                          </p>
                        </div>
                      </div>
                      <div className="group relative">
                      </div>
                    </div>
                    <div className="mt-12 p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-50 to-green-50 border border-white/20 text-center">
                      <svg className="lucide lucide-rocket w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                        </path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                        </path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0">
                        </path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5">
                        </path>
                      </svg>
                      <h3 className="text-2xl font-bold mb-4">
                        Наша місія
                      </h3>
                      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Створити найкращу освітню платформу для медиків,
                        яка допоможе тисячам студентів успішно складати іспити та стати професіоналами своєї справи. Ми
                        прагнемо зробити якісну медичну освіту доступною для всіх.
                      </p>
                    </div>
                  </div>
                </section>
                <section className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Вигідні
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          тарифи
                        </span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Оберіть план, який найкраще підходить для ваших
                        потреб
                      </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      <div className="relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                          <span className="px-6 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                            Спробуй безкоштовно
                          </span>
                        </div>
                        <div className="h-full p-8 rounded-2xl backdrop-blur-lg border-2 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 bg-white/70 border-white/20">
                          <div className="flex items-center justify-between mb-6">
                            <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                              <rect fill="url(#grad13)" height="56" rx="12" width="56">
                              </rect>
                              <defs>
                                <linearGradient id="grad13" x1="0%" x2="100%" y1="0%" y2="100%">
                                  <stop offset="0%" stopColor="#3b82f6">
                                  </stop>
                                  <stop offset="100%" stopColor="#2563eb">
                                  </stop>
                                </linearGradient>
                              </defs>
                              <g transform="translate(10,10)">
                                <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                  </path>
                                </svg>
                              </g>
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            Безкоштовний
                          </h3>
                          <div className="mb-6">
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">
                                  0
                                </span>
                                <span className="text-gray-600">
                                  ₴
                                </span>
                              </div>
                              <p className="text-gray-600">
                                3 дні доступу
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Доступ до певних матеріалів
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Детальна статистика
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Гейміфікація та нагороди
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Відео та аудіо лекції
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Флеш-картки
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Симуляція KROK
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Персональний прогрес-трекінг
                              </span>
                            </li>
                          </ul>
                          <button className="w-full py-3 rounded-lg font-medium transition-all bg-gray-100 text-gray-900 hover:bg-gray-200">
                            Обрати
                            план
                          </button>
                        </div>
                      </div>
                      <div className="relative md:-mt-4 md:mb-4">
                        <div className="h-full p-8 rounded-2xl backdrop-blur-lg border-2 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 bg-white border-blue-500">
                          <div className="flex items-center justify-between mb-6">
                            <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                              <rect fill="url(#grad14)" height="56" rx="12" width="56">
                              </rect>
                              <defs>
                                <linearGradient id="grad14" x1="0%" x2="100%" y1="0%" y2="100%">
                                  <stop offset="0%" stopColor="#3b82f6">
                                  </stop>
                                  <stop offset="100%" stopColor="#2563eb">
                                  </stop>
                                </linearGradient>
                              </defs>
                              <g transform="translate(10,10)">
                                <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                  </path>
                                </svg>
                              </g>
                            </svg>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                              Популярний
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            Студентська
                          </h3>
                          <div className="mb-6">
                            <div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">
                                  199
                                </span>
                                <span className="text-gray-600">
                                  ₴
                                </span>
                              </div>
                              <p className="text-gray-600">
                                на місяць
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Повний доступ до всіх матеріалів
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Необмежена кількість тестів
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Детальна статистика
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Гейміфікація та нагороди
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Відео та аудіо лекції
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Флеш-картки
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Симуляція KROK
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Персональний прогрес-трекінг
                              </span>
                            </li>
                          </ul>
                          <button className="w-full py-3 rounded-lg font-medium transition-all bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg">
                            Обрати
                            план
                          </button>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                          <span className="px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                            Для
                            університетів
                          </span>
                        </div>
                        <div className="h-full p-8 rounded-2xl backdrop-blur-lg border-2 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 bg-white/70 border-white/20">
                          <div className="flex items-center justify-between mb-6">
                            <svg className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center" fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg">
                              <rect fill="url(#grad15)" height="56" rx="12" width="56">
                              </rect>
                              <defs>
                                <linearGradient id="grad15" x1="0%" x2="100%" y1="0%" y2="100%">
                                  <stop offset="0%" stopColor="#f97316">
                                  </stop>
                                  <stop offset="100%" stopColor="#2563eb">
                                  </stop>
                                </linearGradient>
                              </defs>
                              <g transform="translate(10,10)">
                                <svg fill="none" height="34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z">
                                  </path>
                                  <path d="M5 21h14">
                                  </path>
                                </svg>
                              </g>
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            Для медичних закладів
                          </h3>
                          <div className="mb-6">
                            <div>
                              <div className="text-3xl font-bold mb-1">
                                Індивідуально
                              </div>
                              <p className="text-gray-600">
                                за запитом
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Всі переваги студентського плану
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Необмежена кількість студентів
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Панель для викладачів
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Моніторинг успішності групи
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Персональний менеджер
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Корпоративна підтримка
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6 9 17l-5-5">
                                </path>
                              </svg>
                              <span className="text-gray-700">
                                Індивідуальні звіти
                              </span>
                            </li>
                          </ul>
                          <button className="w-full py-3 rounded-lg font-medium transition-all bg-gray-100 text-gray-900 hover:bg-gray-200">
                            Обрати
                            план
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 text-center">
                      <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-6 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/20">
                        <div className="flex items-center gap-2 text-gray-700">
                          <svg className="lucide lucide-check w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6 9 17l-5-5">
                            </path>
                          </svg>
                          <span>
                            Скасування в будь-який час
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <svg className="lucide lucide-check w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6 9 17l-5-5">
                            </path>
                          </svg>
                          <span>
                            3 дні доступу до конкретного модулю
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <svg className="lucide lucide-check w-5 h-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6 9 17l-5-5">
                            </path>
                          </svg>
                          <span>
                            Знижки для груп студентів
                          </span>
                        </div>
                      </div>
                      <p className="mt-8 text-gray-600">
                        Потрібна допомога з вибором плану?
                        <a className="text-blue-600 hover:text-blue-700 font-medium" href="#footer">
                          Зв'яжіться з нами
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </main>
              <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200" id="footer">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <svg className="lucide lucide-activity w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
                            </path>
                          </svg>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                          KROK
                          Platform
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Освітня платформа для навчання та підготовки медиків до іспитів KROK
                      </p>
                      <div className="flex gap-3">
                        <a aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white hover:bg-blue-50 flex items-center justify-center transition-colors shadow-sm" href="#">
                          <svg className="lucide lucide-facebook w-5 h-5 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                            </path>
                          </svg>
                        </a>
                        <a aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white hover:bg-blue-50 flex items-center justify-center transition-colors shadow-sm" href="#">
                          <svg className="lucide lucide-instagram w-5 h-5 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <rect height="20" rx="5" ry="5" width="20" x="2" y="2">
                            </rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                            </path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5">
                            </line>
                          </svg>
                        </a>
                        <a aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white hover:bg-blue-50 flex items-center justify-center transition-colors shadow-sm" href="#">
                          <svg className="lucide lucide-linkedin w-5 h-5 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect height="12" width="4" x="2" y="9">
                            </rect>
                            <circle cx="4" cy="4" r="2">
                            </circle>
                          </svg>
                        </a>
                        <a aria-label="YouTube" className="w-10 h-10 rounded-lg bg-white hover:bg-blue-50 flex items-center justify-center transition-colors shadow-sm" href="#">
                          <svg className="lucide lucide-youtube w-5 h-5 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                            </path>
                            <path d="m10 15 5-3-5-3z">
                            </path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">
                        Навігація
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#hero">
                            Головна
                          </a>
                        </li>
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#advantages">
                            Переваги
                          </a>
                        </li>
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#learning">
                            Функції
                          </a>
                        </li>
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#pricing">
                            Тарифи
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">
                        Ресурси
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">
                            База знань
                          </a>
                        </li>
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">
                            Блог
                          </a>
                        </li>
                        <li>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">
                            Підтримка
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">
                        Контакти
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <svg className="lucide lucide-mail w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <rect height="16" rx="2" width="20" x="2" y="4">
                            </rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                            </path>
                          </svg>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="">
                            info@info.ua
                          </a>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="lucide lucide-phone w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                            </path>
                          </svg>
                          <a className="text-gray-600 hover:text-blue-600 transition-colors" href="tel:+380441234567">
                            +38 (000) 000-00-00
                          </a>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="lucide lucide-map-pin w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                            </path>
                            <circle cx="12" cy="10" r="3">
                            </circle>
                          </svg>
                          <span className="text-gray-600">
                            м. Вінниця, Україна
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-8 p-8 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      Готовий почати навчання?
                    </h3>
                    <p className="mb-4 text-blue-50">
                      Приєднуйся до тисяч студентів, які вже готуються до KROK з нами
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:shadow-lg transition-all">
                      Зареєструватися
                      зараз
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a aria-label="Завантажити в App Store" href="https://apps.apple.com/ваш-app-id" rel="noopener" target="_blank">
                        <img alt="Завантажити в App Store" className="h-12 w-auto" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/uk-ua?size=250x83" />
                      </a>
                      <a aria-label="Get it on Google Play" href="https://play.google.com/store/apps/details?id=ваш.package.name&hl=uk" rel="noopener" target="_blank">
                        <img alt="Get it on Google Play" className="h-16 w-auto" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                      </a>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <p className="text-gray-600 text-sm">
                        © 2026 KROK Platform. Всі права захищено.
                      </p>
                      <div className="flex gap-6 text-sm">
                        <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">
                          Політика конфіденційності
                        </a>
                        <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">
                          Умови використання
                        </a>
                        <a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">
                          Cookies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultMode={mode}
      />
    </div>
  




  );
}