const db = firebase.firestore();

const getCuentosFabula = () => db.collection('Fabulas').get();
const getCuentosClasicos = () => db.collection('Clasicos').get();
const getCuentosFantasia = () => db.collection('Fantasia').get();

botonEliminar.onclick = async(e) =>{
      const coleccionFabulas = await getCuentosFabula();
      const coleccionFantasia = await getCuentosFantasia();
      const coleccionClasicos = await getCuentosClasicos();
      cuentoEliminado = document.getElementById('cuentobox').value;
      var categoria = document.getElementById("categorias").value;
       
        botonEliminar = document.getElementById("botonEliminar");
        var existe=false;
        if(categoria=="Fantasia"){
            
        coleccionFantasia.forEach(doc =>{
             if (doc.data().TituloCuento==cuentoEliminado){
                doc.ref.delete();
                alert("Cuento borrado de la Base de Datos");
                existe=true;
             }
        });
        }else{
           if(categoria=="Clasicos"){
            coleccionClasicos.forEach(doc =>{
                 if (doc.data().TituloCuento==cuentoEliminado){
                    doc.ref.delete();
                alert("Cuento borrado de la Base de Datos");
                existe=true;
                 }
            });
            }else{
               if(categoria=="Fabulas"){
                coleccionFabulas.forEach(doc =>{
                     if (doc.data().TituloCuento==cuentoEliminado){
                        doc.ref.delete();
                        alert("Cuento borrado de la Base de Datos");
                        existe=true;
                     }
                 })
              }
            }
         }
         if(existe==false){
            alert("El cuento no existe en la colección");
         }
         document.getElementById("form").reset();
}
    