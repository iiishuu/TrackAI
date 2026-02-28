export function Footer() {
  return (
    <footer className="border-t px-4 py-6">
      <div className="mx-auto flex max-w-4xl items-center justify-between text-sm text-muted-foreground">
        <p>TrackAI &mdash; AI Visibility Tracker</p>
        <p>&copy; {new Date().getFullYear()} TrackAI</p>
      </div>
    </footer>
  );
}
