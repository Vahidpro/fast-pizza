import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block rounded-full bg-pink-400 px-4 py-3 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-pink-300 disabled:cursor-not-allowed disabled:bg-gray-300";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
