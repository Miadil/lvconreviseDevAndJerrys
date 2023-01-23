import { Link } from "react-router-dom"
import logo from "../logo.svg"

const Header = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/characters">Characters</Link>
				</li>
			</ul>
		</header>
	)
}
export default Header
