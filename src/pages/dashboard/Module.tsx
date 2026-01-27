// src/pages/dashboard/Module.tsx
import { useState, useEffect } from 'react';
import './module.css'; // або назви файл як хочеш
import { NavLink } from 'react-router-dom';
import heartImage from '/photo-1690306816872-91063f6de36b.png';  // або правильний відносний шлях
import CardSelection from './Card';
import { supabase } from '../../lib/supabaseClient';

type Tab = 'lecture' | 'audio' | 'video' | 'cards';

interface Category {
  name: string;
  topics: string[];
}

const CATEGORIES: Category[] = [
  {
    name: 'Кардіологія',
    topics: ['Анатомія серця', 'Фізіологія серця', 'Патології серця']
  },
  {
    name: 'Неврологія',
    topics: ['Структура мозку', 'Неврологічні захворювання', 'Клінічна неврологія']
  },
  {
    name: 'Анатомія',
    topics: ['Системна анатомія', 'Топографічна анатомія', 'Порівняльна анатомія']
  }
];

export default function Module() {
  const [activeTab, setActiveTab] = useState<Tab>('lecture');
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(() => {
    // Ініціалізуємо з Кардіологією вибрано
    const initialSet = new Set<string>();
    CATEGORIES[0].topics.forEach(topic => initialSet.add(topic));
    return initialSet;
  });
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(() => {
    // Розширяємо Кардіологію за замовчуванням
    return new Set(['Кардіологія']);
  });
  const [universityName, setUniversityName] = useState<string | null>(() => {
    const cached = localStorage.getItem('moduleUniversity');
    return cached ? JSON.parse(cached) : null;
  });
  const [krokType, setKrokType] = useState<string | null>(() => {
    const cached = localStorage.getItem('moduleKrokType');
    return cached ? JSON.parse(cached) : null;
  });

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log('Current user:', user);
        if (!user || !mounted) return;

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select(`*,
      krok_types!krok_type_id ( name )
  `)
          .eq('id', user.id)
          .single();

        console.log('Profile data:', profile);
        console.log('Profile error:', profileError);

        if (profileError) throw profileError;

        if (mounted) {
          console.log('University:', profile?.university);
          console.log('Krok types:', profile?.krok_types);
          const university = profile?.university || null;
          const kroks = profile?.krok_types?.name || null;
          
          setUniversityName(university);
          setKrokType(kroks);
          
          // Збереження в localStorage
          localStorage.setItem('moduleUniversity', JSON.stringify(university));
          localStorage.setItem('moduleKrokType', JSON.stringify(kroks));
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'lecture', label: 'Лекції' },
    { id: 'video', label: 'Відео' },
    { id: 'audio', label: 'Аудіо' },
    { id: 'cards', label: 'Картки' },
  ];

  // Функція для переключення теми
  const toggleTopic = (topic: string, checked: boolean) => {
    const newSelected = new Set(selectedTopics);
    if (checked) {
      newSelected.add(topic);
    } else {
      newSelected.delete(topic);
    }
    setSelectedTopics(newSelected);
  };

  // Функція для переключення всіх тем у категорії
  const toggleAllInCategory = (category: Category, checked: boolean) => {
    const newSelected = new Set(selectedTopics);
    category.topics.forEach(topic => {
      if (checked) {
        newSelected.add(topic);
      } else {
        newSelected.delete(topic);
      }
    });
    setSelectedTopics(newSelected);
  };

  // Функція для переключення розширення категорії
  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  // Перевірка чи всі теми в категорії вибрані
  const allInCategorySelected = (category: Category) => {
    return category.topics.every(topic => selectedTopics.has(topic));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen p-6 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Переглянуто матеріалів
                </p>
                <p className="text-3xl text-gray-900">
                  0 / 10
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white rounded-2xl shadow-lg p-4 w-20 h-20 flex flex-col items-center justify-center">
                  <svg className="lucide lucide-trophy w-8 h-8 text-yellow-500 mb-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  <span className="text-xs text-gray-900">
                    0
                  </span>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-4 w-20 h-20 flex flex-col items-center justify-center">
                  <svg className="lucide lucide-award w-8 h-8 text-purple-500 mb-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                    </path>
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                  <span className="text-xs text-gray-900">
                    Рівень 1
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Університет/ тип КРОКу
                </p>
                <p className="text-3xl text-gray-900">
                  {universityName && krokType ? `${universityName} / ${krokType}` : 'Не вказано'}
                </p>
              </div>
              <div className="flex gap-4">
               
                
              </div>
            </div>
          </div>

          {/* Таби */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-8 py-3 rounded-xl font-medium transition-all text-sm sm:text-base
                  ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Основний контент з різним дизайном залежно від табу */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Лівий сайдбар з фільтрами — однаковий для всіх табів */}
            <div className="bg-white rounded-2xl shadow-lg p-6 h-fit order-2 lg:order-1">
              <h3 className="text-xl mb-4 text-gray-900">Фільтрувати за темами</h3>
              <div className="space-y-4">
                {CATEGORIES.map((category) => {
                  const isExpanded = expandedCategories.has(category.name);
                  const allSelected = allInCategorySelected(category);
                  
                  return (
                    <div key={category.name} className="border-b pb-4 last:border-b-0">
                      {/* Заголовок категорії з кнопкою розширення */}
                      <div className="flex items-center justify-between mb-3">
                        <button
                          onClick={() => toggleCategory(category.name)}
                          className="flex items-center gap-2 flex-1 hover:bg-gray-100 p-2 rounded transition-all"
                        >
                          <span className="text-gray-900 font-medium">{category.name}</span>
                          <svg
                            className={`lucide lucide-chevron w-5 h-5 text-gray-900 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        {/* Checkbox для "Обрати всі" */}
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="relative">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={allSelected}
                              onChange={(e) => toggleAllInCategory(category, e.target.checked)}
                            />
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                allSelected
                                  ? 'bg-blue-600 border-blue-600'
                                  : 'border-gray-300 hover:border-blue-500'
                              }`}
                            >
                              <svg
                                className={`lucide lucide-check w-3.5 h-3.5 text-white ${allSelected ? '' : 'hidden'}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </div>
                          </div>
                        </label>
                      </div>

                      {/* Теми категорії */}
                      {isExpanded && (
                        <div className="ml-4 space-y-2">
                          {category.topics.map((topic) => (
                            <label
                              key={topic}
                              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  className="sr-only"
                                  checked={selectedTopics.has(topic)}
                                  onChange={(e) => toggleTopic(topic, e.target.checked)}
                                />
                                <div
                                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                    selectedTopics.has(topic)
                                      ? 'bg-blue-600 border-blue-600'
                                      : 'border-gray-300 hover:border-blue-500'
                                  }`}
                                >
                                  <svg
                                    className={`lucide lucide-check w-3.5 h-3.5 text-white ${
                                      selectedTopics.has(topic) ? '' : 'hidden'
                                    }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </div>
                              </div>
                              <span
                                className={`text-sm ${
                                  selectedTopics.has(topic)
                                    ? 'text-blue-900 font-medium'
                                    : 'text-gray-600'
                                }`}
                              >
                                {topic}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ПРАВА КОЛОНКА — тут змінюється вміст залежно від табу */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {activeTab === 'lecture' && (
                <div className="space-y-8 lecture-content">
                  {/* Дизайн для ЛЕКЦІЇ — ваш поточний варіант */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Перша колонка (4 картки) */}
                        <NavLink
                          to="/dashboard/lectionRun"
                          className="block transition-all  hover:scale-105"
                        >
                          <div className="theme-card p-6 rounded-2xl bg-white shadow-lg">
                            <div className="flex items-center gap-4">
                              <div className="relative" />
                              <div className="flex-1">
                                <div className="inline-block px-3 py-1 rounded-full text-xs mb-2 bg-primary/20 text-primary">
                                  Кардіологія
                                </div>
                                <h4 className="mb-1">
                                  Серцеві аритмії: діагностика та лікування
                                </h4>
                                <p className="text-sm opacity-60">
                                  Проф. Іванова О.М.
                                </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-sm opacity-60 flex items-center gap-1">
                                  <svg
                                    className="lucide lucide-clock w-4 h-4"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  20 хв
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-file-text w-5 h-5"
                                  >
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                    <path d="M10 9H8" />
                                    <path d="M16 13H8" />
                                    <path d="M16 17H8" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </NavLink >
                        {/* Друга колонка (4 картки) */}
                        <NavLink
                          to="/dashboard/lectionRun"
                          className="block transition-all  hover:scale-105"
                        >
                          <div className="theme-card p-6 rounded-2xl bg-white shadow-lg">
                            <div className="flex items-center gap-4">
                              <div className="relative" />
                              <div className="flex-1">
                                <div className="inline-block px-3 py-1 rounded-full text-xs mb-2 bg-primary/20 text-primary">
                                  Кардіологія
                                </div>
                                <h4 className="mb-1">
                                  Серцеві аритмії: діагностика та лікування
                                </h4>
                                <p className="text-sm opacity-60">
                                  Проф. Іванова О.М.
                                </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-sm opacity-60 flex items-center gap-1">
                                  <svg
                                    className="lucide lucide-clock w-4 h-4"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  20 хв
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-file-text w-5 h-5"
                                  >
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                    <path d="M10 9H8" />
                                    <path d="M16 13H8" />
                                    <path d="M16 17H8" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </NavLink >
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'video' && (
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <NavLink
                          to="/dashboard/VideoRun"
                          className="block transition-all  hover:scale-105"
                        >
                         

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all">
                      <div className="relative">
                        <img alt="Анатомія серця: Основи" className="w-full h-48 object-cover"  src={heartImage} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-500">
                              <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="6 3 20 12 6 21 6 3" />
                              </svg>
                            </div>
                            <span className="text-white text-sm">
                              18:45
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg mb-2 text-gray-900">
                          Анатомія серця: Основи
                        </h3>
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          Інттерактивне
                        </span>
                      </div>
                    </div> </NavLink>
                    <NavLink
                          to="/dashboard/VideoRun"
                          className="block transition-all  hover:scale-105"
                        >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transition-all">
                      <div className="relative">
                        <img alt="Ішемічна хвороба серця" className="w-full h-48 object-cover"   src={heartImage} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-500">
                              <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="6 3 20 12 6 21 6 3" />
                              </svg>
                            </div>
                            <span className="text-white text-sm">
                              52:00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg mb-2 text-gray-900">
                          Ішемічна хвороба серця
                        </h3>
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          Інттерактивне
                        </span>
                      </div>
                    </div></NavLink>
                    <NavLink
                          to="/dashboard/VideoRun"
                          className="block transition-all  hover:scale-105"
                        >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transition-all">
                      <div className="relative">
                        <img alt="Структура головного мозку" className="w-full h-48 object-cover"   src={heartImage} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-500">
                              <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="6 3 20 12 6 21 6 3" />
                              </svg>
                            </div>
                            <span className="text-white text-sm">
                              38:45
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg mb-2 text-gray-900">
                          Структура головного мозку
                        </h3>
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          Інттерактивне
                        </span>
                      </div>
                    </div>
                    </NavLink>
                    <NavLink
                          to="/dashboard/VideoRun"
                          className="block transition-all  hover:scale-105"
                        >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden  transition-all">
                      <div className="relative">
                        <img alt="Епілепсія та судомні стани" className="w-full h-48 object-cover"   src={heartImage} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-500">
                              <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="6 3 20 12 6 21 6 3" />
                              </svg>
                            </div>
                            <span className="text-white text-sm">
                              41:10
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg mb-2 text-gray-900">
                          Епілепсія та судомні стани
                        </h3>
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          Інттерактивне
                        </span>
                      </div>
                    </div>
                    </NavLink>
                    
                  </div>
                </div>
              )}

              {activeTab === 'audio' && (
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Перша колонка (4 картки) */}
                      <div className="space-y-6">
                        <div className="theme-card p-6 rounded-2xl bg-white shadow-lg hover:scale-105 transition-all">
                           <NavLink
                          to="/dashboard/AudioRun"
                          className="block transition-all "
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative" />
                            <div className="flex-1">
                              <div className="inline-block px-3 py-1 rounded-full text-xs mb-2 bg-primary/20 text-primary">
                                Кардіологія
                              </div>
                              <h4 className="mb-1">
                                Серцеві аритмії: діагностика та лікування
                              </h4>
                              <p className="text-sm opacity-60">
                                Проф. Іванова О.М.
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-sm opacity-60 flex items-center gap-1">
                                <svg className="lucide lucide-clock w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                18:45
                              </div>
                              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500">
                                <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          </NavLink>
                        </div>
                        <div className="theme-card p-6 rounded-2xl bg-white shadow-lg transition-all hover:scale-105">
                          <NavLink
                          to="/dashboard/AudioRun"
                          className="block transition-all  "
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative" />
                            <div className="flex-1">
                              <div className="inline-block px-3 py-1 rounded-full text-xs mb-2 bg-primary/20 text-primary">
                                Кардіологія
                              </div>
                              <h4 className="mb-1">
                                Серцеві аритмії: діагностика та лікування
                              </h4>
                              <p className="text-sm opacity-60">
                                Проф. Іванова О.М.
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-sm opacity-60 flex items-center gap-1">
                                <svg className="lucide lucide-clock w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                18:30
                              </div>
                              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500">
                                <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          </NavLink>
                        </div>
                      </div>
                      {/* Друга колонка (4 картки) */}
                      <div className="space-y-6">
                        <div className="theme-card p-6 rounded-2xl bg-white shadow-lg transition-all hover:scale-105">
                          <NavLink
                          to="/dashboard/AudioRun"
                          className="block transition-all  "
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative" />
                            <div className="flex-1">
                              <div className="inline-block px-3 py-1 rounded-full text-xs mb-2 bg-primary/20 text-primary">
                                Кардіологія
                              </div>
                              <h4 className="mb-1">
                                Серцеві аритмії: діагностика та лікування
                              </h4>
                              <p className="text-sm opacity-60">
                                Проф. Іванова О.М.
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-sm opacity-60 flex items-center gap-1">
                                <svg className="lucide lucide-clock w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                18:30
                              </div>
                              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500">
                                <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                           </NavLink>
                        </div>
                       
                        <div className="theme-card p-6 rounded-2xl bg-white shadow-lg transition-all hover:scale-105">
                          <NavLink
                          to="/dashboard/AudioRun"
                          className="block transition-all  "
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative" />
                            <div className="flex-1">
                              <div className="inline-block px-3 py-1 rounded-full text-xs mb-2 bg-primary/20 text-primary">
                                Кардіологія
                              </div>
                              <h4 className="mb-1">
                                Серцеві аритмії: діагностика та лікування
                              </h4>
                              <p className="text-sm opacity-60">
                                Проф. Іванова О.М.
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-sm opacity-60 flex items-center gap-1">
                                <svg className="lucide lucide-clock w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                18:30
                              </div>
                              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500">
                                <svg className="lucide lucide-play w-5 h-5 text-white ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cards' && (
                <CardSelection />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Приклад компонентів карток (можна винести в окремі файли)

