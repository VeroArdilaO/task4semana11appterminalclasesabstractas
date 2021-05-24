import {Persona} from './Persona'


export class Mentor extends Persona {

        constructor(nombre: string, documento:string,telefono: string, email:string, contraseña: string) {
            super(nombre, documento,telefono, email, contraseña);
            this.nombre = nombre;
            this.documento = documento;
            this.telefono = telefono;
            this.email = email;
            this.contraseña = contraseña;
          
        } 
  }
       
     
  
   
  


 /*  public  validation (emailMentor:string[]) {
    const auxEmail: string[] = []
    auxEmail.push(JSON.stringify(emailMentor.map(e => emailMentor.)))
     for(let i = 0; i < emailMentor.length; i++){
       for(let j = i + 1; j < emailMentor.length; j++){
        if (emailMentor[i] === emailMentor[j]){
          var correo = console.log(prompt("add the correct email"))
         
        } */