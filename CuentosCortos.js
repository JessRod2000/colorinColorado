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
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
          
         <form action="Fabulas.html" method="GET">
          <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
       </form>  
          `
        
    })
    
    coleccionClasicos.forEach(doc =>{
        cuentosClas.innerHTML += `<div>
        <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
          
        <form action="Clasicos.html" method="GET">
         <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
         
       </form>

        `
    })
    coleccionFantasia.forEach(doc =>{
        cuentosFan.innerHTML += `<div>
        <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
          
        <form action="Fantasia.html" method="GET">
         <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
         
       </form>

        `
    })
})
