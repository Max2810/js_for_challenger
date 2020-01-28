let myStr = `         Hello wOrld! \n fOObar!   \n pomme orange    `;

/**
 * Exercices:
 * 
 * @doc: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 * 
 * !! MERCI DE RESPECTER L'ORDRE DES ETAPES !!
 * 
 * 0. Remplacer la sous chaine "pomme orange" par "pomme verte"
 * 1. Séparer la chaine par retour chariot "\n" avec la méthode .split
 * 2. Supprimer les espaces non nécessaires dans chaque sous-chaîne. 
 * 3. Recombiner les sous-chaines en une seul chaîne en les séparant d'une virgule !
 * 4. Assurez-vous que les caractères de la chaine soi en minuscule.
 * 5. Afficher la taille de la chaine dans la console (le terminal).
 * 6. Afficher la valeur de la chaine dans la console (le terminal).
 */

 // Etape 0 -> Compléter/continuer le code
 let replaceStr = myStr.replace("pomme orange", "pomme verte");
 let newStr = replaceStr.split('\n');
 let firstStr = newStr[0].slice(9, 21);
 let sectStr = newStr[1].replace(/ /g, "");
 let thirdStr = newStr[2].replace(" ", "");
 
 const finalStr = (`${firstStr.toLowerCase()}, ${sectStr.toLowerCase()}, ${thirdStr.toLowerCase()}`);
 
 console.log(finalStr);
 console.log(finalStr.length);
 