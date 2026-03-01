import { getServerDictionary } from "@/shared/i18n/server";

export async function HowItWorks() {
  const t = await getServerDictionary();

  return (
    <section className="bg-muted/50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
