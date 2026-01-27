// src/pages/dashboard/Profile.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import './profile.css';

interface University {
  id: number;
  name: string;
}

export default function Profile() {
  const navigate = useNavigate();
  const [krokTypes, setKrokTypes] = useState<{ id: number; name: string }[]>([]);
  const [universities, setUniversities] = useState<University[]>([]);
  const [krokTypesLoading, setKrokTypesLoading] = useState(true);

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    group_name: '',
    university: '',
    krok_type_id: '' as string | null,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Завантаження даних профілю
  useEffect(() => {
    
    async function fetchProfile() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Користувач не знайдений');

        const { data, error } = await supabase
          .from('profiles')
          .select(`*,
      krok_types!krok_type_id ( name )
  `)
          .eq('id', user.id)
          .single();

        if (error) throw error;
        if (data) {
          const profileWithEmail = {
            ...data,
            email: user.email || 'Не вказано',
          };

          setProfile(profileWithEmail);

          setFormData({
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            group_name: data.group_name || '',
            university: data.university || '',
            krok_type_id: data.krok_type_id || null,
          });
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);
  useEffect(() => {
  async function loadKrokTypes() {
    try {
      const { data, error } = await supabase
        .from('krok_types')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setKrokTypes(data || []);
    } catch (err) {
      console.error('Помилка завантаження типів КРОК:', err);
    } finally {
      setKrokTypesLoading(false);
    }
  }

  async function loadUniversities() {
    try {
      const { data, error } = await supabase
        .from('universities')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setUniversities(data || []);
    } catch (err) {
      console.error('Помилка завантаження університетів:', err);
    }
  }

  loadKrokTypes();
  loadUniversities();
}, []);

  // Збереження змін
  const handleSave = async () => {
  try {
    const { error } = await supabase
      .from('profiles')
      .update({
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        group_name: formData.group_name.trim(),
        university: formData.university.trim(),
        krok_type_id: formData.krok_type_id ?? null,
      })
      .eq('id', profile.id);

    if (error) throw error;

    // Оновлюємо профіль правильно — зберігаємо старий krok_types
    setProfile({
      ...profile,
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      group_name: formData.group_name.trim(),
      university: formData.university.trim(),
      krok_type_id: formData.krok_type_id ?? null,
      // krok_types залишається від попереднього запиту!
    });

    setEditing(false);
    setSuccess('Дані успішно оновлено');
    setTimeout(() => setSuccess(null), 3000);
  } catch (err: any) {
    setError(err.message);
  }
};

  // Видалення акаунту
  const handleDeleteAccount = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !session?.access_token) {
        throw new Error("Сесія відсутня або токен не знайдено. Перелогінься.");
      }

      console.log("Токен надсилається в Authorization:", session.access_token.substring(0, 20) + "...");

      const response = await fetch("https://mtnmvwgkwwrsjyfpavpr.supabase.co/functions/v1/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.access_token}`,  // ← ось ключовий рядок!
        },
        body: JSON.stringify({}),  // body може бути порожнім, бо токен в заголовку
      });

      console.log("Статус:", response.status);

      const result = await response.json();
      console.log("Відповідь:", result);

      if (!response.ok) {
        throw new Error(result.error || result.message || `Помилка сервера: ${response.status}`);
      }

      await supabase.auth.signOut();
      navigate("/");
      alert("Акаунт видалено");

    } catch (err: any) {
      console.error("Помилка:", err);
      setError("Не вдалося видалити: " + (err.message || "Невідома помилка"));
    }
  };

  if (loading) {
    return (
      <div className="loading-screen min-h-screen p-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="loading-container">
          <div className="spinner"></div>
          <div>
            <p className="loading-text-title">Завантаження профілю</p>
            <p className="loading-text-subtitle">Будь ласка, зачекайте...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error) return <div className="p-8 text-red-600 text-center">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen p-6 bg_base">
      {/* Картка профілю */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Шапка з аватаром */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold backdrop-blur-sm">
              {formData.first_name?.[0] || '?'}
              {formData.last_name?.[0] || ''}
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {formData.first_name} {formData.last_name}
              </h1>
              <p className="text-teal-100 mt-1">{formData.group_name || 'Група не вказана'}</p>
            </div>
          </div>
        </div>

        {/* Основний контент */}
        <div className="p-8 space-y-8">
          {/* Email (не редагується тут) */}
          <div>
            <label className="text-sm font-medium text-gray-700">Електронна пошта</label>
            <p className="mt-1 text-gray-900 font-medium">{profile?.email || 'Не завантажено'}</p>
          </div>

          {/* Форма редагування */}
          {editing ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ім'я</label>
                <input
                  type="text"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                />
              </div>
             <div>
  <label className="block text-sm font-medium text-gray-700">
    Тип КРОКу
  </label>

  {krokTypesLoading ? (
    <div className="mt-1 text-gray-500">Завантаження...</div>
  ) : (
    <select
      value={formData.krok_type_id?.toString() ?? ''}
      onChange={(e) =>
        setFormData({
          ...formData,
          krok_type_id: e.target.value ? e.target.value : null,
        })
      }
      className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
    >
      <option value="">Не обрано</option>
      {krokTypes.map((type) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  )}
</div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Прізвище</label>
                <input
                  type="text"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Група</label>
                <input
                  type="text"
                  value={formData.group_name}
                  onChange={(e) => setFormData({ ...formData, group_name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Університет</label>
                <select
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Оберіть ваш заклад</option>
                  {universities.map((uni) => (
                    <option key={uni.id} value={uni.name}>
                      {uni.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
                >
                  Зберегти
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Скасувати
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-500">Ім'я</label>
                  <p className="mt-1 text-gray-900">{profile?.first_name || 'Не вказано'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Прізвище</label>
                  <p className="mt-1 text-gray-900">{profile?.last_name || 'Не вказано'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Група</label>
                  <p className="mt-1 text-gray-900">{profile?.group_name || 'Не вказано'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Тип КРОКу</label>
                  <p className="mt-1 text-gray-900">{profile?.krok_types?.name || 'Не обрано'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Університет</label>
                  <p className="mt-1 text-gray-900">{profile?.university || 'Не вказано'}</p>
                </div>
              </div>


              <button
                onClick={() => setEditing(true)}
                className="w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item"
              >
                Редагувати профіль
              </button>
            </div>
          )}
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              navigate('/'); // або '/'
            }}
            className="w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Вийти з акаунту
          </button>
          {/* Кнопка видалення акаунту */}
          <div className="pt-8 border-t border-gray-200">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full flex items-center gap-3 p-3 rounded-xl transition-all theme-nav-item bg-red-100 text-red-700 py-3 rounded-lg hover:bg-red-700 transition font-medium flex items-center gap-2"
            >
              Видалити акаунт
            </button>
          </div>
        </div>
      </div>

      {/* Модалка підтвердження видалення */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Ви впевнені?</h2>
            <p className="text-gray-600 mb-6">
              Видалення акаунту буде постійним і не підлягає відновленню. Усі ваші дані будуть втрачені.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
              >
                Скасувати
              </button>
              <button

                onClick={handleDeleteAccount}
                className="flex-1 bg-red-100 text-red-700 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Видалити акаунт
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Повідомлення про успіх */}
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          {success}
        </div>
      )}
    </div>
  );
}