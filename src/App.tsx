import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import StorePage from "./pages/StorePage/StorePage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StorePage />}/>
      <Route path='/admin' element={<AdminPage />}/>
    </Routes>      
    )
};

export default App;
