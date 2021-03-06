
// A-1) Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente01 = {
    "nome": "Aris",
    "cognome": "Goi",
    "eta": 24,
};

// A-2) Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente01){
    console.log(studente01[key])
};

// ------------------------------------------------------------------------------ //

// B-1) Creare un array di oggetti di studenti.
var studenti = [
    {
        "nome":"Berardina",
        "cognome":"Gracci",
        "eta":35,
    },
    {
        "nome":"Urania",
        "cognome":"Redolfi",
        "eta":30,
    },
    {
        "nome":"Erido",
        "cognome":"Pollino",
        "eta":36,
    },
];

// B-2) Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log('');
console.log('###----- Primo Ciclo -----###');
for (i=0; i<studenti.length; i++){
    console.log(`Nome: ${studenti[i].nome} / Cognome: ${studenti[i].cognome}`)
};


// B-3) Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
for (i=0; i<3; i++){
    let newStudenteNome = prompt('inserisci il NOME del nuovo studente');
    let newStudenteCognome = prompt('inserisci il COGNOME del nuovo studente');
    let newStudenteEta;
    do{
        newStudenteEta = parseInt(prompt('inserisci l\'ETÀ del nuovo studente'));
    } while(isNaN(newStudenteEta) || newStudenteEta > 100);

    let newStudente = {
        "nome": newStudenteNome,
        "cognome": newStudenteCognome,
        "eta": newStudenteEta,
    };
    studenti.push(newStudente);
};

// B-4) Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log('');
console.log('###----- Secondo Ciclo -----###');
for (i=0; i<studenti.length; i++){
    console.log(`Nome: ${studenti[i].nome} / Cognome: ${studenti[i].cognome}`)
};

// B-5 Console log di tutto l'array
console.log(studenti);