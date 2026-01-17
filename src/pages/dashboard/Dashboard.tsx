import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom'; // Outlet для динамічного контенту
import { supabase } from '../../lib/supabaseClient'; // для логауту, якщо треба
import './dashboard.css';
import { useAuth } from '../..//hooks/useAuth';
import { NavLink } from 'react-router-dom';
export default function Dashboard() {
  useAuth({ requireAuth: true });
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true); // можна зробити toggler для мобілки

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // назад на головну після логауту
  };

  return (
    <div className="module flex h-screen bg-gray-100 container tailwind css-myl2ny css-exq74d min-h-screen ">
      {/* Фіксоване ліве меню (sidebar) — твій дизайн тут */}
      <aside className={`w-64 bg-white shadow-md flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="hidden md:block theme-nav fixed top-0 left-0 h-full w-64 p-6 overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="lucide lucide-activity w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </div>
              <span className="text-xl font-bold
                 bg-gradient-to-r from-blue-600 to-green-600
                 bg-clip-text text-transparent inline-block">
                KROK Platform
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <NavLink
              to="/dashboard/static"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'  // яскравий зелений + об'єм
                  : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            ><svg className="lucide lucide-house w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                      </path>
                    </svg><span>Головна</span></NavLink>
            <NavLink
              to="/dashboard/flash"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'  // яскравий зелений + об'єм
                  : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-credit-card w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect height="14" rx="2" width="20" x="2" y="5" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <span>
                Картки
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/tests"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'  // яскравий зелений + об'єм
                  : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-clipboard-list w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect height="4" rx="1" ry="1" width="8" x="8" y="2" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
              <span>
                Тести
              </span>
            </NavLink>
            {/* <NavLink
                    class="w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item"><svg
                      class="lucide lucide-video w-5 h-5" fill="none" height="24" stroke="currentColor"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect height="12" rx="2" width="14" x="2" y="6"></rect>
                    </svg><span>Відео</span></NavLink><NavLink
                    class="w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item"><svg
                      class="lucide lucide-headphones w-5 h-5" fill="none" height="24" stroke="currentColor"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
                      </path>
                    </svg><span>Аудіо</span></NavLink>
                    <NavLink
                    class="w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item"><svg
                      class="lucide lucide-book-open w-5 h-5" fill="none" height="24" stroke="currentColor"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7v14"></path>
                      <path
                        d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                      </path>
                    </svg><span>Лекції</span></NavLink> */}
            <NavLink
              to="/dashboard/module"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'  // яскравий зелений + об'єм
                  : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-layers w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span>
                Модулі
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'  // яскравий зелений + об'єм
                  : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            ><svg className="lucide lucide-user w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>
                Профіль
              </span>
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Основний контент — змінюється по роутам */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet /> {/* тут рендериться динамічний контент: профіль, курси тощо */}
      </main>
    </div>
  );
}