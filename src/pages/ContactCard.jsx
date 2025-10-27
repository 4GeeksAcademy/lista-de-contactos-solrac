import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { delete_contact, edit_contacts, get_list_user } from "../service/serviceAPI";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = () => {

    const navigate = useNavigate();
    const {store, dispatch} = useGlobalReducer()

    const handleDelete = async (id) => {

        if (!confirm("¿Seguro que deseas eliminar este contacto?")) return;
        await delete_contact(id);
        
    };

    const handleEdit = async (id) => {
        navigate(`/edit_contact/${id}`)
    }

    return (
        <>
            {store.contacts && store.contacts.length > 0 ? (
                store.contacts.map((contacto, index) => (
                    <div className="card-contact container py-4 mb-3" key={index}>
                        <div className="d-flex row border">
                            <div className="col-md-2 my-2">
                                <div className="ratio ratio-1x1">
                                    <img
                                        src="./src/assets/img/car.ecd_qr.png"
                                        className="rounded"
                                        style={{
                                            backgroundRepeat: "no-repeat",
                                            objectFit: "cover",
                                            objectPosition: "top"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="m-1">
                                    <p>{contacto.name}</p>
                                </div>
                                <div className="d-flex m-1">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className="mx-2">{contacto.address}</p>
                                </div>
                                <div className="d-flex m-1">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className="mx-2">{contacto.phone}</p>
                                </div>
                                <div className="d-flex m-1">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p className="mx-2">{contacto.email}</p>
                                </div>
                            </div>
                            <div className="col-md-1 d-block justify-content-end my-2">
                                <button
                                    className="btn btn-border-none me-2"
                                    onClick={() => handleEdit(contacto.id)}
                                >
                                    <i className="align-item-start fa-solid fa-pen"></i>
                                </button>
                                <button
                                    className="btn btn-border-none"
                                    onClick={() => handleDelete(contacto.id)}
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay contactos aún.</p>
            )}

        </>
    );
};