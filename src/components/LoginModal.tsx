

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  // src/components/LoginModal.tsx

if (!isOpen) return null;

return (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="w-full max-w-xl mx-4 bg-white shadow-xl rounded-lg overflow-hidden border-l-8 border-teal-500 relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* весь вміст модалки без змін */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-8 text-white">
        {/* ... */}
      </div>
      <div className="p-8">
        {/* перемикач Вхід/Реєстрація якщо потрібно */}
        <form className="space-y-4">
          {/* ... вся форма ... */}
        </form>
      </div>

      {/* кнопка закриття */}
      <button
        className="absolute top-4 right-6 text-white text-3xl font-black hover:opacity-80"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  </div>
);
}