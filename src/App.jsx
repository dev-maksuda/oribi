import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomeIndex from "./pages/home/HomeIndex";
import AboutIndex from "./pages/about/AboutIndex";
import AccountIndex from "./pages/account/AccountIndex";
import CartIndex from "./pages/cart/CartIndex";
import CheckoutIndex from "./pages/checkout/CheckoutIndex";
import ContactsIndex from "./pages/contacts/ContactsIndex";
import LoginIndex from "./pages/login/LoginIndex";
import ShopIndex from "./pages/shop/ShopIndex";
import SignUpIndex from "./pages/signup/SignUpIndex";
import ErrorIndex from "./pages/error/ErrorIndex";
import RootLayouts from "./components/layouts/RootLayouts";
import CustomError from "./components/common/CustomError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route element={<RootLayouts />}>
        <Route index element={<HomeIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/account" element={<AccountIndex />} />
        <Route path="/cart" element={<CartIndex />} />
        <Route path="/checkout" element={<CheckoutIndex />} />
        <Route path="/contacts" element={<ContactsIndex />} />
        <Route path="/login" element={<LoginIndex />} />
        <Route path="/shop" element={<ShopIndex />} />
        <Route path="/signup" element={<SignUpIndex />} />
        <Route path="*" element={<CustomError />} />
      </Route>

    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
