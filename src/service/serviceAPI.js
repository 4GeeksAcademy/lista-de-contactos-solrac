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

export const create_agenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/carlos", {
        method: "POST"
    })

    const data = response.json()

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

