import Link from "next/link";

export function Navbar() {
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
            Scan
          </Link>
          <Link
            href="/history"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            History
          </Link>
        </div>
      </div>
    </nav>
  );
}
