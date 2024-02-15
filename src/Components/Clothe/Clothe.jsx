import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { actionAddLike } from "../../store/slices/addLike/addLike"

const Clothe = ({ title, description, price, sale, images, id, clothe }) => {
    const [hoverImage, setHoverImage] = useState(images[0])
    const mouseEnter = () => {
        setHoverImage(images[1])
    }
    const mouseLeave = () => {
        setHoverImage(images[0])
    }
    return (
        <div className="clothe" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <NavLink to={`${id}`}>
                <img src={hoverImage} alt="" />
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <p style={{ color: 'brown' }}>€{price}</p>
                <p>{sale}</p>
            </NavLink>
        </div>
    )
}
export default Clothe