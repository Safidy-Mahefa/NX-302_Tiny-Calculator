
# Projet Calculatrice Modulaire — Guide étape par étape

> **Objectif :** Créer une calculatrice simple mais complète en utilisant **les modules JavaScript**. Ce guide te donne des instructions précises étape par étape. Tu dois coder chaque partie toi-même, aucune solution n’est fournie.

---

## 🔹 Structure du projet

Crée cette structure de fichiers pour bien organiser ton projet :

```
/calculatrice-modulaire
│
├─ index.html
├─ css/
│   └─ style.css
├─ js/
│   ├─ app.js        # point d'entrée, orchestration des modules
│   ├─ ui.js         # gestion de l'interface (DOM)
│   ├─ operations.js # fonctions mathématiques (add, sub, mul, div)
│   └─ calculator.js # logique pour exécuter les opérations
```

---

## 🔹 Milestone 1 — `app.js` : Initialisation et import des modules

> **Objectif :** Préparer l’application et connecter les modules entre eux.

1. Crée `js/app.js`.
2. Importe tous les modules (`ui.js`, `operations.js`, `calculator.js`) même si tu ne les as pas encore codés.
3. Crée une fonction `initApp()` qui sera exécutée au chargement de la page.
4. À l’intérieur de `initApp()` :

   * Sélectionne le conteneur de la calculatrice et tous les boutons (`0-9`, `+`, `-`, `*`, `/`, `=`).
   * Prépare une zone pour l’affichage du résultat.
5. Appelle `initApp()` à la fin du fichier pour lancer l’application.

**Exercice :** Vérifie que l’application se lance sans erreur et que les éléments DOM sont bien sélectionnés.

---

## 🔹 Milestone 2 — `operations.js` : Fonctions mathématiques

> **Objectif :** Créer toutes les fonctions nécessaires pour les opérations.

1. Crée `js/operations.js`.
2. Pour chaque opération (`addition`, `soustraction`, `multiplication`, `division`) :

   * Crée une fonction prenant deux nombres en paramètre.
   * Retourne le résultat de l’opération.
3. Exporte toutes les fonctions pour qu’elles soient utilisables dans d’autres modules.

**Exercice :** Teste chaque fonction dans la console pour vérifier qu’elles fonctionnent correctement avant de passer à l’interface.

---

## 🔹 Milestone 3 — `calculator.js` : Logique de la calculatrice

> **Objectif :** Traiter l’entrée de l’utilisateur et exécuter les opérations.

1. Crée `js/calculator.js`.
2. Importe les fonctions depuis `operations.js`.
3. Crée une fonction principale qui :

   * Reçoit les nombres et l’opérateur sélectionné.
   * Appelle la fonction correspondante dans `operations.js`.
   * Retourne le résultat.
4. Gère les cas particuliers (ex : division par zéro, entrées invalides).

**Exercice :** Teste la logique avec différentes combinaisons de nombres et opérateurs.

---

## 🔹 Milestone 4 — `ui.js` : Interface et interaction DOM

> **Objectif :** Faire interagir la calculatrice avec l’utilisateur.

1. Crée `js/ui.js`.
2. Crée des fonctions pour :

   * Afficher les chiffres et le résultat dans la zone dédiée.
   * Mettre à jour l’affichage quand l’utilisateur clique sur un bouton.
   * Réinitialiser l’écran si nécessaire.
3. Exporte les fonctions pour qu’elles puissent être utilisées dans `app.js`.

**Exercice :** Vérifie que les boutons modifient l’affichage correctement, mais **sans encore calculer les opérations**.

---

## 🔹 Milestone 5 — Connexion des modules

1. Dans `app.js` :

   * Utilise `ui.js` pour écouter les clics des boutons.
   * Chaque clic sur un opérateur ou chiffre doit mettre à jour l’affichage.
   * Au clic sur `=`, appelle la fonction de `calculator.js` pour obtenir le résultat.
   * Affiche le résultat avec `ui.js`.
2. Teste chaque séquence : nombre → opérateur → nombre → =.

**Exercice :** Ton application doit maintenant pouvoir effectuer un calcul complet correctement.

---

## 🔹 Milestone 6 — Finitions et bonnes pratiques

1. Commente chaque fonction avec son rôle et ses paramètres.
2. Vérifie que **tous les modules sont indépendants** et réutilisables.
3. Évite les variables globales.
4. Ajoute un style simple avec `css/style.css` pour rendre la calculatrice agréable à utiliser.

**Exercice :** Teste toutes les opérations, les cas limites, et assure-toi que le code est propre et modulaire.

---

💡 **Conseils pour l’entraînement aux modules :**

* Chaque module doit être **testable séparément**.
* Ne mélange pas DOM et logique métier dans le même fichier.
* Garde `app.js` comme point d’entrée, sans logique interne compliquée.
* Commence simple, puis ajoute éventuellement :

  * Décimales
  * Effacer dernier chiffre
  * Historique des calculs

---

🔹 **Objectif final :**

Une calculatrice simple mais **complètement modulaire** où chaque module a une responsabilité claire et peut être réutilisé dans d’autres projets.

######################

## 🔹 1️⃣ `ui.js` — Gestion de l’interface

**Objectif :** Séparer complètement le DOM de la logique des calculs.

### Étapes pour créer `ui.js` :

1. **Créer des fonctions pour l’affichage :**

   * Une fonction pour **mettre à jour l’écran** avec le texte actuel.
   * Une fonction pour **effacer l’écran** (reset).
   * Une fonction pour **supprimer le dernier caractère** (backspace).

2. **Créer des fonctions pour récupérer les clics :**

   * Une fonction qui **écoute tous les boutons chiffres et opérateurs**.
   * Chaque clic doit **retourner la valeur du bouton** à `app.js` pour que tu puisses l’utiliser.

3. **Exporte toutes les fonctions** pour qu’elles soient utilisables dans `app.js`.

💡 Astuce : pense à utiliser `querySelector` ou `querySelectorAll` pour sélectionner les boutons et `addEventListener` pour écouter les clics. Chaque bouton peut avoir un `data-value` ou `data-operator` pour identifier son rôle.

---

## 🔹 2️⃣ `app.js` — Initialisation et orchestration

**Objectif :** Lier `ui.js` avec `calculator.js` et orchestrer tout.

### Étapes pour `initApp()` :

1. **Sélectionne les éléments DOM** dont tu auras besoin :

   * L’input ou div d’affichage.
   * Tous les boutons (chiffres, opérateurs, `=`, `C`, `←`).

2. **Gérer les clics sur les boutons :**

   * Quand un chiffre ou un `.` est cliqué, **mets-le à l’écran** via la fonction de `ui.js`.
   * Quand un opérateur est cliqué, **stocke le premier nombre et l’opérateur**, puis prépare l’écran pour le deuxième nombre.
   * Quand `=` est cliqué, **appelle `calculate()`** avec les deux nombres et l’opérateur, puis affiche le résultat via `ui.js`.
   * Quand `C` est cliqué, **efface tout**.
   * Quand `←` est cliqué, **supprime le dernier caractère** de l’écran.

3. **Garde tout modulaire** :

   * `app.js` **ne calcule pas lui-même**, il utilise `calculate`.
   * `app.js` **ne manipule pas directement l’affichage**, il utilise `ui.js`.

---

### 🔹 Conseils pratiques pour bien progresser :

* **Teste chaque étape** : d’abord juste afficher les chiffres, puis gérer les opérateurs, puis le `=`.
* **Stocke les nombres sous forme de `Number`** avant de passer à `calculate()`.
* **Gère les erreurs** : division par zéro ou entrée vide.
* **Ne mélange jamais DOM et logique mathématique**.

---

Si tu veux, je peux te faire **un schéma clair de la logique des clics** pour que tu voies exactement comment `ui.js` et `app.js` communiquent, étape par étape, avant même de coder.

Veux‑tu que je fasse ça ?
