import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import storeReducer from "../store";
import { get_list_user, delete_contact } from "../service/serviceAPI";

export const ContactCard = () => {
    // const navigate = useNavigate();
    // const { store, dispatch } = storeReducer();

    // const handleDelete = async (id) => {
    //     if (window.confirm("¿Estás seguro de eliminar este contacto?")) {
    //         await delete_contact(id, dispatch);
    //     }
    // };

    // useEffect(() => {
    //     get_list_user(dispatch);
    // }, []);

    return (
        <>
            <div className="contact-list container-fluid my-5">
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-success" onClick={() => navigate("/new_contact")}>
                        Añadir contacto
                    </button>
                </div>

                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contacto) => (
                        <div className="card-contact container py-4 mb-3" key={contacto.id}>
                            <div className="d-flex row border">
                                <div className="col-md-2 my-2">
                                    <div className="ratio ratio-1x1">
                                        <img
                                            src="/src/assets/img/IMG_0903.JPG"
                                            className="rounded-circle"
                                            style={{
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
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
                                    <button className="btn btn-border-none me-2">
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
            </div>
        </>
    );
};