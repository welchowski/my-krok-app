import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; // шлях підправ

export function useAuth({ requireAuth = true } = {}) {
  const navigate = useNavigate();

  useEffect(() => {
    // Перевіряємо поточну сесію
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Помилка перевірки сесії:', error);
      }
      if (requireAuth && !session) {
        navigate('/'); // перенаправлення, якщо не залогінений
      } else if (!requireAuth && session) {
        navigate('/dashboard'); // якщо залогінений, але на публічній сторінці — на дашборд
      }
    });

    // Слухаємо зміни стану автентифікації (логін/логаут)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (requireAuth && !session) {
        navigate('/');
      } else if (!requireAuth && session) {
        navigate('/dashboard');
      }
    });

    // Відписуємося при розмонтуванні
    return () => subscription.unsubscribe();
  }, [navigate, requireAuth]);
}