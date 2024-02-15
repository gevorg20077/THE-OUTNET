import { useDispatch } from "react-redux"
import IconChat1 from "../../Icons/IconChat1"
import IconChat2 from "../../Icons/IconChat2"
import { actionClickChat } from "../../store/slices/clickChat/clickChat"
import "./closeChat.css"

const CloseChat = () => {
    const dispatch = useDispatch()
    return (
        <div className="closeChat" onClick={() => dispatch(actionClickChat())}>
            <div className="icons">
                <p className="iconChat1"><IconChat1 /></p>
                <p className="iconChat2"><IconChat2 /></p>
            </div>
            <p className="text">Chat To An Expert</p>
        </div>
    )
}
export default CloseChat