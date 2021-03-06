const db = firebase.firestore();

const primeraCol = document.getElementById("primeraCol");
const segundaCol = document.getElementById("segundaCol");
const terceraCol = document.getElementById("terceraCol");

const getCuentosFabula = () => db.collection('Fabulas').get();
const getCuentosClasicos = () => db.collection('Clasicos').get();
const getCuentosFantasia = () => db.collection('Fantasia').get();

const btnFabulas = document.getElementById("Fabulas");
const btnFantasia = document.getElementById("Fantasia");
const btnClasicos = document.getElementById("Clasicos");

document.getElementById("Fabulas").onclick = async(e) =>{
    const coleccionFabula = await getCuentosFabula();
    var numActual=1;
    btnFabulas.style.backgroundColor="#078061";
    btnFabulas.style.color="#fbfcfc";
    btnFantasia.style.backgroundColor="transparent";
    btnFantasia.style.color="#00aae4";
    btnClasicos.style.backgroundColor="transparent";
    btnClasicos.style.color="#00aae4";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionFabula.forEach(doc =>{
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Fabulas.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Fabulas.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Fabulas.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=1;
            }
        }
    })
}
document.getElementById("Fantasia").onclick = async(e) =>{
    const coleccionFantasia = await getCuentosFantasia();
    var numActual=1;
    btnFantasia.style.backgroundColor="#078061";
    btnFantasia.style.color="#fbfcfc";
    btnFabulas.style.backgroundColor="transparent";
    btnFabulas.style.color="#00aae4";
    btnClasicos.style.backgroundColor="transparent";
    btnClasicos.style.color="#00aae4";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionFantasia.forEach(doc =>{
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Fantasia.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Fantasia.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Fantasia.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=1;
            }
        }
    })
}
document.getElementById("Clasicos").onclick = async(e) =>{
    const coleccionClasicos = await getCuentosClasicos();
    var numActual=1;
    btnClasicos.style.backgroundColor="#078061";
    btnClasicos.style.color="#fbfcfc";
    btnFabulas.style.backgroundColor="transparent";
    btnFabulas.style.color="#00aae4";
    btnFantasia.style.backgroundColor="transparent";
    btnFantasia.style.color="#00aae4";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionClasicos.forEach(doc =>{
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Clasicos.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Clasicos.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Clasicos.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=1;
            }
        }
    })
}
/*
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
    
})*/