import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export function useAuth({ requireAuth = true } = {}) {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  const validateAndRedirect = async () => {
    try {
      // 1. Отримуємо сесію
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error('getSession error:', sessionError);
        if (requireAuth) navigate('/');
        return false;
      }

      if (!session) {
        if (requireAuth) navigate('/');
        return false;
      }

      // 2. Перевіряємо, чи юзер реально існує (найважливіше!)
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.warn('getUser error → сесія мертва або юзер видалений', userError);

        // 403 — класичний симптом видаленого користувача
        const isUserDeleted =
          userError.status === 403 ||
          userError.message?.includes('not exist') ||
          userError.message?.includes('sub claim') ||
          userError.message?.includes('User from sub claim');

        if (isUserDeleted) {
          // Примусово чистимо тільки локально (сервер і так не дасть signOut)
          await supabase.auth.signOut({ scope: 'local' });
          // або повний signOut(), якщо хочеш спробувати
          // await supabase.auth.signOut();

          if (requireAuth) {
            navigate('/?reason=account_deleted');
          }
          return false;
        }

        // Інші помилки — теж логаут на безпеку
        await supabase.auth.signOut();
        if (requireAuth) navigate('/');
        return false;
      }

      if (!user) {
        await supabase.auth.signOut();
        if (requireAuth) navigate('/');
        return false;
      }

      // Якщо дійшли сюди — все гаразд
      return true;
    } catch (err) {
      console.error('Unexpected auth validation error:', err);
      await supabase.auth.signOut();
      if (requireAuth) navigate('/');
      return false;
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Перевірка при монтуванні
    validateAndRedirect();

    // Слухаємо події (SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED тощо)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth event:', event, !!session);

      if (event === 'SIGNED_OUT') {
        if (requireAuth) navigate('/');
        return;
      }

      // Після будь-якої підозрілої події — перепровіряємо юзера
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        const isValid = await validateAndRedirect();
        if (!isValid && requireAuth) {
          navigate('/');
        } else if (!requireAuth && session) {
          navigate('/dashboard');
        }
      }

      // Базова логіка для відсутності сесії
      if (requireAuth && !session) {
        navigate('/');
      } else if (!requireAuth && session) {
        navigate('/dashboard');
      }
    });

    // Опціонально: повторна перевірка кожні 4-5 хвилин (на випадок фонового рефрешу)
    const interval = setInterval(() => {
      if (mounted) validateAndRedirect();
    }, 4 * 60 * 1000);

    return () => {
      mounted = false;
      subscription.unsubscribe();
      clearInterval(interval);
    };
  }, [navigate, requireAuth]);

  return { isChecking };
}