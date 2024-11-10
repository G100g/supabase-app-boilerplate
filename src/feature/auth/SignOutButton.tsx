import { Button } from "@/components/ui/button";
import { useSupabaseClient } from "@/hooks/supabase/useSupabaseSession";

export const SignOutButton = () => {
  const supabase = useSupabaseClient();

  return (
    <Button
      onClick={() => {
        supabase.auth.signOut();
      }}
    >
      Sign Out
    </Button>
  );
};
