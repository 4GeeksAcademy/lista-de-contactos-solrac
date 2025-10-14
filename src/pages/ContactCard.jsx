import { NewContact } from "./NewContact"

export const ContactCard = () => {


    return (
        <>
            <div className="contact-list container-fluid my-5">
                {/* {contactos.map(contacto=>( */}
                <div className="card-contact container py-4">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success my-3" onClick={NewContact}>añadir contacto</button>
                    </div>
                    <div className="d-flex row border">
                        <div className="col-md-2 my-2">
                            <div className="ratio ratio-1x1">
                                <img src="/src/assets/img/IMG_0903.JPG" className="rounded-circle" style={{backgroundPosition:"top", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="m-1">
                                <p>{"name"}</p>
                            </div>
                            <div className="d-flex m-1">
                                <i class="fa-solid fa-location-dot"></i>
                                <p className="mx-2">{"address"}</p>
                            </div>
                            <div className="d-flex m-1">
                                <i class="fa-solid fa-phone"></i>
                                <p className="mx-2">{"phone"}</p>
                            </div>
                            <div className="d-flex m-1">
                                <i class="fa-solid fa-envelope"></i>
                                <p className="mx-2">{"email"}</p>
                            </div>
                        </div>
                        <div className="col-md-1 d-block justify-content-end my-2">
                            <button className="btn btn-border-none"><i className="align-item-start fa-solid fa-pen"></i></button>
                            <button className="btn btn-border-none "><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
                {/* )
            )} */}
            </div>
        </>
    )
}