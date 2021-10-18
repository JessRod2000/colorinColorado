const db = firebase.firestore();

const cuentosFab = document.getElementById("cuentosFab");
const cuentosClas = document.getElementById("cuentosClas");
const cuentosFan = document.getElementById("cuentosFan");

const getCuentosFabula = () => db.collection('Fabulas').get();
const getCuentosClasicos = () => db.collection('Clasicos').get();
const getCuentosFantasia = () => db.collection('Fantasia').get();


window.addEventListener('DOMContentLoaded', async(e) =>{
    const coleccionFabula = await getCuentosFabula();
    const coleccionClasicos = await getCuentosClasicos();
    const coleccionFantasia = await getCuentosFantasia();

    coleccionFabula.forEach(doc =>{
        cuentosFab.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px">
            <h1>${doc.data().TituloCuento}</h1>
        </div>`
    })
    coleccionClasicos.forEach(doc =>{
        cuentosClas.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px">
            <h1>${doc.data().TituloCuento}</h1>
        </div>`
    })
    coleccionFantasia.forEach(doc =>{
        cuentosFan.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px">
            <h1>${doc.data().TituloCuento}</h1>
        </div>`
    })
})