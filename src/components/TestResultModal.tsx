'use client';

import { NavLink } from "react-router-dom";
import "./popup.css";

interface TestResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  correct?: number;
  incorrect?: number;
  skipped?: number;
  score?: number;
}

export default function TestResultModal({
  isOpen,
  onClose,
  correct = 0,
  incorrect = 0,
  skipped = 0,
  score = 0,
}: TestResultModalProps) {
  if (!isOpen) return null;

  const total = correct + incorrect + skipped || 1;
  let angle = 0;

  const sectors = [
    { value: correct,    color: "#059669", name: "Правильно"   },
    { value: incorrect,  color: "#FF8C00", name: "Неправильно" },
    { value: skipped,    color: "#64748b", name: "Пропущено"   },
  ].filter(s => s.value > 0);

  const pieRadius = 95;
  const innerRadius = 70;
  const cx = 110;
  const cy = 110;

  const paths = sectors.map((sector) => {
    const percent = sector.value / total;
    const startAngle = angle;
    angle += percent * 360;
    const endAngle = angle;

    const largeArc = percent > 0.5 ? 1 : 0;

    const x1 = cx + innerRadius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = cy + innerRadius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = cx + innerRadius * Math.cos((endAngle   * Math.PI) / 180);
    const y2 = cy + innerRadius * Math.sin((endAngle   * Math.PI) / 180);

    const x3 = cx + pieRadius * Math.cos((startAngle * Math.PI) / 180);
    const y3 = cy + pieRadius * Math.sin((startAngle * Math.PI) / 180);
    const x4 = cx + pieRadius * Math.cos((endAngle   * Math.PI) / 180);
    const y4 = cy + pieRadius * Math.sin((endAngle   * Math.PI) / 180);

    return (
      <path
        key={sector.name}
        className="recharts-sector"
        fill={sector.color}
        stroke="#fff"
        name={sector.name}
        d={`M ${x1},${y1} A ${innerRadius},${innerRadius},0,${largeArc},1,${x2},${y2} L ${x4},${y4} A ${pieRadius},${pieRadius},0,${largeArc},0,${x3},${y3} Z`}
      />
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-[500px] rounded-3xl shadow-xl max-w-full mx-auto" onClick={e => e.stopPropagation()}>
        <div className="bg-emerald-600 text-white px-6 py-5 rounded-t-3xl shadow-md">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h2 className="text-2xl font-bold">Результати</h2>
              <p className="text-emerald-100 text-sm mt-1">Статистика проходження</p>
            </div>
            <button onClick={onClose} className="hover:bg-emerald-700 p-2 rounded-full transition-colors">
              <svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6 bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-2xl shadow-md">
            <svg width="100%" height="220px" viewBox="0 0 220 220">
              <g className="recharts-layer recharts-pie">
                {paths}
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg className="lucide lucide-check text-green-600" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Правильно</span>
              </div>
              <div className="text-3xl font-bold text-green-600">{correct}</div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-orange-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <svg className="lucide lucide-circle-x text-orange-400" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6m6 0-6-6" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Неправильно</span>
              </div>
              <div className="text-3xl font-bold text-orange-500">{incorrect}</div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-slate-400">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <svg className="lucide lucide-skip-forward text-slate-600" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                    <polygon points="5 4 15 12 5 20 5 4" />
                    <line x1="19" x2="19" y1="5" y2="19" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Пропущено</span>
              </div>
              <div className="text-3xl font-bold text-slate-600">{skipped}</div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-emerald-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <svg className="lucide lucide-trophy text-emerald-600" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Бали</span>
              </div>
              <div className="text-3xl font-bold text-emerald-600">{score}</div>
            </div>
          </div>

          <NavLink
            to="/dashboard/static"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
            className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="lucide lucide-house" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            На головну
          </NavLink>
        </div>
      </div>
    </div>
  );
}