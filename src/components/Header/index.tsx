import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
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
				<Offcanvas.Title className="d-flex align-items-center">
					<Image roundedCircle={true} className="border" style={{ width: "50px", height: "50px" }} />
					<div className="ms-2">
						<h4 className="m-0">Андрей</h4>
						<span className="fw-normal fs-6">g0oglovec29936@gmail.com</span>
					</div>
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<nav>
					<ul className="list-unstyled m-0">
						<li><Link className="text-black fs-5" to="/">Список постов</Link></li>
						<li className="mt-2"><Link className="text-black fs-5" to="/about-me">Обо мне</Link></li>
					</ul>
				</nav>
			</Offcanvas.Body>
		</Offcanvas>
	</header>
}