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

const E = "hsl(158,70%,46%)";

export default function HeroSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/5a0af35d-d602-4a78-9a72-8fd29f8f6e17/files/aad243fb-a259-4cab-8dba-b9f2035113da.jpg)" }}
      />
      {/* Тёмно-зелёный оверлей */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(160,15%,4%) 0%, hsl(160,12%,5%,0.92) 55%, hsl(160,12%,5%,0.55) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(160,12%,4%) 0%, transparent 55%)" }} />

      {/* Орбы */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-[0.07] blur-3xl animate-float" style={{ background: E }} />
      <div className="absolute bottom-1/4 left-1/5 w-64 h-64 rounded-full opacity-[0.05] blur-3xl animate-float delay-400" style={{ background: "hsl(170,70%,40%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex-1 flex items-center">
        <div className="max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 opacity-0 ${inView ? "animate-fade-up" : ""}`}
            style={{ border: `1px solid ${E}35`, color: "hsl(158,70%,62%)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: E }} />
            Газпромнефть · Роснефть · Скидка до 18%
          </div>

          <h1
            className={`font-black leading-none mb-6 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}
            style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", letterSpacing: "-0.01em" }}
          >
            ДИЗЕЛЬ<br />
            <span className="gradient-amber amber-glow">СО СКИДКОЙ</span><br />
            <span className="text-white">ДО 18%</span>
          </h1>

          <p className={`text-base md:text-lg text-[hsl(155,12%,62%)] max-w-xl mb-10 opacity-0 delay-300 ${inView ? "animate-fade-up" : ""}`}>
            Заправляйтесь дизелем на официальных АЗС Газпромнефть и Роснефть — и платите меньше рыночной цены. Для физлиц и бизнеса.
          </p>

          <div className={`flex flex-wrap gap-4 opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
            <a
              href="#contacts"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[hsl(160,12%,5%)] hover:opacity-90 transition-opacity animate-pulse-amber text-base"
              style={{ background: E }}
            >
              <Icon name="Fuel" size={18} />
              Получить скидку
            </a>
            <a
              href="#fuel"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[hsl(158,70%,62%)] hover:bg-[hsl(158,70%,46%)/10] transition-all text-base"
              style={{ border: `1px solid ${E}40` }}
            >
              <Icon name="ChevronDown" size={18} />
              Как это работает
            </a>
          </div>

          <div className={`mt-14 flex flex-wrap gap-8 opacity-0 delay-600 ${inView ? "animate-fade-up" : ""}`}>
            {[
              { n: "18%",    label: "экономия" },
              { n: "5 000+", label: "клиентов" },
              { n: "2",      label: "сети АЗС" },
              { n: "8 лет",  label: "на рынке" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black amber-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.n}</div>
                <div className="text-xs text-[hsl(155,10%,50%)] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[hsl(158,70%,46%)/12] bg-[hsl(160,12%,4%)/85] py-3 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="text-sm font-medium text-[hsl(155,10%,52%)] flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
