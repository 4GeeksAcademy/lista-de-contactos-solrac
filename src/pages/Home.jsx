import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { delete_contact, edit_contacts, get_agenda_unica, get_list_user } from "../service/serviceAPI";
import { ContactCard } from "./ContactCard.jsx";
import { useEffect } from "react";

export const Home = () => {

	const navigate = useNavigate();
	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		get_list_user(dispatch) //esta llamada a la API funciona correctamente.
		get_agenda_unica()
	}, []);

	return (
		<>
			<div className="contact-list container-fluid my-5">
				<div className="row">
					<div className="d-flex justify-content-end mb-3">
						<button className="btn btn-success" onClick={() => navigate("/new_contact")}>
							Añadir contacto
						</button>
					</div>
					<div className="col">
						<ContactCard />
					</div>

				</div>
			</div>
		</>
	);
}; 