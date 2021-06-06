
// AQUI SE IMPLEMENTO LA INTERAZ Y LA CLASE ABSTRACTA
interface people {

     nombre: string;
     documento: string;
     telefono: string;
     email: string;
}


export abstract class Persona implements people {
    
    nombre
    documento
    telefono
    email

    constructor(nombre:string, documento:string, telefono: string, email: string) {
      this.nombre = nombre
      this.documento = documento
      this.telefono = telefono
      this.email = email
    }
    
   getNombre():string{
      return this.nombre;
  }

    getEmail():string{
      return this.email;
  }

}

 
  


  