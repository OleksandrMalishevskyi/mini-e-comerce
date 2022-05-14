import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import Shop from "./component/Shop/Shop";
import AddProduct from "./component/Product/AddProduct"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/create' element={<AddProduct />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
