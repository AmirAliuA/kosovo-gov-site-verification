const translations = {
  en: {
    title: "Kosovo Government Domain Checker",
    button: "Check Current Website",
    checking: "Checking...",
    official: "✅ This is an official Kosovo government domain.",
    unofficial: "❌ This is NOT an official Kosovo government domain.",
    source: "View Source Code",
    disclaimer:
      "This extension is a personal project and is not affiliated with the Government of Kosovo or any of its institutions."
  },

  sq: {
    title: "Kontrolluesi i Domenve të Qeverisë së Kosovës",
    button: "Kontrollo Faqen Aktuale",
    checking: "Duke kontrolluar...",
    official: "✅ Ky është një domen zyrtar i institucioneve të Kosovës.",
    unofficial: "❌ Ky NUK është domen zyrtar i institucioneve të Kosovës.",
    source: "Shiko kodin burimor",
    disclaimer:
      "Ky extension është projekt personal dhe nuk është i lidhur me Qeverinë e Kosovës ose ndonjë institucion të saj."
  },

  sr: {
    title: "Provera Domenа Vlade Kosova",
    button: "Proveri Trenutni Sajt",
    checking: "Proveravanje...",
    official: "✅ Ovo je zvaničan domen institucija Kosova.",
    unofficial: "❌ Ovo NIJE zvaničan domen institucija Kosova.",
    source: "Pogledaj izvorni kod",
    disclaimer:
      "Ovo proširenje je lični projekat i nije povezano sa Vladom Kosova ili bilo kojom njenom institucijom."
  }
};

function getLang() {
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("sq")) return "sq";
  if (lang.startsWith("sr")) return "sr";
  return "en";
}

const officialDomains = [
  "kryeministri.rks-gov.net",
  "gzk.rks-gov.net",
  "ekosova.rks-gov.net",
  "mpb.rks-gov.net",
  "md.rks-gov.net",
  "mf.rks-gov.net",
  "masht.rks-gov.net",
  "ask.rks-gov.net",
  "aapsk.rks-gov.net",
  "ipk.rks-gov.net",
  "cons.rks-gov.net",

  "rks-gov.net",
  "ks-gov.net",
  "mfa-ks.net",
  "kosovopolice.com",
  "fsk-rks.org"
];

async function checkDomain() {
  const statusText = document.getElementById("statusText");
  statusText.textContent = t.checking;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const host = url.hostname;

    const isOfficial = officialDomains.some(domain => host.endsWith(domain));

    statusText.textContent = isOfficial ? t.official : t.unofficial;
  });
}

const lang = getLang();
const t = translations[lang];

document.getElementById("title").textContent = t.title;
document.getElementById("checkBtn").textContent = t.button;
document.getElementById("sourceLink").textContent = t.source;
document.getElementById("disclaimer").textContent = t.disclaimer;

document.getElementById("checkBtn").addEventListener("click", checkDomain);

checkDomain();
