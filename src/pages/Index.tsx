import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Прайс", href: "#price" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const REVIEWS = [
  {
    name: "Александр К.",
    city: "Москва",
    text: "Перевезли офис за один день. Всё аккуратно, без единой царапины. Приятно удивлён профессионализмом.",
    rating: 5,
    date: "15 марта 2026",
  },
  {
    name: "Марина В.",
    city: "Санкт-Петербург",
    text: "Заказывала переезд квартиры. Ребята работали быстро, цена совпала с калькулятором — без скрытых доплат.",
    rating: 5,
    date: "2 апреля 2026",
  },
  {
    name: "Дмитрий Л.",
    city: "Екатеринбург",
    text: "Регулярно пользуемся для доставки товаров. Надёжно, всегда в срок. Рекомендую партнёрам.",
    rating: 5,
    date: "7 апреля 2026",
  },
];

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

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const diff = value - display;
    if (Math.abs(diff) < 1) { setDisplay(value); return; }
    const timeout = setTimeout(() => setDisplay(Math.round(display + diff * 0.15)), 16);
    return () => clearTimeout(timeout);
  }, [value, display]);

  return <>{display.toLocaleString("ru-RU")}</>;
}

export default function Index() {
  const [volume, setVolume] = useState(5);
  const [distance, setDistance] = useState(50);
  const [loaders, setLoaders] = useState(1);
  const [express, setExpress] = useState(false);

  const heroSection = useInView(0.1);
  const calcSection = useInView(0.1);
  const plansSection = useInView(0.1);
  const reviewsSection = useInView(0.1);
  const contactsSection = useInView(0.1);

  const basePrice = volume * 180 + distance * 22;
  const loaderCost = (loaders - 1) * 1200;
  const expressMult = express ? 1.4 : 1;
  const discount = volume > 10 ? 0.1 : volume > 5 ? 0.05 : 0;
  const subtotal = (basePrice + loaderCost) * expressMult;
  const finalPrice = Math.round(subtotal * (1 - discount));
  const savedAmount = discount > 0 ? Math.round(subtotal * discount) : 0;

  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl" style={{ fontFamily: "Oswald, sans-serif" }}>
              ГРУЗ<span className="neon-text">ПРО</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-[hsl(195,100%,50%)] transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contacts"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[hsl(220,20%,7%)] bg-[hsl(195,100%,50%)] hover:opacity-90 transition-opacity"
          >
            <Icon name="Phone" size={15} />
            Заказать
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        ref={heroSection.ref}
        className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/5a0af35d-d602-4a78-9a72-8fd29f8f6e17/files/14842cb1-8e08-4c36-8ec0-87931fd59488.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />

        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[hsl(195,100%,50%)] opacity-5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[hsl(165,80%,45%)] opacity-5 blur-3xl animate-float delay-500" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(195,100%,50%)/30] text-[hsl(195,100%,50%)] text-sm font-medium mb-8 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(195,100%,50%)] animate-pulse" />
            Работаем 24/7 по всей России
          </div>

          <h1
            className={`text-5xl md:text-8xl font-black leading-none mb-6 opacity-0 delay-200 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "-0.02em" }}
          >
            ПЕРЕВОЗКИ<br />
            <span className="gradient-text">НА СКОРОСТИ</span><br />
            БИЗНЕСА
          </h1>

          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 delay-400 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
          >
            Рассчитайте точную стоимость за 30 секунд. Профессиональные грузчики, страхование груза, GPS-трекинг.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 delay-600 ${heroSection.inView ? "animate-fade-in-up" : ""}`}>
            <a
              href="#calc"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-[hsl(220,20%,7%)] bg-[hsl(195,100%,50%)] hover:opacity-90 transition-all duration-200 animate-pulse-glow"
            >
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </a>
            <a
              href="#contacts"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border border-[hsl(195,100%,50%)/40] text-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,50%)/10] transition-all duration-200"
            >
              <Icon name="Phone" size={20} />
              Позвонить нам
            </a>
          </div>

          <div className={`mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto opacity-0 delay-700 ${heroSection.inView ? "animate-fade-in-up" : ""}`}>
            {[
              { num: "12+", label: "лет на рынке" },
              { num: "8 400", label: "заказов в год" },
              { num: "99%", label: "довольных клиентов" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-4xl font-black neon-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.num}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs">Листайте вниз</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

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

      {/* REVIEWS */}
      <section id="reviews" ref={reviewsSection.ref} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 opacity-0 ${reviewsSection.inView ? "animate-fade-in-up" : ""}`}>
            <span className="text-[hsl(195,100%,50%)] text-sm font-semibold uppercase tracking-widest">Отзывы</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              ЧТО ГОВОРЯТ КЛИЕНТЫ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={r.name}
                className={`glass-card rounded-2xl p-6 opacity-0 delay-${(i + 1) * 200} ${reviewsSection.inView ? "animate-fade-in-up" : ""}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="text-[hsl(195,100%,50%)] text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.city}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" ref={contactsSection.ref} className="py-24 px-6 grid-bg">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 opacity-0 ${contactsSection.inView ? "animate-fade-in-up" : ""}`}>
            <span className="text-[hsl(195,100%,50%)] text-sm font-semibold uppercase tracking-widest">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              ОСТАВЬТЕ ЗАЯВКУ
            </h2>
            <p className="text-muted-foreground mt-3">Перезвоним в течение 15 минут</p>
          </div>

          <div className={`opacity-0 delay-200 ${contactsSection.inView ? "animate-fade-in-up" : ""}`}>
            {sent ? (
              <div className="glass-card neon-border rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(195,100%,50%)/15] flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-[hsl(195,100%,50%)]" />
                </div>
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>Заявка отправлена!</h3>
                <p className="text-muted-foreground">Наш менеджер свяжется с вами в ближайшие 15 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Александр"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,22%)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(195,100%,50%)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,22%)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(195,100%,50%)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2">Комментарий</label>
                  <textarea
                    placeholder="Опишите ваш груз или вопрос..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    rows={4}
                    className="w-full bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,22%)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(195,100%,50%)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg text-[hsl(220,20%,7%)] bg-[hsl(195,100%,50%)] hover:opacity-90 transition-opacity animate-pulse-glow flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { icon: "Phone", label: "+7 (800) 000-00-00", sub: "Бесплатно" },
                { icon: "Clock", label: "24/7", sub: "Режим работы" },
                { icon: "MapPin", label: "Вся Россия", sub: "Зона доставки" },
              ].map((c) => (
                <div key={c.label} className="glass-card rounded-xl p-4 text-center">
                  <Icon name={c.icon} size={20} className="text-[hsl(195,100%,50%)] mx-auto mb-2" />
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[hsl(220,15%,14%)] py-8 px-6 text-center text-sm text-muted-foreground">
        <span className="font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
          ГРУЗ<span className="neon-text">ПРО</span>
        </span>
        <span className="mx-3 opacity-30">|</span>
        © 2026 Все права защищены
      </footer>
    </div>
  );
}