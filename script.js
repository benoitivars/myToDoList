// VARIABLES GENERALES
var instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));
var compteurToDo = 1;
var toDoList = [];
var tempoData;

// CODE DE BASE


    // ICI ON INITIALISE LA BOUCLE A L'ORIGINE DE NOTRE ALGO, AVEC UNE WHILE OU LA CONDITION DE VERIFIABILITE PASSE PAR "NON 4", CAR DANS L'IDEE, 4 NOUS FAIT SORTIR DE L'ALGO.

while (instructionChoice !== 4) {


    if (instructionChoice === 1) {
        tempoData = prompt(`Ajoutez l'activité que vous voulez faire : ${compteurToDo}. `);
        toDoList.push(tempoData);
        compteurToDo = compteurToDo + 1;
        instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));


    } else if (instructionChoice === 2) {
        alert("********* TODO LIST *********\n" + toDoList.join("\n"));
        instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));


    } else if (instructionChoice === 3) {
        var indexToDelete = parseInt(prompt(`Entrez l'élément que vous voulez supprimer en fonction de son numéro : `)) - 1;
        toDoList.splice(indexToDelete, 1);
        instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));


    } else if (instructionChoice < 1 || instructionChoice > 4) {
        alert("Choix non valide. Veuillez entrer un chiffre entre 1 et 4.");
        instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));


    }
    else {
        instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter, en entrant le chiffre correspondant :\n1. new\n2. list\n3. delete\n4. quit`));
    }
}


alert("********* TODO LIST *********\n" + toDoList.join("\n"));
