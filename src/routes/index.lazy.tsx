import { Button } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSupabaseClient,
  useSupabaseSession,
} from "@/hooks/supabase/useSupabaseSession";
import { useContext } from "react";
import { SignOutButton } from "@/feature/auth/SignOutButton";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const supabase = useSupabaseClient();
  const [session] = useSupabaseSession();

  if (!session && supabase) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }
  return (
    <div className="p-2">
      <h3>Welcome home!</h3>

      <SignOutButton />

      {/* <Button asChild>
        <Link to="/signup">Sign Up</Link>
      </Button> */}
    </div>
  );
}
