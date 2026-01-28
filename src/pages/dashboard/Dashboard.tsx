import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

// Navigation items configuration
const navItems = [
  { to: '/dashboard/static', label: 'Головна', icon: 'home' },
  { to: '/dashboard/flash', label: 'Картки', icon: 'card' },
  { to: '/dashboard/tests', label: 'Тести', icon: 'test' },
  { to: '/dashboard/module', label: 'Модулі', icon: 'module' },
  { to: '/dashboard/saved', label: 'Збережені', icon: 'bookmark' },
  { to: '/dashboard/profile', label: 'Профіль', icon: 'user' },
]

// Icon component
function NavIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    card: <><rect height="14" rx="2" width="20" x="2" y="5" /><line x1="2" x2="22" y1="10" y2="10" /></>,
    test: <><rect height="4" rx="1" ry="1" width="8" x="8" y="2" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M12 11h4M12 16h4M8 11h.01M8 16h.01" /></>,
    module: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
    bookmark: <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />,
    user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  }
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      {icons[type]}
    </svg>
  )
}

// Navigation link component
function NavItem({ to, label, icon, onClick }: { to: string; label: string; icon: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isActive
          ? 'bg-emerald-600 text-white font-semibold shadow-xl shadow-emerald-500/40 scale-105 border border-emerald-400/50'
          : 'theme-nav-item hover:bg-gray-100'
        }`
      }
    >
      <NavIcon type={icon} />
      <span>{label}</span>
    </NavLink>
  )
}

// Logo component
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        KROK Platform
      </span>
    </div>
  )
}

export default function Dashboard() {
  useAuth({ requireAuth: true })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">

      {/* ===== DESKTOP SIDEBAR (fixed on left side) ===== */}
      <aside
        className="hidden md:block bg-white shadow-md z-30"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '256px',
        }}
      >
        <nav className="h-full p-6 overflow-y-auto">
          <div className="mb-8">
            <Logo />
          </div>
          <div className="space-y-2">
            {navItems.map(item => (
              <NavItem key={item.to} {...item} />
            ))}
          </div>
        </nav>
      </aside>

      {/* ===== MOBILE MENU BUTTON (visible only on mobile) ===== */}
      <button
        type="button"
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-lg active:scale-95 transition-transform"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Відкрити меню"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ===== MOBILE MENU OVERLAY (visible only when open) ===== */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Dark backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="absolute inset-y-0 left-0 w-[85vw] max-w-[320px] bg-white shadow-2xl">
            <nav className="h-full p-6 overflow-y-auto">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between mb-8">
                <Logo />
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                  aria-label="Закрити меню"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation items */}
              <div className="space-y-2">
                {navItems.map(item => (
                  <NavItem key={item.to} {...item} onClick={closeMobileMenu} />
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <main className="md:ml-64 min-h-screen">
        <div className="p-6 pt-20 md:pt-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
