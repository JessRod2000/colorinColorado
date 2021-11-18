const db = firebase.firestore();

const getCuentosFabula = () => db.collection('Fabulas').get();
const getCuentosClasicos = () => db.collection('Clasicos').get();
const getCuentosFantasia = () => db.collection('Fantasia').get();
 
var titulospan = document.getElementById('text1'); 
botonEliminar.onclick = async(e) =>{
      const coleccionFabulas = await getCuentosFabula();
      const coleccionFantasia = await getCuentosFantasia();
      const coleccionClasicos = await getCuentosClasicos();
      cuentoEliminado = document.getElementById('cuentobox').value;
      var categoria = document.getElementById('categorias').value;
        botonEliminar = document.getElementById('botonEliminar');
        console.log(cuentoEliminado);
        if(cuentoEliminado!= ""){
           if(categoria=="Fantasia"){
            coleccionFantasia.forEach(doc =>{
             if (doc.data().TituloCuento==cuentoEliminado){
                doc.ref.delete();
                alert("Cuento borrado de la categoría Fantasía");
             }
        });
        }else{
           if(categoria=="Clasicos"){
            coleccionClasicos.forEach(doc =>{
                 if (doc.data().TituloCuento==cuentoEliminado){
                    doc.ref.delete();
                    alert("Cuento borrado de la categoría Clásicos");
                 }
            });
            }else{
               if(categoria=="Fabulas"){
                coleccionFabulas.forEach(doc =>{
                     if (doc.data().TituloCuento==cuentoEliminado){
                        doc.ref.delete();
                        alert("Cuento borrado de la categoría Fábulas");
                     }
                 })
              }
            }
         }
          
                document.getElementById("form").reset();
        }else{
            titulospan.innerHTML="Ingrese titulo del cuento";
        }
    } 