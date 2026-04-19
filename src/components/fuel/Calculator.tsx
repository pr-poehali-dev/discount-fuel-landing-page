import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "./hooks";

const NETWORKS = [
  { id: "gazprom", name: "Газпромнефть", logo: "🟦", retail: 76, discount: 18, color: "hsl(210,90%,56%)" },
  { id: "rosneft", name: "Роснефть",     logo: "🟨", retail: 75, discount: 16, color: "hsl(200,85%,52%)" },
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
          <p className="text-[hsl(215,20%,55%)] mt-3 text-sm">Введите ваш объём дизеля в месяц — считаем мгновенно</p>
        </div>

        <div className={`glass-dark rounded-2xl overflow-hidden opacity-0 delay-200 ${inView ? "animate-fade-up" : ""}`}>
          {/* Network selector */}
          <div className="flex border-b border-[hsl(222,30%,14%)]">
            {NETWORKS.map((n) => (
              <button
                key={n.id}
                onClick={() => setNetworkId(n.id)}
                className={`flex-1 flex items-center justify-center gap-2.5 py-4 text-sm font-bold transition-all duration-200 ${
                  networkId === n.id
                    ? "text-white"
                    : "text-[hsl(215,20%,50%)] hover:text-white bg-transparent"
                }`}
                style={networkId === n.id ? { background: n.color } : {}}
              >
                <span className="text-lg">{n.logo}</span>
                {n.name}
              </button>
            ))}
          </div>

          <div className="p-7 md:p-10">
            {/* Volume input */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-white">Объём дизеля в месяц</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={100}
                    max={100000}
                    step={100}
                    value={volume}
                    onChange={(e) => setVolume(Math.max(100, Number(e.target.value)))}
                    className="w-28 bg-[hsl(222,40%,6%)] border border-[hsl(222,30%,16%)] rounded-xl px-3 py-1.5 text-sm text-white text-right font-bold focus:outline-none focus:border-[hsl(210,90%,56%)] transition-colors"
                  />
                  <span className="text-sm text-[hsl(215,20%,50%)]">литров</span>
                </div>
              </div>

              <input
                type="range"
                min={100}
                max={20000}
                step={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${net.color} 0%, ${net.color} ${(volume / 20000) * 100}%, hsl(222,30%,14%) ${(volume / 20000) * 100}%, hsl(222,30%,14%) 100%)`,
                }}
              />

              <div className="flex flex-wrap gap-2 mt-4">
                {VOLUME_PRESETS.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVolume(v)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      volume === v
                        ? "text-white border-transparent"
                        : "border-[hsl(222,30%,18%)] text-[hsl(215,20%,50%)] hover:border-[hsl(210,90%,56%)/50]"
                    }`}
                    style={volume === v ? { background: net.color } : {}}
                  >
                    {v.toLocaleString("ru")} л
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Цена на АЗС",     value: `${net.retail} ₽/л`,                          sub: "без скидки",              muted: true },
                { label: "Ваша цена",        value: `${ourPrice} ₽/л`,                            sub: `скидка ${net.discount}%`, muted: false },
                { label: "Экономия в месяц", value: `${savingMonth.toLocaleString("ru")} ₽`,      sub: `${savingPerLiter} ₽/л`,   muted: false },
                { label: "Экономия в год",   value: `${savingYear.toLocaleString("ru")} ₽`,       sub: "при том же объёме",       muted: false },
              ].map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl p-4 text-center"
                  style={r.muted
                    ? { background: "hsl(222,40%,6%)" }
                    : { background: `${net.color}12`, border: `1px solid ${net.color}30` }
                  }
                >
                  <div className="text-xs text-[hsl(215,20%,50%)] mb-1">{r.label}</div>
                  <div
                    className="text-xl font-black leading-tight"
                    style={{ fontFamily: "Oswald, sans-serif", color: r.muted ? "hsl(215,20%,38%)" : net.color }}
                  >
                    {r.value}
                  </div>
                  <div className="text-xs text-[hsl(215,20%,45%)] mt-1">{r.sub}</div>
                </div>
              ))}
            </div>

            {/* Summary bar */}
            <div
              className="rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ background: `${net.color}10`, border: `1px solid ${net.color}25` }}
            >
              <div className="flex items-center gap-3">
                <Icon name="TrendingDown" size={24} style={{ color: net.color }} />
                <div>
                  <div className="text-xs text-[hsl(215,20%,50%)]">Итого вместо</div>
                  <div className="text-sm font-bold">
                    <span className="line-through text-[hsl(215,20%,40%)] mr-2">{totalRetail.toLocaleString("ru")} ₽/мес</span>
                    <span style={{ color: net.color }}>платите {totalOur.toLocaleString("ru")} ₽/мес</span>
                  </div>
                </div>
              </div>
              <a
                href="#contacts"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
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
