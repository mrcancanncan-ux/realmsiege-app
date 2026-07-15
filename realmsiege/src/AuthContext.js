import { createContext, useContext, useEffect, useState } from 'react';
import { sb } from './supabase';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadProfile(u) {
    if (!u) { setProfile(null); return; }
    const { data } = await sb.from('profiles').select('*').eq('id', u.id).single();
    setProfile(data || null);
  }

  useEffect(() => {
    sb.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      loadProfile(session?.user ?? null).finally(() => setLoading(false));
    });
    const { data: { subscription } } = sb.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      loadProfile(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user, profile,
      isAdmin: profile?.is_admin === true,
      loading,
      signOut: () => sb.auth.signOut()
    }}>
      {children}
    </AuthContext.Provider>
  );
}
