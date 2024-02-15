import { useSelector } from "react-redux";
import Like from "../../Components/Like/Like";
import "./likes.css";
import HeartIcon from "../../Icons/HeartIcon";

const Likes = () => {
  const addLike = useSelector((state) => state.addLike);
  return (
    <div className="likes">
      <h1>
        Your Favorites <HeartIcon />
      </h1>
      <div className="likeItems">
        {addLike.map((like) => (
          <Like
            id={like.id}
            title={like.title}
            description={like.description}
            color={like.color}
            price={like.price}
            size={like.size}
            image={like.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Likes;
