# 🌌 Starwars Wiki

En responsiv webbplats som visar information om Star Wars-karaktärer, fordon och arter genom att hämta data från ett externt API. Projektet är gjort som en gruppuppgift med fokus på samarbete, versionshantering och webbutveckling.

---

# 📖 Om projektet

Starwars Wiki är en webbsida där användare kan utforska olika Jedi & Sith-karaktärer, fordon, skepp och arter från Star Wars-universumet. Informationen hämtas dynamiskt från ett API och presenteras på ett enkelt och användarvänligt sätt.

Projektet är byggt med **HTML, CSS och JavaScript** och följer ett **mobile-first** tänk för att fungera bra på både mobil och desktop.

---

# 👥 Grupp

**Grupp:** Grupp 3  
**Teamnamn:** Starwars Wiki  

### Gruppmedlemmar

- [andi49](https://github.com/andi49) 🚩 (Projektledare/Fronted)
- [Charlie](https://github.com/Kingtutz) (Frontend)
- [Isak](https://github.com/Isakgit24) (API/Frontend)
- [David](https://github.com/Davve420) (UX/Desig)
- [Salma](https://github.com/salmaharastani) (Frontend)
---

# 🔗 API

Projektet använder ett Star Wars API för att hämta karaktärsdata.

API endpoint:

https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total

API:t används för att hämta information om olika karaktärer i Star Wars-universumet.

---

# ⚙️ Funktioner

Webbplatsen innehåller bland annat:

- Visa Star Wars-data från API:
- Karaktärer
  - Jedi
  - Sith
- Fordon
- Rymdskepp
- Species
- Navigera mellan olika sidor
- Responsiv design för mobil och desktop
- Modern layout inspirerad av Star Wars

---

# 📄 Sidor

Webbplatsen innehåller minst fyra sidor:

- **Home** – introduktion till Starwars Wiki  
- **Characters** – lista över karaktärer från API  
- **About Us** – information om projektet  
- **Contact** – kontaktinformation  
- **Ships and Vechiles** – skepp och fordon
- **Species** – art
---

# 🎨 Design

Designen är inspirerad av Star Wars-universumet och rymdtemat.

### Designval

Vi valde ett **mörkt färgtema** eftersom Star Wars ofta förknippas med rymden och mörka miljöer.

Vi använder **gula accenter inspirerade av Star Wars-logotypen** för att skapa en tydlig koppling till temat.

Layouten är **mobile-first**, vilket innebär att designen först anpassats för mobil och sedan för större skärmar.

Fokus har legat på:

- enkel navigation  
- tydlig layout  
- responsiv design  
- bra användarupplevelse  

### Typografi (fonter)

Projektet använder flera fonter beroende på komponent:

- **Exo 2**: grundfont för body/brödtext (global temabassida).
- **Italiana**: används på navigationslänkar (About, Forum, Wiki, Jedi, Sith, Character).
- **Orbitron**: rubriker, hero-titlar, knappar och labels med sci-fi uttryck.
- **Roboto**: används i startsidans/forumets layoutfil som fallback för generell text.
- **Gill Sans**: används i forum/mailbox-formulär och popup-meddelanden.
- **Space Mono**: används i medlemslistor på About-sidan.

Google Fonts laddas via CSS-importer i `theme.css` och `style.css`.

### Färgpalett

Kärnpaletten bygger på mörka blå/svarta bakgrunder med ljus text och neonaccenter:

- **Bakgrund mörk**: `#04070d`
- **Primär text**: `#eaf4ff`
- **Dämpad text**: `#9bb2c7`
- **Accent guld**: `#ffd24d` / `#FFD700`
- **Accent blå**: `#2aa4ff`
- **Sith-röd accent**: `#FF6B6B`
- **Ljus paneltext**: `#cfe9ff`

Navigationsfärger per länk:

- About: `#83a9ff`
- Forum: `#db87ff`
- Wiki: `#ffea86`
- Jedi: `#92ff8c`
- Sith: `#ff8f8f`
- Character: `#ffbe5c`

### Externa länkar och resurser

- **Font Awesome-kit** för socialikoner och ikoner:
	- `https://kit.fontawesome.com/493314404e.js`
- **Datakälla (API) i JavaScript-kod**:
	- `https://starwars-databank-server.onrender.com/api/v1/characters`
	- används även med query-parametrar på Jedi/Sith-sidor.
- **Google Fonts**:
	- Orbitron, Exo 2, Italiana och Roboto.

Notering: Footer visar sociala ikoner visuellt, men de är för närvarande inte klickbara externa länkar.

### Var designen används

- **index.html**: `style.css` + `theme.css` + `lightsaber.css` + `mailbox.css`
- **about.html**: `theme.css` + `page-shell.css` + `about.css`
- **forum.html**: `theme.css` + `style.css` + `mailbox.css`
- **jedi.html / Sith.html**: `theme.css` + `page-shell.css` + `jedi.css`
- **character-of-the-day.html**: `theme.css` + `character-of-the-day.css`
- **ships.html**: `style.css` + `theme.css` + `lightsaber.css` + `page-shell.css`
- **species.html**: `style.css` + `theme.css` + `lightsaber.css` + `page-shell.css`

---

# 🤝 Samarbete och GitHub

Vi har använt **GitHub** för versionshantering och samarbete i gruppen.

Arbetet organiserades genom:

- branches för olika features  
- regelbundna commits  
- merge via GitHub  
- kommunikation i gruppen vid merge conflicts  

På detta sätt kunde alla gruppmedlemmar bidra till projektet samtidigt.

---

# 🚀 Installation

För att köra projektet lokalt:

1. Klona repot

git clone https://github.com/andi49/Starwars-wiki.git

2. Gå in i projektmappen

cd Starwars-wiki

3. Öppna `index.html` i en webbläsare  
eller använd **Live Server** i VS Code.

---

# 🖼 Skisser och mockups

Skisser och wireframes för webbplatsens design finns i repot, till exempel i:

/img

eller

/design

---

# 📊 Rapport om samarbete

I projektet arbetade vi tillsammans i en grupp där varje medlem hade ansvar för olika delar av webbplatsen, till exempel design, API-integration och struktur.

Vi använde GitHub för versionshantering och skapade branches för olika funktioner. Genom commits och pull requests kunde vi enkelt se förändringar och samarbeta utan att skriva över varandras kod.

Kommunikation var viktigt under arbetets gång, särskilt när vi behövde lösa merge conflicts eller diskutera designval.

---

# 🔗 Länkar

**GitHub Repository**

https://github.com/andi49/Starwars-wiki

**GitHub Pages**

https://andi49.github.io/Starwars-wiki

---

