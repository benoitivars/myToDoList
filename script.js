// VARIABLES GENERALES
var instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));
var compteurToDo = 1;
var toDoList = [];
var tempoData;

// CODE DE BASE
while (instructionChoice !== 4) {
    if (instructionChoice === 1) {
        tempoData = prompt(`Ajoutez l'activité que vous voulez faire : ${compteurToDo}. `);
        toDoList.push(tempoData);
        compteurToDo = compteurToDo + 1;
        instructionChoice = parseInt(prompt(`Choisissez l'instruction à exécuter :\n1. new\n2. list\n3. delete\n4. quit`));
    } else if (instructionChoice === 2) {
        var listMessage = "********* TODO LIST *********\n";
        for (var i = 0; i < toDoList.length; i++) {
            listMessage += (i + 1) + ". " + toDoList[i] + "\n";
        }
        alert(listMessage);
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
var finalListMessage = "********* TODO LIST *********\n";
for (var i = 0; i < toDoList.length; i++) {
    finalListMessage += (i + 1) + ". " + toDoList[i] + "\n";
}
alert(finalListMessage);