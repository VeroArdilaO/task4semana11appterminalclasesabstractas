
import {Persona} from './Persona'

export class Estudiante extends Persona {
    
        constructor(nombre: string, documento:string,telefono: string, email:string, contraseña : string) {
            super(nombre, documento,telefono, email, contraseña);
            this.nombre = nombre;
            this.documento = documento;
            this.telefono = telefono;
            this.email = email;
            this.contraseña = contraseña;
        } 
}

