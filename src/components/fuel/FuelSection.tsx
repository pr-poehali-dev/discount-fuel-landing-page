import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const STATIONS = [
  {
    id: "gazprom",
    name: "Газпромнефть",
    logo: "🟦",
    color: "hsl(158,70%,46%)",
    colorDim: "hsl(158,55%,32%)",
    tag: "Популярное",
    priceRetail: 76,
    priceOur: 62,
    saving: 18,
    desc: "Дизельное топливо Евро-5 на официальных АЗС Газпромнефть по всей России. Платите по нашей карте — получаете скидку от рыночной цены.",
    features: ["Евро-5, сертифицировано", "Тысячи АЗС по РФ", "Чек и документы", "Для физлиц и ИП / ООО"],
  },
  {
    id: "rosneft",
    name: "Роснефть",
    logo: "🟨",
    color: "hsl(170,65%,44%)",
    colorDim: "hsl(170,50%,30%)",
    tag: "Выгодно",
    priceRetail: 75,
    priceOur: 63,
    saving: 16,
    desc: "Дизельное топливо Евро-5 на АЗС Роснефть. Заправляйтесь в любом городе присутствия сети — скидка действует везде.",
    features: ["Евро-5, сертифицировано", "Широкая сеть АЗС", "Чек и документы", "Для физлиц и ИП / ООО"],
  },
];

export default function FuelSection() {
  const { ref, inView } = useInView();

  return (
    <section id="fuel" ref={ref} className="py-24 px-6 fuel-grid">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="amber-text text-xs font-bold uppercase tracking-widest">Топливо</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            ДИЗЕЛЬ СО СКИДКОЙ
          </h2>
          <p className="text-[hsl(155,10%,52%)] mt-3 max-w-lg mx-auto text-sm">
            Продаём дизельное топливо на официальных АЗС двух крупнейших сетей — дешевле рыночной цены
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {STATIONS.map((s, i) => (
            <div
              key={s.id}
              className={`relative glass-dark rounded-2xl overflow-hidden flex flex-col opacity-0 delay-${(i + 1) * 200} ${inView ? "animate-fade-up" : ""}`}
            >
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.colorDim})` }} />

              {s.tag && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-[hsl(160,12%,5%)]"
                  style={{ background: s.color }}
                >
                  {s.tag}
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{s.logo}</span>
                  <div>
                    <div className="text-xs text-[hsl(155,10%,50%)] font-medium">Дизель Евро-5</div>
                    <div className="font-bold text-lg leading-tight text-white">{s.name}</div>
                  </div>
                </div>

                <div className="flex items-end gap-4 mb-6 p-4 rounded-xl bg-[hsl(160,10%,6%)]">
                  <div>
                    <div className="text-xs text-[hsl(155,10%,45%)] mb-1">Цена на АЗС</div>
                    <div className="text-2xl font-black line-through text-[hsl(155,10%,40%)]" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {s.priceRetail} ₽/л
                    </div>
                  </div>
                  <Icon name="ArrowRight" size={18} className="text-[hsl(155,10%,38%)] mb-2" />
                  <div>
                    <div className="text-xs text-[hsl(155,10%,52%)] mb-1">Ваша цена</div>
                    <div className="text-4xl font-black" style={{ fontFamily: "Oswald, sans-serif", color: s.color }}>
                      {s.priceOur} ₽/л
                    </div>
                  </div>
                  <div
                    className="ml-auto mb-2 px-3 py-1.5 rounded-xl text-sm font-black text-[hsl(160,12%,5%)]"
                    style={{ background: s.color }}
                  >
                    −{s.saving}%
                  </div>
                </div>

                <p className="text-sm text-[hsl(155,10%,58%)] leading-relaxed mb-5">{s.desc}</p>

                <ul className="space-y-2 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[hsl(150,15%,80%)]">
                      <Icon name="Check" size={14} style={{ color: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacts"
                  className="mt-7 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 text-[hsl(160,12%,5%)] hover:opacity-90"
                  style={{ background: s.color }}
                >
                  <Icon name="Fuel" size={15} />
                  Получить скидку на {s.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 flex items-start gap-3 p-4 rounded-xl border border-[hsl(158,70%,46%)/18] bg-[hsl(158,70%,46%)/5] opacity-0 delay-500 ${inView ? "animate-fade-up" : ""}`}>
          <Icon name="Info" size={16} className="amber-text mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[hsl(155,10%,55%)]">
            Цены приведены для примера. Актуальная скидка уточняется при оформлении — зависит от объёма и региона. Чем больше объём, тем выгоднее.
          </p>
        </div>
      </div>
    </section>
  );
}
