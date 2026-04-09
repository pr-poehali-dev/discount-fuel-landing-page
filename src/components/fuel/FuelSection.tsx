import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const FUELS = [
  {
    id: "diesel",
    name: "Дизельное топливо",
    short: "ДТ Евро-5",
    icon: "Fuel",
    price: 68,
    unit: "₽/л",
    color: "hsl(38,95%,52%)",
    colorDim: "hsl(38,80%,38%)",
    tag: "Популярное",
    desc: "Летнее и зимнее дизельное топливо стандарта Евро-5. Подходит для легковых и грузовых автомобилей, сельхозтехники, генераторов.",
    features: [
      "Стандарт Евро-5",
      "Летнее / зимнее",
      "Паспорт качества",
      "Для любой техники",
    ],
    minOrder: "",
  },
  {
    id: "ai92",
    name: "Бензин АИ-92",
    short: "АИ-92",
    icon: "Zap",
    price: 54,
    unit: "₽/л",
    color: "hsl(10,90%,56%)",
    colorDim: "hsl(10,75%,40%)",
    tag: null,
    desc: "Бензин АИ-92 для большинства легковых автомобилей. Оптимальное соотношение цены и качества для городских поездок.",
    features: [
      "Октановое число 92",
      "Сертифицированное качество",
      "Паспорт качества",
      "Для легковых авто",
    ],
    minOrder: "",
  },
  {
    id: "ai95",
    name: "Бензин АИ-95",
    short: "АИ-95",
    icon: "Flame",
    price: 59,
    unit: "₽/л",
    color: "hsl(200,85%,52%)",
    colorDim: "hsl(200,70%,38%)",
    tag: "Премиум",
    desc: "Высокооктановый бензин АИ-95 для современных двигателей. Мягкая работа мотора, экономия топлива на длинных маршрутах.",
    features: [
      "Октановое число 95",
      "Для турбодвигателей",
      "Паспорт качества",
      "Улучшенная динамика",
    ],
    minOrder: "",
  },
];

export default function FuelSection() {
  const { ref, inView } = useInView();

  return (
    <section id="fuel" ref={ref} className="py-24 px-6 fuel-grid">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="text-[hsl(38,95%,52%)] text-xs font-bold uppercase tracking-widest">Ассортимент</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            ВИДЫ ТОПЛИВА И ЦЕНЫ
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Продаём только сертифицированное топливо с паспортом качества
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FUELS.map((fuel, i) => (
            <div
              key={fuel.id}
              className={`relative glass-dark rounded-2xl overflow-hidden flex flex-col opacity-0 delay-${(i + 1) * 200} ${inView ? "animate-fade-up" : ""}`}
              style={{ borderColor: `${fuel.color}22` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${fuel.color}, ${fuel.colorDim})` }} />

              {fuel.tag && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-[hsl(20,10%,5%)]"
                  style={{ background: fuel.color }}
                >
                  {fuel.tag}
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${fuel.color}18` }}
                  >
                    <Icon name={fuel.icon} size={22} style={{ color: fuel.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">{fuel.short}</div>
                    <div className="font-bold text-sm leading-tight">{fuel.name}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <span
                    className="text-5xl font-black"
                    style={{ fontFamily: "Oswald, sans-serif", color: fuel.color }}
                  >
                    {fuel.price}
                  </span>
                  <span className="text-lg text-muted-foreground ml-1">{fuel.unit}</span>
                </div>

                {/* Desc */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{fuel.desc}</p>

                {/* Features */}
                <ul className="space-y-2 flex-1">
                  {fuel.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Icon name="Check" size={14} style={{ color: fuel.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacts"
                  className="mt-7 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 text-[hsl(20,10%,5%)]"
                  style={{ background: fuel.color }}
                >
                  <Icon name="MapPin" size={15} />
                  Найти заправку
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className={`mt-8 flex items-start gap-3 p-4 rounded-xl border border-[hsl(38,95%,52%)/20] bg-[hsl(38,95%,52%)/5] opacity-0 delay-700 ${inView ? "animate-fade-up" : ""}`}>
          <Icon name="Info" size={16} className="amber-text mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground">
            Цены актуальны на дату посещения сайта. Уточняйте актуальные цены у операторов на заправке или по телефону.
          </p>
        </div>
      </div>
    </section>
  );
}