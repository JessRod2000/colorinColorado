const db = firebase.firestore();

const primeraCol = document.getElementById("primeraCol");
const segundaCol = document.getElementById("segundaCol");
const terceraCol = document.getElementById("terceraCol");

const getCuentosHistoria = () => db.collection('Historia').get();
const getCuentosLeyendas = () => db.collection('Leyendas').get();
const getCuentosTerror = () => db.collection('Terror').get();

const btnHistoria = document.getElementById("Historia");
const btnLeyendas = document.getElementById("Leyendas");
const btnTerror = document.getElementById("Terror");

window.addEventListener('DOMContentLoaded', async(e) =>{
    const coleccionHistoria = await getCuentosHistoria();
    var numActual=1;
    btnHistoria.style.backgroundColor="#07c898";
    btnHistoria.style.color="#fbfcfc";
    btnLeyendas.style.backgroundColor="#31e6b8";
    btnLeyendas.style.color="#00aae4";
    btnTerror.style.backgroundColor="#31e6b8";
    btnTerror.style.color="#00aae4";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionHistoria.forEach(doc =>{
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Historia.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Historia.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Historia.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=1;
            }
        }
    })
})
document.getElementById("Historia").onclick = async(e) =>{
    const coleccionHistoria = await getCuentosHistoria();
    var numActual=1;
    btnHistoria.style.backgroundColor="#07c898";
    btnHistoria.style.color="#fbfcfc";
    btnLeyendas.style.backgroundColor="#31e6b8";
    btnLeyendas.style.color="#00aae4";
    btnTerror.style.backgroundColor="#31e6b8";
    btnTerror.style.color="#00aae4";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionHistoria.forEach(doc =>{
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Historia.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Historia.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Historia.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form> 
                `
                numActual=1;
            } 
        } 
    }) 
}
document.getElementById("Leyendas").onclick = async(e) =>{
    const coleccionLeyendas = await getCuentosLeyendas();
    var numActual=1;
    btnHistoria.style.backgroundColor="#31e6b8";
    btnHistoria.style.color="#00aae4";
    btnLeyendas.style.backgroundColor="#07c898";
    btnLeyendas.style.color="#fbfcfc";
    btnTerror.style.backgroundColor="#31e6b8";
    btnTerror.style.color="#00aae4";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionLeyendas.forEach(doc =>{
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Leyendas.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Leyendas.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Leyendas.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=1;
            }
        }
    })
}
document.getElementById("Terror").onclick = async(e) =>{
    const coleccionTerror = await getCuentosTerror();
    var numActual=1;
    btnHistoria.style.backgroundColor="#31e6b8";
    btnHistoria.style.color="#00aae4";
    btnLeyendas.style.backgroundColor="#31e6b8";
    btnLeyendas.style.color="#00aae4";
    btnTerror.style.backgroundColor="#07c898";
    btnTerror.style.color="#fbfcfc";
    primeraCol.innerHTML = ``;
    segundaCol.innerHTML = ``;
    terceraCol.innerHTML = ``;

    coleccionTerror.forEach(doc =>{
        console.log(doc.data().TituloCuento);
        if(numActual==1){
            primeraCol.innerHTML += `<div>
            <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
            
            <form action="Terror.html" method="GET">
            <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
            </form>  
            `
            numActual=2;
        }else{
            if(numActual==2){
                segundaCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Terror.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=3;
            }else{
                terceraCol.innerHTML += `<div>
                <img src=${doc.data().ImgUrl} height="200px" style="margin-bottom:10px ; margin-top: 10px">
                
                <form action="Terror.html" method="GET">
                <input type="submit" id="btnTitulo" class="boton_cuento" name="${doc.data().ImgUrl}" value="${doc.data().TituloCuento}"/>
                </form>  
                `
                numActual=1;
            }
        }
    })
}
