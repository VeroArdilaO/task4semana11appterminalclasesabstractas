import {Persona} from './Persona'


export class Mentor extends Persona {
    
        protected contraseña: string;
        constructor(nombre: string, documento:string,telefono: string, email:string, contraseña: string) {
            super(nombre, documento,telefono, email);
            this.contraseña = contraseña
        } 

        getPassword():string {
            return this.contraseña;
        }
  }
       
     
  
   
  

