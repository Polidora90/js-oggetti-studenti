/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

//creo un oggetto che descriva uno studente
var protoStudent = {
    name: "Susanna",
    surname: "Marinetti",
    age: "31"
};

//Stampo tutte le proprietà di un oggetto
for (var key in protoStudent) {
    console.log(protoStudent[key]);
}

//creo un array di oggetti di studenti
var allStudents = [

    {
        name: "Lino",
        surname: "Pannofino",
        age: "57"
    },

    {
        name: "Herbert",
        surname: "Ballerina",
        age: "41"
    },

    {
        name: "Anna",
        surname: "Pannocchia",
        age: "36"
    },

    {
        name: "Nicola",
        surname: "Cordioli",
        age: "33"
    }
];

//per ogni studente stampo nome e cognome con un ciclo
for (var i = 0; i < allStudents.length; i++) {
    var student = allStudents[i];
    console.log(student['name'] + " " + student['surname']);
};