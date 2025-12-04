# 🇽🇰 Kosovo Government Domain Checker
A lightweight browser extension that verifies whether the website you are visiting belongs to an official institution of the Republic of Kosovo. A small banner appears at the top of each page indicating the domain status.

---

## Overview
The extension compares the current website's domain with an internal list of official government domains.
It works on every page, automatically detects your browser language (English, Albanian, Serbian), and shows a simple banner:
- **Blue Header** → Verified Kosovo government domain
- **Red Header** → Not an official domain

No data is sent anywhere. No tracking. Everything runs locally.

---

## Features
- Checks against a built-in list of official domains
- Simple banner with Kosovo flag and icon set
- Automatic language detection (EN / SQ / SR)
- Popup page with manual check button
- Fully offline, no analytics, no network requests
- Runs on `<all_urls>`

---

## File Structure
```
/
├── manifest.json
├── assets/
│ ├── icons/
│ ├── kosovo-flag.png
│ └── emblem.png
└── src/
├── background/
├── content/
│ ├── banner.js
│ └── banner.css
├── data/
│ └── domains.json
└── popup/
├── popup.html
└── popup.js
```

---

## Installation (Developer Mode)
1. Download or clone the project
2. Open `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

---

## Supported Languages
| Language | Code |
|----------|------|
| English  | en   |
| Albanian | sq   |
| Serbian  | sr   |

The extension detects language from `navigator.language`.
Fallback: **English**.

---

## Privacy
This extension:
- **Does not** collect any personal data
- **Does not** send requests to servers
- Runs entirely offline
- Only checks the domain of the page you are visiting

Your privacy remains fully protected.

---

## License
Licensed under **CC BY-NC-ND 4.0**.
You may view and use the source code, but you may **not**:
- use it commercially
- redistribute it
- publish forks
- share modified or unmodified copies

Full license text:
https://creativecommons.org/licenses/by-nc-nd/4.0/


#  🇽🇰 Kontrolluesi i Domenëve të Qeverisë së Kosovës
Ky extension verifikon nëse faqja që po vizitoni i përket një institucioni zyrtar të Republikës së Kosovës. Në krye të faqes shfaqet një banner i vogël që tregon statusin e domenit.

---

##  Përmbledhje
Extension-i krahason domenin aktual me një listë të domenëve zyrtarë të institucioneve të Kosovës.

Punon në çdo faqe, detekton automatikisht gjuhën e browser-it (Anglisht, Shqip, Serbisht) dhe shfaq një banner të thjeshtë:
-  **Krye Blu** → Domen zyrtar
-  **Krye i Kuq** → Nuk është domen zyrtar

Nuk dërgon të dhëna, nuk mbledh informacione dhe nuk përdor serverë të jashtëm. Gjithçka funksionon lokalisht.

---

##  Karakteristikat
- Kontrollon kundrejt një liste të integruar të domenëve zyrtarë
- Banner i vogël dhe i qartë mbi faqet që hap autoriteti
- Detektim automatik i gjuhës (EN / SQ / SR)
- Opsion kontrolli edhe përmes popup-it
- Punon offline, pa mbledhje të dhënash
- Ekzekutohet në `<all_urls>`

---

##  Struktura e Fajllave

```
/
├── manifest.json
├── assets/
│ ├── icons/
│ ├── kosovo-flag.png
│ └── emblem.png
└── src/
├── background/
├── content/
│ ├── banner.js
│ └── banner.css
├── data/
│ └── domains.json
└── popup/
├── popup.html
└── popup.js
```

---

##  Instalimi (Developer Mode)
1. Shkarko ose klono projektin
2. Hape `chrome://extensions/`
3. Aktivizo **Developer Mode**
4. Kliko **Load unpacked**
5. Zgjedh folderin e projektit

---

##  Gjuhët e Mbështetura
| Gjuha    | Kodi |
|----------|------|
| Anglisht | en   |
| Shqip    | sq   |
| Serbisht | sr   |

Gjuha merret automatikisht nga `navigator.language`.
Nëse nuk njihet → përdoret **Anglishtja**.

---

##  Privatësia
Extension-i:
-  **Nuk** mbledh të dhëna
-  **Nuk** dërgon informacione jashtë pajisjes
- Analizon vetëm domenin e faqes aktuale
- Funksionon tërësisht offline

Privatësia juaj mbetet e paprekur.

---

##  Licenca
Licencuar sipas **CC BY-NC-ND 4.0**.
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-F5F5F5?logo=Creative%20Commons)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Kjo licencë lejon shikimin dhe përdorimin e kodit, por **nuk** lejon:
- përdorim komercial
- shpërndarje
- publikim të varianteve të modifikuara apo të pamodifikuara

Teksti i plotë i licencës:
https://creativecommons.org/licenses/by-nc-nd/4.0/
