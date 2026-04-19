import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const METHODS = [
  { icon: "Banknote",   title: "Наличные",        desc: "Оплачиваете нам — заправляетесь по нашей карте." },
  { icon: "CreditCard", title: "Банковская карта",  desc: "Visa, Mastercard, МИР — переводом или терминалом." },
  { icon: "Smartphone", title: "СБП / QR-код",     desc: "Мгновенный перевод через приложение банка." },
  { icon: "Building2",  title: "Счёт для бизнеса", desc: "Выставляем счёт ИП и ООО. Закрывающие документы." },
];

const STEPS = [
  { n: "01", icon: "Phone",      title: "Оставьте заявку",         desc: "Позвоните или напишите нам — скажите нужный объём и сеть АЗС." },
  { n: "02", icon: "CreditCard", title: "Оплатите",                desc: "Переведите оплату удобным способом. Выставим счёт за секунду." },
  { n: "03", icon: "Fuel",       title: "Получите топливную карту", desc: "Пополняем карту на нужный объём — заправляетесь сами на любой АЗС сети." },
  { n: "04", icon: "FileText",   title: "Чек и документы",         desc: "Чек на кассе АЗС + закрывающие документы от нас по запросу." },
];

export default function PaymentSection() {
  const { ref, inView } = useInView();

  return (
    <section id="payment" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="amber-text text-xs font-bold uppercase tracking-widest">Схема работы</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            КАК ПОЛУЧИТЬ СКИДКУ
          </h2>
          <p className="text-[hsl(215,20%,55%)] mt-3 text-sm max-w-md mx-auto">
            Просто — платите нам меньше рыночной цены, заправляетесь сами на Газпромнефть или Роснефть
          </p>
        </div>

        <div className={`grid md:grid-cols-4 gap-5 mb-16 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%-1rem)] w-full h-px border-t border-dashed border-[hsl(210,90%,56%)/25] z-0" />
              )}
              <div className="glass-dark rounded-2xl p-6 relative z-10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl font-black amber-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.n}</div>
                  <div className="w-8 h-8 rounded-lg bg-[hsl(210,90%,56%)/12] flex items-center justify-center">
                    <Icon name={s.icon} size={15} className="amber-text" />
                  </div>
                </div>
                <div className="font-bold text-sm mb-2 text-white">{s.title}</div>
                <div className="text-xs text-[hsl(215,20%,55%)] leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`opacity-0 delay-400 ${inView ? "animate-fade-up" : ""}`}>
          <h3 className="text-2xl font-black mb-6 text-center text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            СПОСОБЫ ОПЛАТЫ
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {METHODS.map((m) => (
              <div key={m.title} className="glass-dark rounded-xl p-5 flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(210,90%,56%)/12] flex items-center justify-center">
                  <Icon name={m.icon} size={20} className="amber-text" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1 text-white">{m.title}</div>
                  <div className="text-xs text-[hsl(215,20%,55%)] leading-relaxed">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-8 grid sm:grid-cols-3 gap-4 opacity-0 delay-500 ${inView ? "animate-fade-up" : ""}`}>
          {[
            { icon: "Shield",       title: "Официальные АЗС", value: "Газпромнефть и Роснефть" },
            { icon: "TrendingDown", title: "Экономия",         value: "До 18% от рыночной цены" },
            { icon: "Zap",          title: "Оформление",       value: "За 15 минут" },
          ].map((info) => (
            <div key={info.title} className="diagonal-stripe glass-dark rounded-xl px-6 py-5 flex items-center gap-4">
              <Icon name={info.icon} size={24} className="amber-text flex-shrink-0" />
              <div>
                <div className="text-xs text-[hsl(215,20%,55%)]">{info.title}</div>
                <div className="font-bold text-sm mt-0.5 text-white">{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
