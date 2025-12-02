(function () {
  if (document.getElementById("kosovo-gov-banner")) return;

  const manifest = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getManifest)
    ? chrome.runtime.getManifest()
    : null;
  const matchPatterns = (manifest && manifest.content_scripts && manifest.content_scripts[0] && manifest.content_scripts[0].matches) || [];

  const hostname = window.location.hostname.toLowerCase();

  function extractDomain(pattern) {
    return pattern
      .replace(/^\*:\/\/?/, '')   // remove leading *://
      .replace(/\/.*$/, '')       // remove trailing path
      .toLowerCase();
  }

  const domainPatterns = matchPatterns.map(extractDomain);

  function isOfficialDomain(host) {
    return domainPatterns.some(pattern => {
      if (!pattern) return false;

      if (pattern.startsWith("*.") || pattern.startsWith(".")) {
        const p = pattern.replace(/^\*\./, '.');
        return host === p.replace(/^\./, '') || host.endsWith(p);
      }

      return host === pattern || host.endsWith("." + pattern) || host.endsWith(pattern);
    });
  }

  const official = isOfficialDomain(hostname);

  const lang = (navigator.language || '').toLowerCase();
  const translations = {
    official: {
      en: { title: "Official website of the Republic of Kosovo", text: "This domain is verified as an official Kosovo government site." },
      sq: { title: "Faqe zyrtare e Republikës së Kosovës", text: "Ky domen është verifikuar si faqe zyrtare e Qeverisë së Kosovës." },
      sr: { title: "Званична веб страница Републике Косово", text: "Овај домен је потврђен као званична веб страница Владе Косова." }
    },
    warning: {
      en: { title: "⚠ Warning", text: "This is NOT an official Kosovo government domain." },
      sq: { title: "⚠ Paralajmërim", text: "Kjo NUK është një faqe zyrtare e Qeverisë së Kosovës." },
      sr: { title: "⚠ Упозорење", text: "Ово НИЈЕ званични домен Владе Косова." }
    }
  };

  function tr(type) {
    if (lang.startsWith("sq")) return translations[type].sq;
    if (lang.startsWith("sr")) return translations[type].sr;
    return translations[type].en;
  }

  const banner = document.createElement("div");
  banner.id = "kosovo-gov-banner";
  banner.className = official ? "kosovo-official" : "kosovo-warning";

  const text = tr(official ? "official" : "warning");

  const flagUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg";

  banner.innerHTML = `
      <div class="kg-left">
        <img class="kg-flag" src="${flagUrl}" alt="Kosovo flag" onerror="this.style.display='none'">
        <div class="kg-text">
          <strong>${text.title}</strong>
          <span class="kg-sub">${text.text}</span>
        </div>
      </div>
      <div class="kg-controls">
        <button class="kg-close" aria-label="Close banner" title="Close">×</button>
      </div>
    `;

  document.documentElement.prepend(banner);

  try {
    document.body.classList.add("kg-banner-active");
  } catch (e) { }

  const btn = banner.querySelector(".kg-close");
  btn && btn.addEventListener("click", () => {
    banner.style.transform = "translateY(-8px)";
    banner.style.opacity = "0";
    setTimeout(() => {
      banner.remove();
      try { document.body.classList.remove("kg-banner-active"); } catch (e) { }
    }, 180);
  });

})();
