import React, { Component } from 'react';
import Input from '../../components/input/index';
import Logo from '../../assets/img/logoCiti.png';
import './style.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            lastName: "",
            email: "",
            password: "",
            password2:"",
            street: "",
            numExt: "",
            numInt: "",
            colony: "",
            CP: "",
            phone:"",
            ID: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleLastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    }
    render() {
        return (
            <main className="form">
                <header className="header-form">
                    <img src={Logo} alt="logo"/>
                    <h2>Registra tus datos</h2>
                </header>
                <div className="ball-container">
                    <span className="filled ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>
                </div>
                <section>
                    <Input
                        label="Nombre"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <Input
                        label="Apellidos"
                        type="text"
                        name="lastname"
                        value={this.state.lastName}
                    />
                    <Input
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        value={this.state.email}
                    />
                    <div className="select-container">
                        <Input
                            label="Contraseña"
                            type="password"
                            name="password"
                            value={this.state.password}
                        />
                        <Input
                            label="Confirmar contraseña"
                            name="password"
                            type="password"
                            value={this.state.password2}
                        />
                    </div>
                    <Input
                        label="Calle o Avenida"
                        type="text"
                        name="name"
                        value={this.state.street}
                    />
                    <div className="select-container">
                        <Input
                            label="Número ext."
                            type="number"
                            name="name"
                            value={this.state.numExt}
                        />
                        <Input
                            label="Número int."
                            type="number"
                            name="name"
                        />
                    </div>
                    <div className="select-container">
                        <Input
                            label="Fraccionamiento o colonia"
                            type="text"
                            name="name"
                        />
                        <Input
                            label="C.P."
                            type="number"
                            name="name"
                        />
                    </div>
                    <Input
                        label="Teléfono"
                        name="phone"
                        type="number"
                    />
                    <div className="select-container">
                        <select name="genero" id="" className="drops">
                                <option value="">Selecciona tu Identificación</option>
                                <option value="">INE</option>
                                <option value="">IFE</option>
                                <option value="">Licencia para conducir</option>
                                <option value="">Pasaporte mexicano</option>
                        </select>
                        <Input
                            label="Numero de identificación"
                            type="number"
                            name="ine"
                            value={this.state.ID}
                        />
                    </div>
                    <Input
                        label="CURP"
                        type="text"
                        name="name"
                    />
                    <p className="curp">Si no conoces tu CURP, puedes obtenerlo en esta <a href="https://www.gob.mx/curp/" target="_blank">liga</a> </p>                    
                    <div className="select-container">
                        <select name="genero" id="" className="drops">
                            <option value="">Selecciona tu género</option>
                            <option value="">Hombre</option>
                            <option value="">Mujer</option>
                            <option value="">Prefiero no decirlo</option>
                        </select>
                        <select name="occupation" id="" className="drops">
                        <option value="">Selecciona tu ocupación</option>
                            <option value="">Estudiante</option>
                            <option value="">Empleado</option>
                            <option value="">Desempleado</option>
                            <option value="">Prefiero no decirlo</option>
                        </select>
                    </div>
                </section>
                    <button className="button">Siguiente</button>
            </main>

        );
    }
}

export default Form; 