import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import storeReducer from "../store";
import { create_contact } from "../service/serviceAPI";

export const NewContact = () => {

    const navigate = useNavigate()
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });


    const { store, dispatch } = storeReducer()

    const hadlesubmit = async (e) => {
        e.preventDefault()
        await create_contact(contact, setContact, dispatch)
        navigate("/contact_card")

    }

    const handleChange = (field, value) => {
        setContact({
            ...contact,
            [field]: value
        });
    };

    return (
        <>
            <div className="registration form container mt-5" style={{ width: "800px", height: "500px" }}>
                <div className="tittle text-center display-1 m-5">
                    <h1><strong>Añadir nuevo contacto</strong></h1>
                </div>
                <form onSubmit={hadlesubmit}>
                    <label className="form-label mb-2" htmlFor="fullname">Nombre y apellidos</label>
                    <input
                        className="form-control mb-2"
                        id="fullname"
                        type="text"
                        placeholder="Nombre y apellidos completos"
                        onChange={(e) => handleChange("name", e.target.value)}
                        value={contact.name}
                        required
                    />
                    <label className="form-label mb-2" htmlFor="email">Email</label>
                    <input
                        className="form-control mb-2"
                        id="email"
                        type="email"
                        placeholder="correo electrónico"
                        onChange={(e) => handleChange("email", e.target.value)}
                        value={contact.email}
                        required
                    />
                    <label className="form-label mb-2" htmlFor="phone">Telefono</label>
                    <input
                        className="form-control mb-2"
                        id="phone"
                        type="number"
                        placeholder="Número de teléfono"
                        onChange={(e) => handleChange("phone", e.target.value)}
                        value={contact.phone}
                        required
                    />
                    <label className="form-label mb-2" htmlFor="address">Dirección</label>
                    <input
                        className="form-control mb-2"
                        id="address"
                        type="text"
                        placeholder="Dirección"
                        onChange={(e) => handleChange("address", e.target.value)}
                        value={contact.address}
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

// Usamos una función handleChange para actualizar cualquier campo del contacto.