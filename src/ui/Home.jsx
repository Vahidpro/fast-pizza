import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
      <h1 className=" mb-4 mt-10 text-center text-2xl font-semibold text-pink-500 sm:bg-pink-950 ">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
