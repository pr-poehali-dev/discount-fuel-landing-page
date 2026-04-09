import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const STATIONS = [
  { address: "ул. Примерная, 12", hours: "Круглосуточно", fuels: ["Дизель", "АИ-92", "АИ-95"] },
  { address: "пр. Центральный, 45", hours: "Круглосуточно", fuels: ["Дизель", "АИ-92", "АИ-95"] },
  { address: "ш. Московское, 8 км", hours: "06:00 — 24:00", fuels: ["Дизель", "АИ-95"] },
];

const FUEL_COLOR: Record<string, string> = {
  "Дизель": "hsl(38,95%,52%)",
  "АИ-92": "hsl(10,90%,56%)",
  "АИ-95": "hsl(200,85%,52%)",
};

export default function ContactsSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <section id="contacts" ref={ref} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
            <span className="text-[hsl(38,95%,52%)] text-xs font-bold uppercase tracking-widest">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              НАШИ ЗАПРАВКИ
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">Выберите ближайшую станцию и приезжайте</p>
          </div>

          {/* Stations */}
          <div className={`grid md:grid-cols-3 gap-5 mb-10 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
            {STATIONS.map((s, i) => (
              <div key={i} className="glass-dark rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(38,95%,52%)/12] flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="amber-text" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">{s.address}</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} />
                    {s.hours}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[hsl(20,8%,16%)]">
                  {s.fuels.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-0.5 rounded-full font-semibold text-[hsl(20,10%,5%)]"
                      style={{ background: FUEL_COLOR[f] }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className={`grid md:grid-cols-2 gap-5 opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
            <div className="flex flex-col gap-4">
              {[
                { icon: "Phone",         title: "+7 (800) 000-00-00", sub: "Звонок бесплатный, 24/7" },
                { icon: "MessageCircle", title: "WhatsApp / Telegram",  sub: "Быстрый ответ в мессенджере" },
                { icon: "Mail",          title: "info@toplivopro.ru",   sub: "Для корпоративных клиентов" },
              ].map((c) => (
                <div key={c.title} className="glass-dark rounded-xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(38,95%,52%)/12] flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="amber-text" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-dark rounded-2xl p-6 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-2 amber-text font-bold text-sm">
                <Icon name="Shield" size={16} />
                Гарантия качества
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Всё топливо сертифицировано и соответствует стандарту Евро-5. Паспорт качества доступен на каждой станции по запросу.
              </p>
              <div className="flex items-center gap-2 amber-text font-bold text-sm">
                <Icon name="Star" size={16} />
                Программа лояльности
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Накапливайте бонусы с каждой заправки и получайте скидки. Уточняйте у оператора на станции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(20,8%,12%)] py-7 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
            ТОПЛИВО<span className="amber-text">ПРО</span>
          </span>
          <span>© 2026 — Сеть заправочных станций</span>
          <span>Работаем 24/7</span>
        </div>
      </footer>
    </>
  );
}
