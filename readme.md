# Tests Automatisés Ornikar Assurance Auto

## Description générale du projet
Dans ce projet, j'ai implémenté quelques exemples de tests automatisés pour la plateforme d'assurance Ornikar. 
Les tests couvrent la UI ainsi que l'API. J'ai créé des scénarios assez basiques pour démontrer l'approche, mais une implémentation complète nécessiterait une couverture plus exhaustive.

## Technologies utilisées
- Cypress pour l'exécution des tests
- Cucumber pour une approche BDD
- Node.js comme environnement d'exécution 
- GitHub Actions pour l'intégration continue (2 checks, 1 pour le coté front et 1 pour le backend)
- Mochawesome pour la génération des rapports

## Installation et utilisation
```bash
npm install
npm run test:frontend  # Tests front
npm run test:backend   # Tests API
```
## CI
- Chaque commit permettra de lancer une CI de validation.
![image](https://github.com/user-attachments/assets/f8397fc0-2356-4567-b358-8df124111895)


## Génération des rapports
Les résultats des tests sont disponibles dans deux répertoires distincts :

- 'reports/frontend' : rapports des tests front
- 'reports/backend' : rapports des tests d'API
  
- Les rapports sont archivés dans la vue summary de chaque build dans la rubrique #Actions  
![image](https://github.com/user-attachments/assets/0356361e-b4f5-4f9a-9ea4-208817386664)


Ex: https://github.com/Bochrajm/Bochrajm-ornikar-assurance-auto-tests/actions/runs/11465655472

# Analyse du Site d'Assurance Ornikar

## Partie I - la UI

### 1. Analyse du Site
Ornikar est une plateforme digitale proposant des formations au code de la route et à la conduite.
Pour la partie qui nous intéresse, Le site permet également de gérer son assurance auto : comparaison de devis, souscription en ligne et gestion des sinistres.

### 2. Stratégie de Test

#### Priorités d'automatisation :
1. Parcours de génération des devis - La conversion des visiteurs en clients commence ici.
2. Processus de souscription - L'étape cruciale de transformation.
3. Les navigations - s'assurer que la page d'accueil se charge correctement et que les différents contrôles de navigations marchent aussi.
4. Validation des formulaires - s'assurer que les données renseignées par les utilisateurs sont cohérentes.
#### Points clés avec les 3-amigos :
* Profils utilisateurs variés (novice, expérimenté...)
* Workflows différents au niveau des formulaires de devis (Nouvel achat, nouveau contrat, résiliation etc..)
* Cas particuliers et gestion d'erreurs
* Aspect performance

#### Approche Tests/Automatisation :
1. Smoke tests, tests manuels récurrents pour détecter les problèmes.
2. Automatisation des scénarios principaux
3. Tests de bout en bout
4. CI (Mettre en place un processus de validation, Ex: Tests en continue après chaque commit par exemple avec une CI de validation, validation poussée avant chaque release (tests de perf, manuels etc..), à discuter...)

#### Framework privilégié:
Cypress avec Cucumber (un standard courant dans le domaine).


## Partie II - API

### 1. Analyse pour le Product Owner
L'API d'Ornikar gère les aspects critiques derrière les coulisses :
* Tarification
* Données des véhicules
* Gestion des contrats d'assurance
* Intégration multi-services (assureurs sous-traitants etc.)

Dans le cadre de ce projet, nous nous concentrons sur un sous-ensemble d'endpoints spécifiques :
* (++) Validation des véhicules par plaque d'immatriculation (/api/v2/vehicles/license-plate/<plate>)
* Accès au catalogue des marques et modèles de véhicules ( /vehicles/brands  && /vehicles/brands/<brand>/models )
* (++) Validation des communes (/communes/<zip>)

(++) = Endpoint figure au moins dans un scénario de test dans le code.

Ces endpoints sont essentiels pour la génération de devis en temps réel.

### 2. Stratégie

#### Points à tester/automatiser :
1. Endpoint véhicule (/api/v2/vehicles/license-plate) :
  * Validation des données retournées
  * Gestion des plaques invalides

2. Endpoints marques et modèles :
  * Cohérence des données retournées
  * Gestion des marques invalides

3. Endpoint communes :
  * Validation des codes postaux
  * Gestion des codes postaux invalides


#### Stratégie d'automatisation:
* Tests CI.
* Tests de contrat pour valider la structure des réponses.
* Tests fonctionnels.
* Tests d'intégration.
* Tests de non régression.
* Tests de performance pour les endpoints critiques.
* Tous ces tests doivent rentrer dans un processus de validation à définir (Quand tester quoi dans le cycle de développement)


Note : Les scénarios BDD implémentés représentent une base démonstrative. Une implémentation complète nécessiterait une couverture plus large des fonctionnalités et cas d'usage.

