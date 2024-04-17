import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-pink-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-pink-300 disabled:cursor-not-allowed disabled:bg-gray-300 px-4 py-2";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py:4",
    small: base + "px-4 py-2 md:px-5 md:py:2.5 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
