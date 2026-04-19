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

const BLUE = "hsl(210,90%,56%)";

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
      {/* Сине-чёрный оверлей — текст читается чётко */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,4%)] via-[hsl(222,47%,5%)/92] to-[hsl(222,47%,5%)/60]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,4%)] via-transparent to-[hsl(222,47%,4%)/40]" />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[hsl(210,90%,56%)] opacity-[0.08] blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[hsl(220,90%,40%)] opacity-[0.07] blur-3xl animate-float delay-400" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex-1 flex items-center">
        <div className="max-w-2xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(210,90%,56%)/35] text-[hsl(210,90%,70%)] text-xs font-semibold uppercase tracking-widest mb-6 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(210,90%,56%)] animate-pulse" />
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

          <p className={`text-base md:text-lg text-[hsl(215,30%,70%)] max-w-xl mb-10 opacity-0 delay-300 ${inView ? "animate-fade-up" : ""}`}>
            Заправляйтесь дизелем на официальных АЗС Газпромнефть и Роснефть — и платите меньше рыночной цены. Для физлиц и бизнеса.
          </p>

          <div className={`flex flex-wrap gap-4 opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
            <a
              href="#contacts"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white hover:opacity-90 transition-opacity animate-pulse-amber text-base"
              style={{ background: BLUE }}
            >
              <Icon name="Fuel" size={18} />
              Получить скидку
            </a>
            <a
              href="#fuel"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold border text-[hsl(210,90%,70%)] hover:bg-[hsl(210,90%,56%)/12] transition-all text-base"
              style={{ borderColor: "hsl(210,90%,56%,0.4)" }}
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
                <div className="text-xs text-[hsl(215,20%,55%)] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-[hsl(210,90%,56%)/15] bg-[hsl(222,47%,4%)/85] py-3 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="text-sm font-medium text-[hsl(215,20%,60%)] flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
