import {createBrowserRouter, createRoutesFromElements, route} from "react-router";
const routes = createRoutesFromElements(
  <>
    <Route index element={<HomeIndex />} />
<Route path="/about" element={<AboutIndex />} />
<Route path="/account" element={<AccountIndex />} />
<Route path="/cart" element={<CartIndex />} />
<Route path="/checkout" element={<CheckoutIndex />} />
<Route path="/contacts" element={<ContactsIndex />} />
<Route path="/login" element={<LoginIndex />} />
<Route path="/shop" element={<ShopIndex />} />
<Route path="/signup" element={<SignUpIndex />} />
<Route path="*" element={<ErrorIndex />} />

  </>
);

const router = createBrowserRouter(routes);

function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App
