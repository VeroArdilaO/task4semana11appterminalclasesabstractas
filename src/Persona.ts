export class Persona {
    public nombre: string;
    public documento: string;
    public telefono: string;
    public email: string;
    protected contraseña: string;

    constructor(nombre:string, documento:string, telefono: string, email: string, contraseña: string ) {
      this.nombre = nombre
      this.documento = documento
      this.telefono = telefono
      this.email = email
      this.contraseña = contraseña
    }
    
    getNombre():string{
      return this.nombre;
  }

    getPassword():string{
      return this.contraseña;
  }

    getEmail():string{
      return this.email;
  }

}

 
  


  