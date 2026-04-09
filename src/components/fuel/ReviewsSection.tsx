import { useInView } from "./hooks";

const REVIEWS = [
  {
    name: "Виктор С.",
    city: "Москва",
    fuel: "Дизель",
    text: "Заказываю дизель для генератора на даче уже третий раз. Всегда привозят вовремя, качество проверял — всё отлично. Рекомендую.",
    rating: 5,
    date: "5 апреля 2026",
  },
  {
    name: "Наталья П.",
    city: "Подольск",
    fuel: "АИ-95",
    text: "Очень удобный сервис! Заказала 60 литров АИ-95 прямо домой. Приехали через 45 минут, курьер вежливый, чек выдали сразу.",
    rating: 5,
    date: "2 апреля 2026",
  },
  {
    name: "Андрей М.",
    city: "Красногорск",
    fuel: "АИ-92",
    text: "Хорошая цена на 92-й. Заказывал для стройки, привезли сразу 200 литров. Дали скидку без лишних разговоров. Буду постоянным клиентом.",
    rating: 5,
    date: "28 марта 2026",
  },
  {
    name: "Игорь Т.",
    city: "Балашиха",
    fuel: "Дизель",
    text: "Трактор заправлял дизелем — качество хорошее, техника не капризничает. Сервис оперативный, приедут даже в выходные.",
    rating: 5,
    date: "20 марта 2026",
  },
  {
    name: "Светлана В.",
    city: "Химки",
    fuel: "АИ-95",
    text: "Удобно, что можно оплатить картой онлайн до приезда. Доставили быстро, всё чётко. Сайт понятный, заказ оформила за 2 минуты.",
    rating: 5,
    date: "15 марта 2026",
  },
  {
    name: "Роман К.",
    city: "Одинцово",
    fuel: "Дизель",
    text: "Долго искал надёжного поставщика дизеля. Нашёл этих ребят — не разочаровался. Паспорт качества прилагается, цена честная.",
    rating: 5,
    date: "10 марта 2026",
  },
];

const FUEL_COLOR: Record<string, string> = {
  "Дизель": "hsl(38,95%,52%)",
  "АИ-92":  "hsl(10,90%,56%)",
  "АИ-95":  "hsl(200,85%,52%)",
};

export default function ReviewsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="reviews" ref={ref} className="py-24 px-6 fuel-grid">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="text-[hsl(38,95%,52%)] text-xs font-bold uppercase tracking-widest">Отзывы</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            ЧТО ГОВОРЯТ КЛИЕНТЫ
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Более 5 000 довольных покупателей по всему региону</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className={`glass-dark rounded-2xl p-6 flex flex-col opacity-0 delay-${Math.min((i + 1) * 100, 600)} ${inView ? "animate-fade-up" : ""}`}
            >
              {/* Stars + fuel badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="text-[hsl(38,95%,52%)]">★</span>
                  ))}
                </div>
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full font-semibold text-[hsl(20,10%,5%)]"
                  style={{ background: FUEL_COLOR[r.fuel] ?? "hsl(38,95%,52%)" }}
                >
                  {r.fuel}
                </span>
              </div>

              <p className="text-sm text-foreground leading-relaxed flex-1">"{r.text}"</p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[hsl(20,8%,16%)]">
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
  );
}
