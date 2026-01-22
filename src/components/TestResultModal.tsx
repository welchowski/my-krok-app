'use client';

import { NavLink } from "react-router-dom";
import "./popup.css"
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
  correct = 0,     // можна залишити, якщо хочеш безпечний дефолт
  incorrect = 0,
  skipped = 0,
  score = 0,
}: TestResultModalProps)  {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="bg-white w-[500px] rounded-3xl shadow-xl max-w-full mx-auto"
        onClick={(e) => e.stopPropagation()} // щоб не закривався при кліку всередині
      >
        <div className="bg-emerald-600 text-white px-6 py-5 rounded-t-3xl shadow-md">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h2 className="text-2xl font-bold">
                Результати тесту
              </h2>
              <p className="text-emerald-100 text-sm mt-1">
                Статистика проходження
              </p>
            </div>
            <button 
              onClick={onClose} 
              className="hover:bg-emerald-700 p-2 rounded-full transition-colors"
            >
              <svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-6 bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-2xl shadow-md">
            <div className="recharts-responsive-container" style={{ width: '100%', height: '100%', minWidth: '0px', overflow: 'hidden' }}>
              <div className="recharts-responsive-container" style={{ width: '100%', height: '100%', minWidth: '0px', overflow: 'hidden' }}>
                
                <svg 
                  className="recharts-responsive-container" style={{ 'width': '100%', 'height': '220px', 'minWidth': '0px' }}
                >
                  <title />
                  <desc />
                  <defs>
                    <clipPath id="recharts3-clip">
                      <rect height="210" width="210" x="5" y="5" />
                    </clipPath>
                  </defs>
                  <g className="recharts-layer recharts-pie" tabIndex={0}>
                    <g className="recharts-layer">
                      <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                        <path className="recharts-sector" color="#059669" d="M 291,110 A 85,85,0,1,0,180.75146556595203,191.16348630346465 L 188.1775051053779,167.2918726847986 A 60,60,0,1,1,266,110 Z" fill="#059669" name="Правильно" role="img" stroke="#fff" tabIndex={-1} />
                      </g>
                      <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                        <path className="recharts-sector" color="#dc2626" d="M 185.03383647259477,192.37366075962694 A 85,85,0,0,0,276.4017586482964,157.62974259039228 L 255.69535904585626,143.62099476968865 A 60,60,0,0,1,191.2003551571257,168.14611347738372 Z" fill="#dc2626" name="Неправильно" role="img" stroke="#fff" tabIndex={-1} />
                      </g>
                      <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                        <path className="recharts-sector" color="#64748b" d="M 278.7980236089254,153.87992432348005 A 85,85,0,0,0,290.8835104541388,114.44855628065027 L 265.9177720852744,113.14015737457666 A 60,60,0,0,1,257.3868401945356,140.97406422833888 Z" fill="#64748b" name="Пропущено" role="img" stroke="#fff" tabIndex={-1} />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Весь твій блок з картками — без жодної зміни */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg className="lucide lucide-check text-green-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Правильно</span>
              </div>
              <div className="text-3xl font-bold text-green-600">{correct}</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-red-100 p-2 rounded-lg">
                  <svg className="lucide lucide-circle-x text-red-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Неправильно</span>
              </div>
              <div className="text-3xl font-bold text-red-600">{incorrect}</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-slate-400">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <svg className="lucide lucide-skip-forward text-slate-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
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
                  <svg className="lucide lucide-trophy text-emerald-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Бали</span>
              </div>
              <div className="text-3xl font-bold text-emerald-600">{score}</div>
            </div>
          </div>

          <NavLink 
           to="/dashboard/static"
            
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            

            className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="lucide lucide-house" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            На головну
          </NavLink>
        </div>
      </div>
    </div>
  );
}