import { createContext, useContext, useEffect, useState } from "react";

import { createClient, Session } from "@supabase/supabase-js";
const supabaseClient = createClient(
  "https://spzulzlygejtruehhqyg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwenVsemx5Z2VqdHJ1ZWhocXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNTc4MDIsImV4cCI6MjA0NjczMzgwMn0.E2yBbISGAO7yfBCjdNw2aq-TqJz1OCV8BtIEJOg67uI"
);

export const SupabaseClientProvider = createContext(supabaseClient);

export const useSupabaseClient = () => useContext(SupabaseClientProvider);

export const useSupabaseSession = () => {
  const supabase = useSupabaseClient();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return [session];
};
