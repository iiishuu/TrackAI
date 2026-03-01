import Link from "next/link";
import { getServerDictionary } from "@/shared/i18n/server";
import { LocaleSwitcher } from "./LocaleSwitcher";

export async function Navbar() {
  const t = await getServerDictionary();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 glass">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-gradient-primary">
          TrackAI
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/scan"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.scan}
          </Link>
          <Link
            href="/history"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.history}
          </Link>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
