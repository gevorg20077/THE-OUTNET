import { Link, NavLink } from "react-router-dom";

import SearchIcon from "../../Icons/SearchIcon";
import HeartIcon from "../../Icons/HeartIcon";
import CartIcon from "../../Icons/CartIcon";
import UserIcon from "../../Icons/UserIcon";
import MapIcon from "../../Icons/MapIcon";

import "./menu.css";
import { useDispatch } from "react-redux";
import { actionInputValue } from "../../store/slices/searchProduct/searchProduct";
import { useSelector } from "react-redux";
import PhoneIcon from "../../Icons/phoneIcon";
import { actionAdidas, actionHandM, actionLeviStraus, actionNike } from "../../store/slices/clothes/clothes";

const Menu = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);
  const data = useSelector((state) => state.addToCart.data);


  return (
    <div className="menu">
      <div className="container">
        <div className="WebInfo">
          <div className="LangLog">
            <NavLink className="log">
              <UserIcon /> Sign In
            </NavLink>
            <NavLink className="lang">
              <MapIcon />
              Armenia
            </NavLink>
          </div>
          <div className="InfoHelp">
            <NavLink className="after">Track Your Order</NavLink>
            <NavLink className="after">Create A Return</NavLink>
            <NavLink className="after">Customer Care</NavLink>
            <NavLink className="after">Delivery</NavLink>
            <NavLink>Returns</NavLink>
          </div>
        </div>
      </div>
      <div className="MainMenu">
        <div className="container">
          <div className="topMenu">
            <NavLink to="/" className="title">
              THE OUTNET
            </NavLink>
            <div className="Fav_Cart">
              <NavLink to="/favorites">
                <HeartIcon />
              </NavLink>
              <div className="cart">
                <div className="ItemNumber">{data.length}</div>
                <NavLink to="/cart">
                  <CartIcon />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bottomMenu">
            <Link to="/allClothes" className="JustIn a">
              Just In
              <ul>
                <li className="JustInInfo">
                  <div className="containerInfo">
                    <div className="justIn">
                      <div className="justInfo">
                        <div className="justTopH1">
                          <h1 className="JustTop">Just In</h1>
                        </div>
                        <Link className="links">All Just In</Link>
                        <p className="links">Just In Last Week</p>
                        <p className="links">New: Knitwear</p>
                        <p className="links">New: Tops & T-shirts</p>
                      </div>
                      <div className="justImage">
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1809170/66be7eeee5726ae8500582c6c86c4b6b/just-in-banner-intl-1-image-data.jpg" alt="" />
                          <p>THOM BROWNE</p>
                        </div>
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1200424/67caf376979415851e509a75f9da07fc/just-in-banner-2-image-data.jpg" alt="" />
                          <p>WOOLRICH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
            <Link to="/allClothes" className="ShopBy a">
              Shop By
              <ul>
                <li className="ShopByInfo">
                  <div className="containerInfo">
                    <div className="justIn">
                      <div className="justInfo">
                        <div className="justTopH1">
                          <h1 className="JustTop">SHOP BY</h1>
                        </div>
                        <p className="links">What's New</p>
                        <p className="links">Superbrands</p>
                        <p className="links">Bestsellers</p>
                        <p className="links">New Designers</p>
                        <p className="links">Wardrobe Essentials</p>
                        <p className="links">Luxury Streetwear</p>
                        <p className="links">Best of Outerwear</p>
                        <p className="links">Winter Edit</p>
                        <p className="links">Formalwear</p>
                        <p className="links">Gifts for him</p>
                        <p className="links">Trend Inspiration</p>
                      </div>
                      <div className="justInfo">
                        <div className="justTop2H1">
                          <h1 className="JustTop">WHAT TO WEAR</h1>
                        </div>
                        <p className="links">Gym</p>
                        <p className="links">Summer Shop</p>
                        <p className="links">Skiing</p>
                        <p className="links">Work</p>
                        <p className="links">Weekend</p>
                        <p className="links">Outdoors</p>
                        <p className="links">The Winter Edit</p>
                      </div>
                      <div className="justImage">
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/2113188/8c74696abde5344e141f72d93f1e9a51/shop-by-banner-1-image-data.jpg" alt="" />
                          <p>OUTDOORS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
            <Link to="/allClothes" className="Bestsellers a">
              Bestsellers
              <ul>
                <li className="BestsellersInfo">
                  <div className="containerInfo">
                    <div className="justIn">
                      <div className="justInfo">
                        <div className="justTopH1">
                          <h1 className="JustTop">BESTSELLERS</h1>
                        </div>
                        <p className="links">All Bestsellers</p>
                        <p className="links">Clothing</p>
                        <p className="links">Tops & T-Shirts</p>
                        <p className="links">Casual Shirts</p>
                        <p className="links">Jackets</p>
                        <p className="links">Shoes</p>
                        <p className="links">Fashion Sneakers</p>
                      </div>
                      <div className="justImage">
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1809170/66be7eeee5726ae8500582c6c86c4b6b/just-in-banner-intl-1-image-data.jpg" alt="" />
                          <p>THOM BROWNE</p>
                        </div>
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1234780/bf01c61e965d12617ed5c11d1de7ca31/bestsellers-banner-2-image-data.jpg" alt="" />
                          <p>WOOLRICH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
            <Link to="/allClothes" className="Designer a">
              Brands
              <ul>
                <li className="DesignerInfo">
                  <div className="containerInfo">
                    <div className="justIn">
                      <div className="justInfo">
                        <div className="justTopH1">
                          <h1 className="JustTop">BRANDS</h1>
                        </div>
                        <p className="links" onClick={() => dispatch(actionLeviStraus())}>Levi Strauss & Co.</p>
                        <p className="links" onClick={() => dispatch(actionHandM())}>H&M</p>
                        <p className="links" onClick={() => dispatch(actionNike())}>Nike</p>
                        <p className="links" onClick={() => dispatch(actionAdidas())}>Adidas</p>
                      </div>
                      <div className="justImage">
                        <div className="img1">
                          <img src="https://www.zapatosmayka.es/documents/images/55244-7.jpg" alt="" />
                          <p>ADIDAS</p>
                        </div>
                        <div className="img1">
                          <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-05/15/13/asset/5ddd925391f1/sub-buzz-872-1589548499-9.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" alt="" />
                          <p>NIKE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
            <Link to="/allClothes" className="Clothing a">
              Clothing
              <ul>
                <li className="ClothingInfo">
                  <div className="containerInfo">
                    <div className="justIn">
                      <div className="justInfo">
                        <div className="justTopH1">
                          <h1 className="JustTop">CLOTHING</h1>
                        </div>
                        <div className="clothings">
                          <div className="column">
                            <p className="links">All Clothing</p>
                            <p className="links">Just In Clothing</p>
                            <p className="links">Casual Shirts</p>
                            <p className="links">Long Sleeve Shirts</p>
                            <p className="links">Checked Shirts</p>
                            <p className="links">Tops & T-Shirts</p>
                            <p className="links">Polo Shirts</p>
                            <p className="links">Knitwear</p>
                            <p className="links">Crew Neck Sweaters</p>
                            <p className="links">Cardigans & Zip Throughs</p>
                          </div>
                          <div className="column">
                            <p className="links">Pants</p>
                            <p className="links">Jeans</p>
                            <p className="links">Shorts</p>
                            <p className="links">Coats</p>
                            <p className="links">Jackets</p>
                            <p className="links">Blazers</p>
                            <p className="links">Suits</p>
                            <p className="links">Jeans</p>
                            <p className="links">Sweats</p>
                            <p className="links">Hoodies</p>
                          </div>
                        </div>
                      </div>
                      <div className="justImage">
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1951136/f10601c35d04c4861be868daa81a501f/clothing-banner-1-image-data.jpg" alt="" />
                          <p>ALL CLOTHING</p>
                        </div>
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1211412/27ee3382bf5e66b05f007087c50a1a18/clothing-banner-2-image-data.jpg" alt="" />
                          <p>KNITWEAR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
            <Link to="/allClothes" className="Shoes a">
              Shoes
              <ul>
                <li className="ShoesInfo">
                  <div className="containerInfo">
                    <div className="justIn">
                      <div className="justInfo">
                        <div className="justTopH1">
                          <h1 className="JustTop">SHOES</h1>
                        </div>
                        <p className="links">All Shoes</p>
                        <p className="links">Sneakers</p>
                        <p className="links">Boots</p>
                        <p className="links">Chelsea Boots</p>
                        <p className="links">Formal Shoes</p>
                        <p className="links">Loafers</p>
                        <p className="links">Lace Up's</p>
                        <p className="links">Sandals</p>
                      </div>
                      <div className="justImage">
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1276868/5f0d15845bc26fe240c58cbd7e00e10e/shoe-banner-1-intl-image-data.jpg" alt="" />
                          <p>ALL SHOES</p>
                        </div>
                        <div className="img1">
                          <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1958958/278e37b68acdd92dc75c3d0a5b22a4da/shoes-banner-2-image-data.jpg" alt="" />
                          <p>SNEAKERS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
            <div className="search">
              <input
                onChange={(e) => dispatch(actionInputValue(e.target.value))}
                className="searchInput"
                type="text"
                placeholder="What are you looking for?"
              />
              <button className="searchButton">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sale">
        <div className="container">
          <section class="subscribe-section">
            <div class="subscribe">
              <p>Subscribe and get 15% off your next order! – T&Cs apply</p>
            </div>
            <div class="shop">
              <p>Shop elevated essentials – shirts, sneakers and more</p>
            </div>
            <div class="app-download">
              <button className="phone-icon"> <PhoneIcon /></button>
              <p>App-y shopping: Download our new app!</p>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
};

export default Menu;
