import Icon from "@/components/ui/icon";

const LINKS = [
  { label: "Главная",      href: "#hero" },
  { label: "Топливо",      href: "#fuel" },
  { label: "Калькулятор",  href: "#calculator" },
  { label: "Как работает", href: "#payment" },
  { label: "Отзывы",      href: "#reviews" },
  { label: "Контакты",    href: "#contacts" },
];

const BLUE = "hsl(210,90%,56%)";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-[hsl(210,90%,56%)/12]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
            ДИЗЕЛЬ<span className="amber-text">−18%</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[hsl(215,20%,55%)] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacts"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-opacity amber-btn-glow"
          style={{ background: BLUE }}
        >
          <Icon name="Fuel" size={14} />
          Получить скидку
        </a>
      </div>
    </nav>
  );
}
