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
    dispatch({ type: 'set_contactos', payload: data.contacts }) //payload: data.contacts porque store.contacts no es un array, sino un objeto ({ contacts: [...] }).
    // React no puede iterarlo, y no renderiza nada.
}

//'set_contactos' me va a setear 
// // //----------------------------------------------------------------------------------------------------------------------

export const edit_contacts = async (id, new_contact, setNew_contact, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(new_contact)
    });

    const data = await response.json();

    if (!response.ok) {
        console.log("No es posible conectar con la API", data.msg);
        return;
    }

    if (response.ok) {
        get_list_user(dispatch)
    }
    setNew_contact({
        name: "",
        email: "",
        phone: "",
        address: "",
    })


}
// // //----------------------------------------------------------------------------------------------------------------------

export const delete_contact = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlos/contacts/${id}`, {
        method: "DELETE"
    });


    if (!response.ok) {
        console.error("Error al eliminar contacto:");
        return { status: response.status };
    }

    if (response.ok) {
        console.log("Contacto eliminado correctamente.");
    }


}

// // //----------------------------------------------------------------------------------------------------------------------
// Llamada a la API para conseguir agenda única.

export const get_agenda_unica = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/carlos")

    if (!response.ok) {
        console.log("Error con la API");
        create_agenda();
        return;
    }

    const data = await response.json();

    if (response.ok) {
        return data;
    }

}

// // //----------------------------------------------------------------------------------------------------------------------
export const create_agenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/carlos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify("carlos")
    });

    if(!response.ok){
        console.log("NO es posible crear agenda.");
        return;
    }

    const data = await response.json();
    if(response.ok){
        console.log("Agenda creada");
        return data;
    }
}