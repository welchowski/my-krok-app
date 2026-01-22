import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // для кнопки показу пароля

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) throw loginError;

      if (!data.user) {
        throw new Error('Не вдалося увійти');
      }

      console.log('Успішний логін:', data.user.id); // для дебагу
      navigate('/dashboard'); // перенаправлення на дашборд

    } catch (err: any) {
      console.error('Помилка логіну:', err);
      setError(err.message || 'Неправильний email або пароль');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleLogin}>
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
                      <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="example@email.com" type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
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
                        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12" placeholder="••••••••" type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors" type="button" onClick={() => setShowPassword(!showPassword)}>
                          <svg className="lucide lucide-eye w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                            </path>
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-4 rounded-lg font-bold text-base transition-all shadow-md hover:shadow-lg mt-6" type="submit" disabled={loading}>
                      {loading ? 'Вхід...' : 'Увійти до системи'}
                      
                    </button>
                    {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                  </form>
  );
}