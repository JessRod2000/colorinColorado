const dbfirestore = firebase.firestore();
function eliminar_cuento(){ 
    /* var TituloCuento = "Los tres cerditos"
    const db = firebase.firestore();
    const catClasicos = db.child('Clasicos');
    const query = catClasicos.orderByChild('TituloCuento').equalTo(TituloCuento).limitToFirst(1);
    console.log(query); */
    debugger;
    const response = dbfirestore.collection("Clasicos").doc().delete("Los tres cerditos");

}