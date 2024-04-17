import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import CreateUser from "../features/user/CreateUser";
import CreateOrder from "../features/order/CreateOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto-1fr-auto] bg-pink-100">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
        <CreateUser />
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
