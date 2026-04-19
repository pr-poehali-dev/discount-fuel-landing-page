import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const TICKER_ITEMS = [
  "⛽ Дизель на Газпромнефть",
  "⛽ Дизель на Роснефть",
  "💰 Экономия до 18% на литре",
  "✅ Официальные АЗС",
  "📋 Чеки и документы",
  "🚛 Для юрлиц и физлиц",
  "⛽ Дизель на Газпромнефть",
  "⛽ Дизель на Роснефть",
  "💰 Экономия до 18% на литре",
  "✅ Официальные АЗС",
  "📋 Чеки и документы",
  "🚛 Для юрлиц и физлиц",
];

export default function HeroSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/5a0af35d-d602-4a78-9a72-8fd29f8f6e17/files/aad243fb-a259-4cab-8dba-b9f2035113da.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,10%,4%)/97] via-[hsl(20,10%,4%)/80] to-[hsl(20,10%,4%)/40]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,10%,4%)] via-transparent to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[hsl(38,95%,52%)] opacity-[0.06] blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-[hsl(10,90%,50%)] opacity-[0.05] blur-3xl animate-float delay-400" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex-1 flex items-center">
        <div className="max-w-2xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(38,95%,52%)/30] text-[hsl(38,95%,52%)] text-xs font-semibold uppercase tracking-widest mb-6 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,95%,52%)] animate-pulse" />
            Газпромнефть · Роснефть · Скидка до 18%
          </div>

          <h1
            className={`font-black leading-none mb-6 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}
            style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", letterSpacing: "-0.01em" }}
          >
            ДИЗЕЛЬ<br />
            <span className="gradient-amber amber-glow">СО СКИДКОЙ</span><br />
            <span className="text-[hsl(36,20%,92%)]">ДО 18%</span>
          </h1>

          <p className={`text-base md:text-lg text-muted-foreground max-w-xl mb-10 opacity-0 delay-300 ${inView ? "animate-fade-up" : ""}`}>
            Заправляйтесь дизелем на официальных АЗС Газпромнефть и Роснефть — и платите меньше рыночной цены. Для физлиц и бизнеса.
          </p>

          <div className={`flex flex-wrap gap-4 opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
            <a
              href="#contacts"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[hsl(20,10%,5%)] bg-[hsl(38,95%,52%)] hover:opacity-90 transition-opacity animate-pulse-amber text-base"
            >
              <Icon name="Fuel" size={18} />
              Получить скидку
            </a>
            <a
              href="#fuel"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border border-[hsl(38,95%,52%)/40] text-[hsl(38,95%,52%)] hover:bg-[hsl(38,95%,52%)/10] transition-all text-base"
            >
              <Icon name="ChevronDown" size={18} />
              Как это работает
            </a>
          </div>

          {/* Stats */}
          <div className={`mt-14 flex flex-wrap gap-8 opacity-0 delay-600 ${inView ? "animate-fade-up" : ""}`}>
            {[
              { n: "18%",    label: "экономия" },
              { n: "5 000+", label: "клиентов" },
              { n: "2",      label: "сети АЗС" },
              { n: "8 лет",  label: "на рынке" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black amber-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-[hsl(38,95%,52%)/15] bg-[hsl(20,10%,4%)/80] py-3 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="text-sm font-medium text-muted-foreground flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
