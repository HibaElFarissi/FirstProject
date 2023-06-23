const clients = [
                    {
                       nom: 'hiba', age:18,              
                    },
                    {
                       nom: 'kaiutar', age:20,              
                    },
                    {
                       nom: 'amal', age:23,              
                    }
                 ]
const noms = clients.map(function(client){
                return client.nom
})
console.log(noms);
// EX1: 
// Créer la classe Document contenant les attributs id et dateEdition: 
class Document {
        constructor(id, dateEdition){
                    this.id = id;
                    this.dateEdition = dateEdition;
        }           
}

// Créer la classe Livre qui hérit de la classe Document contenant
// en plus les attributs titre et auteur:
class Livre extends Document{
        constructor(id, dateEdition, titre, auteur){
                    super(id, dateEdition);
                    this.titre= titre;
                    this.auteur = auteur;
        }
        infoLivre(){
             return `Livre: id:${this.id} titre: ${this.titre} auteur: ${this.auteur} dateEdition: ${this.dateEdition}`
        }
}

// Créer deux instances do Document: 
let doc1 = new Document(1, "2004/04/03");
let doc2 = new Document(2, "1998/04/03");

// Créer deux instances de livre: 
let liv1 = new Livre(1, "2004/04/03", "Don't GiveUp", 'TSM');
let liv2 = new Livre(2, "1998/04/03", "Just DoIt", 'OSM');
let liv3 = new Livre(3, "1990/04/03", "DoIt", 'TOSM');


// Créer la méthode infoLivre qui retourne les informations du livre exemple: 
// livre: id:10 titre: 'POO' auteur: 'rami' dateEdition: '2004/04/03';

console.log(liv1.infoLivre());
console.log(liv2.infoLivre());

