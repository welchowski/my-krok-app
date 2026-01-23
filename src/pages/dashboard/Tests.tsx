// src/pages/dashboard/Tests.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function TestsSelection() {
  const [selected, setSelected] = useState(new Set<string>());
  const [groups, setGroups] = useState<{ title: string; disciplines: string[] }[]>([]);
  const [loading, setLoading] = useState(true);
  const [userKrokType, setUserKrokType] = useState<string | null>(null);
  const [learningMode, setLearningMode] = useState(false);


  useEffect(() => {
    (async () => {
      // 1. Отримуємо тип КРОКу користувача
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return setLoading(false);

      const { data: profile } = await supabase
        .from('profiles')
        .select(`*,
      krok_types!krok_type_id ( name )
  `)
        .eq('id', user.id)
        .single();

      const userKrokType = profile?.krok_types?.name?.trim() || null;
      const krokType = profile?.krok_types?.name?.trim() || null;
      setUserKrokType(krokType); 

      // 2. Завантажуємо питання тільки для цього типу
      const query = supabase
        .from('krok_tests')
        .select('module_name, discipline')
        .not('module_name', 'is', null)
        .not('discipline', 'is', null);

      if (userKrokType) query.eq('krok_type', userKrokType);

      const { data } = await query;

      if (!data?.length) return setLoading(false);

      const map = new Map<string, Set<string>>();
      data.forEach(r => {
        if (!map.has(r.module_name)) map.set(r.module_name, new Set());
        map.get(r.module_name)!.add(r.discipline);
      });

      setGroups(
        Array.from(map, ([title, discs]) => ({
          title,
          disciplines: [...discs].sort(),
        }))
      );

      setLoading(false);
    })();
  }, []);

  const toggle = (v: string, c: boolean) =>
    setSelected(s => {
      const n = new Set(s);
      c ? n.add(v) : n.delete(v);
      return n;
    });

  const toggleAll = (g: typeof groups[number], checked: boolean) =>
    g.disciplines.forEach(d => toggle(d, checked));

  const count = selected.size;

  if (loading) return <div className="text-center py-20 min-h-screen p-6 bg_base">Завантаження...</div>;

  return (
    <div className="min-h-screen p-6 bg_base max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl mb-2" >Вибір теми </h1>
      <p className="text-sm text-gray-500 mb-6">
  {userKrokType || '—'} 
</p>
<div className="mb-6 flex items-center gap-3">
  <label className="flex items-center gap-2 cursor-pointer select-none">
    <div className="relative">
      <input
        type="checkbox"
        className="sr-only"
        checked={learningMode}
        onChange={(e) => setLearningMode(e.target.checked)}
      />
      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
          learningMode
            ? 'bg-emerald-600 border-emerald-600'
            : 'border-gray-300'
        }`}
      >
        <svg
          className={`lucide lucide-check w-3.5 h-3.5 text-white ${learningMode ? '' : 'hidden'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
    </div>
    <span className="text-base font-medium text-gray-800">Режим навчання</span>
  </label>

  {/* іконка з підказкою */}
 
<div className="group relative inline-flex">
 <button
  data-tooltip-id="learn-mode"
  data-tooltip-content="Ви отримуєте пояснення до кожного питання після відповіді."
  className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 ..."
>
  ?
</button><ReactTooltip
  id="learn-mode"
  place="bottom"
  variant="dark"
  className="!max-w-xs !rounded-lg !py-2.5 !px-3.5 !text-sm !opacity-95"
/>

  
</div>
</div>
      
      <div className="w-16 h-0.5 bg-emerald-600 mb-8" />
      <p className="text-sm text-gray-600 mb-8">Оберіть дисципліни</p>

      <div className="space-y-10">
        {groups.map(g => {
          const all = g.disciplines.every(d => selected.has(d));
          return (
            <div key={g.title} className="border-l-3 border-emerald-600 pl-4">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg text-gray-900">{g.title}</h2>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={all}
                      onChange={e => toggleAll(g, e.target.checked)}
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        all ? 'bg-emerald-600 border-emerald-600' : 'border-gray-300'
                      }`}
                    >
                      <svg
                        className={`lucide lucide-check w-3.5 h-3.5 text-white ${all ? '' : 'hidden'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-gray-700">Обрати всі</span>
                </label>
              </div>

              <div className="space-y-1">
                {g.disciplines.map(d => (
                  <label key={d} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selected.has(d)}
                        onChange={e => toggle(d, e.target.checked)}
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          selected.has(d) ? 'bg-emerald-600 border-emerald-600' : 'border-gray-300 group-hover:border-emerald-500'
                        }`}
                      >
                        <svg
                          className={`lucide lucide-check w-3.5 h-3.5 text-white ${selected.has(d) ? '' : 'hidden'}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                    </div>
                    <span className={`text-sm ${selected.has(d) ? 'text-emerald-900 font-medium' : 'text-gray-700'}`}>
                      {d}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex items-center gap-6 sticky bottom-4 bg-white p-4 border rounded-lg shadow-lg z-10">
        <span className="text-lg text-gray-600">
          Обрано: <strong className="text-xl text-emerald-600">{count}</strong>
        </span>
        <Link
          to="/dashboard/tests/run"
          state={{ selectedDisciplines: [...selected],
            learningMode: learningMode
           }}
          className={`flex-1 text-center py-3 rounded text-white font-medium ${
            count ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={e => !count && e.preventDefault()}
        >
          Пройти тестування →
        </Link>
      </div>
    </div>
  );
}