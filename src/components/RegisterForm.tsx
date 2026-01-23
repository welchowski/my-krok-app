import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // шлях підправ
import { useNavigate } from 'react-router-dom';
interface University {
  id: number;
  name: string;
}

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [group, setGroup] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [universities, setUniversities] = useState<University[]>([]);
  const [krokTypes, setKrokTypes] = useState<{ id: number; name: string }[]>([]);
  const [selectedKrokType, setSelectedKrokType] = useState<number | ''>('');

  // Завантажуємо список типів при монтуванні
  useEffect(() => {
    async function fetchKrokTypes() {
      const { data, error } = await supabase
        .from('krok_types')
        .select('id, name')
        .order('name');

      if (!error && data) setKrokTypes(data);
    }
    fetchKrokTypes();
  }, []);

  // Завантажуємо список університетів один раз
  useEffect(() => {
    async function fetchUniversities() {
      const { data, error } = await supabase
        .from('universities')
        .select('id, name')
        .order('name');

      if (error) {
        console.error('Помилка завантаження університетів:', error);
      } else {
        setUniversities(data || []);
      }
    }
    fetchUniversities();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Реєстрація в Auth
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            krok_type_id: selectedKrokType || null,

          },
        },
      });

      if (signUpError) {
        throw signUpError; // кидаємо помилку, щоб потрапити в catch
      }

      if (!signUpData.user) {
        throw new Error('Не вдалося створити користувача');
      }

      console.log('Користувач створений:', signUpData.user.id); // для дебагу

      // 2. Оновлюємо профіль
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          group_name: group.trim(),
          university: university.trim(),
          krok_type_id: selectedKrokType || null,
        })
        .eq('id', signUpData.user.id);



      if (profileError) {
        throw profileError;
      }

      // Успіх
      setSuccess(true);
      setSuccess(true);
      navigate('/dashboard');

    } catch (err: any) {
      console.error('Помилка реєстрації:', err);
      setError(err.message || 'Щось пішло не так під час реєстрації');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleRegister}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
              <svg className="lucide lucide-user-round w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            Ім'я
          </label>
          <input value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Введіть ім'я" type="text" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
              <svg className="lucide lucide-user-round w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            Прізвище
          </label>
          <input value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Введіть прізвище" type="text" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
            <svg className="lucide lucide-layers w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
              </path>
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12">
              </path>
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17">
              </path>
            </svg>
          </div>
          Група
        </label>
        <input value={group}
          onChange={(e) => setGroup(e.target.value)}
          required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Наприклад: МД-301" type="text" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
            <svg className="lucide lucide-house w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
              </path>
            </svg>
          </div>
          Медичний заклад
        </label>
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
          className="w-full px-4 py-3 border ... appearance-none bg-white"
        >
          <option value="">Оберіть ваш заклад</option>
          {universities.map((uni) => (
            <option key={uni.id} value={uni.name}>
              {uni.name}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
            <svg className="lucide lucide-house w-4 h-4 text-teal-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
              </path>
            </svg>
          </div>
          Тип КРОКу
        </label>
        <select
          value={selectedKrokType}
          onChange={(e) => setSelectedKrokType(Number(e.target.value) || '')}
          required
          className="w-full px-4 py-3 border ... appearance-none bg-white"
        >
          <option value="">Оберіть тип КРОКу</option>
          {krokTypes.map(type => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
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
        <input value={email}
          onChange={(e) => setEmail(e.target.value)}
          required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="example@email.com" type="email" />
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
          <input value={password}
            onChange={(e) => setPassword(e.target.value)}
            required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12" placeholder="••••••••" type="password" />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors" type="button">
            <svg className="lucide lucide-eye w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
              </path>
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
      </div>


      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-4 rounded-lg font-bold text-base transition-all shadow-md hover:shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Реєстрація...' : 'Створити акаунт'}
      </button>

      {error && <p className="text-red-600 text-center mt-2">{error}</p>}
      {success && <p className="text-green-600 text-center mt-2">Успішно зареєстровано!</p>}
    </form>
  );
}