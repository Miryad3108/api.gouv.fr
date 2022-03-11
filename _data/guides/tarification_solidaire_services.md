---
title: Tarification solidaires des services municipaux
tagline: Vous êtes une commune ou un éditeur de logiciel ? Calculez facilement le Quotient Familial grâce aux données de la CAF et de la DGFiP accessibles travers l'API Particulier.
tags: cas usage, api particulier, portail famille, quotient familial dématérialisé, tarification solidaire
image: portail_famille.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

De nombreuses collectivités proposent aux familles une tarification “solidaire” des services municipaux, et utilisent généralement l'adresse, le quotient familial de la Caisse d’Allocations Familiales (CAF) et la composition du foyer pour cela.

## Calcul du tarif à appliquer

En intégrant la brique API Particulier dans votre système d'information, ou votre site internet :
- Vous accédez facilement aux données de la CAF et de la DGFIP
- Vous n'avez plus besoin de demander d'avis fiscal ou de quotient familial aux parents
- Vous n'avez pas de vérification supplémentaire car les informations sont certifiées 
- La démarche peut être faite 100% en ligne

Ce système présente des avantages importants pour les familles et pour les agents.

## Les données disponibles

Voici les données de la CAF (composition familiale du foyer du demandeur) et de la DGFIP (pour vérifier les conditions d'éligibilité d'une demande) accessibles directement avec l'API :

| Donnée            | Commentaire                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Allocataire       | L'état-civil du demandeur (nom prénom date de naissance)                                      |
| Enfant(s)         | Le/La/Les enfant(s) (nom, prenom, date de naissance)                                          |
| Quotient Familial | Le quotient familial calculé par la CAF                                                       |
| Avis d'imposition | statut d’imposition, montant de l'impôt, revenu fiscal de référence, nombre de parts fiscales |
| Adresse           | L'adresse du foyer et/ou l'adresse fiscale du demandeur                                       |

NB: Il y a une différence entre le Quotient Familial (QF) de la CAF et le Quotient Familial de la DGFIP :
- Le Quotient Familial CAF est revu à chaque changement de situation familiale et/ou professionelle. Il prend en compte 1/12e du revenue imposable de l’année N-2 + les Prestations familiales du mois de référence divisés par le nombre de part fiscale du foyer.
- Le Quotient Familiale « DGFIP » est calculé au moment de la déclaration de revenus. Il divise le revenue imposable de l’année N-1 par le nombre de part fiscale du foyer.


## Comment accéder à la donnée

**Cadre légal :**
L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de nos services et la motiver.
Les articles suivants peuvent vous aider à justifier vos droits d'accès aux données :
- Article L.213  du Code de l'éducation
- Article R531-52  du Code de l'éducation
- Article L114-8 : La loi relative à la protection des données personnelles a été promulguée le 20 juin 2018. Elle adapte la loi "Informatique et libertés" du 6 janvier 1978 au "paquet européen de protection des données".
- Certaines délibérations prises par la ville et/ou par la commune peuvent constituer le cadre légal


**Pour remplir votre demande, vous aurez besoin :**
- de votre numéro SIRET
- du cadre juridique
- de la description du service justifiant une simplification pour les citoyens
- des coordonnées de l'équipe
- des coordonnées de votre délégué à la protection des données et responsable de traitement


**Modus Operandi pour les administrations :**
- Vérifiez dans la liste ci-dessous que votre éditeur propose bien ce cas d'usage
- Cliquez sur "Remplir une demande"
- Remplissez les données relatives à votre organisation
- Sélectionnez "Développeurs en interne" si vous développez vous-même une solution, ou "Editeur de logiciel" si vous travaillez avec un editeur
- Sélectionnez votre éditeur et le formulaire adapté

PS : Ne modifiez pas la liste des données d'un formulairre pré-rempli
PS : L’éditeur ne peut pas remplir une demande à la place de l’organisation qui exploitera les données
PS : Si votre éditeur n'est pas dans la liste,  contactez-le, remontez-nous l’information, ou contactez un autre éditeur de la liste

<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>

## Editeurs

Si vous travaillez avec l'un des éditeurs ou intégrateurs ci-dessous vous pouvez faire une demande pré-remplie :

| Editeur                      | Nom de la solution            |
| ---------------------------- | ----------------------------- |
| Agora Plus                   | Agor@Famille Premium          |
| Ciril Group                  | Portail famille Civil Enfance |
| JVS                          | Parascol – MonEspaceFamille   |
| Arpège                       | Espace Citoyens Premium       |
| NFI Nord France Informatique |                               |
| Entr'ouvert                  | Publik                        |
| Berger Levrault              | BL Enfance                    |
| Jdéalise                     | Cantine de France             |
| Mushroom                     | CityFamily                    |
| TeamNet                      | Axel Portail Famille          |
| Abelium                      | Domino Web                    |
| Waigéo                       | MyPérischool                  |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [contact@particulier.api.gouv.fr](mailto:contact@particulier.api.gouv.fr)