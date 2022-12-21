// tuple sono un nuovo tipo di dato introdotto da TypeScript
// ci serve a definire un array che ha elementi di diverso tipo tra loro
// fissare il tipo di un numero di elementi (ad esempio fissiamo il tipo dei primi 2 elementi) -> il mio array avrà uno schema preciso dei tipi di dato
// array in cui voglio memorizzare nome e età di una persona -> il primo elemento string, il secondo number

let persona: [string,number] = ["Mario Rossi", 25]
// tuple non hanno una dimensione fissa -> posso aggiungere senza definire tipi
// è possibile aggiungere altri elementi purchè dello stesso tipo di dati dichiarato
persona.push("roma") ;
persona.push(1990)

// array persona contiene sei elementi -> 2 di tipo string, 2 number, e 2 undefined
// tuple garantisce solo che i primi due siano del tipo specificato
// tuple vincolano al rispetto dei tipi dichiarati (esempio non posso mettere dei boolean)