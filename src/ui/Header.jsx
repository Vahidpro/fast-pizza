import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <>
      <header className="border-b-2 border-pink-700 bg-pink-500 px-4 py-3 uppercase tracking-widest">
        <Link to="/">Fast Pizza Co.</Link>

        <SearchOrder />

        <Username />
      </header>
    </>
  );
}

export default Header;
