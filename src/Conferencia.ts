import { Estudiante } from "./Estudiante";
import { Mentor } from "./Mentor";

export class Conferencia {

    public nombreConferencia: string;
    public aforo:20;
    public fechaDeInicio: string;
    public fechaDeFinalizacion: string;
    protected mentor: Mentor;
    protected estudiantes: string[]
   
   
    constructor(nombreConferencia:string, aforo:20, fechaDeInicio: string, fechaDeFinalizacion: string, mentor: Mentor, estudiantes:string[]) {
    this.nombreConferencia = nombreConferencia
    this.aforo = aforo
    this.fechaDeInicio = fechaDeInicio
    this.fechaDeFinalizacion = fechaDeFinalizacion
    this.mentor = mentor  
    this.estudiantes = estudiantes 
    }

    getMentor():Mentor{
        return this.mentor
    }

    getEstudiantes(): string[] {
        return this.estudiantes
    }

}


  
