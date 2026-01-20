import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useLocation } from 'react-router-dom'

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
useEffect(() => {
  async function load() {
    setLoading(true) 
    console.log("Обрані дисципліни для FlashCard:", selected);
    console.log("Кількість обраних:", selected.length)          // на всяк випадок

    try {
      console.log("Починаю запит...")

      let query = supabase
        .from('krok_tests')
        .select('id, question, explanation')
        .order('id')

     if (selected.length > 0) {
  query = query.or(
    selected
      .map(d => `discipline.eq."${d.trim()}"`)  // eq замість in
      .join(',')
  );
}
      const { data, error } = await query

      console.log("Результат запиту:", { data, error })

      if (error) {
        console.error("Помилка Supabase:", error)
        // тут можна показати повідомлення користувачу
      } else {
        setCards(
          data?.map(q => ({
            id: q.id,
            question: q.question,
            explanation: q.explanation || 'Немає пояснення',
          })) ?? []
        )
      }
    } catch (err) {
      console.error("Несподівана помилка:", err)
    } finally {
      setLoading(false)          // ← завжди! незалежно від результату
    }
  }

  load()
}, [selected])                   // або [] якщо хочеш тільки один раз

  if (loading) return <div className="min-h-screen grid place-items-center">Завантаження...</div>
  if (!cards.length) return <div className="min-h-screen grid place-items-center">Карток немає</div>

  const current = cards[index]

  return (
    <div
      className="min-h-screen bg_base flex items-center justify-center p-4 cursor-pointer"
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
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {current.question}
              </h2>
              {/* image_question - якщо додаси поле в таблицю */}
              <p className="text-center text-gray-500 text-lg pt-4">
                натисни щоб побачити відповідь
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-xl leading-relaxed text-gray-800">
                  <strong>Відповідь: </strong>
                  {current.explanation}
                </p>
              </div>

              {/* image_answer - якщо додаси поле в таблицю */}

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

              <p className="text-center text-gray-500 text-sm pt-4">
                натисни щоб повернутися до питання
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-6 pb-6">
          <button
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-40"
            onClick={e => {
              e.stopPropagation()
              setIndex(i => Math.max(0, i - 1))
              setFlipped(false)
            }}
            disabled={index === 0}
          >
            ← Попереднє
          </button>
          <button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={e => {
              e.stopPropagation()
              setIndex(i => (i + 1) % cards.length)
              setFlipped(false)
            }}
          >
            Наступне →
          </button>
        </div>

        
      </div>
      
    </div>
    
    
  )
}