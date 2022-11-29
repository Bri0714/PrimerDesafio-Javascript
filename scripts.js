let opcion = 0


do{
    let estudiante = prompt("Ingresar nombre completo del estudiante.")
        alert(" Bienvenido a la pagina de Transportes Grancolombiana " + estudiante + " en que te podemos colaborar: ")
    let opcion = Number(prompt(" 1. Seleccione el colegio de el y/o los estudiantes. \n 2. Seleccionar la Localidad. \n ingrese 0 para salir. "))

    if ( opcion == 1 ){
        
        do{
            let colegio = prompt("1. Instituto Infantil Y Juvenil. \n 2.Villemar el carmen. \n 3.Colegio Agustiniano. \n 4. Colegio Mayor de kennedy.\n Ingrese 0 para salir.")

            if(colegio == 1){
                alert( " Bienvenido " + estudiante + " del colegio Instituto Infantil y Juvenil.  " + "\n ahora pasa a seleccionar la localidad.")
                if (colegio == true){
                    do{
                        let localidad = prompt("1. Fontibon. \n 2.Puente aranda. \n 3.Bosa. \n 4.Suba.\n Ingrese 0 para salir.")
                        if(localidad == 1){
                            alert( " Bienvenido " + estudiante + " de la localidad de fontibon." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 2){
                            alert( " Bienvenido " + estudiante + "de la localidad de puente aranda." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 3){
                            alert( " Bienvenido " + estudiante + " della localidad de bosa"  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (localidad == 4){
                            alert( " Bienvenido " + estudiante + " de la localidad de suba"+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }

            }else if(colegio == 2){
                alert( " Bienvenido " + estudiante + " del colegio Villemar el carmen. " +  "\n ahora pasa a seleccionar la localidad.")
                if (colegio == colegio){
                    do{
                        let localidad = prompt("1. Fontibon. \n 2.Puente aranda. \n 3.Bosa. \n 4.Suba.\n Ingrese 0 para salir.")
                        if(localidad == 1){
                            alert( " Bienvenido " + estudiante + " de la localidad de fontibon." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 2){
                            alert( " Bienvenido " + estudiante + "de la localidad de puente aranda." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 3){
                            alert( " Bienvenido " + estudiante + " della localidad de bosa"  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (localidad == 4){
                            alert( " Bienvenido " + estudiante + " de la localidad de suba"+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }

            }else if (colegio == 3){
                alert( " Bienvenido " + estudiante + " del colegio Agustiniano "  +  "\n ahora pasa a seleccionar la localidad.")
                if (colegio == colegio){
                    do{
                        let localidad = prompt("1. Fontibon. \n 2.Puente aranda. \n 3.Busa. \n 4.Suba.\n Ingrese 0 para salir.")
                        if(localidad == 1){
                            alert( " Bienvenido " + estudiante + " de la localidad de fontibon." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 2){
                            alert( " Bienvenido " + estudiante + "de la localidad de puente aranda." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 3){
                            alert( " Bienvenido " + estudiante + " della localidad de bosa"  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (localidad == 4){
                            alert( " Bienvenido " + estudiante + " de la localidad de suba"+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }

            }else if (colegio == 4){
                alert( " Bienvenido " + estudiante + " del colegio Mayor de kennedy "+ "\n ahora pasa a seleccionar la localidad.")
                if (colegio == colegio){
                    do{
                        let localidad = prompt("1. Fontibon. \n 2.Puente aranda. \n 3.Busa. \n 4.Suba.\n Ingrese 0 para salir.")
                        if(localidad == 1){
                            alert( " Bienvenido " + estudiante + " de la localidad de fontibon." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 2){
                            alert( " Bienvenido " + estudiante + "de la localidad de puente aranda." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (localidad == 3){
                            alert( " Bienvenido " + estudiante + " della localidad de bosa"  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (localidad == 4){
                            alert( " Bienvenido " + estudiante + " de la localidad de suba"+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }
            }else{
                alert("ingrese una opcion correcta")
            }
        }while(ParseInt(colegio != 0))


    } else if (opcion == 2){
        
        do{
            let localidad = prompt("1. Fontibon. \n 2.Puente aranda. \n 3.Busa. \n 4.Suba.\n Ingrese 0 para salir.")
            if(localidad == 1){
                alert( " Bienvenido " + estudiante + " de la localidad de fontibon  " + "\n ahora pasa a seleccionar el Colegio.")
                if (localidad == true){
                    do{
                        let colegio = prompt("1. Instituto Infantil Y Juvenil. \n 2.Villemar el carmen. \n 3.Colegio Agustiniano. \n 4. Colegio Mayor de kennedy.\n Ingrese 0 para salir.")
                        if(colegio == 1){
                            alert( " Bienvenido " + estudiante + " del colegio instituto infatil y juvenil." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 2){
                            alert( " Bienvenido " + estudiante + "del colegio villemar el carmen." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 3){
                            alert( " Bienvenido " + estudiante + " del colegio Agustiniano."  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (colegio == 4){
                            alert( " Bienvenido " + estudiante + " del colegio mayor de kennedy."+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }
            }else if (localidad == 2){
                alert( " Bienvenido " + estudiante + " del la localidad de puente aranda. " +  "\n ahora pasa a seleccionar el Colegio.")
                if (localidad == localidad){
                    do{
                        let colegio = prompt("1. Instituto Infantil Y Juvenil. \n 2.Villemar el carmen. \n 3.Colegio Agustiniano. \n 4. Colegio Mayor de kennedy.\n Ingrese 0 para salir.")
                        if(colegio == 1){
                            alert( " Bienvenido " + estudiante + " del colegio instituto infatil y juvenil." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 2){
                            alert( " Bienvenido " + estudiante + "del colegio villemar el carmen." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 3){
                            alert( " Bienvenido " + estudiante + " del colegio Agustiniano."  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (colegio == 4){
                            alert( " Bienvenido " + estudiante + " del colegio mayor de kennedy."+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }
            }else if (localidad == 3){
                alert( " Bienvenido " + estudiante + " della localidad de bosa"  +  "\n  ahora pasa a seleccionar el Colegio.")
                if (localidad == localidad){
                    do{
                        let colegio = prompt("1. Instituto Infantil Y Juvenil. \n 2.Villemar el carmen. \n 3.Colegio Agustiniano. \n 4. Colegio Mayor de kennedy.\n Ingrese 0 para salir.")
                        if(colegio == 1){
                            alert( " Bienvenido " + estudiante + " del colegio instituto infatil y juvenil." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 2){
                            alert( " Bienvenido " + estudiante + "del colegio villemar el carmen." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 3){
                            alert( " Bienvenido " + estudiante + " del colegio Agustiniano."  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (colegio == 4){
                            alert( " Bienvenido " + estudiante + " del colegio mayor de kennedy."+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }
            }else if (localidad == 4){
                alert( " Bienvenido " + estudiante + " de la localidad de suba"+ "\n  ahora pasa a seleccionar el Colegio.")
                if (localidad == localidad){
                    do{
                        let colegio = prompt("1. Instituto Infantil Y Juvenil. \n 2.Villemar el carmen. \n 3.Colegio Agustiniano. \n 4. Colegio Mayor de kennedy.\n Ingrese 0 para salir.")
                        if(colegio == 1){
                            alert( " Bienvenido " + estudiante + " del colegio instituto infatil y juvenil." +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 2){
                            alert( " Bienvenido " + estudiante + "del colegio villemar el carmen." + "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos")
                        }else if (colegio == 3){
                            alert( " Bienvenido " + estudiante + " del colegio Agustiniano."  +  "\n muy  pronto podras hacer el pago de tu ruta escolar, Gracias por registrar tus datos.")
                        }else if (colegio == 4){
                            alert( " Bienvenido " + estudiante + " del colegio mayor de kennedy."+ "\n muy  pronto podras hacer el pago de tu ruta escolar,Gracias por registrar tus datos")
                        }else{
                            alert("ingrese una opcion correcta")
                        }
                    }while(ParseInt(localidad != 0))
                }
            }else{
                alert("ingrese una opcion correcta")
            }
        }while(ParseInt(localidad != 0))
        
            localidad = prompt("1. Fontibon. \n 2.Puente aranda. \n 3.Busa. \n 4.Suba.\n Ingrese 0 para salir.")
    }else{
        alert("Dato mal ingresado,intentalo de nuevo.")
    }
    estudiante = prompt("Ingresar nombre completo del estudiante.")

}while(parseInt(opcion != 0))
