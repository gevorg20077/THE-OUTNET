import { useSelector } from "react-redux"
import QuestionAnswer1 from "../QuestionAnswer1/QuestionAnswer1"
import QuestionAnswer2 from "../QuestionAnswer2/QuestionAnswer2"
import QuestionAnswer3 from "../QuestionAnswer3/QuestionAnswer3"
import QuestionAnswer4 from "../QuestionAnswer4/QuestionAnswer4"
import './questionsAnswers.css'

const QuestionsAnswers = () => {
    const clickVariant1 = useSelector((state) => state.clickVariant1)
    const clickVariant2 = useSelector((state) => state.clickVariant2)
    const clickVariant3 = useSelector((state) => state.clickVariant3)
    const clickVariant4 = useSelector((state) => state.clickVariant4)
    const createImage = useSelector((state) => state.createImage.image)
    const messages = useSelector((state) => state.messages.massagesArr)
    const virtualMessageArr = useSelector((state) => state.messages.virtualMessageArr)
    const imagesArr = useSelector((state) => state.createImage.imagesArr)
    return (
        <div className="questionsAnswers">
            {clickVariant1 && <QuestionAnswer1 />}
            {clickVariant2 && <QuestionAnswer2 />}
            {clickVariant3 && <QuestionAnswer3 />}
            {clickVariant4 && <QuestionAnswer4 />}
            <div className="messages">
                {messages.map((massage, i) => {
                    return (
                        <div key={i} className="message">
                            {massage !== '' && <div>
                                <div className="question">
                                    <div className="text">
                                        <p>{massage}</p>
                                        <div className="triangle"></div>
                                        <div className="triangleBorder"></div>
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>{virtualMessageArr[i]}</p>
                                    <div className="trianglе"></div>
                                </div>
                            </div>}
                            {createImage && <img src={imagesArr[i]} alt="" />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default QuestionsAnswers