const db = firebase.firestore();

const cuentoContainer = document.getElementById("cuento-container");
const cuentoTexto = document.getElementById("cuento-texto");

const getCuento = () => db.collection('Clasicos').get();

window.addEventListener('DOMContentLoaded', async(e) =>{
    const querySnapshot = await getCuento();
    querySnapshot.forEach(doc =>{
        //-----------------------Abajo se usa el titulo----------------------------
        if(doc.data().TituloCuento == "El cuervo y la jarra"){

            cuentoContainer.innerHTML += `<div>
                <h1>${doc.data().TituloCuento}</h1>
                <div>
                    <img src=${doc.data().ImgUrl} height="200px">
                <div>
            </div>`
                
            cuentoTexto.innerHTML += `<div>
                <h3><p>${doc.data().ContenidoCuento}</p></h3>
            </div>`
        }
    })
})