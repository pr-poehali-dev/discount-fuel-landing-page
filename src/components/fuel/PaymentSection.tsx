import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const METHODS = [
  { icon: "Banknote",   title: "Наличные",       desc: "Оплата на кассе. Сдача всегда есть." },
  { icon: "CreditCard", title: "Банковская карта", desc: "Visa, Mastercard, МИР — терминал на каждой заправке." },
  { icon: "Smartphone", title: "СБП / QR-код",    desc: "Телефон вместо карты — быстро и удобно." },
  { icon: "Building2",  title: "Безнал для ИП",   desc: "Счёт-фактура и УПД по запросу." },
];

const STEPS = [
  { n: "01", icon: "MapPin",      title: "Приезжайте",        desc: "Выберите ближайшую заправку из нашей сети — адреса в разделе Контакты." },
  { n: "02", icon: "Fuel",        title: "Выберите топливо",   desc: "Дизель Евро-5, АИ-92 или АИ-95 — всегда в наличии." },
  { n: "03", icon: "CreditCard",  title: "Оплатите",           desc: "Любым удобным способом: карта, наличные, СБП." },
  { n: "04", icon: "FileText",    title: "Получите чек",       desc: "Бумажный или электронный — на выбор." },
];

export default function PaymentSection() {
  const { ref, inView } = useInView();

  return (
    <section id="payment" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="text-[hsl(38,95%,52%)] text-xs font-bold uppercase tracking-widest">Оплата</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            КАК ЗАПРАВИТЬСЯ
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
            Всё просто — приезжаете, заправляетесь, платите и едете дальше
          </p>
        </div>

        {/* Steps */}
        <div className={`grid md:grid-cols-4 gap-5 mb-16 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%-1rem)] w-full h-px border-t border-dashed border-[hsl(38,95%,52%)/25] z-0" />
              )}
              <div className="glass-dark rounded-2xl p-6 relative z-10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl font-black amber-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.n}</div>
                  <div className="w-8 h-8 rounded-lg bg-[hsl(38,95%,52%)/12] flex items-center justify-center">
                    <Icon name={s.icon} size={15} className="amber-text" />
                  </div>
                </div>
                <div className="font-bold text-sm mb-2">{s.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className={`opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
          <h3 className="text-2xl font-black mb-6 text-center" style={{ fontFamily: "Oswald, sans-serif" }}>
            СПОСОБЫ ОПЛАТЫ
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {METHODS.map((m) => (
              <div key={m.title} className="glass-dark rounded-xl p-5 flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(38,95%,52%)/12] flex items-center justify-center">
                  <Icon name={m.icon} size={20} className="amber-text" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">{m.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info strips */}
        <div className={`mt-8 grid sm:grid-cols-3 gap-4 opacity-0 delay-500 ${inView ? "animate-fade-up" : ""}`}>
          {[
            { icon: "Clock",   title: "Режим работы",    value: "24 часа, без выходных" },
            { icon: "Zap",     title: "Скорость заправки", value: "Без очередей" },
            { icon: "Shield",  title: "Качество топлива",  value: "Сертифицировано, Евро-5" },
          ].map((info) => (
            <div key={info.title} className="diagonal-stripe glass-dark rounded-xl px-6 py-5 flex items-center gap-4">
              <Icon name={info.icon} size={24} className="amber-text flex-shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">{info.title}</div>
                <div className="font-bold text-sm mt-0.5">{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
