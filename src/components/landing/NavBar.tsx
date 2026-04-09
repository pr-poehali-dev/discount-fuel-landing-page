import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Прайс", href: "#price" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function NavBar() {
  return (
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
  );
}
