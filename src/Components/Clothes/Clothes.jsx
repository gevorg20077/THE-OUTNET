import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClothes } from "../../store/slices/clothes/API";
import Clothe from "../Clothe/Clothe";
import { setCurrentPage } from "../../store/slices/pagination/pagination";
import "./clothes.css";

const Clothes = () => {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const productsPerPage = useSelector((state) => state.pagination.productsPerPage);
  const dispatch = useDispatch();
  const clothes = useSelector((state) => state.clothes.data);
  const searchValue = useSelector((state) => state.inputValue);
  const rangeValue = useSelector((state) => state.clothes.rangeValue);
  const colorCheck = useSelector((state) => state.clothes.colorCheck);
  const clothesSize = useSelector((state) => state.clothes.clothesSize);
  const LevisBool = useSelector((state) => state.clothes.LevisBool);
  const HandMBool = useSelector((state) => state.clothes.HandMBool);
  const NikeBool = useSelector((state) => state.clothes.NikeBool);
  const AdidasBool = useSelector((state) => state.clothes.AdidasBool);

  useEffect(() => {
    dispatch(fetchClothes());
  }, []);

  const showAll = LevisBool || HandMBool || NikeBool || AdidasBool || false;
  console.log(showAll);
  const searchProduct = clothes.filter((product) => product.title.toLowerCase().includes(searchValue));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchProduct.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(searchProduct.length / productsPerPage);

  const handleClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div key={i} className="pageCount" onClick={() => handleClick(i)}>
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  const LevisProducts = clothes.filter((product) => product.brand === "Levis");
  const HandMProducts = clothes.filter((product) => product.brand === "H&M");
  const NikeProducts = clothes.filter((product) => product.brand === "Nike");
  const AdidasProducts = clothes.filter((product) => product.brand === "Adidas");
  console.log(LevisProducts);
  const rangeProduct = currentProducts.filter((product) => +product.price?.slice(0, product.price?.length - 1).replace(",", ".") <= +rangeValue);

  const selectedColor = colorCheck.length > 0 ? rangeProduct.filter((product) => colorCheck.includes(product.color)) : rangeProduct;
  const selectedSize =
    clothesSize.length > 0
      ? selectedColor.filter((product) => {
          const productSizes = product.size.split(",").map((size) => size.trim());
          return productSizes.some((size) => clothesSize.includes(size));
        })
      : selectedColor;

  return (
    <div className="ClothsFooter">
      <div className="clothes">
        {LevisBool &&
          LevisProducts.map((clothe) => (
            <Clothe
              key={clothe.id}
              title={clothe.title}
              description={clothe.description}
              price={clothe.price}
              sale={clothe.sale}
              images={clothe.images}
              id={clothe.id}
              clothe={clothe}
            />
          ))}
        {HandMBool &&
          HandMProducts.map((clothe) => (
            <Clothe
              key={clothe.id}
              title={clothe.title}
              description={clothe.description}
              price={clothe.price}
              sale={clothe.sale}
              images={clothe.images}
              id={clothe.id}
              clothe={clothe}
            />
          ))}
        {NikeBool &&
          NikeProducts.map((clothe) => (
            <Clothe
              key={clothe.id}
              title={clothe.title}
              description={clothe.description}
              price={clothe.price}
              sale={clothe.sale}
              images={clothe.images}
              id={clothe.id}
              clothe={clothe}
            />
          ))}
        {AdidasBool &&
          AdidasProducts.map((clothe) => (
            <Clothe
              key={clothe.id}
              title={clothe.title}
              description={clothe.description}
              price={clothe.price}
              sale={clothe.sale}
              images={clothe.images}
              id={clothe.id}
              clothe={clothe}
            />
          ))}
        {!showAll &&
          selectedSize.map((clothe) => (
            <Clothe
              key={clothe.id}
              title={clothe.title}
              description={clothe.description}
              price={clothe.price}
              sale={clothe.sale}
              images={clothe.images}
              id={clothe.id}
              clothe={clothe}
            />
          ))}
      </div>
      {!showAll && <div className="pages">{renderPageNumbers()}</div>}
    </div>
  );
};

export default Clothes;
