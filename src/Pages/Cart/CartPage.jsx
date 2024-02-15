import { NavLink } from "react-router-dom";
import "./cartPage.css";
import { useDispatch, useSelector } from "react-redux";
import IconDelete from "../../Icons/IconDelete";
import HeartIcon from "../../Icons/HeartIcon";
import { actionDeleteFromCart } from "../../store/slices/addToCart/addToCart";
import { actionAddLike } from "../../store/slices/addLike/addLike";

const CartPage = () => {
  const cartData = useSelector((state) => state.addToCart.data);
  const dispatch = useDispatch();

  let subtotal = 0;
  cartData.forEach(product => {
    subtotal += +product.price?.slice(0, product.price?.length - 1).replace(",", ".");
  });

  console.log(subtotal);

  return (
    <div className="cartPage">
      <div className="container">
        <div className="shopping">
          <div className="shoppingBag">
            <h1>Shopping Bag</h1>
            <p>{cartData.length} item</p>
          </div>
          {cartData.map((item) => {
            return (
              <div className="selectedItem">
                <NavLink className="productItem" to={`${item.id}`}>
                  <img src={item.images[0]} alt="" />
                  <div className="information">
                    <p className="top">JUST IN</p>
                    <p>{item.title}</p>
                    <p>COLOR: {item.color}</p>
                    <p>GENDER: {item.gender}</p>
                    <p>BRAND: {item.brand}</p>
                    <p style={{ color: "rgb(188, 26, 26)", fontWeight: "700", fontSize: "18px" }}>{item.price}</p>
                  </div>
                </NavLink>
                <div className="delLike">
                  <button onClick={() => dispatch(actionDeleteFromCart(item.id))}>
                    <IconDelete />
                  </button>
                  <button>
                    <HeartIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="shopInfo">
          <div className="all">
            <div className="p1">
              <p>Order Summary</p>
            </div>
            <div className="p2">
              <p>Sub-Total</p>
              <p>{subtotal.toFixed(2)} $</p>
            </div>
            <div className="promo">
              <p>Enter your Promo Code</p>
              <div className="inputPromo">
                <input type="text" />
                <button className="buttonPromo">Apply</button>
              </div>
            </div>
            <div className="totalAll">
              <div className="Total">
                <p>Total (USD)</p>
                <p>{subtotal.toFixed(2)} $</p>
              </div>
              <div className="confirm">
                <p>Calculated against the RRP or, for exclusive collections, against the original price</p>
                <button>Proceed To Checkout</button>
              </div>
              <div className="cards">
                <img src="https://www.freepnglogos.com/uploads/visa-inc-png-18.png" alt="" />
                <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt="" />
                <img src="https://freepngimg.com/thumb/logo/127388-logo-american-express-hq-image-free.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/2560px-JCB_logo.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/PayPal.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="delivery">
          <span className="considered">Considered</span>
          <span className="title">Delivery</span>
          <p>Concerned about the environmental impact of your delivery? Don't worry, we'll offset this for you through our carbon credits programme.</p>
          <p>You can easily recycle almost all of our packaging at home.</p>
        </div>
      </div>

    </div>
  );
};

export default CartPage;
