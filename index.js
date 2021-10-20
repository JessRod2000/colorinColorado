const db = firebase.firestore();

const taskForm = document.getElementById('task-form');
const cuentoTitulo = document.getElementById("cuento-titulo");
const cuentoContainer = document.getElementById("cuento-container");


taskForm.addEventListener('submit', async(e)=> {
    e.preventDefault();
    
   const Titulo = taskForm['task-title'].value;
   const Descripcion= taskForm['task-description'].value;

   const response = await db.collection('Cuentos Cortos').doc().set({Titulo,Descripcion});

   taskForm.reset();
})
const getCuento = () => db.collection('Cuentos').get();

window.addEventListener('DOMContentLoaded', async(e) =>{
    const querySnapshot = await getCuento();
    querySnapshot.forEach(doc =>{
        //console.log(doc.data())
        //console.log(doc.data().Titulo)
        if(doc.data().Titulo == "La bruja buena"){
            cuentoTitulo.innerHTML += `<div>
            <h3>${doc.data().Titulo}</h3>
            </div>`
            recuperar();
            cuentoContainer.innerHTML += `<div>
             <p align='justify'>${doc.data().Descripcion}</p>
            </div>`
        }
        /*
        cuentoContainer.innerHTML += `<div>
        <h3>${doc.data().Titulo}</h3>
        <p>${doc.data().Descripcion}</p>
        </div>`*/
    })
    function recuperar(){
        var ImgName = "cuervo";
        firebase.database().ref('Pictures/'+ImgName).on('value',function(snapshot){
            document.getElementById('myimg').src = snapshot.val().Link;
        });
    }
})