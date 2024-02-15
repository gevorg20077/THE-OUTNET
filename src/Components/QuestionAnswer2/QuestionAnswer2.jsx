import { NavLink } from "react-router-dom"
import IconDone from "../../Icons/IconDone"
import "./questionAnswer2.css"
const QuestionAnswer2 = () => {
    return (
        <div className="ques-ans2">
            <div className="question">
                <span><IconDone /></span><p>Product information</p>
            </div>
            <div className="answer">
                <p>Certainly! What product information are you looking for?</p>
                <ul>
                    <li><NavLink to="">Product availability</NavLink></li>
                    <li><NavLink to="">Style and fit advice</NavLink></li>
                    <li><NavLink to="">Reserve an item</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default QuestionAnswer2