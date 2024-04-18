import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-pink-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-pink-300 disabled:cursor-not-allowed disabled:bg-gray-300 px-4 py-2";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py:4",
    secondary:
      "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors text-stone-400 duration-300 disabled:cursor-not-allowed disabled:bg-gray-300 px-4 py-2 border-2 border-stone-300 px-4 py-2.5md:px-6 md:py:4 m-3 hover:bg-stone-300 hover:text-stone-800 ",
    small: base + "px-4 py-2 md:px-5 md:py:2.5 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
