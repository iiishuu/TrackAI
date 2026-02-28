import Link from "next/link";
import { getServerDictionary } from "@/shared/i18n/server";
import { LocaleSwitcher } from "./LocaleSwitcher";

export async function Navbar() {
  const t = await getServerDictionary();

  return (
    <nav className="border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold">
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
