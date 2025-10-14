import { NewContact } from "./NewContact"

export const ContactCard = () => {

    
    return (
        <>
            <div className="contact-list container-fluid bg-danger my-5">
                <div className="card-contact container py-4">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success my-3" onClick={NewContact}>añadir contacto</button>
                    </div>
                    <div className="d-flex row bg-secondary">
                        <div className="col-md-2">
                            <image className=""><i class="fa-solid fa-circle-user"></i></image>
                        </div>
                        <div className="col-md-9">
                            <div>
                                <p>{"name"}</p>
                            </div>
                            <div className="d-flex">
                                <i class="fa-solid fa-location-dot"></i>
                                <p className="mx-2">{"address"}</p>
                            </div>
                            <div className="d-flex ">
                                <i class="fa-solid fa-phone"></i>
                                <p className="mx-2">{"phone"}</p>
                            </div>
                            <div className="d-flex">
                                <i class="fa-solid fa-envelope"></i>
                                <p className="mx-2">{"email"}</p>
                            </div>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                            <div className="col"><i class="fa-solid fa-pen"></i></div>
                            <div className="col"><i class="fa-solid fa-trash-can"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Aquí se hara el modelo de la tarjeta del contacto.