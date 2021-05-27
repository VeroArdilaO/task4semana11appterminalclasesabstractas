export class Persona {
    public nombre: string;
    public documento: string;
    public telefono: string;
    public email: string;
    

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

 
  


  