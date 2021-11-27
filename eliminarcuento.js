const dbfirestore = firebase.firestore();

var controlar = "true";
var categoria,titulobox;
var fab ="true";
var fan ="true";
var clasi ="true";
var existe ="true";

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
      await categorias();
      if(existe == "false"){
            alert('El cuento no se encuentra registrado en la categoria '+ cat);
            existe = "true";
            fab = "true";
            fan = "true";
            clasi = "true";
      }else{
            await eliminar();
            controlar = "true";

      }
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
                    fab="false";
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
                fan="false";
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
               clasi="false";
            }
         }
         );
      setTimeout(()=>{
      resolve();
      ;} , 1000);
      });
 
      });
}

function categorias(){
   return new Promise((resolve,reject)=>{
       if(categoria == "Fabulas"){
           if(fan=="false"){
               existe = "false";
               cat = "Fábulas"
           }else{
               if(clasi =="false"){
                   existe = "false";
                   cat = "Fábulas"
               }
           }
           console.log(existe);
           setTimeout(()=>{
               resolve();
               ;} , 1000);
       }else{
           if(categoria == "Fantasia"){
               if(fab=="false"){
                   existe = "false";
                   cat = "Fantasía"
               }else{
                   if(clasi =="false"){
                       existe = "false";
                       cat = "Fantasía"
                   }
               }
               console.log(existe);
               setTimeout(()=>{
                   resolve();
                   ;} , 1000);
           }else{
               if(categoria == "Clasicos"){
                   if(fan=="false"){
                       existe = "false";
                       cat = "Clásicos"
                   }else{
                       if(fab =="false"){
                           existe = "false";
                           cat = "Clásicos"
                       }
                   }
                   console.log(existe);
                   console.log(fan);
                   console.log(fab);
                   setTimeout(()=>{
                       resolve();
                       ;} , 1000);
               }
               
           }
       }
   });

}