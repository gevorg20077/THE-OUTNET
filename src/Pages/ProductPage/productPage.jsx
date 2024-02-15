import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelectedClothes } from "../../store/slices/selectedClothe/API";

import "./productPage.css";
import { actionAddToCart } from "../../store/slices/addToCart/addToCart";
import HeartIcon from "../../Icons/HeartIcon";
import { actionAddLike } from "../../store/slices/addLike/addLike";
const ProductPage = () => {
  const { prodId } = useParams();
  const SelectedClothe = useSelector((state) => state.selectedClothe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSelectedClothes(prodId));
  }, [prodId]);

  const [imageIndex,setImageIndex] = useState(0)

  const clickImage = (index)=>{
    setImageIndex(index)
  }


  return (
    <div className="selectedClothe">
      <div className="container">
        <div className="Clothe">
          {SelectedClothe.images && Array.isArray(SelectedClothe.images) && SelectedClothe.images.length > 0 && (
            <div className="imgs">
              <div className="showImages">
                {SelectedClothe.images.map((image, index) => (
                  <img onClick={()=>clickImage(index)} key={index} src={image} />
                ))}
              </div>
              <div className="mainImages">{SelectedClothe.images[imageIndex] && <img src={SelectedClothe.images[imageIndex]} alt="" />}</div>
            </div>
          )}
          <div className="infos">
            <h3>{SelectedClothe.title}</h3>
            <p>{SelectedClothe.description}</p>
            <br />
            <h3>{SelectedClothe.price}</h3>
            <p>Color: {SelectedClothe.color}</p>
            <p>Select your size</p>
            <div className="button">
              <button>
                <p>S</p>
              </button>
              <button>
                <p>M</p>
              </button>
              <button>
                <p>L</p>
              </button>
              <button>
                <p>XL</p>
              </button>
              <button>
                <p>XXL</p>
              </button>
            </div>
            <div className="finaly1">
              <p>ONLY ONE LEFT</p>
              <button onClick={() => dispatch(actionAddToCart(SelectedClothe))}>Add To Bag</button>
            </div>
            <div className="finaly2" onClick={() => dispatch(actionAddLike(SelectedClothe))}>
              <button>
                {" "}
                <HeartIcon /> <p>Add To Wish List</p>
              </button>
            </div>
            <div className="finaly3">
              <h2>Delivery & Returns</h2>
              <p>Find out more about our delivery options and how to exchange or return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
