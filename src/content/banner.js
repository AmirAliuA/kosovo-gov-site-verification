// Injects the Kosovo gov banner on every page, checks the domain against domains.json,
// picks language automatically, and builds the expandable UI.
(async function () {
  function waitForBody() {
    if (document.body) return Promise.resolve();
    return new Promise(resolve => {
      const obs = new MutationObserver(() => {
        if (document.body) {
          obs.disconnect();
          resolve();
        }
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });
    });
  }
  await waitForBody();

  let domains = [];
  try {
    const r = await fetch(chrome.runtime.getURL("src/data/domains.json"));
    if (r.ok) domains = await r.json();
  } catch (err) {
    console.error("Error loading domains.json:", err);
  }

  const host = (window.location.hostname || "").toLowerCase();

  function matchesFromList(h, entry) {
    if (!h || !entry) return false;
    const d = String(entry).toLowerCase().trim();
    if (!d) return false;
    if (h === d) return true;
    return h.endsWith("." + d);
  }

  const matched = domains.find(d => matchesFromList(host, d));
  const isOfficial = Boolean(matched);

  const navLang = (navigator.language || "").toLowerCase();
  function langFor(obj) {
    if (navLang.startsWith("sq")) return obj.sq;
    if (navLang.startsWith("sr")) return obj.sr;
    return obj.en;
  }

  const TEXT = {
    header_official: {
      en: "Official website of the Republic of Kosovo",
      sq: "Faqe zyrtare e Republikës së Kosovës",
      sr: "Zvanična veb stranica Republike Kosovo"
    },
    header_unverified: {
      en: "Warning: Not an official Kosovo government website",
      sq: "Paralajmërim: Nuk është faqe zyrtare e Qeverisë së Kosovës",
      sr: "Upozorenje: Nije zvanična veb stranica Vlade Kosova"
    },

    domainsTitle: {
      en: "Official Kosovo government domains",
      sq: "Domenë zyrtare të Qeverisë së Kosovës",
      sr: "Zvanični domeni Vlade Kosova"
    },
    domainsText: {
      en: "Websites listed in our verified domains belong to official institutions of the Republic of Kosovo.",
      sq: "Faqet që janë në listën tonë të verifikuar i përkasin institucioneve zyrtare të Republikës së Kosovës.",
      sr: "Sajtovi sa naše verifikovane liste pripadaju institucijama Republike Kosovo."
    },

    nok_short: {
      en: "This domain is not included in the verified list of official Kosovo government websites.",
      sq: "Ky domen nuk është pjesë e listës së verifikuar të faqeve qeveritare të Kosovës.",
      sr: "Ovaj domen nije na verifikovanoj listi zvaničnih sajtova Vlade Kosova."
    },

    httpsTitle: {
      en: "Secure Kosovo websites use HTTPS",
      sq: "Faqet zyrtare të Kosovës përdorin HTTPS",
      sr: "Bezbedni kosovski sajtovi koriste HTTPS"
    },
    httpsText: {
      en: "A lock (🔒) or https:// means your connection to the website is encrypted.",
      sq: "Simboli i drynit (🔒) ose https:// tregon që lidhja është e sigurtë.",
      sr: "Simbol katanca (🔒) ili https:// znači da je vaša veza šifrovana."
    },

    ok: {
      en: `✔ This domain is verified as an official Kosovo government website${matched ? " (" + matched + ")" : ""}.`,
      sq: `✔ Ky domen është verifikuar si faqe zyrtare e Qeverisë së Kosovës${matched ? " (" + matched + ")" : ""}.`,
      sr: `✔ Ovaj domen je potvrđen kao zvanična veb stranica Vlade Kosova${matched ? " (" + matched + ")" : ""}.`
    },
    nok: {
      en: "⚠ This domain is NOT in the official Kosovo government list.",
      sq: "⚠ Ky domen NUK është në listën zyrtare të Qeverisë së Kosovës.",
      sr: "⚠ Ovaj domen NIJE na zvaničnoj listi Vlade Kosova."
    }
  };

  const flagUrl = chrome.runtime.getURL("assets/kosovo-flag.png");
  const emblemUrl = chrome.runtime.getURL("assets/emblem.png");
  const lockUrl = chrome.runtime.getURL("assets/icons/icon-https.png");

  const banner = document.createElement("div");
  banner.id = "ks-gov-banner";
  banner.className = "ks-collapsed";

  banner.innerHTML = `
    <div class="ks-header" role="button" aria-expanded="false">
      <div class="ks-left">
        <button class="ks-close" aria-label="Hide banner">×</button>
        <img src="${flagUrl}" class="ks-flag">
        <div class="ks-header-title"></div>
      </div>
      <button class="ks-toggle" aria-label="Toggle Kosovo info"></button>
    </div>

    <div class="ks-panel" aria-hidden="true">
      <div class="ks-row">
        <img src="${emblemUrl}" class="ks-icon">
        <div class="ks-col">
          <div class="ks-row-title">${langFor(TEXT.domainsTitle)}</div>
          <div class="ks-row-text">
            ${isOfficial ? langFor(TEXT.domainsText) : langFor(TEXT.nok_short)}
          </div>
        </div>
      </div>

      <div class="ks-row">
        <img src="${lockUrl}" class="ks-icon">
        <div class="ks-col">
          <div class="ks-row-title">${langFor(TEXT.httpsTitle)}</div>
          <div class="ks-row-text">${langFor(TEXT.httpsText)}</div>
        </div>
      </div>

      <div class="ks-status ${isOfficial ? "ks-ok" : "ks-bad"}">
        ${isOfficial ? langFor(TEXT.ok) : langFor(TEXT.nok)}
      </div>
    </div>
  `;

  try {
    document.documentElement.prepend(banner);
  } catch {
    document.body.insertBefore(banner, document.body.firstChild);
  }

  banner.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => (img.style.display = "none"));
  });

  const header = banner.querySelector(".ks-header");
  const headerTitle = banner.querySelector(".ks-header-title");

  if (isOfficial) {
    headerTitle.textContent = langFor(TEXT.header_official);
    header.style.background = "linear-gradient(180deg,#073a6a,#003366)";
  } else {
    headerTitle.textContent = langFor(TEXT.header_unverified);
    header.style.background = "linear-gradient(180deg,#7b1a19,#5a0f0f)";
  }

  const panel = banner.querySelector(".ks-panel");
  panel.style.display = "none";
  header.setAttribute("aria-expanded", "false");

  function setExpanded(expanded) {
    panel.style.display = expanded ? "block" : "none";
    header.setAttribute("aria-expanded", String(expanded));
    banner.classList.toggle("ks-collapsed", !expanded);
  }

  header.addEventListener("click", () => {
    setExpanded(header.getAttribute("aria-expanded") !== "true");
  });

  header.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpanded(header.getAttribute("aria-expanded") !== "true");
    }
  });

  banner.querySelector(".ks-close").addEventListener("click", e => {
    e.stopPropagation();
    banner.style.transition = "opacity .25s ease";
    banner.style.opacity = "0";
    setTimeout(() => (banner.style.display = "none"), 250);
  });
})();
