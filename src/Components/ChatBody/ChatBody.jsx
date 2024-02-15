import './chatBody.css'
import BigMessage from "../BigMessage/BigMessage"
import SmallMessage from "../SmallMessage/SmallMessage"
import QuestionsAnswers from "../QuestionsAnswers/QuestionsAnswers"

const ChatBody = () => {
    return (
        <div className="chatBody">
            <BigMessage />
            <SmallMessage />
            <QuestionsAnswers/>
        </div>
    )
}
export default ChatBody