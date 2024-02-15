import { NavLink } from "react-router-dom"
import IconDone from "../../Icons/IconDone"
import "./questionAnswer1.css"

const QuestionAnswer1 = () => {
    return (
        <div className="ques-ans1">
            <div className="question1">
                <div className="question">
                    <span><IconDone /></span><p>Help with my order</p>
                </div>
                <div className="answer">
                    <p>Certainly! How can we help you with your order?</p>
                    <ul>
                        <li><NavLink to="">Help placing my order</NavLink></li>
                        <li><NavLink to="">Status of my order</NavLink></li>
                        <li><NavLink to="">Cancellation of my order</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default QuestionAnswer1