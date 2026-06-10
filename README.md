# Présentation MVT — Infrastructures de paiement Visa & Mastercard

Présentation interactive pour le projet de **veille technologique** (B-School by BNP Paribas — Coding Factory), construite avec [Reveal.js](https://revealjs.com/).

Chaque slide est un **fichier JavaScript indépendant** : facile à modifier en parallèle entre membres de l'équipe.

---

## Structure du dépôt

```
ppt/
├── index.html          # Page d'accueil (liens FR / EN)
├── fr/                 # Version française ★ dossier de travail principal
│   ├── index.html      # Orchestration Reveal.js + liste des slides
│   ├── css/custom.css  # Styles globaux
│   ├── images/         # Logos, schémas, chronologies…
│   ├── js/
│   │   ├── slideModule.js    # Chargement / rendu des slides
│   │   ├── speakers.js       # Indicateur « prochain intervenant »
│   │   ├── workflowHelper.js # Workflows Visa interactifs
│   │   └── slides/           # Une slide = un fichier .js
│   ├── start-server.py       # Serveur local avec rechargement auto
│   └── requirements.txt
└── en/                 # Version anglaise (même structure que fr/)
```

> Les dossiers `slides/` et `slides-en/` à la racine sont des copies locales optionnelles, **ignorées par Git**. Travaillez dans `fr/` et `en/`.

---

## Démarrage rapide

### Prérequis

- **Python 3.10+** (pour le serveur avec rechargement automatique)
- Un navigateur moderne (Chrome, Edge, Firefox)
- **Git** (pour cloner le dépôt)

### 1. Récupérer le code

```bash
git clone <URL_DU_REPO>
cd ppt
```

### 2. Lancer le serveur (recommandé)

Le projet utilise des **modules ES6** (`import` / `export`) : il faut un serveur HTTP local. Ne pas ouvrir `index.html` directement en `file://`.

**Version française :**

```bash
cd fr
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
python start-server.py
```

Le navigateur s'ouvre sur **http://localhost:8000**. Les modifications dans les fichiers `.js`, `.css` ou `.html` rechargent la page automatiquement.

**Autre port :**

```bash
python start-server.py -p 3000
```

**Version anglaise :** même procédure dans le dossier `en/`.

### 3. Alternative sans Python

Si Python n'est pas disponible :

```bash
# Avec Node.js (npx, sans installation permanente)
cd fr
npx --yes serve -p 8000
```

Puis ouvrir **http://localhost:8000**.

```bash
# Serveur Python minimal (sans rechargement auto)
cd fr
python -m http.server 8000
```

---

## Navigation pendant la présentation

| Touche | Action |
|--------|--------|
| `→` `↓` `Espace` | Slide suivante |
| `←` `↑` | Slide précédente |
| `S` | Mode présentateur (notes + aperçu) |
| `F` | Plein écran |
| `Esc` | Vue d'ensemble de toutes les slides |
| `B` | Écran noir (pause) |

Les **fragments** (éléments avec la classe `fragment`) s'affichent un par un à chaque pression sur la touche suivante.

---

## Modifier une slide existante

Chaque slide se trouve dans `fr/js/slides/<id>.js`.

**Exemple** — `fr/js/slides/probleme.js` :

```javascript
export const html = `
  <span class="speaker-badge">Dandara Helen SOUZA GOMES</span>
  <h2>Problématique & Introduction</h2>
  <p>Mon nouveau contenu…</p>
  <aside class="notes">
    Notes du présentateur (visibles avec la touche S).
  </aside>
`;

export function initialize() {
  // Code exécuté quand la slide devient active
  // (graphiques Chart.js, workflows interactifs…)
}

export function cleanup() {
  // Libérer les ressources quand on quitte la slide
}
```

### Éléments utiles

| Élément | Usage |
|---------|--------|
| `<span class="speaker-badge">Nom</span>` | Badge intervenant en haut de slide |
| `class="fragment"` | Révélation progressive au clic |
| `<aside class="notes">…</aside>` | Notes présentateur (touche **S**) |
| `images/mon-fichier.png` | Images dans `fr/images/` |

### Slides avec graphiques

Voir `dependance.js` : le graphique est créé dans `initialize()` avec Chart.js et détruit dans `cleanup()`.

### Slides avec workflow Visa interactif

Voir `architecture.js`, `architectureSettlement.js` et `workflowHelper.js`. La configuration (nœuds, étapes, flèches) est dans le fichier slide ; le rendu est géré par `buildWorkflow()`.

---

## Ajouter ou supprimer une slide

### Ajouter

1. **Créer** `fr/js/slides/maSlide.js` avec `html`, `initialize`, `cleanup`.

2. **Déclarer** la section dans `fr/index.html` :

   ```html
   <section id="maSlide"></section>
   ```

3. **Ajouter l'ID** dans le tableau `slideIds` (même fichier, bloc `<script type="module">`) :

   ```javascript
   const slideIds = [
     'title', 'probleme', /* … */ 'maSlide', 'conclusion', 'equipe'
   ];
   ```

4. **Optionnel** — indiquer le prochain intervenant dans `fr/js/speakers.js` :

   ```javascript
   export const nextSpeaker = {
     // …
     maSlide: 'Prénom NOM',
   };
   ```

   Mettre `null` pour masquer l'indicateur sur cette slide.

### Supprimer

1. Retirer la `<section>` et l'entrée dans `slideIds`.
2. Supprimer le fichier `fr/js/slides/<id>.js`.
3. Retirer l'entrée dans `speakers.js` si présente.

---

## Répartition des intervenants

L'indicateur discret **« → Prochain intervenant »** (coin bas-droit de l'écran) est configuré dans :

```
fr/js/speakers.js
```

Modifier les noms ou mettre `null` pour ne pas afficher l'indicateur (ex. slides d'enchaînement pour un même orateur).

---

## Styles globaux

Fichier : `fr/css/custom.css`

| Classe | Rôle |
|--------|------|
| `.speaker-badge` | Badge intervenant |
| `.compact-table` | Tableaux compacts |
| `.slide-image` | Images pleine largeur |
| `.visa-workflow-*` | Workflows Visa |
| `.arch-suite-*` | Diagramme architecture (slide Middleware) |
| `#next-speaker-hint` | Indicateur prochain intervenant |

Les tailles de police dans Reveal sont relatives : `font-size: 0.5em` dans une slide ≈ moitié de la taille de base.

---

## Version anglaise

Le dossier `en/` est une copie miroir de `fr/` avec les textes traduits.

Après une modification en français :

1. Reporter le changement structurel dans `en/index.html` si vous ajoutez/supprimez une slide.
2. Traduire le contenu dans `en/js/slides/<id>.js`.
3. Mettre à jour `en/js/speakers.js` si besoin.

---

## Liste des slides (19)

| # | ID | Intervenant principal |
|---|-----|----------------------|
| 1 | `title` | — |
| 2 | `probleme` | Dandara |
| 3 | `historique` | Sabine |
| 4 | `ecosysteme` | Ivan |
| 5 | `dependance` | Loïc |
| 6 | `risques` | Charbel |
| 7–9 | `architecture`, `architectureSettlement`, `architectureSuite` | Charbel |
| 10 | `contraintes` | Loïc |
| 11 | `dora` | Ivan |
| 12 | `alternatives` | Dandara |
| 13 | `emergentes` | Sabine |
| 14 | `comparatif` | Loïc |
| 15–16 | `paymentHub`, `paymentHubSuite` | Ivan |
| 17 | `perspectives` | Dandara |
| 18 | `conclusion` | Sabine |
| 19 | `equipe` | — |

---

## Déploiement (GitHub Pages)

La page d'accueil racine (`index.html`) pointe vers `/fr/` et `/en/`.

1. Pousser le dépôt sur GitHub.
2. Activer **GitHub Pages** : Settings → Pages → branche `main`, dossier `/ (root)`.
3. L'URL sera du type `https://<organisation>.github.io/<repo>/`.

---

## Dépannage

| Problème | Solution |
|----------|----------|
| Page blanche / erreurs `import` dans la console | Lancer un serveur HTTP (voir ci-dessus), ne pas ouvrir en `file://` |
| Slide vide | Vérifier que l'ID dans `index.html` correspond au nom du fichier `.js` |
| Graphique qui ne s'affiche pas | Vérifier que `initialize()` est bien défini et que le `canvas` a un `id` unique |
| Workflow Visa cassé après modification | Vérifier la config `nodes`, `connections` et `steps` dans le fichier slide |
| Modifs non visibles | Ctrl+F5 (vidage cache) ou vérifier que le serveur tourne dans le bon dossier (`fr/`) |

---

## Contacts & ressources

- **Reveal.js** : https://revealjs.com/config/
- **Chart.js** : https://www.chartjs.org/docs/
- Mémoire source : document MVT Archi paiement Visa/Mastercard

---

*B-School by BNP Paribas — Coding Factory · Projet MVT*
