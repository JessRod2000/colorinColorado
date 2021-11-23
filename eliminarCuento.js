const db = firebase.firestore();

var controlar = "true";
var categoria,titulobox;

document.getElementById("form").addEventListener("submit", function(event){
   event.preventDefault();
   titulobox = document.getElementById("cuentobox").value;
   categoria = document.getElementById("categorias").value;

    verificarExistencia();
   
   document.getElementById("form").reset();
})
//-----------------ELIMINAR------------------------------------
function eliminar(){
    return new Promise((resolve,reject)=>{
    if(categoria == "Fantasia"){
        dbfirestore.collection('Fantasia').get().then((snapshot)=>{
           snapshot.docs.forEach(doc=>{
               if(titulobox == doc.data().TituloCuento){
                alert("Cuento eliminado de la colección Fantasía");
                doc.ref.delete();
               }

           })
           
       })
       setTimeout(()=>{
        resolve();
        ;} , 1000);
     }else{
         if(categoria == "Fabulas"){
           dbfirestore.collection('Fabulas').get().then((snapshot)=>{
              snapshot.docs.forEach(doc=>{
                  if(titulobox == doc.data().TituloCuento){
                    alert("Cuento eliminado de la colección Fábulas");
                    doc.ref.delete();
                  }
              })
          })
          setTimeout(()=>{
            resolve();
            ;} , 1000);
         }else{
           dbfirestore.collection('Clasicos').get().then((snapshot)=>{
              snapshot.docs.forEach(doc=>{
                  if(titulobox == doc.data().TituloCuento){
                    alert("Cuento eliminado de la colección Clásicos");
                    doc.ref.delete();
                  }
              })
              
          })
          setTimeout(()=>{
            resolve();
            ;} , 1000);
         }
         
     }
    });
}
//------------------------------------
async function verificarExistencia(){
    await testTitulos();
if (controlar == "true" ) {
    alert('El cuento no se encuentra registrado');
}else {
        await eliminar();
        controlar = "true";
    }
}
//-----revisar si existe el cuento-------
function testTitulos(){
return new Promise((resolve,reject)=>{
    var titulo = document.getElementById("cuentobox").value;
        dbfirestore.collection('Fabulas').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                if(titulo == doc.data().TituloCuento){
                    controlar = "false";
                }
            }
            );
            
    setTimeout(()=>{
        resolve();
        ;} , 1000);
    });
    dbfirestore.collection('Fantasia').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            if(titulo == doc.data().TituloCuento){
                controlar = "false";
            }
        }
        );
        
setTimeout(()=>{
    resolve();
    ;} , 1000);
});
dbfirestore.collection('Clasicos').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        if(titulo == doc.data().TituloCuento){
            controlar = "false";
        }
    }
    );
setTimeout(()=>{
resolve();
;} , 1000);
});

});

}