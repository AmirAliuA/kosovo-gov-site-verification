# 🇽🇰 Kosovo Government Domain Checker
A lightweight browser extension that verifies whether the website you are visiting belongs to an official government domain of the Republic of Kosovo.

---

## 📌 Overview
This extension displays a banner at the top of any webpage indicating its authenticity:
- **Blue Banner** → Verified Kosovo government domain
- **Red Banner** → NOT an official Kosovo government domain
- Supports **English, Albanian, and Serbian**
- Automatically detects browser language
- Works on all pages when using `"matches": ["<all_urls>"]`

It is designed to help users quickly validate domains belonging to:
- Government ministries and agencies
- Law enforcement institutions
- Local municipalities
- Public service platforms

---

## ✨ Features
- Checks domains against an official list (`manifest.json`)
- Clear visual banner with the Kosovo flag
- Multilingual support: EN / SQ / SR
- No analytics, no tracking, no remote requests
- Fully offline and highly lightweight

---

## 📁 File Structure
```
/
├── manifest.json
├── content.js
├── banner.css
└── README.md
```

---

## 🔧 Installation (Developer Mode)
1. Download or clone the repository
2. Open **chrome://extensions**
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the folder containing this project

---

## 📜 Supported Languages
| Language | Code |
|----------|------|
| English  | en   |
| Albanian | sq   |
| Serbian  | sr   |

The extension automatically detects the browser language.
Fallback: **English**.

---

## 🔒 Privacy
This extension:
- Does **NOT** track or collect any user data
- Does **NOT** send data to servers
- Operates entirely on the client side
- Only analyzes the domain of the current webpage

You remain fully in control of your browsing privacy.

---

## ⚖️ License
This project is licensed under:
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-F5F5F5?logo=Creative%20Commons)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

You may view and contribute to the project, but you may **not**:
- use it commercially
- redistribute it
- publish forks
- share modified or unmodified copies

Full license text:
https://creativecommons.org/licenses/by-nc-nd/4.0/

---

# 🇽🇰 Kontrolluesi i Domeve të Qeverisë së Kosovës
Një extension i lehtë për browser, i cili verifikon nëse faqja që po vizitoni i përket një domeni zyrtar të institucioneve të Republikës së Kosovës.

---

## 📌 Përmbledhje
Ky extension shfaq një banner në krye të faqes për të treguar nëse domeni i hapur është një **domen zyrtar i Qeverisë së Republikës së Kosovës**.

Extension-i shfaq një banner në krye të çdo faqeje:
- **Banner Blu** → Domen zyrtar i institucioneve të Kosovës
- **Banner i Kuq** → Nuk është domen zyrtar
- Detektim automatik i gjuhës (Anglisht, Shqip, Serbisht)

Përdoret për të verifikuar:
- Ministri dhe agjenci shtetërore
- Organe të rendit dhe sigurisë
- Komuna
- Portale të shërbimeve publike

---

## ✨ Karakteristikat
- Kontrollon domenet zyrtare nga lista në (nga `manifest.json`)
- Banner i qartë me flamurin e Kosovës
- Shumëgjuhësor (EN / SQ / SR)
- Nuk mbledh të dhëna, nuk dërgon të dhëna jashtë
- Shpejtë, i lehtë dhe funksionon offline

---

## 📁 Struktura e Fajllave
```
/
├── manifest.json
├── content.js
├── banner.css
└── README.md
```

---

## 🔧 Instalimi (Developer Mode)
1. Shkarko ose klono projektin
2. Hape **chrome://extensions**
3. Aktivizo **Developer Mode**
4. Kliko **Load unpacked**
5. Zgjedhe folderin e projektit

---

## 📜 Gjuhët e Përkrahura
| Gjuha   | Kodi |
|---------|-------|
| Anglisht | en    |
| Shqip    | sq    |
| Serbisht | sr    |

Gjuha detektohet automatikisht nga `navigator.language`.
Nëse nuk njihet → përdoret **Anglishtja**.

---

## 🔒 Privatësia
Ky extension:
- **Nuk** mbledh të dhëna personale
- **Nuk** dërgon të dhëna në serverë
- Punon tërësisht offline
- Kontrollon vetëm domenin e faqes që vizitoni

---

## ⚖️ Licenca
Ky projekt është i licencuar sipas:
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-F5F5F5?logo=Creative%20Commons)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Ju mund ta shikoni dhe kontribuoni në projekt, por **nuk lejohet**:

- ta përdorni në mënyrë komerciale
- ta shpërndani
- të publikoni fork-e
- të ndani kopje të modifikuara ose jo të modifikuara

Teksti i plotë i licencës:
https://creativecommons.org/licenses/by-nc-nd/4.0/
