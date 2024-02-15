import { useSelector } from "react-redux"
import './chat.css'
import CloseChat from "../../Components/CloseChat/CloseChat"
import OpenChat from "../../Components/OpenChat/OpenChat"

const Chat = () => {
    const clickChat = useSelector((state) => state.clickChat)
    return (
        <div className="chat">
            {clickChat || <CloseChat />}
            {clickChat && <OpenChat />}
        </div>
    )
}
export default Chat