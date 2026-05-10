# Changelog

## v0.6.0 — 2026-05-11
### Release: Evidență Generator
- Integrare Full-Stack: Implementarea unei pagini dedicate generator.html legată direct la Google Sheets printr-un API propriu în Apps Script.
- Smart Button: Buton dinamic care detectează starea generatorului (Running/Stopped) la încărcare și își schimbă culoarea și funcția (Verde/Start -> Roșu/Stop).
- Sistem de filtrare după perioadă (dată start/sfârșit) cu actualizarea instantanee a consumului de motorină și a orelor de funcționare.
- Alimentare rapidă: Interfață simplificată pentru adăugarea litrilor de motorină direct din pagină.
- Log de Activitate: Afișarea ultimelor 3 acțiuni (Pornire/Oprire/Alimentare) pentru o evidență rapidă fără consultarea tabelului.
- Eliminarea butoanelor vizibile de "Back" din paginile operative (Detailing/Generator) pentru a preveni accesul accidental al tehnicienilor la datele administrative.
- Implementarea combinației de taste Alt + B pentru navigarea rapidă între module (doar pentru utilizatorii care cunosc scurtătura).

## v0.5.0 — 2026-05-10
### Release: Modul Detailing
- Organizarea fluxului de lucru în trei coloane active: Programări, În Lucru și Finalizate.
- Update Inteligent (Backend): Rescrierea logicii Apps Script pentru a permite editarea datelor existente fără a crea rânduri duplicat.
- Notificări WhatsApp: Integrarea butoanelor de trimitere automată a detaliilor programării și notificare de finalizare direct către client.
- Monitorizare Timp: Înregistrarea automată a orei de începere și de finalizare, cu calcularea automată a duratei de lucru (ore/minute) pentru intervențiile din aceeași zi.
- Interfață Mobilă (Mobile-First): Design compact cu butoane tip pictogramă și navigare prin tab-uri pentru utilizare rapidă în atelier.

## v0.4.6 — 2026-05-05
### Update: Funcționalități Noi in Deviz
- Sistem ID Unic (Smart Update): Trecerea de la salvarea simplă la managementul pe bază de ID (D-XXXX). Acum poți redeschide și edita același deviz pe parcursul mai multor zile fără a crea duplicate.
- Auto-Increment ID: Butonul "Deviz Nou" generează acum automat următorul număr de deviz, facilitând organizarea cronologică.
- Extindere Bază de Date (Coloana H): Adăugarea coloanei pentru Discount Global, permițând salvarea și recalcularea automată a reducerilor aplicate întregului deviz.
- Data este acum afișată și salvată în format european standard DD.MM.YYYY.
- Nume Fișier Dinamic: Exportul PDF include acum ID-ul unic (ex: Deviz reparatie - CT24TVG - D-101.pdf), prevenind suprascrierea fișierelor vechi în calculator.

## v0.4.5 — 2026-05-04
### Update: Interfață (UI/UX) Constatări + Îmbunătățiri
- Reorganizare Header Card: s-a adaugat data de intrare in sistem a masinii si data finalizare.
- Sistem de Culori Status: Data de intrare este afișată în Alb, iar data de finalizare în Verde (sau liniuță - dacă mașina este încă în lucru).
- Optimizare Fonturi: Dimensiunile textului de pe butoane și etichete au fost reduse pentru un aspect mai profesional și compact.
- Monitorizare Timp: Implementare automată a datei de finalizare. Când statusul devine FINALIZAT, sistemul scrie automat data curentă în Coloana I.
- Extinderea bazei de date (Coloana I) și actualizarea scriptului API pentru a suporta noile câmpuri de date.

## v0.4.4 — 2026-05-03
### Update: Modul "Constatări Extra"+ Îmbunătățiri
- S-a adăugat o nouă rubrică pentru notarea defecțiunilor descoperite ulterior recepției mașinii.
- Interfață Inteligentă: Buton nou + Extra integrat pe cardul mașinii, aliniat la dreapta pentru acces rapid.
- Sistem de Pop-up (Modal): Implementarea unui flux de lucru similar cu cel de piese pentru o experiență de utilizare unitară.
- Afișare Dinamică: Observațiile extra apar acum automat pe card sub un marcaj discret (Obs:), facilitând citirea rapidă.
- Extinderea bazei de date (Coloana H) și actualizarea scriptului API pentru a suporta noile câmpuri de date.

## v0.4.3 — 2026-05-02
### Update: Optimizare Constatări+Integrare WhatsApp & Optimizare Mobile
- Implementat funcția de inversare a listelor în Constatari și Telefoane Clienti.
- Integrat buton rapid de WhatsApp lângă fiecare contact si link active de tip tel.
- Rescris structura CSS pentru telefoane-clienti.html folosind containere flexibile pentru a preveni ieșirea iconițelor din ecran.
- Optimizat alinierea header-ului cu datele din tabel pe ecrane înguste.

## v0.4.2 — 2026-05-02
### Update: Optimizare Constatări+Integrare WhatsApp & Optimizare Mobile
- Editare Bidirecțională: Implementată posibilitatea de a edita și șterge piese direct din interfață.
- Comandă Rapidă WhatsApp: Implementat buton dinamic în stoc_magazie.html care generează un mesaj de comandă predefinit către magazioner.
- Implementat scroll vertical pentru secțiunile "Defecțiuni" și "Piese" pentru a menține cardurile compacte.
- Dezactivarea butonului "Salvează" în timpul procesării pentru a preveni dubla trimitere a datelor.
- Adăugată legenda vizuală pentru statusuri (În lucru, Așteptare piese, Finalizat) sub antetul paginii.

## v0.4.1 — 2026-05-02
### Update: Optimizare Flux Constatări
- Editare Bidirecțională: Implementată posibilitatea de a edita și șterge piese direct din interfață prin suprascrierea celulelor în Google Sheets.
- Sincronizare Instantanee: Adăugată actualizarea imediată a cardului în browser (DOM) după salvare, eliminând așteptarea latenței de cache Google CSV.
- Implementat scroll vertical pentru secțiunile "Defecțiuni" și "Piese" pentru a menține cardurile compacte.
- Dezactivarea butonului "Salvează" în timpul procesării pentru a preveni dubla trimitere a datelor.
- Adăugată legenda vizuală pentru statusuri (În lucru, Așteptare piese, Finalizat) sub antetul paginii.

## v0.4.0 — 2026-04-28
### Release: Constatari service
- Noua pagină constatari.html permite acum înregistrarea mașinilor în atelier și gestionarea defectelor în timp real.
- Workflow Interactiv: Implementat sistem de statusuri colorate (În lucru, Așteptare Piese, Finalizat) pentru monitorizarea vizuală a fluxului de reparații.
- Input Dinamic (Write-Sync): Adăugat formularul de „Mașină Nouă” și funcția de „Adăugare Piese” care scriu datele direct în Google Sheets prin Apps Script.
- Sistem de Arhivare: Funcție de filtrare pentru curățarea listei de lucru și mutarea dosarelor finalizate într-o secțiune de arhivă protejată.
- Optimizare Mobil: Design compact cu scroll intern pentru carduri, adaptat pentru utilizarea rapidă pe telefon de către mecanici.

## v0.3.0 — 2026-04-30
### Release: Telefoane clienti (public)
- Pagina finalizată și stabilizată.
- Publicată în folderul public.
- Include toate optimizările din v0.1.0.

## v0.2.2 — 2026-04-27
- Salvare în Cloud: Devizele sunt acum salvate automat în Google Sheets, eliminând riscul pierderii datelor din browser.
- Arhivă & Recuperare: Adăugată funcția „Load” care permite reîncărcarea oricărui deviz salvat anterior folosind numărul de înmatriculare.
- PWA (App Mode): Site-ul poate fi instalat acum ca o aplicație nativă pe telefon, oferind un spațiu de lucru mai mare și acces rapid.

## v0.2.1 — 2026-04-24
### Update: Optimizare mobil (public)
- HUB, COnsumabile, Telefoane clienti optimizate mobil
- Corectat erori

## v0.2.0 — 2026-04-22
### Release: Telefoane clienti (public)
- Pagina finalizată și stabilizată.
- Publicată în folderul public.
- Include toate optimizările din v0.1.0.

## v0.1.0 — 2026-04-19
### Release: Stoc Consumabile (public)
- Pagina finalizată și stabilizată.
- Publicată în folderul public.
- Include toate optimizările din v0.0.9.

# v0.0.9 — Flota Auto (API + Listă Mașini)
**Data:** 14.04.2026  
**Tip:** Feature Release + API Integration

## 🚀 Funcționalități noi
- Implementare **API Flota Auto** (Google Apps Script Web App).
- Adăugat **doGet()** pentru citirea tuturor mașinilor în format JSON.
- Adăugat **doPost()** pentru adăugare și modificare mașini.
- Structură JSON completă: nr, VIN, marcă, RCA, ITP, Rovinietă, link acte, observații, rowIndex.
- Creare **Web App nou (deployment v2)** cu acces „Anyone”.
- Integrare completă HUB → API prin `fetch()`.

## 🧩 Pagini noi / actualizate
### `lista_auto.html` (nou)
- Pagina principală a modulului Flota Auto.
- Header premium „Flota Auto”.
- Afișare carduri pentru fiecare mașină.
- VIN afișat sub număr (copy‑friendly).
- Culori dinamice pentru expirări (verde / galben / roșu).
- Butoane:
  - **✏️ Modifică**
  - **📁 Acte**
- Sortare logică: expirate → aproape expirate → restul.

### Structură folder simplificată
- `lista_auto.html`
- `adauga.html`
- `modifica.html` (în pregătire)

## 🛠️ Optimizări & Fix-uri
- Eliminat pagini inutile din modulul Flota Auto.
- Corectat deploy-ul Web App (versiune veche fără `doGet()`).
- Mutat scriptul în proiectul corect (`verificaExpirari`).
- Rezolvat eroarea „Script function not found: doGet”.
- Stabilizat fluxul API (GET + POST).
- Confirmat funcționarea JSON în browser.

## 🎨 UI/UX
- Carduri premium, aerisite, optimizate pentru mobil și PC.
- VIN vizibil și ușor de copiat.
- Culori intuitive pentru expirări.
- Layout consistent cu restul HUB-ului.

## 📁 Fișiere modificate
- `modules/flota/lista_auto.html` (nou)
- `modules/flota/adauga.html` (actualizat pentru API)
- `modules/flota/modifica.html` (urmează)
- `Cod.gs` (Google Apps Script):
  - `doGet()` — nou
  - `doPost()` — actualizat
  - `verificaExpirari()` — nemodificat

## 🧭 Ce urmează în v0.1.0
- Pagina `modifica.html` cu preluare automată a datelor.
- Căutare rapidă în lista de mașini.
- Filtru după expirări.
- Sortare manuală.
- Export PDF pentru fișa unei mașini (opțional).

## v0.0.8 — 13 April 2026
### Adăugat
- manifest.json cu nume aplicație, iconițe și setări pentru instalare pe Android/iPhone/PC
- service worker (sw.js) pentru cache și actualizare automată
- suport complet pentru instalarea HUB-ului ca aplicație (PWA)

### Modificat
- index.html actualizat cu referințe la manifest și înregistrarea service worker-ului

### Observații
- aplicația se actualizează automat la fiecare deschidere
- pregătit pentru instalare pe toate platformele


## v0.0.7 — 13 April 2026
### Adăugat
- Footer premium cu blur, shadow și accent mov
- Linie mov subtilă (glass edge) pentru un look modern
- Sistem de versiuni afișat în footer

### Improved
- Contrast Light Mode (text vizibil, fundal optimizat)
- theme.js: adăugată clasa `light-mode` pentru funcționare corectă
- Grid-ul din dashboard (aliniere și spacing mai curat)
- Header neon mov (optimizare vizuală)

### Fixed
- Footer care nu se vedea în Light Mode
- Probleme minore de spacing în layout

---

## v0.0.6 — 12 April 2026
#### Adăugat
- Header neon mov
- Iconițe noi pentru carduri
- Optimizări pentru mobile

### Improved
- Layout general și spațiere
- Vizibilitatea elementelor în Dark Mode