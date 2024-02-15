import { useDispatch } from "react-redux";
import { actionDeleteLike } from "../../store/slices/addLike/addLike";
import FavoriteIcon from "../../Icons/FavoriteIcon";
import { useRef } from "react";

const Like = ({ title, description, price, size, image, id, color }) => {
  const dispatch = useDispatch();
  const refLike = useRef(null)
  const deleteLike = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.style.transition = '.5s all'
    e.target.parentNode.parentNode.parentNode.parentNode.style.opacity = '0'
    setTimeout(() => {
      dispatch(actionDeleteLike(id))
      e.target.parentNode.parentNode.parentNode.parentNode.style.opacity = '1'
    }, 500)
  }
  return (
    <div className="like" ref={refLike}>
      <img src={image} alt="" />
      <div className="text">
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>Sizes: {size}</p>
        <p className="colorLike" style={{background: color}}>{color}</p>
        <button onClick={deleteLike}><FavoriteIcon /></button>
      </div>
    </div>
  );
};

export default Like;
