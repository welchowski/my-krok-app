// src/pages/dashboard/Profile.tsx
import './tests.css';
export default function Tests() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-2 text-gray-900">
          Вибір теми
        </h1>
        <div className="w-16 h-0.5 bg-emerald-600" />
        <p className="mt-2 text-sm text-gray-600">
          Оберіть дисципліни для тестування
        </p>
      </div>
      <div className="space-y-5">
        {/* Анатомія людини */}
        <div className="border-l-3 border-emerald-600 pl-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg mb-2 text-gray-900">
              Анатомія людини
            </h2>
            <label className="flex items-center gap-2 cursor-pointer master-label">
              <div className="relative">
                <input type="checkbox" className="sr-only master-checkbox" data-group="anatomy" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500 master-visual">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 text-white hidden">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Обрати всі
              </span>
            </label>
          </div>
          <div className="space-y-1" data-group="anatomy">
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="anatomy" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-emerald-600 border-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 text-white">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-emerald-900">
                Остеологія
              </span>
            </label>
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="anatomy" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500">
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Міологія
              </span>
            </label>
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="anatomy" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500">
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Ангіологія
              </span>
            </label>
          </div>
        </div>
        {/* Фізіологія */}
        <div className="border-l-3 border-emerald-600 pl-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg mb-2 text-gray-900">
              Фізіологія
            </h2>
            <label className="flex items-center gap-2 cursor-pointer master-label">
              <div className="relative">
                <input type="checkbox" className="sr-only master-checkbox" data-group="physiology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500 master-visual">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 text-white hidden">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Обрати всі
              </span>
            </label>
          </div>
          <div className="space-y-1" data-group="physiology">
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="physiology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500">
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Фізіологія нервової системи
              </span>
            </label>
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="physiology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500">
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Фізіологія серцево-судинної системи
              </span>
            </label>
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="physiology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500">
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Фізіологія дихання
              </span>
            </label>
          </div>
        </div>
        {/* Фармакологія */}
        <div className="border-l-3 border-emerald-600 pl-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg mb-2 text-gray-900">
              Фармакологія
            </h2>
            <label className="flex items-center gap-2 cursor-pointer master-label">
              <div className="relative">
                <input type="checkbox" className="sr-only master-checkbox" data-group="pharmacology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500 master-visual">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 text-white hidden">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-700">
                Обрати всі
              </span>
            </label>
          </div>
          <div className="space-y-1" data-group="pharmacology">
            {/* ваші оригінальні пункти Фармакології */}
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="pharmacology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500" />
              </div>
              <span className="text-sm text-gray-700">
                Загальна фармакологія
              </span>
            </label>
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="pharmacology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500" />
              </div>
              <span className="text-sm text-gray-700">
                Антибіотики
              </span>
            </label>
            <label className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white cursor-pointer transition-all group">
              <div className="relative">
                <input type="checkbox" className="sr-only child-checkbox" data-group="pharmacology" />
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all bg-transparent border-gray-300 group-hover:border-emerald-500" />
              </div>
              <span className="text-sm text-gray-700">
                Серцево-судинні препарати
              </span>
            </label>
          </div>
        </div>
        {/* Патологічна анатомія, Хірургія, Терапія — додавайте аналогічно */}
      </div>
      <div className="mt-8 flex items-center gap-4">
        <span className="text-10xl text-gray-600 ">
          Обрано:
          <span id="selected-count" className="text-xl text-emerald-700">
            0
          </span>
        </span>
        <button className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 transition-colors">
          Пройти тестування →
        </button>
      </div>
    </div>
  );
}