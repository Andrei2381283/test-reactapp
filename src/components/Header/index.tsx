import { Link } from "react-router-dom";

export default function Header() {
	return <header className="d-flex bg-dark px-5 py-3">
		<nav>
			<ul className="d-flex list-unstyled m-0">
				<li><Link className="text-white text-decoration-none" to="/">Main</Link></li>
				<li><Link className="text-white text-decoration-none ms-4" to="/about-me">About me</Link></li>
			</ul>
		</nav>
	</header>
}