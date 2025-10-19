export const create_agenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`, {
        method: "POST", headers: {
            "Content-type": "application/json"
        }, body: JSON.stringify({ slug: "carlos" })
    })

    if (!response.ok) {
        return { status: response.status, msg: response.statusText }
    }
    await get_alls_agendas()
}

//----------------------------------------------------------------------------------------------------------------------

export const get_alls_agendas = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas")


    if (!response.ok) {
        console.log("No hay agendas.")
        await create_agenda()
        return;
    }
    const data = await response.json()

    return data;
}

//----------------------------------------------------------------------------------------------------------------------

export const get_agenda = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`)


    if (!response.ok) {
        console.log("No existe agenda")
        await create_agenda()
        return;
    }

    const data = await response.json()

    dispatch({ type: "set_Agenda", payload: data })
}

//----------------------------------------------------------------------------------------------------------------------
export const delete_agenda = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`, {
        method: "DELETE"
    })

    if (response.ok) {
        return { "msg": "Agenda eliminada con éxito." }
    } else {
        return { status: response.status, msg: response.detail }
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

    if (!response.ok) {
        console.log("No se pudo crear el contacto.")

        return;
    }

    const data = await response.json()

    await get_list_user(dispatch)

    setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

}

//----------------------------------------------------------------------------------------------------------------------

export const get_list_user = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts`)

    if (!response.ok) {
        console.log("No existe agenda ó contactos.");
        // await create_contact(contact); //pendiente Error: await create_contact() sin argumentos → rompe.
        return;
    }

    const data = await response.json()

    dispatch({ type: "set_ContactoAgenda", payload: data })
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

export const delete_contact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        const data = await response.json()
        console.error("Error al eliminar contacto:", data.msg);
        return { status: response.status, msg: data.msg };
    }
    await get_list_user(dispatch);

    return { msg: "Contacto eliminado correctamente." };

}

//----------------------------------------------------------------------------------------------------------------------
