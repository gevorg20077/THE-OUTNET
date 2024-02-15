import ChatHeader from "../ChatHeader/ChatHeader"
import ChatBody from "../ChatBody/ChatBody"
import ChatFooter from "../ChatFooter/ChatFooter"
import "./openChat.css"

const OpenChat = () => {
    return (
        <div className="openChat">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}
export default OpenChat