import { getServerDictionary } from "@/shared/i18n/server";

export async function Footer() {
  const t = await getServerDictionary();

  return (
    <footer className="border-t px-4 py-6">
      <div className="mx-auto flex max-w-4xl items-center justify-between text-sm text-muted-foreground">
        <p>{t.footer.tagline}</p>
        <p>&copy; {new Date().getFullYear()} TrackAI</p>
      </div>
    </footer>
  );
}
