const STEPS = [
  {
    number: "1",
    title: "Enter Your Domain",
    description:
      "Type in your brand domain and we'll start the analysis across multiple AI search engines.",
  },
  {
    number: "2",
    title: "AI Analysis",
    description:
      "We query AI engines with strategic prompts related to your sector and analyze how they reference your brand.",
  },
  {
    number: "3",
    title: "Get Your Report",
    description:
      "Receive a detailed visibility score, metrics breakdown, and actionable recommendations to improve.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.number}
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
