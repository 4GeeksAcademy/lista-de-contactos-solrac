import { useState } from "react";

export const NewContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")


    return (
        <>
            <div className="registration form">
                <div className="tittle text-center display-1">
                    <h1><strong>Add a new contact</strong></h1>
                </div>
                <form>
                    <label className="mb-2" htmlFor="fullname">Nombre y apellidos</label>
                    <input
                        className="form-control"
                        id="fullname"
                        type="text"
                        placeholder="Nombre y apellidos completos"
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                    />
                    <label className="mb-2" htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="your email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={name}
                    />
                    <label className="mb-2" htmlFor="phone">Telefono</label>
                    <input
                        className="form-control"
                        id="phone"
                        type="number"
                        placeholder="Numero de telefono"
                        onChange={(e) => { setPhone(e.target.value) }}
                        value={name}
                    />
                    <label className="mb-2" htmlFor="address">Dirección</label>
                    <input
                        className="form-control"
                        id="address"
                        type="text"
                        placeholder="Dirección"
                        onChange={(e) => { setAddress(e.target.value) }}
                        value={name}
                    />
                </form>
            </div>
        </>
    )
};


//Aqui va a ser el formulario para la creacion del contacto.