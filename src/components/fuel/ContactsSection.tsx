import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

export default function ContactsSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", phone: "", fuel: "Дизель", volume: "", comment: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section id="contacts" ref={ref} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
            <span className="text-[hsl(38,95%,52%)] text-xs font-bold uppercase tracking-widest">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              ОФОРМИТЬ ЗАКАЗ
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">Перезвоним за 15 минут и согласуем доставку</p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
            {/* Form */}
            <div>
              {sent ? (
                <div className="glass-dark amber-border rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(38,95%,52%)/15] flex items-center justify-center mb-5">
                    <Icon name="CheckCircle" size={32} className="amber-text" />
                  </div>
                  <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    Заявка принята!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Перезвоним в течение 15 минут и подтвердим доставку.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-7 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">Имя</label>
                      <input
                        type="text" required placeholder="Иван"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[hsl(20,8%,7%)] border border-[hsl(20,8%,18%)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(38,95%,52%)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">Телефон</label>
                      <input
                        type="tel" required placeholder="+7 (999) 000-00-00"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[hsl(20,8%,7%)] border border-[hsl(20,8%,18%)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(38,95%,52%)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">Топливо</label>
                      <select
                        value={form.fuel}
                        onChange={(e) => setForm({ ...form, fuel: e.target.value })}
                        className="w-full bg-[hsl(20,8%,7%)] border border-[hsl(20,8%,18%)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(38,95%,52%)] transition-colors"
                      >
                        <option>Дизель</option>
                        <option>АИ-92</option>
                        <option>АИ-95</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">Объём (литры)</label>
                      <input
                        type="number" placeholder="100" min={50}
                        value={form.volume}
                        onChange={(e) => setForm({ ...form, volume: e.target.value })}
                        className="w-full bg-[hsl(20,8%,7%)] border border-[hsl(20,8%,18%)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(38,95%,52%)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">Адрес доставки / комментарий</label>
                    <textarea
                      placeholder="ул. Примерная, д. 1 — частный дом, ворота синие"
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full bg-[hsl(20,8%,7%)] border border-[hsl(20,8%,18%)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(38,95%,52%)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-[hsl(20,10%,5%)] bg-[hsl(38,95%,52%)] hover:opacity-90 transition-opacity animate-pulse-amber flex items-center justify-center gap-2 text-base"
                  >
                    <Icon name="Fuel" size={18} />
                    Отправить заявку
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "Phone",   title: "+7 (800) 000-00-00", sub: "Звонок бесплатный, 24/7" },
                { icon: "MessageCircle", title: "WhatsApp / Telegram", sub: "Быстрый ответ в мессенджере" },
                { icon: "MapPin",  title: "Доставляем по городу", sub: "И в ближайший пригород" },
                { icon: "Clock",   title: "Работаем круглосуточно", sub: "Без выходных и праздников" },
              ].map((c) => (
                <div key={c.title} className="glass-dark rounded-xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(38,95%,52%)/12] flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="amber-text" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
              ))}

              <div className="glass-dark rounded-xl px-5 py-4 border border-[hsl(38,95%,52%)/20] bg-[hsl(38,95%,52%)/5] mt-auto">
                <div className="flex items-center gap-2 amber-text font-bold text-sm mb-1">
                  <Icon name="Gift" size={16} />
                  Скидка от объёма
                </div>
                <p className="text-xs text-muted-foreground">
                  От 500 литров — скидка 3%, от 1000 л — 5%, от 2000 л — 8%. Уточняйте у менеджера.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(20,8%,12%)] py-7 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
            ТОПЛИВО<span className="amber-text">ПРО</span>
          </span>
          <span>© 2026 — Доставка дизеля и бензина</span>
          <span>Работаем 24/7</span>
        </div>
      </footer>
    </>
  );
}
