// src/components/AuthModal.tsx
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

type Mode = 'login' | 'register';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: Mode;
}

export default function AuthModal({ isOpen, onClose, defaultMode = 'login' }: Props) {
  const [mode, setMode] = useState<Mode>(defaultMode);

  useEffect(() => {
    if (isOpen) setMode(defaultMode);
  }, [isOpen, defaultMode]);



if (!isOpen) return null;

return (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    {/* ← Ось тут найважливіше */}
    <div
      className="w-full max-w-xl mx-4 bg-white shadow-xl rounded-lg overflow-hidden border-l-8 border-teal-500"
      onClick={(e) => e.stopPropagation()}   // БЛОКУЄ спливання події до overlay
    >
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-8 text-white">
        {/* заголовок без змін */}
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 gap-3 bg-gray-100 rounded-lg p-1.5 mb-8">
          <button
            className={`py-3 rounded-md font-bold text-sm transition-all ${
              mode === 'login' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-600'
            }`}
            onClick={() => setMode('login')}
          >
            Вхід
          </button>
          <button
            className={`py-3 rounded-md font-bold text-sm transition-all ${
              mode === 'register' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-600'
            }`}
            onClick={() => setMode('register')}
          >
            Реєстрація
          </button>
        </div>

        {mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>

      {/* кнопка закриття (дуже бажано додати) */}
      <button
        className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-200"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  </div>
);
}