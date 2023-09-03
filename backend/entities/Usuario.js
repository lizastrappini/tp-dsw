class Usuario{
    id_usuario;
     dni;
     nombre;
     apellido;
     email;
     password;
     telefono;
     rol;

    constructor (id_usuario, dni, nombre, apellido, email, password, telefono, rol){
        this.dni = dni;
        this.password = password;
        this.telefono = telefono;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.rol = rol;
        this.id_usuario = id_usuario;

    }

    get id_usuario() {
        return this._id_usuario;
    }

    set id_usuario(value) {
        this._id_usuario = value;
    }

    get rol() {
        return this._rol;
    }

    set rol(value) {
        this._rol = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(value) {
        this._apellido = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get dni() {
        return this._dni;
    }

    set dni(value) {
        this._dni = value;
    }

    get password() {
        return this.password;
    }

    set password(value) {
        this.password = value;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(value) {
        this._telefono = value;
    }

}
module.exports={
    Usuario,


}