let livres = [
       {
             id: 10,
             titre: "POO",
             auteur: 'RAMI',
             prix: 300,      
       },
       {
             id: 11,
             titre: "JS ES6",
             auteur: 'RAMI',
             prix: 230,      
       },
       {
             id: 12,
             titre: "HTML & CSS",
             auteur: 'OSM',
             prix: 330,      
       },
       {
             id: 13,
             titre: "PHP & SQL",
             auteur: 'TSM',
             prix: 340,      
       },
]
// Créer la liste titres contenant tous les titres de livres: 
// Methode 1: 
const titres = livres.map(function(item){
                    return item.titre;
});
console.log(titres);
// Methode 2: 
const tit = livres.map(item => item.titre);
console.log(tit);

// Créer la liste titresRAMI contenant les livres l'auteur 'RAMI': 
let titresRAMI = livres.filter(function(livre){
                    return livre.auteur == 'RAMI'})
                    .map(function(item){return item.titre});

console.log(titresRAMI);

// Chercher le livre dont le id=12: 
const livre = livres.find(function(livre){
                    return livre.id == 12})

console.log(livre);

//Calculer le total des prix: 
const total = livres.reduce(function(total, livre){
                    return total+=livre.prix},0)
                 
console.log(total);

// Calculer un Array mesLivres copie de livres: 

let mesLivres =[...livres]
console.log(mesLivres);