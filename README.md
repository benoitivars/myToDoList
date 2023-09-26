# Feedback

Pour être honnête, si l'algorythmie m'est vite venue, j'ai aps mal aidé chatGPT pour écrire le code correctement. Je me perds encore bien trop facilement dans les parenthèses à fermer, ouvrir, où se mettre, ...

Dans tous les cas, l'exo n'était pas très dur,t ant qu"on ale raisonnement.

## Code original :

Pour le cas 2 et 4, voici ce que Chat GPT m'a proposé et que j'ai c/c sans vraiment prendre la peine de le lire ou décomposer :  

```javascript
        var listMessage = "********* TODO LIST *********\n";
        for (var i = 0; i < toDoList.length; i++) {
            listMessage += (i + 1) + ". " + toDoList[i] + "\n";
        }
        alert(listMessage);
```

Bon déjà, je rpéfère indenter la seconde ligne :

```javascript
        var listMessage = "********* TODO LIST *********\n";
            for (var i = 0; i < toDoList.length; i++) {
                listMessage += (i + 1) + ". " + toDoList[i] + "\n";
        }
        alert(listMessage);
```

Enfin, voilà une solution bien plus simple qui ne demande pas à chaque fois de passer par chaque élément du tableau :

```javascript
alert("********* TODO LIST *********\n" + toDoList.join("\n"));
```

C'est cette ligne que je choisis de mettre dans mon code !

Seul petit défaut ? Je perds ma numérotation devant les éléments de ma liste, et d'après ChatGPT, je pourrais les retrouver en utilisant ".map()"... que je ne connais aps encore. DOnc en l'état, je laisse de côté.

## Ce que je dois retenir :

Tout ça vient ddu fait que j'ai survolé trop rapidement la méthode ".join()" qui est tout de même bien plus rapide, car sort chaque élément du tableau pour les afficher en une string, dont les modalités de séparation sont indiquées par ce qu'on met dans la parenthèse.  
