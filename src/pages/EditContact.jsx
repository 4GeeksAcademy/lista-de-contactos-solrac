import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
// import { edit_contacts } from "../service/serviceAPI";

export const EditContact = () => {

    const {store, dispatch} = useGlobalReducer();

        const [edit_contact, setEdit_Contact] = useState({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
    
    //     const hadlesubmit = async (e) => {
    //         e.preventDefault()
    //         await edit_contacts(edit_contact, setEdit_Contact, dispatch)
    //         navigate("/contact_card")
    
    //     }
    
    //     // esta funcion modifica los valores en onchange
    //     const handleChange = (field, value) => {
    //         setEdit_Contact({
    //             ...edit_contact,
    //             [field]: value
    //         });
    //     };
    

    return (
        <>
            <div className="Edit-form container mt-5" style={{ width: "800px", height: "500px" }}>
                <div className="tittle text-center display-1 m-5">
                    <h1><strong>Editar contacto</strong></h1>
                </div>
                <form
                //  onSubmit={hadlesubmit}
                 >
                    <label className="form-label mb-2" htmlFor="fullname">Nombre y apellidos</label>
                    <input
                        className="form-control mb-2"
                        id="fullname"
                        type="text"
                        placeholder="Nombre y apellidos completos"
                        // onChange={(e) => handleChange("name", e.target.value)}
                        // value={edit_contact.name}
                    />
                    <label className="form-label mb-2" htmlFor="email">Email</label>
                    <input
                        className="form-control mb-2"
                        id="email"
                        type="email"
                        placeholder="correo electrónico"
                        // onChange={(e) => handleChange("email", e.target.value)}
                        // value={edit_contact.email}
                    />
                    <label className="form-label mb-2" htmlFor="phone">Telefono</label>
                    <input
                        className="form-control mb-2"
                        id="phone"
                        type="number"
                        placeholder="Número de teléfono"
                        // onChange={(e) => handleChange("phone", e.target.value)}
                        // value={edit_contact.phone}
                    />
                    <label className="form-label mb-2" htmlFor="address">Dirección</label>
                    <input
                        className="form-control mb-2"
                        id="address"
                        type="text"
                        placeholder="Dirección"
                        // onChange={(e) => handleChange("address", e.target.value)}
                        // value={edit_contact.address}
                    />
                    <div className="d-flex justify-content-center m-3">
                        <button className="btn btn-success" type="submit">Guardar cambios</button>
                    </div>
                </form>
            </div>
            <Link className="d-flex justify-content-center" to={"/contact_card"}>Volver a lista de contacto</Link>
        </>
    );
};