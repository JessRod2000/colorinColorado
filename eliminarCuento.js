const dbfirestore = firebase.firestore();

const contenedorCategorias = document.getElementById("categorias-container");
var controlar = "true";
var categoria, titulobox;
var fab = "true";
var fan = "true";
var clasi = "true";
var his = "true";
var ley = "true";
var terr = "true";
var existe = "true";
var otronivel="false";
var nivel;
window.addEventListener('DOMContentLoaded',categoriasCortos);
function categoriasCortos(){
    contenedorCategorias.innerHTML = `<select  name="combobox" id="categorias" class="formulario_input">
    <option value="Fabulas">Fábulas</option>
    <option value="Fantasia">Fantasía</option>
    <option value="Clasicos">Clásicos</option>
</select>`;
}
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    titulobox = document.getElementById("cuentobox").value;
    categoria = document.getElementById("categorias").value;
    nivel = document.nombreform.nivel.value;

    verificarExistencia();

    document.getElementById("form").reset();
})
//-----------------ELIMINAR------------------------------------
function eliminar() {
    return new Promise((resolve, reject) => {
        console.log("Entre fantasia");
        if (categoria == "Fantasia") {
            dbfirestore.collection('Fantasia').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulobox == doc.data().TituloCuento) {
                        alert("Cuento eliminado de la colección Fantasía");
                        doc.ref.delete();
                    }

                })

            })
            setTimeout(() => {
                resolve();
                ;
            }, 1000);
        } else {
            console.log("Entre fabulas");
            if (categoria == "Fabulas") {
                dbfirestore.collection('Fabulas').get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        if (titulobox == doc.data().TituloCuento) {
                            alert("Cuento eliminado de la colección Fábulas");
                            doc.ref.delete();
                        }
                    })
                })
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            } else {
                console.log("Entre clasicos");
                if (categoria == "Clasicos") {
                dbfirestore.collection('Clasicos').get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        if (titulobox == doc.data().TituloCuento) {
                            alert("Cuento eliminado de la colección Clásicos");
                            doc.ref.delete();
                        }
                    })

                })
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
               }else{
                    if (categoria == "Terror") {
                     console.log("Entre terror");
                    dbfirestore.collection('Terror').get().then((snapshot) => {
                        snapshot.docs.forEach(doc => {
                            if (titulobox == doc.data().TituloCuento) {
                                alert("Cuento eliminado de la colección Terror");
                                doc.ref.delete();
                            }
                        })
    
                    })
                    setTimeout(() => {
                        resolve();
                        ;
                    }, 1000);
                  }else{
                    if (categoria == "Historia") {
                        console.log("Entre historia");
                        dbfirestore.collection('Historia').get().then((snapshot) => {
                            snapshot.docs.forEach(doc => {
                                if (titulobox == doc.data().TituloCuento) {
                                    alert("Cuento eliminado de la colección Historia");
                                    doc.ref.delete();
                                }
                            })
        
                        })
                        setTimeout(() => {
                            resolve();
                            ;
                        }, 1000);
                    }else{
                        console.log("Entre leyendas");
                            dbfirestore.collection('Leyendas').get().then((snapshot) => {
                                snapshot.docs.forEach(doc => {
                                    if (titulobox == doc.data().TituloCuento) {
                                        alert("Cuento eliminado de la colección Leyendas");
                                        doc.ref.delete();
                                    }
                                })
            
                            })
                            setTimeout(() => {
                                resolve();
                                ;
                            }, 1000);
                    }


                  }
               }
            }

        }
    });
}
//------------------------------------
async function verificarExistencia() {
    await testTitulos();
    if (controlar == "true") {
        alert('El cuento no se encuentra registrado');
        
    } else {
        if(nivel == "Cortos"){
            await categoriasC();
            if(terr=="false" || his=="false" ||ley=="false"){
                alert("El cuento no se encuentra registrado en el nivel Cuentos " + nivel);
                otronivel="true";
                
            }
            
        }else{
            await categoriasL();
            if(fab=="false" || fan=="false" ||clasi=="false"){
                alert("El cuento no se encuentra registrado en el nivel Cuentos " + nivel);
                otronivel="true";
                
            }
        }
       if(otronivel== "false"){
            if (existe == "false") {
                alert('El cuento no se encuentra registrado en la categoria ' + cat);
                existe = "true";
                fab = "true";
                fan = "true";
                clasi = "true";
                his = "true";
                ley = "true";
                terr = "true";
                existe = "true";
                
            } else {
                await eliminar();

            }
       }
    }
    controlar = "true";
}

//-----revisar si existe el cuento-------
function testTitulos() {
    return new Promise((resolve, reject) => {
        var titulo = document.getElementById("cuentobox").value;
        
            dbfirestore.collection('Fabulas').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulo == doc.data().TituloCuento) {
                        controlar = "false";
                        fab = "false";
                    }
                }
                );
    
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            });
            dbfirestore.collection('Fantasia').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulo == doc.data().TituloCuento) {
                        controlar = "false";
                        fan = "false";
                    }
                }
                );
    
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            });
            dbfirestore.collection('Clasicos').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulo == doc.data().TituloCuento) {
                        controlar = "false";
                        clasi = "false";
                    }
                }
                );
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            });

            dbfirestore.collection('Historia').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulo == doc.data().TituloCuento) {
                        controlar = "false";
                        his = "false";
                    }
                }
                );
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            });
            dbfirestore.collection('Leyendas').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulo == doc.data().TituloCuento) {
                        controlar = "false";
                        ley = "false";
                    }
                }
                );
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            });
            dbfirestore.collection('Terror').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (titulo == doc.data().TituloCuento) {
                        controlar = "false";
                        terr = "false";
                    }
                }
                );
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            });
        
    });
}
function categoriasC(){
    return new Promise((resolve, reject) => {
        if (categoria == "Fabulas") {
            if (fan == "false") {
                existe = "false";
                cat = "Fábulas"
            } else {
                if (clasi == "false") {
                    existe = "false";
                    cat = "Fábulas"
                }
            }
            setTimeout(() => {
                resolve();
                ;
            }, 1000);
        } else {
            if (categoria == "Fantasia") {
                if (fab == "false") {
                    existe = "false";
                    cat = "Fantasía"
                } else {
                    if (clasi == "false") {
                        existe = "false";
                        cat = "Fantasía"
                    }
                }
                setTimeout(() => {
                    resolve();
                    ;
                }, 1000);
            } else {
                if (categoria == "Clasicos") {
                    if (fan == "false") {
                        existe = "false";
                        cat = "Clásicos"
                    } else {
                        if (fab == "false") {
                            existe = "false";
                            cat = "Clásicos"
                        }
                    }
                    setTimeout(() => {
                        resolve();
                        ;
                    }, 1000);
                }

            }
        }
    });

}
