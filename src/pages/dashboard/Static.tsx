// src/pages/dashboard/Profile.tsx
import './static.css';
import {  NavLink } from 'react-router-dom';
function MultiRingProgress({ values, size = 220 }: {
  values: { label: string; value: number; color: string }[];
  size?: number
}) {
  const rings = [
    { r: 90, width: 18, value: values[0]?.value ?? 0, color: values[0]?.color ?? '#a855f7' },
    { r: 62, width: 16, value: values[1]?.value ?? 0, color: values[1]?.color ?? '#eab308' },
    { r: 36, width: 14, value: values[2]?.value ?? 0, color: values[2]?.color ?? '#22c55e' },
  ];
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {rings.map((ring, i) => {
          const cx = size / 2;
          const cy = size / 2;
          const circ = 2 * Math.PI * ring.r;
          const offset = circ - (ring.value / 100) * circ;

          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r={ring.r} fill="none" stroke="#e5e7eb" strokeWidth={ring.width} strokeLinecap="round" />
              <circle
                cx={cx} cy={cy} r={ring.r} fill="none" stroke={ring.color} strokeWidth={ring.width}
                strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
                className="transition-all duration-1000" transform={`rotate(-90 ${cx} ${cy})`}
              />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{Math.round(values[0]?.value ?? 0)}%</span>
        <span className="text-sm text-gray-500">{values[0]?.label || ''}</span>
      </div>
    </div>
  );
}

export default function Static() {


  return (
    <div>

      <div id="container">
        <div className="">
          <div className="">
            <div className="tailwind css-myl2ny css-10v5rb">
              <div className="min-h-screen bg-white">
                <div className="min-h-screen bg-gradient-to-br bg_base from-slate-50 via-blue-50 to-indigo-50 p-6 pt-20">
                  <div className="max-w-[1600px] mx-auto space-y-6">
                    <div className="bg-white rounded-3xl p-3 shadow-2xl border-4 border-purple-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white">
                              
                            </div>
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2 shadow-lg border-3 border-white">
                              <svg className="lucide lucide-crown w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z">
                                </path>
                                <path d="M5 21h14" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h1 className="text-2xl text-gray-900 mb-2">
                              Ви
                            </h1>
                            <div className="flex items-center gap-2">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm shadow-md">
                                💎 Рівень 12
                              </div>
                              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-lg text-sm shadow-md">
                                ⭐ 2450 балів
                              </div>
                              <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-lg text-sm shadow-md">
                                🔥 23 днів
                              </div>
                              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-3 py-1 rounded-lg text-sm shadow-md">
                                🏆 #3
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl px-6 py-4 border-2 border-blue-300">
                            <div className="text-xs text-blue-700 mb-1">
                              Екзамен через
                            </div>
                            <div className="text-3xl text-blue-900">
                              45 днів
                            </div>
                            <div className="text-xs text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-xl border-2 border-pink-200">
                      <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="lucide lucide-sparkles w-6 h-6 text-pink-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                          </path>
                          <path d="M20 3v4" />
                          <path d="M22 5h-4" />
                          <path d="M4 17v2" />
                          <path d="M5 18H3" />
                        </svg>
                        Щоденні цілі
                      </h3>
                      <div className="grid grid-cols-4 gap-4">
                        {/* Тести */}
                        <div className="bg-blue-100 rounded-xl p-4 border-2 border-gray-200 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <svg className="lucide lucide-target w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <circle cx="12" cy="12" r="6" />
                              <circle cx="12" cy="12" r="2" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-700">
                              Тести
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                              16/20
                            </div>
                            <div className="h-2 bg-white rounded-full overflow-hidden mt-1.5">
                              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all" style={{ 'width': '80%' }} />
                            </div>
                          </div>
                        </div>
                        {/* Картки */}
                        <div className="bg-purple-100 rounded-xl p-4 border-2 border-gray-200 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <svg className="lucide lucide-book-open w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M12 7v14" />
                              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                              </path>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-700">
                              Картки
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                              25/30
                            </div>
                            <div className="h-2 bg-white rounded-full overflow-hidden mt-1.5">
                              <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all" style={{ 'width': '83.3333%' }} />
                            </div>
                          </div>
                        </div>
                        {/* Лекції */}
                        <div className="bg-green-100 rounded-xl p-4 border-2 border-gray-200 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <svg className="lucide lucide-award w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                              </path>
                              <circle cx="12" cy="8" r="6" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-700">
                              Лекції
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                              1/2
                            </div>
                            <div className="h-2 bg-white rounded-full overflow-hidden mt-1.5">
                              <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all" style={{ 'width': '50%' }} />
                            </div>
                          </div>
                        </div>
                        {/* XP */}
                        <div className="bg-yellow-100 rounded-xl p-4 border-2 border-gray-200 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <svg className="lucide lucide-zap w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                              </path>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-gray-700">
                              Балів
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                              100/125
                            </div>
                            <div className="h-2 bg-white rounded-full overflow-hidden mt-1.5">
                              <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all" style={{ 'width': '84%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center md:text-left">
                          Розподіл відповідей
                        </h3>
                        {/* Великий графік з постійними проміжками та сильним закругленням */}
                        <div className="mx-auto  max-w-[480px] bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-inner p-6">
                          <div className="relative w-full h-280px flex items-center justify-center">
                            <MultiRingProgress
                              size={260}
                              values={[
                                { label: '', value:80, color: '#10b981' }, // зелений
                                { label: 'В процесі', value: 15, color: '#eab308' }, // жовтий
                                { label: 'Не розпочато', value: 5, color: '#a855f7' }, // фіолетовий
                              ]}
                            />
                          </div>
                        </div>
                        {/* Легенда */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/40 shadow-sm">
                            <div className="w-3 h-3 rounded-full mx-auto mb-1 shadow-inner" style={{ 'background': '#10b981' }} />
                            <p className="text-xs text-gray-600 font-medium">
                              Правильно
                            </p>
                            <p className="text-lg font-bold text-gray-900">
                              500
                            </p>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-red-50 to-red-100/40 shadow-sm">
                            <div className="w-3 h-3 rounded-full mx-auto mb-1 shadow-inner" style={{ 'background': '#c334eb' }} />
                            <p className="text-xs text-gray-600 font-medium">
                              Неправильно
                            </p>
                            <p className="text-lg font-bold text-gray-900">
                              100
                            </p>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/40 shadow-sm">
                            <div className="w-3 h-3 rounded-full mx-auto mb-1 shadow-inner" style={{ 'background': '#f59e0b' }} />
                            <p className="text-xs text-gray-600 font-medium">
                              Пропущено
                            </p>
                            <p className="text-lg font-bold text-gray-900">
                              50
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-2xl shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          💡 Персональні рекомендації
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white/80 p-4 rounded-xl border-l-4 border-blue-500">
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              Продовжуйте серію!
                            </div>
                            <div className="text-xs text-gray-600">
                              Ви вже 34 дні поспіль навчаєтесь. Ще 6 днів і ви
                              отримаєте відзнаку "Місяць навчання"!
                            </div>
                          </div>
                          <div className="bg-white/80 p-4 rounded-xl border-l-4 border-green-500">
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              Відмінний прогрес в анатомії
                            </div>
                            <div className="text-xs text-gray-600">
                              Ви завершили 94% курсу. Завершіть останні 3 теми для
                              отримання сертифікату!
                            </div>
                          </div>
                          <div className="bg-white/80 p-4 rounded-xl border-l-4 border-orange-500">
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              Час повторити біохімію
                            </div>
                            <div className="text-xs text-gray-600">
                              Деякі теми потребують повторення для кращого
                              запам'ятовування. Рекомендуємо 30 хвилин на тиждень.
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 p-4 bg-orange-50 border-2 border-orange-200 rounded-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-white">
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
                            </div>
                            <div>
                              <div className="text-sm text-gray-900">
                                Слабкі теми
                              </div>
                              <div className="text-xs text-gray-600">
                                Потребують уваги
                              </div>
                            </div>
                          </div>
                          <div className="text-3xl text-orange-600 mb-2">
                            5 тем
                          </div>
                          <button  className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"type="button"
  onClick={() => {
    document.querySelector('#needlearn')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }}>
                            Тренувати
                            зараз
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="needlearn" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6" >
                        Поглиблений аналіз дисциплін
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                                ДИСЦИПЛІНА
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                                РІВЕНЬ ВОЛОДІННЯ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                                СЛАБКІ МІСЦЯ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                                СИЛЬНІ СТОРОНИ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                                РЕКОМЕНДАЦІЯ
                              </th>
                              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">
                                ДІЯ
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14" />
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900">
                                    Терапія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-green-500" style={{ 'width': '92%' }} />
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-green-600">
                                    92%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m15 9-6 6" />
                                    <path d="m9 9 6 6" />
                                  </svg>
                                  <span className="text-gray-700">
                                    3 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  <span className="text-gray-700">
                                    15 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                  </svg>
                                  <span className="text-sm text-gray-700">
                                    Інфекційні хвороби
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <NavLink 
                                to="/dashboard/Selectvariant"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                  Переглянути →
                                </NavLink>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14" />
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900">
                                    Хірургія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-blue-500" style={{ 'width': '87%' }} />
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-blue-600">
                                    87%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m15 9-6 6" />
                                    <path d="m9 9 6 6" />
                                  </svg>
                                  <span className="text-gray-700">
                                    5 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  <span className="text-gray-700">
                                    12 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                  </svg>
                                  <span className="text-sm text-gray-700">
                                    Травматологія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                               <NavLink 
                                to="/dashboard/Selectvariant"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                  Переглянути →
                                </NavLink>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14" />
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900">
                                    Педіатрія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-green-500" style={{ 'width': '94%' }} />
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-green-600">
                                    94%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m15 9-6 6" />
                                    <path d="m9 9 6 6" />
                                  </svg>
                                  <span className="text-gray-700">
                                    2 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  <span className="text-gray-700">
                                    18 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                  </svg>
                                  <span className="text-sm text-gray-700">
                                    Неонатологія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                               <NavLink 
                                to="/dashboard/Selectvariant"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                  Переглянути →
                                </NavLink>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14" />
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900">
                                    Акушерство
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-yellow-500" style={{ 'width': '79%' }} />
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-yellow-600">
                                    79%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m15 9-6 6" />
                                    <path d="m9 9 6 6" />
                                  </svg>
                                  <span className="text-gray-700">
                                    8 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  <span className="text-gray-700">
                                    9 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                  </svg>
                                  <span className="text-sm text-gray-700">
                                    Патологія вагітності
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                               <NavLink 
                                to="/dashboard/Selectvariant"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                  Переглянути →
                                </NavLink>
                              </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <svg className="lucide lucide-book-open w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7v14" />
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                    </path>
                                  </svg>
                                  <span className="font-semibold text-gray-900">
                                    Фармакологія
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-blue-500" style={{ 'width': '88%' }} />
                                    </div>
                                  </div>
                                  <span className="font-bold text-sm text-blue-600">
                                    88%
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-x w-4 h-4 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m15 9-6 6" />
                                    <path d="m9 9 6 6" />
                                  </svg>
                                  <span className="text-gray-700">
                                    4 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-circle-check w-4 h-4 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  <span className="text-gray-700">
                                    14 питань
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <svg className="lucide lucide-lightbulb w-4 h-4 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                    </path>
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                  </svg>
                                  <span className="text-sm text-gray-700">
                                    Кардіопрепарати
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                               <NavLink 
                                to="/dashboard/Selectvariant"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                                className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                                  Переглянути →
                                </NavLink>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white  from-blue-50 to-orange-50 p-5 rounded-2xl shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.7)]">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <svg className="lucide lucide-sparkles w-6 h-6 text-pink-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                            </path>
                            <path d="M20 3v4" />
                            <path d="M22 5h-4" />
                            <path d="M4 17v2" />
                            <path d="M5 18H3" />
                          </svg>
                          Рекомендації для покращення
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white/70 p-3 rounded-xl border-l-4 border-yellow-500">
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              Біохімія
                            </div>
                            <div className="text-xs text-gray-600 mb-2">
                              Успішність: 58%
                            </div>
                            <div className="text-xs text-gray-700">
                              Рекомендуємо повторити теми: метаболізм вуглеводів, цикл
                              Кребса
                            </div>
                          </div>
                          <div className="bg-white/70 p-3 rounded-xl border-l-4 border-yellow-500">
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              Мікробіологія
                            </div>
                            <div className="text-xs text-gray-600 mb-2">
                              Успішність: 62%
                            </div>
                            <div className="text-xs text-gray-700">
                              Потребує більше практики: класифікація бактерій
                            </div>
                          </div>
                          <div className="bg-white/70 p-3 rounded-xl border-l-4 border-yellow-500">
                            <div className="font-semibold text-sm text-gray-800 mb-1">
                              Гістологія
                            </div>
                            <div className="text-xs text-gray-600 mb-2">
                              Успішність: 67%
                            </div>
                            <div className="text-xs text-gray-700">
                              Варто переглянути відеолекції про тканини
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="">
                          <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-blue-600">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                              </path>
                            </svg>
                            Недавня активність
                          </h3>
                          <div className="space-y-3">
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4 text-blue-600">
                                  <path d="M12 7v14" />
                                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                  </path>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm">
                                  Тест з кардіології
                                </div>
                                <div className="text-xs text-slate-500">
                                  2 години тому • 85%
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-4 h-4 text-purple-600">
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
                              </div>
                              <div className="flex-1">
                                <div className="text-sm">
                                  25 флеш-карток
                                </div>
                                <div className="text-xs text-slate-500">
                                  5 годин тому • Анатомія
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4 text-green-600">
                                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                  <polyline points="16 7 22 7 22 13" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm">
                                  Новий рекорд
                                </div>
                                <div className="text-xs text-slate-500">
                                  Вчора • 30 днів стрік
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-5 h-5 text-orange-600">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                            <path d="M4 22h16" />
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                          </svg>
                          <h3 className="text-lg">
                            Топ студентів
                          </h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 rounded-xl ">
                            <div className="text-slate-400">
                              1
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                              МК
                            </div>
                            <div className="flex-1">
                              <div className="text-sm">
                                Марія К.
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">
                              3240
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-xl ">
                            <div className="text-slate-400">
                              2
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                              ІП
                            </div>
                            <div className="flex-1">
                              <div className="text-sm">
                                Іван П.
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">
                              3120
                            </div>
                          </div>
                          <div className=" bg-yellow-500 flex items-center gap-3 p-2 rounded-xl bg-white shadow-sm">
                            <div className="text-slate-400">
                              3
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                              ОС
                            </div>
                            <div className="flex-1">
                              <div className="text-sm">
                                Ви
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">
                              2450
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-xl ">
                            <div className="text-slate-400">
                              4
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                              АЛ
                            </div>
                            <div className="flex-1">
                              <div className="text-sm">
                                Анна Л.
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">
                              2380
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-xl ">
                            <div className="text-slate-400">
                              5
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                              ПМ
                            </div>
                            <div className="flex-1">
                              <div className="text-sm">
                                Петро М.
                              </div>
                            </div>
                            <div className="text-sm text-slate-600">
                              2210
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-6 h-6">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                            </path>
                          </svg>
                          <h3 className="text-xl font-bold">
                            Ваш рейтинг
                          </h3>
                        </div>
                        <p className="text-5xl font-black mb-2">
                          #23
                        </p>
                        <p className="text-indigo-100 mb-4">
                          у вашій групі
                        </p>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>
                              До топ-10
                            </span>
                            <span className="font-bold">
                              267
                              балів
                            </span>
                          </div>
                          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full" style={{ 'width': '68%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  </div>


                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">
                      Досягнення та нагороди
                    </h3>
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4">
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-10 h-10 text-amber-500 mb-2">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          Перша сотня
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-10 h-10 text-purple-500 mb-2">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                          </path>
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          Майстер
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-10 h-10 text-orange-500 mb-2">
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z">
                          </path>
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          7 днів
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-10 h-10 text-green-500 mb-2">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          90% точність
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-10 h-10 text-blue-500 mb-2">
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                          </path>
                          <circle cx="12" cy="8" r="6" />
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          Топ 50
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book w-10 h-10 text-gray-300 mb-2">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20">
                          </path>
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          Всі теми
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-10 h-10 text-gray-300 mb-2">
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          30 днів
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-10 h-10 text-gray-300 mb-2">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span className="text-xs text-center text-gray-600">
                          Експерт
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}