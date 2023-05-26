import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return <header className="d-flex bg-dark px-5 py-3">
		<button className="bg-transparent" style={{ width: "44px" }} onClick={handleShow}>
			<div className="border w-100 my-2"></div>
			<div className="border w-100"></div>
			<div className="border w-100 my-2"></div>
		</button>
		<Offcanvas show={show} onHide={handleClose}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Menu</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<nav>
					<ul className="list-unstyled m-0">
						<li><Link className="text-black fs-5" to="/">Main</Link></li>
						<li className="mt-2"><Link className="text-black fs-5" to="/about-me">About me</Link></li>
					</ul>
				</nav>
			</Offcanvas.Body>
		</Offcanvas>
	</header>
}