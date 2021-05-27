
import { Menu } from './Menu'
import { Conferencia } from './Conferencia'
import { Mentor } from './Mentor'
import { Estudiante } from './Estudiante'

// Listas

let listaMentores: Mentor[]= [];
let listaEstudiantes: Estudiante[] = [];
let listaConferencia : Conferencia[] = [];


// Función para Agregar Mentor

function mentorValidacion (listaMentores:Mentor[], mail:string, password:string) {

  return listaMentores.find(mentor => mentor.getEmail() === mail && mentor.getPassword() === password)
  }

  
(async () => {
  const menu = new Menu()
    while (menu.isActive()) {

      menu.printMenu()
      let key = await menu.getInt('seleccione un número de la lista:')
    
      switch (key) {
        case 0:
          console.log('0: ',key);
          menu.close()
          process.exit()

        
        case 1:// INGRESAR MENTOR
            
            const nombre = await menu.getString('Ingrese su nombre Completo')
            const documento = await  menu.getString('Ingrese su numero de documento')
            const telefono = await menu.getString('Ingrese su número de teléfono')
            const correo = await  menu.getString('Ingrese su correo electronico')
            const contraseña = await  menu.getString('Ingrese su contraseña')
           
            //validacion correo mentor
            let validarCorreoMentor = listaMentores.some(email => email.getEmail() === correo)
            if (validarCorreoMentor){
              console.log("El correo ya se encuentra registrado")
            } else {
              //si el correo es único agrega nuevo mentor
              listaMentores.push(new Mentor(nombre, documento, telefono, correo,contraseña,))
            }
            
          break;
        
        case 2: // INGRESAR ESTUDIANTE

            const nombreEstudiante = await menu.getString('Ingrese su nombre Completo')
            const documentoEstudiante = await  menu.getString('Ingrese su numero de documento')
            const telefonoEstudiante = await menu.getString('Ingrese su número de teléfono')
            const correoEstudiante = await  menu.getString('ingrese su correo Electrónico')
            
             //validacion correo Estudiante
             let validarCorreoEstudiante = listaEstudiantes.some(email => email.getEmail() === correoEstudiante)
             if (validarCorreoEstudiante){ 
               console.log("El correo ya se encuentra registrado")
             } else {
               //si el correo es único agrega nuevo estudiante
               listaEstudiantes.push(new Estudiante(nombreEstudiante, documentoEstudiante, telefonoEstudiante, correoEstudiante))
             }
           

          break;
        
        case 3: // INGRESAR CONFERENCIA

            const validarMentorCorreo = await menu.getString('Ingrese el correo del mentor')
            const validarMentorContraseña = await menu.getString('Ingrese la contraseña')
            
            let validarMentor: Mentor | undefined = mentorValidacion(listaMentores, validarMentorCorreo, validarMentorContraseña)

            if (validarMentor === undefined){
              console.log("Los datos ingresados no son válidos")
            } else {

            const nombreConferencia = await menu.getString('Ingrese nombre de la Conferencia')
            const cantidadMaxima = 20
            const fechaInicio = await menu.getString('Ingrese la fecha de Inicio de la conferencia dd-mm-aaaa')
            const fechaFinal = await  menu.getString('ingrese la fecha de Finalización de la conferencia dd-mm-aaaa')

            let validacionEmail:Mentor[] = listaMentores.filter(e => e.getEmail() === validarMentorCorreo)
            let conferenciasMentor:Conferencia[] = listaConferencia.filter(e => e.getMentor().getEmail() === validarMentorCorreo)
           
             //valida si el mentor esta disponible en nueva fecha

             let validarFecha:boolean
             if (validacionEmail.length != 0){
               let registrarFechaValidacion:boolean[] = []
               for(let i = 0; i < conferenciasMentor.length; i++) {
                 let fechaInicio1:string = conferenciasMentor[i].fechaDeInicio.split("-")[0]
                 let fechaFin1:string = conferenciasMentor[i].fechaDeFinalizacion.split("-")[0]
                 let fechaInicio2:string = fechaInicio.split("-")[0]
                 let fechaFin2:string = fechaFinal.split("-")[0]

                 validarFecha = (fechaInicio1 != fechaInicio2) && (fechaFin1 != fechaFin2) && (fechaFin1 != fechaInicio2)
                 registrarFechaValidacion.push(validarFecha)

               }
             
               if (registrarFechaValidacion.some(e => e === false)){
                 console.log("El mentor no se encuentra disponible en la fecha indicada")
               } else {
                 listaConferencia.push(new Conferencia(nombreConferencia, cantidadMaxima, fechaInicio, fechaFinal,validarMentor))
                 console.log("nueva Conferencia")
               }
             }
           }

          break; 
        case 4:// REGISTRARSE ESTUDIANTE A UNA CONFERENCIA 

        const registrarCorreo:string = await menu.getString('Ingrese su correo') 
        

        const validarDatos: Estudiante |  undefined  = listaEstudiantes.find(e => e.getEmail() === registrarCorreo)
        if (validarDatos === undefined){
          console.log('El estudiante no se encuentra en la base de datos')
        } else {
          const ingresarConferencia: string = await menu.getString('Ingrese el nombre de la conferencia')

          const validarConferencia:Conferencia | undefined = listaConferencia.find(e => e.nombreConferencia === ingresarConferencia )
          if(validarConferencia === undefined){
            console.log('la conferencia no se encuentra registrada ')
          } else {
            if(validarConferencia.getEstudiantes().length === 20){
              console.log('No hay mas cupo')
            } else{
              const confirmarConferencia:Conferencia | undefined =  listaConferencia.find(e => e.nombreConferencia === ingresarConferencia)
              if(confirmarConferencia === undefined){
                console.log('la conferencia no existe')
              } else {
                const ValidacionCorreoUnico = confirmarConferencia.getEstudiantes().some(e=> e.getEmail() === registrarCorreo)
                if(ValidacionCorreoUnico) {

                  console.log('el estudiante ya esta registrado')
                } else {
                  confirmarConferencia.addEstudiantes(validarDatos)
                  console.log('registro exitoso' + " " + registrarCorreo + " en " + confirmarConferencia.nombreConferencia)
                }
               
              }
            }
          }
        }
          break;
      
        case 5: // LISTA CONFERENCIAS
             
          console.log(`Esta es la lista de conferencias ${listaConferencia.map( (elemento) => (elemento.nombreConferencia))}`)

          break;
        
        case 6: // LISTA CONFERENCIA POR MENTORES 

        const nombreDelMentor:string = await menu.getString('Escriba el nombre del mentor')
        const encontrarMentor: Mentor | undefined = listaMentores.find(e=> e.getNombre()===nombreDelMentor)
        if(encontrarMentor === undefined){
          console.log('El mentor no esta registrado')
        }else {
          let conferenciaPorMentor:Conferencia[] = listaConferencia.filter(e =>e.getMentor().getNombre() === nombreDelMentor)
          console.log(conferenciaPorMentor.map(e =>e.nombreConferencia))
        }

          break;

        case 7:// LISTA MENTORES

        console.log(`Esta es la lista de mentores ${listaMentores.map( (elemento) => (elemento.nombre))}`)
        break;

        case 8: // LISTA ESTUDIANTES
        console.log(`Esta es la lista de estudiantes ${listaEstudiantes.map( (elemento) => (elemento.nombre))}`)
          break;

        case 9: // LISTA DE ESTUDIANTES POR CONFERENCIA

        const ingresarNombreConferencia: string = await menu.getString('ingrese el nombre de la conferencia')
        const verificarConferencia: Conferencia | undefined = listaConferencia.find(e => e.nombreConferencia === ingresarNombreConferencia)
        if(verificarConferencia === undefined) {
          console.log('la conferencia no existe')
        } else {
          console.log(verificarConferencia.getEstudiantes())
          }
          break;
      }
    }

  console.log('Adios');
    
  })()


