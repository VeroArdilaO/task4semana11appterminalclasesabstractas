import { Estudiante } from "./Estudiante";
import { Mentor } from "./Mentor";

export class Conferencia {

    public nombreConferencia: string;
    public aforo:20;
    public fechaDeInicio: string;
    public fechaDeFinalizacion: string;
    protected mentor: Mentor;
    protected estudiantes: Estudiante[]
   
   
    constructor(nombreConferencia:string, aforo:20, fechaDeInicio: string, fechaDeFinalizacion: string, mentor: Mentor) {
    this.nombreConferencia = nombreConferencia
    this.aforo = aforo
    this.fechaDeInicio = fechaDeInicio
    this.fechaDeFinalizacion = fechaDeFinalizacion
    this.mentor = mentor  
    this.estudiantes = []
    }

    getMentor():Mentor{
        return this.mentor
    }

    getEstudiantes():Estudiante[] {
        return this.estudiantes
    } 
 

    addEstudiantes (estudiante:Estudiante):boolean{
        if(this.estudiantes.length<= this.aforo) {
            this.estudiantes.push(estudiante)
           
            return true
           
        } 
        
            return false
       
    }

}


  
