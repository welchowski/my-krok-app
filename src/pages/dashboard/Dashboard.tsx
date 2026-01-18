import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Dashboard() {
  useAuth({ requireAuth: true })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Бічна панель */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform transition-transform duration-300
          md:relative md:translate-x-0 md:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <nav className="h-full p-6 overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="lucide lucide-activity w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                KROK Platform
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <NavLink
              to="/dashboard/static"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'
                    : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-house w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span>Головна</span>
            </NavLink>

            <NavLink
              to="/dashboard/flash"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'
                    : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-credit-card w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="14" rx="2" width="20" x="2" y="5" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <span>Картки</span>
            </NavLink>

            <NavLink
              to="/dashboard/tests"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'
                    : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-clipboard-list w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="4" rx="1" ry="1" width="8" x="8" y="2" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
              <span>Тести</span>
            </NavLink>

            <NavLink
              to="/dashboard/module"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'
                    : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-layers w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span>Модулі</span>
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'
                    : 'w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item'
                }`
              }
            >
              <svg className="lucide lucide-user w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Профіль</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Кнопка меню — тільки на мобілці */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-md"
        onClick={() => setSidebarOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Оверлей — тільки на мобілці */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Основний контент — з відступом на десктопі */}
      <main className="flex-1 p-6 overflow-y-auto md:ml-64">
        <Outlet />
      </main>
    </div>
  )
}