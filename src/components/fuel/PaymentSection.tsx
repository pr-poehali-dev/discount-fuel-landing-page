import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const METHODS = [
  { icon: "Banknote",    title: "Наличные",         desc: "Оплата курьеру при получении. Сдача всегда есть." },
  { icon: "CreditCard",  title: "Карта онлайн",      desc: "Visa, Mastercard, МИР — через безопасный эквайринг." },
  { icon: "Smartphone",  title: "СБП / QR-код",      desc: "Оплата через приложение банка за секунды." },
  { icon: "Building2",   title: "Безнал для ИП",     desc: "Счёт-фактура и УПД для предпринимателей." },
];

const STEPS = [
  { n: "01", title: "Оставьте заявку",     desc: "Укажите тип топлива, объём и адрес доставки." },
  { n: "02", title: "Подтверждение",        desc: "Менеджер перезвонит в течение 15 минут, уточнит детали." },
  { n: "03", title: "Доставка",            desc: "Привезём в согласованное время. Сливаем на месте." },
  { n: "04", title: "Оплата и документы",  desc: "Оплачиваете удобным способом, получаете чек." },
];

export default function PaymentSection() {
  const { ref, inView } = useInView();

  return (
    <section id="payment" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="text-[hsl(38,95%,52%)] text-xs font-bold uppercase tracking-widest">Оплата и доставка</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            КАК ЭТО РАБОТАЕТ
          </h2>
        </div>

        {/* Steps */}
        <div className={`grid md:grid-cols-4 gap-5 mb-16 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%-1rem)] w-full h-px border-t border-dashed border-[hsl(38,95%,52%)/25] z-0" />
              )}
              <div className="glass-dark rounded-2xl p-6 relative z-10 h-full">
                <div
                  className="text-3xl font-black mb-3 amber-text"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {s.n}
                </div>
                <div className="font-bold text-sm mb-2">{s.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className={`opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
          <h3
            className="text-2xl font-black mb-6 text-center"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
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

        {/* Delivery info */}
        <div className={`mt-8 grid sm:grid-cols-3 gap-4 opacity-0 delay-500 ${inView ? "animate-fade-up" : ""}`}>
          {[
            { icon: "Clock",    title: "Время доставки", value: "от 1 часа" },
            { icon: "MapPin",   title: "Зона доставки",   value: "Весь город и пригород" },
            { icon: "Package",  title: "Минимальный заказ", value: "50 литров" },
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
