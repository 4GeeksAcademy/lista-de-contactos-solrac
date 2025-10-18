export const create_agenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/noelia`, {
        method: "POST", headers: {
            "Content-type": "application/json"
        }, body: JSON.stringify()
    })


    if (!response.ok) {
        return jsonify({ status: response.status, msg: response.msg })
    } else {
        get_alls_agendas()
    }

}

//----------------------------------------------------------------------------------------------------------------------

export const get_alls_agendas = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas")

    const data = response.json()

    if (!response.ok) {
        console.log("There`s not agendas.")
        create_agenda()
    }

    return data;
}

//----------------------------------------------------------------------------------------------------------------------

export const get_agenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`)

    const data = response.json()

    if (response.ok) {
        return data
    } else {
        console.log("No existe agenda")
        create_agenda()
    }

}

//----------------------------------------------------------------------------------------------------------------------
export const delete_agenda = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`, {
        method: "DELETE"
    })

    if (response.ok) {
        return jsonify({"msg": "Agenda eliminada con éxito." })
    } else {
        return jsonify({ status: response.status, msg: response.detail })

    }

}

//----------------------------------------------------------------------------------------------------------------------
export const create_contact = async (contact, setContact, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(contact)
    })

    const data = response.json()
    if (response.ok) {
        get_list_user(dispatch)
    }

    setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    dispatch({type: "set_ContactoAgenda" , payload: data })
}

//----------------------------------------------------------------------------------------------------------------------

export const get_list_user = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts`)

    const data = response.json()

    if (!response.ok) {
        console.log("No existe agenda ó contactos.");
        create_contact();
    }else{
        return data;
    }

    

    // dispatch({ type: "set_Agenda", payload: data })
}


//----------------------------------------------------------------------------------------------------------------------

// export const edit_contact = async (contact, setContact, dispatch) => {
//     const response = await fetch (`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contact_id}`),{
//         method: "PUT",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(contact)
//     })

//     if (response.ok) {
//         get_list_user(dispatch)
//     }
// }
//----------------------------------------------------------------------------------------------------------------------

export const delete_contact = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts/1`)

    const data = response.json()

    if(response.ok){
        return jsonify({"msg": "contacto eliminado."})
    }else{
        return jsonify({status: response.status, msg: data.msg})
    }
}

//----------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------

// AGENDA OPERATIONS

// GET TODAS LAS AGENDAS ("https://playground.4geeks.com/contact/agendas") OK

// GET AGENDA UUNICA ("https://playground.4geeks.com/contact/agendas/carlos") OK


// POST CREAR AGENDA ("https://playground.4geeks.com/contact/agendas/carlos") OK

// {
//   "slug": "carlos",
//   "id": 1
// }


// DELETE AGENDA ("https://playground.4geeks.com/contact/agendas/carlos")

//----------------------------------------------------------------------------------------------------------------------


// CONTACT OPERATION

// GET TODOS LOS CONTACTOS ("https://playground.4geeks.com/contact/agendas/carlos/contacts") OK


// POST CREAR CONTACTO ("https://playground.4geeks.com/contact/agendas/carlos/contacts") OK

// {
//   "name": "string",
//   "phone": "string",
//   "email": "string",
//   "address": "string"
// }

// PUT EDITAR CONTACTO ("https://playground.4geeks.com/contact/agendas/carlos/contacts/1") OK

// requerido agenda de quien , id del contacto y 

// {
//   "name": "string",
//   "phone": "string",
//   "email": "string",
//   "address": "string"
// }


// DELETE ELIMINAR CONTACTO ("https://playground.4geeks.com/contact/agendas/carlos/contacts/1")


// requerido agenda de quien y id del contacto