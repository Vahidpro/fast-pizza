import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
	return (
		<header className="bg-pink-500">
			<Link to="/">Fast Pizza Co.</Link>

			<SearchOrder />
		</header>
	);
}

export default Header;
