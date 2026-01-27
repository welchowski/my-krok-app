import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { NavLink, useLocation } from 'react-router-dom'

type FlashCard = {
  id: number
  question: string
  explanation: string
  image_question?: string  // якщо додаси поле пізніше
  image_answer?: string    // якщо додаси поле пізніше
}

export default function FlashCard() {
  const [cards, setCards] = useState<FlashCard[]>([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const selected = (location.state?.selectedDisciplines as string[]) || []
  const krokType = location.state?.krokType as string | null;
useEffect(() => {
  async function load() {
    setLoading(true);
    console.log("Обрані дисципліни:", selected);
    console.log("KROK Type:", krokType);

    try {
      let query = supabase
        .from('krok_tests')
        .select('id, question, explanation')  // можна додати image_question, image_answer пізніше
        .order('id');

      // Обов’язковий фільтр за типом КРОК, якщо є
      if (krokType) {
        query = query.eq('krok_type', krokType);
      }

      // Фільтр за дисциплінами, якщо обрано
      if (selected.length > 0) {
        query = query.or(
          selected
            .map(d => `discipline.eq."${d.trim()}"`)
            .join(',')
        );
      }

      const { data, error } = await query;

      console.log("Запит виконано:", { dataLength: data?.length, error });

      if (error) throw error;

      setCards(
        data?.map(q => ({
          id: q.id,
          question: q.question,
          explanation: q.explanation || 'Немає пояснення',
        })) ?? []
      );
    } catch (err) {
      console.error("Помилка завантаження флеш-карток:", err);
    } finally {
      setLoading(false);
    }
  }

  load();
}, [selected, krokType]);   // ← додали krokType в залежності                   // або [] якщо хочеш тільки один раз

  if (loading) return <div className="min-h-screen grid place-items-center">Завантаження...</div>
  if (!cards.length) return <div className="min-h-screen grid place-items-center">Карток немає</div>

  const current = cards[index]

  return (
<div className="min-h-screen mt-4 w-full max-w-5xl mx-auto px-4">
    <div className="  text-center
                  min-h-[60px] flex items-center justify-center ">

     <div
      className=" bg_base  flex items-center justify-center p-4 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="bg-white rounded-3xl shadow-2xl border-4 border-blue-100 w-full max-w-5xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 border-b-2 border-gray-100">
          <div className="text-sm font-medium text-gray-600">
            {index + 1} / {cards.length}
          </div>
          <div className="w-1/3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
              style={{ width: `${((index + 1) / cards.length) * 100}%` }}
            />
          </div>
          <button className="text-gray-500 hover:text-gray-800">Зберегти</button>
        </div>

        <div className="p-8">
          {!flipped ? (
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {current.question}
                </h2>
                <p className="text-center text-gray-500 text-lg pt-4">
                  натисни щоб побачити відповідь
                </p>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/cardsphoto.png" 
                  alt="Card illustration" 
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-8 items-start">
              <div className="flex-1 space-y-8">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <p className="text-xl leading-relaxed text-gray-800">
                    <strong>Відповідь: </strong>
                    {current.explanation}
                  </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap mt-8">
                      <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 flex items-center gap-3" onClick={e => {
              e.stopPropagation()
              setIndex(i => (i + 1) % cards.length)
              setFlipped(false)
            }}>
                        <svg className="lucide lucide-circle-check-big w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>
                          Знаю
                        </span>
                      </button>
                      <button className="rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 flex items-center gap-3" style={{ 'backgroundColor': '#ffe100', 'color': '#000000' }} onClick={e => {
              e.stopPropagation()
              setIndex(i => (i + 1) % cards.length)
              setFlipped(false)
            }}>
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
                      <button className="rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 flex items-center gap-3 text-black hover:brightness-110 hover:shadow-xl" style={{ 'backgroundColor': '#ff8000' }} onClick={e => {
              e.stopPropagation()
              setIndex(i => (i + 1) % cards.length)
              setFlipped(false)
            }}>
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

                <p className="text-center  text-lg text-gray-500  pt-4">
                  натисни щоб повернутися до питання
                </p>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/cardsphoto.png" 
                  alt="Card illustration" 
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-6 pb-6">
  {/* Попереднє — показуємо тільки якщо не перше */}
  {index > 0 && (
    <button
      className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
      onClick={e => {
        e.stopPropagation()
        setIndex(i => Math.max(0, i - 1))
        setFlipped(false)
      }}
    >
      ← Попереднє
    </button>
  )}

  {/* Головна кнопка справа */}
  {index < cards.length - 1 ? (
    // ще не останнє → показуємо "Наступне"
    <button
      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      onClick={e => {
        e.stopPropagation()
        setIndex(i => i + 1)
        setFlipped(false)
      }}
    >
      Наступне →
    </button>
  ) : index === 0 ? (
    // перше питання → теж "Наступне" (щоб не було пусто справа)
    <button
      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      onClick={e => {
        e.stopPropagation()
        setIndex(i => i + 1)
        setFlipped(false)
      }}
    >
      Наступне →
    </button>
  ) : (
    // з другого і до передостаннього — "Завершити"
    <NavLink to="/dashboard"
      className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow-lg flex items-center gap-2"
      onClick={e => {
        e.stopPropagation()
        
        
      }}
    >
      <svg className="lucide lucide-check-circle w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
      Завершити
    </NavLink>
  )}
</div>

        
      </div>
      
    </div>

  </div>

  {/* ← сюди додаємо статичний блок */}
  <div className="mt-6 w-full max-w-5xl text-center text-sm text-gray-600">
    {/* ваш статичний контент */}
    
   <div className=" bg_base  pt-8">
          <h3 className="text-lg mb-4 text-gray-900">Схожі матеріали</h3>
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
                                    18:45 хвилин
                                </p>
                            </div>
                        </div>
                    </div></NavLink>
               
                 <NavLink
                 to="/dashboard/lectionRun"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}>

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
                                5 питань
                            </p>
                        </div>
                    </div>
                </div>
                 </NavLink>
                 <NavLink to="/dashboard/AudioRun"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}>
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
                                18:45 хвилин
                            </p>
                        </div>
                    </div>
                </div>
                </NavLink>
                <NavLink to="/dashboard/Testexample"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}>
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
                                5 питань
                            </p>
                        </div>
                    </div>

                </div>
                </NavLink>
            </div>
        </div>
  </div>
</div>
    
    
  )
}