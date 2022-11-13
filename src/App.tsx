import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import StorePage from "./pages/StorePage/StorePage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StorePage />}/>
      <Route path='/checkout' element={<CheckoutPage />}/>
    </Routes>      
    )
};

export default App;
