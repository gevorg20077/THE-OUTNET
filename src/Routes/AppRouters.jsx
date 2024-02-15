import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import OuterwearBody from "../Pages/OuterwearBody/OuterwearBody";
import ProductPage from "../Pages/ProductPage/productPage";
import MainPage from "../Pages/Main/MainPage";
import CartPage from "../Pages/Cart/CartPage";
import Likes from "../Pages/Likes/Likes";
import About from "../Pages/About/About";
import Affiliates from "../Pages/Affiliates/Affiliates";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AppRouters = () => {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentPage]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="allClothes" element={<OuterwearBody />} />
        <Route path="allClothes/:prodId" element={<ProductPage />} />
        <Route path="cart/:prodId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<Likes />} />
        <Route path="about" element={<About />} />
        <Route path="affiliates" element={<Affiliates />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
