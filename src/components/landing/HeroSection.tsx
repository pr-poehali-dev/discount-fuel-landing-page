import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

export default function HeroSection() {
  const heroSection = useInView(0.1);

  return (
    <section
      id="hero"
      ref={heroSection.ref}
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/5a0af35d-d602-4a78-9a72-8fd29f8f6e17/files/14842cb1-8e08-4c36-8ec0-87931fd59488.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />

      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[hsl(195,100%,50%)] opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[hsl(165,80%,45%)] opacity-5 blur-3xl animate-float delay-500" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(195,100%,50%)/30] text-[hsl(195,100%,50%)] text-sm font-medium mb-8 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
        >
          <span className="w-2 h-2 rounded-full bg-[hsl(195,100%,50%)] animate-pulse" />
          Работаем 24/7 по всей России
        </div>

        <h1
          className={`text-5xl md:text-8xl font-black leading-none mb-6 opacity-0 delay-200 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
          style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "-0.02em" }}
        >
          ПЕРЕВОЗКИ<br />
          <span className="gradient-text">НА СКОРОСТИ</span><br />
          БИЗНЕСА
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 delay-400 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
        >
          Рассчитайте точную стоимость за 30 секунд. Профессиональные грузчики, страхование груза, GPS-трекинг.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 delay-600 ${heroSection.inView ? "animate-fade-in-up" : ""}`}>
          <a
            href="#calc"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-[hsl(220,20%,7%)] bg-[hsl(195,100%,50%)] hover:opacity-90 transition-all duration-200 animate-pulse-glow"
          >
            <Icon name="Calculator" size={20} />
            Рассчитать стоимость
          </a>
          <a
            href="#contacts"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border border-[hsl(195,100%,50%)/40] text-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,50%)/10] transition-all duration-200"
          >
            <Icon name="Phone" size={20} />
            Позвонить нам
          </a>
        </div>

        <div className={`mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto opacity-0 delay-700 ${heroSection.inView ? "animate-fade-in-up" : ""}`}>
          {[
            { num: "12+", label: "лет на рынке" },
            { num: "8 400", label: "заказов в год" },
            { num: "99%", label: "довольных клиентов" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-4xl font-black neon-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.num}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs">Листайте вниз</span>
        <Icon name="ChevronDown" size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
