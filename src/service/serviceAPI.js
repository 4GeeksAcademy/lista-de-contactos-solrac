export const create_agenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/carlos", {
        method: "POST"
    })

    const data = response.json()

}

//----------------------------------------------------------------------------------------------------------------------

export const get_alls_agendas = async () => {

}

//----------------------------------------------------------------------------------------------------------------------

export const get_agenda = async () => {
    
}

//----------------------------------------------------------------------------------------------------------------------
export const delete_agenda = async () => {

}

//----------------------------------------------------------------------------------------------------------------------
export const create_contact = async (new_contact,setContact, dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/carlos/contacts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(new_contact)
    })

    if(response.ok){
        get_list_user(dispatch)
    }

    setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
    })
}

//----------------------------------------------------------------------------------------------------------------------

export const get_all_contact = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/carlos/contacts")

    const data = response.json()

    if (!response.ok) {
        console.log("No existe agenda.");
        create_agenda();
    }

    dispatch({ type: "set_Agenda", payload: data })
}


//----------------------------------------------------------------------------------------------------------------------

export const edit_contact = async () => {

}
//----------------------------------------------------------------------------------------------------------------------

export const delete_contact = async () => {
    
}

//----------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------

// AGENDA OPERATIONS

// GET TODAS LAS AGENDAS ("https://playground.4geeks.com/contact/agendas")

// GET AGENDA UUNICA ("https://playground.4geeks.com/contact/agendas/carlos")


// POST CREAR AGENDA ("https://playground.4geeks.com/contact/agendas/carlos")

// {
//   "slug": "carlos",
//   "id": 1
// }


// DELETE AGENDA ("https://playground.4geeks.com/contact/agendas/carlos")

//----------------------------------------------------------------------------------------------------------------------


// CONTACT OPERATION

// GET TODOS LOS CONTACTOS ("https://playground.4geeks.com/contact/agendas/carlos/contacts")


// POST CREAR CONTACTO ("https://playground.4geeks.com/contact/agendas/carlos/contacts")

// {
//   "name": "string",
//   "phone": "string",
//   "email": "string",
//   "address": "string"
// }

// PUT EDITAR CONTACTO ("https://playground.4geeks.com/contact/agendas/carlos/contacts/1")

// requerido agenda de quien , id del contacto y 

// {
//   "name": "string",
//   "phone": "string",
//   "email": "string",
//   "address": "string"
// }


// DELETE ELIMINAR CONTACTO ("https://playground.4geeks.com/contact/agendas/carlos/contacts/1")


// requerido agenda de quien y id del contacto