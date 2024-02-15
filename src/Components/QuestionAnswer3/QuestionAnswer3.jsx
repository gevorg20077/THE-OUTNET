import { NavLink } from "react-router-dom"
import IconDone from "../../Icons/IconDone"
import "./questionAnswer3.css"

const QuestionAnswer3 = () => {
    return (
        <div className="ques-ans3">
            <div className="question">
                <span><IconDone /></span><p>Help with Exchange/Return</p>
            </div>
            <div className="answer">
                <p>Certainly! How can we help you with your exchange or return?</p>
                <ul>
                    <li><NavLink to="">How to Return/Exchange</NavLink></li>
                    <li><NavLink to="">Return/Refund Status</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default QuestionAnswer3