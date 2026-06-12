const GRAFIKA_ITEMS = [
  {
    title: "Konfiguracja serwera",
    subtitle: "Projekt dopasowany do Twoich potrzeb",
    desc: "Kompletne przygotowanie plików serwerowych, autorska konfiguracja oraz optymalizacja silnika.",
    thumb: "img/miniaturka1.png",
    full: "img/miniaturka1.png",
  },
  {
    title: "Optymalizacja silnika",
    subtitle: "Maksymalna wydajność i stabilne TPS",
    desc: "Eliminacja lagów, poprawa zużycia zasobów maszyny i optymalne ustawienia pod dużą liczbę graczy.",
    thumb: "img/miniaturka2.png",
    full: "img/miniaturka2.png",
  },
  {
    title: "Zabezpieczenia i bazy danych",
    subtitle: "Bezpieczeństwo na najwyższym poziomie",
    desc: "Konfiguracja baz MySQL/MongoDB, zabezpieczenie przed atakami oraz łatki usuwające luki w pluginach.",
    thumb: "img/miniaturka3.png",
    full: "img/miniaturka3.png",
  }
];

function parseJsonScript(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const t = el.textContent.trim();
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}

function getGraphicsItems() {
  const raw = parseJsonScript("graphics-portfolio");
  if (Array.isArray(raw) && raw.length > 0) {
    const ok = raw.filter((x) => x && typeof x.thumb === "string" && typeof x.full === "string");
    if (ok.length > 0) return ok;
  }
  return GRAFIKA_ITEMS;
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return () => {};
  const img = lightbox.querySelector(".lightbox-img");
  const cap = lightbox.querySelector(".lightbox-caption");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  function close() {
    lightbox.hidden = true;
    if (img) img.src = "";
    document.body.style.overflow = "";
  }

  function open(src, title, desc) {
    if (img) {
