"use client";

import { useLocale } from "@/frontend/hooks/useLocale";
import { Button } from "@/frontend/components/ui/button";

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === "en" ? "fr" : "en")}
      className="text-xs font-medium"
    >
      {locale === "en" ? "FR" : "EN"}
    </Button>
  );
}
