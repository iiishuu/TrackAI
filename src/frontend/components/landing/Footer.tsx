"use client";

import Link from "next/link";
import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { GradientText } from "@/frontend/components/animations/GradientText";

export function Footer() {
  const { t } = useDictionary();

  return (
    <footer className="border-t border-border/50 px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <GradientText className="text-lg font-bold">
            {t.footer.tagline}
          </GradientText>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t.footer.description}
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.product}
          </h4>
          <ul className="space-y-3">
            {t.footer.productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.resources}
          </h4>
          <ul className="space-y-3">
            {t.footer.resourceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.legal}
          </h4>
          <ul className="space-y-3">
            {t.footer.legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-border/50 pt-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TrackAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
