//Funciona correctamente "NO TOCAR MAS"

export const create_contact = async (new_contact, setNew_contact, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(new_contact)
    })

    if (!response.ok) { // si no tenemos una respuesta de la api retronamos un error
        console.log("No se pudo crear el contacto.")
        return;
    }

    if (response.ok) { // si tenemos una respuesta de la api retronamos la lista de contactos actualizada.
        get_list_user(dispatch)
    }

    setNew_contact({ // volvemos a nuestro formulario como desde un principio.
        name: "",
        email: "",
        phone: "",
        address: "",
    })
}


// // //----------------------------------------------------------------------------------------------------------------------

//Funciona correctamente "NO TOCAR MAS"

export const get_list_user = async (dispatch) => {

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts`)

    if (!response.ok) {
        console.log("No existen contactos.");
        await create_contact(); //pendiente Error: await create_contact() sin argumentos → rompe.
        return;
    }

    const data = await response.json()
    console.log(data) //con este console.log veo en consola la informacion de data.
    dispatch({ type: "set_contactos", payload: data })
}

//'set_contactos' me va a setear 
// // //----------------------------------------------------------------------------------------------------------------------

// // // export const edit_contact = async (contact, setContact, dispatch) => {
// // //     const response = await fetch (`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contact_id}`),{
// // //         method: "PUT",
// // //         headers: {
// // //             "Content-type": "application/json"
// // //         },
// // //         body: JSON.stringify(contact)
// // //     })

// // //     if (response.ok) {
// // //         get_list_user(dispatch)
// // //     }
// // // }
// // //----------------------------------------------------------------------------------------------------------------------

// export const delete_contact = async (id, dispatch) => {
//     const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts/${id}`, {
//         method: "DELETE"
//     });

//     if (!response.ok) {
//         const data = await response.json()
//         console.error("Error al eliminar contacto:", data.msg);
//         return { status: response.status, msg: data.msg };
//     }
//     await get_list_user(dispatch);

//     return { msg: "Contacto eliminado correctamente." };

// }

// // //----------------------------------------------------------------------------------------------------------------------
