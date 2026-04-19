import { useInView } from "./hooks";

const REVIEWS = [
  {
    name: "Виктор С.",
    city: "Москва",
    badge: "Газпромнефть",
    color: "hsl(210,90%,56%)",
    text: "Заправляю грузовик на Газпромнефти по их карте уже полгода. Экономия реальная — примерно 12 рублей с литра. За месяц набегает существенная сумма.",
    rating: 5,
    date: "5 апреля 2026",
  },
  {
    name: "Андрей М.",
    city: "Красногорск",
    badge: "Роснефть",
    color: "hsl(200,85%,52%)",
    text: "Оформил карту для ИП на Роснефть. Скидка 16%, документы пришли быстро. Заправляю технику на стройке — за квартал сэкономил больше 40 000 ₽.",
    rating: 5,
    date: "28 марта 2026",
  },
  {
    name: "Игорь Т.",
    city: "Балашиха",
    badge: "Газпромнефть",
    color: "hsl(210,90%,56%)",
    text: "Трактор и комбайн заправляю дизелем — скидка 17%. Оформили быстро, менеджер всё объяснил. Качество топлива то же, что на обычной заправке.",
    rating: 5,
    date: "20 марта 2026",
  },
  {
    name: "Наталья П.",
    city: "Подольск",
    badge: "Обе сети",
    color: "hsl(210,90%,56%)",
    text: "У нас небольшой автопарк — оформили карты на Газпромнефть и Роснефть сразу. Удобно: водители заправляются где ближе, скидка везде.",
    rating: 5,
    date: "15 марта 2026",
  },
  {
    name: "Светлана В.",
    city: "Химки",
    badge: "Роснефть",
    color: "hsl(200,85%,52%)",
    text: "Сначала сомневалась, думала подвох. Но всё честно — заправляешься на обычной Роснефти, просто платишь по своей карте и цена ниже.",
    rating: 5,
    date: "10 марта 2026",
  },
  {
    name: "Роман К.",
    city: "Одинцово",
    badge: "Газпромнефть",
    color: "hsl(210,90%,56%)",
    text: "Долго искал, как сэкономить на дизеле для фуры. Здесь нашёл — скидка 18%, карта работает на всех АЗС сети. Однозначно рекомендую дальнобойщикам.",
    rating: 5,
    date: "3 марта 2026",
  },
];

export default function ReviewsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="reviews" ref={ref} className="py-24 px-6 fuel-grid">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="amber-text text-xs font-bold uppercase tracking-widest">Отзывы</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            ЧТО ГОВОРЯТ КЛИЕНТЫ
          </h2>
          <p className="text-[hsl(215,20%,55%)] mt-3 text-sm">Более 5 000 клиентов уже экономят на дизеле</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className={`glass-dark rounded-2xl p-6 flex flex-col opacity-0 delay-${Math.min((i + 1) * 100, 600)} ${inView ? "animate-fade-up" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="amber-text">★</span>
                  ))}
                </div>
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full font-semibold text-white"
                  style={{ background: r.color }}
                >
                  {r.badge}
                </span>
              </div>

              <p className="text-sm text-[hsl(210,30%,80%)] leading-relaxed flex-1">"{r.text}"</p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[hsl(222,30%,16%)]">
                <div>
                  <div className="font-semibold text-sm text-white">{r.name}</div>
                  <div className="text-xs text-[hsl(215,20%,50%)]">{r.city}</div>
                </div>
                <div className="text-xs text-[hsl(215,20%,45%)]">{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
