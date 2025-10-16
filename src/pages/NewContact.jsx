import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import storeReducer from "../store";
import { create_contact } from "../service/serviceAPI";

export const NewContact = () => {


    const {store , dispatch} = storeReducer()

    //crear la funcion submit para la carga de datos 
    const hadlesubmit = (e) => {
        e.preventDefault()
        create_contact(store.contact, setContact, dispatch)
    }

    return (
        <>
            <div className="registration form container mt-5" style={{ width: "800px", height: "500px" }}>
                <div className="tittle text-center display-1 m-5">
                    <h1><strong>Añadir nuevo contacto</strong></h1>
                </div>
                <form>
                    <label className="form-label mb-2" htmlFor="fullname">Nombre y apellidos</label>
                    <input
                        className="form-control mb-2"
                        id="fullname"
                        type="text"
                        placeholder="Nombre y apellidos completos"
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                        required
                    />
                    <label className="form-label mb-2" htmlFor="email">Email</label>
                    <input
                        className="form-control mb-2"
                        id="email"
                        type="email"
                        placeholder="correo electrónico"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        required
                    />
                    <label className="form-label mb-2" htmlFor="phone">Telefono</label>
                    <input
                        className="form-control mb-2"
                        id="phone"
                        type="number"
                        placeholder="Número de teléfono"
                        onChange={(e) => { setPhone(e.target.value) }}
                        value={phone}
                        required
                    />
                    <label className="form-label mb-2" htmlFor="address">Dirección</label>
                    <input
                        className="form-control mb-2"
                        id="address"
                        type="text"
                        placeholder="Dirección"
                        onChange={(e) => { setAddress(e.target.value) }}
                        value={address}
                    />
                    <div className="d-flex justify-content-center m-3">
                        <button className="btn btn-success" type="submit">Guardar contacto</button>
                    </div>
                </form>
            </div>
            <Link className="d-flex justify-content-center" to={"/contact_card"}>Volver a lista de contacto</Link>
        </>
    )
};

// falta la funcionalidad