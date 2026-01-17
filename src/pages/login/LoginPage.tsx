// src/pages/HomePage.tsx
import './LoginPage.css';  // твої стилі залишаються

export default function LoginPage() {
  

  return (
    <div id="container">
  <div className="">
    <div className="">
      <div className="tailwind css-myl2ny css-10v5rb">
        <div className="relative">
          <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4">
            <div className="w-full max-w-xl">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border-l-8 border-teal-500">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-8 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg className="lucide lucide-house w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-3xl font-extrabold tracking-tight">
                        MedEdu Platform
                      </h1>
                      <p className="text-teal-100 text-sm mt-1">
                        Професійна медична освіта
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-3 bg-gray-100 rounded-lg p-1.5 mb-8">
                    <button className="py-3 rounded-md font-bold text-sm transition-all bg-white text-teal-600 shadow-sm">
                      Вхід
                    </button>
                    <button className="py-3 rounded-md font-bold text-sm transition-all text-gray-600">
                      Реєстрація
                    </button>
                  </div>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
                          <svg className="lucide lucide-send w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                            </path>
                            <path d="m21.854 2.147-10.94 10.939" />
                          </svg>
                        </div>
                        Електронна пошта
                      </label>
                      <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="example@email.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
                          <svg className="lucide lucide-shield w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                            </path>
                          </svg>
                        </div>
                        Пароль
                      </label>
                      <div className="relative">
                        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12" placeholder="••••••••" type="password" />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors" type="button">
                          <svg className="lucide lucide-eye w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                            </path>
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-4 rounded-lg font-bold text-base transition-all shadow-md hover:shadow-lg mt-6" type="submit">
                      Увійти до системи
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}