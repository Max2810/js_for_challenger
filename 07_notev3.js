/**
 * NE PAS TOUCHEZ LE CODE CI-DESSOUS
 */
function Eleve(nom) {
    this.nom = nom;
    this.scolariser = Math.random() > 0.5;
    if (this.scolariser) {
        this.noteMoyenne = Math.floor( Math.random() * 20 ) + 1;
    }
}

/**
 * Pour cet exercice vous devez:
 * 0. Si aucun élève n'est scolariser, passer à l'étape 3 directement !
 * 1. Calculer la moyenne de classe des élèves scolariser.
 * 2. Etablir un classement des élèves scolariser (avec leur noteMoyenne).
 * 3. Etablir la liste des élèves non scolariser.
 * 4. Afficher l'ensemble des résultats dans la console (le terminal).
 */

/**
 * Liste des élèves
 */
const eleves = [
    new Eleve("Thomas"),
    new Eleve("Alexandre"),
    new Eleve("Irvin"),
    new Eleve("Anthony"),
    new Eleve("Mark"),
    new Eleve("Bobby"),
    new Eleve("Martin"),
    new Eleve("Henry")
];

// Afficher les Elèves dans le terminal
console.log(eleves);

const elevesScolariser = eleves.filter(e => e.scolariser);
const note = elevesScolariser.map(e => e.noteMoyenne);

const n = elevesScolariser.length

console.log(elevesScolariser);
console.log(note.reduce(
    (acc, x) => acc + (x) /n, 0
));

let classement = elevesScolariser.sort((a, b) => a.noteMoyenne - b.noteMoyenne);
console.log(classement)

const elevesNonScolariser = eleves.filter(e => e.scolariser === false);
console.log(elevesNonScolariser)