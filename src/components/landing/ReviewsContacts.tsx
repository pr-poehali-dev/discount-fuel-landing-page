import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

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

export default function ReviewsContacts() {
  const reviewsSection = useInView(0.1);
  const contactsSection = useInView(0.1);

  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
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
    </>
  );
}
