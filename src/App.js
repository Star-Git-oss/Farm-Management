import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import SingUp from "./components/SingUp/SingUp";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Footer/Footer";
import MyItem from "./components/MyItem/MyItem";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Blog from "./components/Blog/Blog";
import PageNotFount from "./components/PageNotFount/PageNotFount";

function App() {
    return (
        <div className="App">
            <HeaderNav></HeaderNav>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route
                    path="/addItem"
                    element={
                        <RequireAuth>
                            <AddItem></AddItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/myItem"
                    element={
                        <RequireAuth>
                            <MyItem></MyItem>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manageInventory"
                    element={
                        <RequireAuth>
                            <ManageInventory></ManageInventory>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/product/:productId"
                    element={
                        <RequireAuth>
                            <ProductDetail></ProductDetail>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/signup" element={<SingUp></SingUp>}></Route>
                <Route path="*" element={<PageNotFount></PageNotFount>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
