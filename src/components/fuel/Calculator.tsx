import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const NETWORKS = [
  { id: "gazprom", name: "Газпромнефть", logo: "🟦", retail: 76, discount: 18, color: "hsl(158,70%,46%)" },
  { id: "rosneft", name: "Роснефть",     logo: "🟨", retail: 75, discount: 16, color: "hsl(170,65%,44%)" },
];

const VOLUME_PRESETS = [500, 1000, 2000, 5000, 10000];

export default function Calculator() {
  const { ref, inView } = useInView();
  const [volume, setVolume] = useState(1000);
  const [networkId, setNetworkId] = useState("gazprom");

  const net = NETWORKS.find((n) => n.id === networkId)!;
  const ourPrice = Math.round(net.retail * (1 - net.discount / 100));
  const savingPerLiter = net.retail - ourPrice;
  const savingMonth = volume * savingPerLiter;
  const savingYear = savingMonth * 12;
  const totalRetail = volume * net.retail;
  const totalOur = volume * ourPrice;

  return (
    <section id="calculator" ref={ref} className="py-24 px-6 fuel-grid">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-14 opacity-0 ${inView ? "animate-fade-up" : ""}`}>
          <span className="amber-text text-xs font-bold uppercase tracking-widest">Калькулятор</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            СКОЛЬКО ВЫ СЭКОНОМИТЕ
          </h2>
          <p className="text-[hsl(155,10%,52%)] mt-3 text-sm">Введите ваш объём дизеля в месяц — считаем мгновенно</p>
        </div>

        <div className={`glass-dark rounded-2xl overflow-hidden opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
          <div className="flex border-b border-[hsl(160,8%,13%)]">
            {NETWORKS.map((n) => (
              <button
                key={n.id}
                onClick={() => setNetworkId(n.id)}
                className={`flex-1 flex items-center justify-center gap-2.5 py-4 text-sm font-bold transition-all duration-200 ${
                  networkId === n.id ? "text-[hsl(160,12%,5%)]" : "text-[hsl(155,10%,50%)] hover:text-white"
                }`}
                style={networkId === n.id ? { background: n.color } : {}}
              >
                <span className="text-lg">{n.logo}</span>
                {n.name}
              </button>
            ))}
          </div>

          <div className="p-7 md:p-10">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-white">Объём дизеля в месяц</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number" min={100} max={100000} step={100} value={volume}
                    onChange={(e) => setVolume(Math.max(100, Number(e.target.value)))}
                    className="w-28 bg-[hsl(160,10%,6%)] border border-[hsl(160,8%,15%)] rounded-xl px-3 py-1.5 text-sm text-white text-right font-bold focus:outline-none focus:border-[hsl(158,70%,46%)] transition-colors"
                  />
                  <span className="text-sm text-[hsl(155,10%,50%)]">литров</span>
                </div>
              </div>

              <input
                type="range" min={100} max={20000} step={100} value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${net.color} 0%, ${net.color} ${(volume / 20000) * 100}%, hsl(160,8%,14%) ${(volume / 20000) * 100}%, hsl(160,8%,14%) 100%)`,
                }}
              />

              <div className="flex flex-wrap gap-2 mt-4">
                {VOLUME_PRESETS.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVolume(v)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      volume === v ? "text-[hsl(160,12%,5%)] border-transparent" : "border-[hsl(160,8%,17%)] text-[hsl(155,10%,50%)] hover:border-[hsl(158,70%,46%)/40]"
                    }`}
                    style={volume === v ? { background: net.color } : {}}
                  >
                    {v.toLocaleString("ru")} л
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Цена на АЗС",     value: `${net.retail} ₽/л`,                     sub: "без скидки",              muted: true },
                { label: "Ваша цена",        value: `${ourPrice} ₽/л`,                       sub: `скидка ${net.discount}%`, muted: false },
                { label: "Экономия в месяц", value: `${savingMonth.toLocaleString("ru")} ₽`, sub: `${savingPerLiter} ₽/л`,   muted: false },
                { label: "Экономия в год",   value: `${savingYear.toLocaleString("ru")} ₽`,  sub: "при том же объёме",       muted: false },
              ].map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl p-4 text-center"
                  style={r.muted
                    ? { background: "hsl(160,10%,6%)" }
                    : { background: `${net.color}10`, border: `1px solid ${net.color}28` }
                  }
                >
                  <div className="text-xs text-[hsl(155,10%,48%)] mb-1">{r.label}</div>
                  <div
                    className="text-xl font-black leading-tight"
                    style={{ fontFamily: "Oswald, sans-serif", color: r.muted ? "hsl(155,10%,36%)" : net.color }}
                  >
                    {r.value}
                  </div>
                  <div className="text-xs text-[hsl(155,10%,44%)] mt-1">{r.sub}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ background: `${net.color}08`, border: `1px solid ${net.color}22` }}
            >
              <div className="flex items-center gap-3">
                <Icon name="TrendingDown" size={24} style={{ color: net.color }} />
                <div>
                  <div className="text-xs text-[hsl(155,10%,48%)]">Итого вместо</div>
                  <div className="text-sm font-bold">
                    <span className="line-through text-[hsl(155,10%,38%)] mr-2">{totalRetail.toLocaleString("ru")} ₽/мес</span>
                    <span style={{ color: net.color }}>платите {totalOur.toLocaleString("ru")} ₽/мес</span>
                  </div>
                </div>
              </div>
              <a
                href="#contacts"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-[hsl(160,12%,5%)] hover:opacity-90 transition-opacity"
                style={{ background: net.color }}
              >
                <Icon name="Fuel" size={15} />
                Оформить скидку
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
