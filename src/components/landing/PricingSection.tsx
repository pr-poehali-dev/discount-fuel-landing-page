import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView, AnimatedNumber } from "./hooks";

const PLANS = [
  {
    name: "Старт",
    icon: "Package",
    desc: "Небольшие грузы до 500 кг",
    price: "от 1 500 ₽",
    features: ["Газель / Фургон", "До 10 км в городе", "1 грузчик включён", "Страхование груза"],
    accent: false,
  },
  {
    name: "Бизнес",
    icon: "Truck",
    desc: "Переезды и крупные грузы",
    price: "от 4 500 ₽",
    features: ["Тент 5 тонн", "Межгород включён", "2 грузчика включены", "GPS-трекинг", "Приоритет"],
    accent: true,
  },
  {
    name: "Экспресс",
    icon: "Zap",
    desc: "Срочная доставка за 2 часа",
    price: "от 2 800 ₽",
    features: ["Любой тоннаж", "Выезд за 30 минут", "Круглосуточно", "Страхование + СМС"],
    accent: false,
  },
];

export default function PricingSection() {
  const [volume, setVolume] = useState(5);
  const [distance, setDistance] = useState(50);
  const [loaders, setLoaders] = useState(1);
  const [express, setExpress] = useState(false);

  const calcSection = useInView(0.1);
  const plansSection = useInView(0.1);

  const basePrice = volume * 180 + distance * 22;
  const loaderCost = (loaders - 1) * 1200;
  const expressMult = express ? 1.4 : 1;
  const discount = volume > 10 ? 0.1 : volume > 5 ? 0.05 : 0;
  const subtotal = (basePrice + loaderCost) * expressMult;
  const finalPrice = Math.round(subtotal * (1 - discount));
  const savedAmount = discount > 0 ? Math.round(subtotal * discount) : 0;

  return (
    <>
      {/* CALCULATOR */}
      <section id="calc" ref={calcSection.ref} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 opacity-0 ${calcSection.inView ? "animate-fade-in-up" : ""}`}>
            <span className="text-[hsl(195,100%,50%)] text-sm font-semibold uppercase tracking-widest">Калькулятор</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              РАССЧИТАЙТЕ ЦЕНУ
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Двигайте ползунки — стоимость обновляется в реальном времени
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-6 opacity-0 delay-200 ${calcSection.inView ? "animate-fade-in-up" : ""}`}>
            {/* Controls */}
            <div className="glass-card rounded-2xl p-8 space-y-8">
              {/* Volume */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <Icon name="Box" size={16} />
                    Объём груза
                  </label>
                  <span className="neon-text font-bold text-lg">{volume} м³</span>
                </div>
                <input
                  type="range"
                  min={1} max={30} step={1}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: "hsl(195,100%,50%)" }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 м³</span><span>30 м³</span>
                </div>
              </div>

              {/* Distance */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    Расстояние
                  </label>
                  <span className="neon-text font-bold text-lg">{distance} км</span>
                </div>
                <input
                  type="range"
                  min={5} max={500} step={5}
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: "hsl(195,100%,50%)" }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5 км</span><span>500 км</span>
                </div>
              </div>

              {/* Loaders */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <Icon name="Users" size={16} />
                    Грузчики
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setLoaders(Math.max(1, loaders - 1))}
                      className="w-8 h-8 rounded-lg border border-[hsl(195,100%,50%)/40] text-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,50%)/10] transition-colors flex items-center justify-center font-bold"
                    >−</button>
                    <span className="neon-text font-bold text-lg w-4 text-center">{loaders}</span>
                    <button
                      onClick={() => setLoaders(Math.min(4, loaders + 1))}
                      className="w-8 h-8 rounded-lg border border-[hsl(195,100%,50%)/40] text-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,50%)/10] transition-colors flex items-center justify-center font-bold"
                    >+</button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">1 грузчик включён в базовую стоимость</p>
              </div>

              {/* Express */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-[hsl(195,100%,50%)/20] bg-[hsl(195,100%,50%)/5]">
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-[hsl(195,100%,50%)]" />
                    Экспресс-доставка
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Выезд за 30 минут, +40% к стоимости</div>
                </div>
                <button
                  onClick={() => setExpress(!express)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${express ? "bg-[hsl(195,100%,50%)]" : "bg-[hsl(220,15%,25%)]"}`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${express ? "translate-x-7" : "translate-x-1"}`}
                  />
                </button>
              </div>
            </div>

            {/* Result */}
            <div className="glass-card neon-border rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-6">Итоговая стоимость</div>

                <div className="text-6xl md:text-7xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  <span className="gradient-text">
                    <AnimatedNumber value={finalPrice} />
                  </span>
                  <span className="text-3xl text-muted-foreground ml-2">₽</span>
                </div>

                {savedAmount > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-[hsl(165,80%,45%)/15] text-[hsl(165,80%,45%)] font-semibold">
                      Скидка {Math.round(discount * 100)}% — экономия {savedAmount.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                )}

                <div className="space-y-3 mt-6 pt-6 border-t border-[hsl(220,15%,20%)]">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Базовая стоимость</span>
                    <span>{basePrice.toLocaleString("ru-RU")} ₽</span>
                  </div>
                  {loaderCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Доп. грузчики ({loaders - 1})</span>
                      <span>+{loaderCost.toLocaleString("ru-RU")} ₽</span>
                    </div>
                  )}
                  {express && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Экспресс (+40%)</span>
                      <span className="text-[hsl(195,100%,50%)]">+{Math.round((basePrice + loaderCost) * 0.4).toLocaleString("ru-RU")} ₽</span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Скидка за объём</span>
                      <span className="text-[hsl(165,80%,45%)]">−{savedAmount.toLocaleString("ru-RU")} ₽</span>
                    </div>
                  )}
                </div>

                {volume <= 5 && (
                  <div className="mt-4 p-3 rounded-lg bg-[hsl(195,100%,50%)/8] border border-[hsl(195,100%,50%)/20] text-xs text-[hsl(195,100%,50%)]">
                    💡 При объёме от 5 м³ — скидка 5%, от 10 м³ — скидка 10%
                  </div>
                )}
              </div>

              <a
                href="#contacts"
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-lg text-[hsl(220,20%,7%)] bg-[hsl(195,100%,50%)] hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                <Icon name="Send" size={20} />
                Оформить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE PLANS */}
      <section id="price" ref={plansSection.ref} className="py-24 px-6 grid-bg">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 opacity-0 ${plansSection.inView ? "animate-fade-in-up" : ""}`}>
            <span className="text-[hsl(195,100%,50%)] text-sm font-semibold uppercase tracking-widest">Тарифы</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              ВЫБЕРИТЕ ФОРМАТ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`opacity-0 delay-${(i + 1) * 200} ${plansSection.inView ? "animate-fade-in-up" : ""} relative rounded-2xl p-8 flex flex-col ${plan.accent ? "border-2 border-[hsl(195,100%,50%)] neon-glow bg-[hsl(220,18%,12%)]" : "glass-card"}`}
              >
                {plan.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-[hsl(220,20%,7%)] bg-[hsl(195,100%,50%)]">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.accent ? "bg-[hsl(195,100%,50%)/20] text-[hsl(195,100%,50%)]" : "bg-[hsl(220,15%,18%)] text-muted-foreground"}`}>
                  <Icon name={plan.icon} size={24} />
                </div>
                <h3 className="text-xl font-black mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <div className={`text-3xl font-black mb-6 ${plan.accent ? "neon-text" : ""}`} style={{ fontFamily: "Oswald, sans-serif" }}>
                  {plan.price}
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Icon name="Check" size={16} className={plan.accent ? "text-[hsl(195,100%,50%)]" : "text-[hsl(165,80%,45%)]"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className={`mt-8 flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${plan.accent ? "bg-[hsl(195,100%,50%)] text-[hsl(220,20%,7%)] hover:opacity-90" : "border border-[hsl(220,15%,25%)] hover:border-[hsl(195,100%,50%)/50] hover:text-[hsl(195,100%,50%)]"}`}
                >
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
