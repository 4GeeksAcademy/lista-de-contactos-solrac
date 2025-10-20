export const create_agenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ slug: "carlos" })
    })

    if (!response.ok) {
        return { status: response.status, msg: response.statusText }
    }

    await get_agenda()
}

// //----------------------------------------------------------------------------------------------------------------------
// //este no lo voy a necesitar en este ejercicio


// export const get_alls_agendas = async () => {
//     const response = await fetch("https://playground.4geeks.com/contact/agendas")


//     if (!response.ok) {
//         console.log("No hay agendas.")
//         await create_agenda()
//         return;
//     }
//     const data = await response.json()

//     return data;
// }

// //----------------------------------------------------------------------------------------------------------------------

// export const get_agenda = async () => {
//     const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`)


//     if (!response.ok) {
//         console.log("No existe agenda")
//         return;
//     }

//     const data = await response.json()
//     return data;

//     // dispatch({ type: "set_agenda", payload: data })
// // }

// //----------------------------------------------------------------------------------------------------------------------
export const delete_agenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos`, {
        method: "DELETE"
    })

    if (response.ok) {
        return { "msg": "Agenda eliminada con éxito." }
    } else {
        return { status: response.status, msg: response.detail }
    }
}

// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------------------
export const create_contact = async (contact, setContact) => {
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

    await get_list_user()
}

// //----------------------------------------------------------------------------------------------------------------------

export const get_list_user = async () => {

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts`)

    if (!response.ok) {
        console.log("No existe agenda ó contactos.");
        // await create_contact(); //pendiente Error: await create_contact() sin argumentos → rompe.
        return;
    }

    const data = await response.json()

    return data;

    // dispatch({ type: "set_contactos", payload: data })
}


// //----------------------------------------------------------------------------------------------------------------------

// // export const edit_contact = async (contact, setContact, dispatch) => {
// //     const response = await fetch (`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contact_id}`),{
// //         method: "PUT",
// //         headers: {
// //             "Content-type": "application/json"
// //         },
// //         body: JSON.stringify(contact)
// //     })

// //     if (response.ok) {
// //         get_list_user(dispatch)
// //     }
// // }
// //----------------------------------------------------------------------------------------------------------------------

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

// //----------------------------------------------------------------------------------------------------------------------
