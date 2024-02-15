import { useRef, useState } from "react"
import IconPaperclip from "../../Icons/IconPaperclip"
import IconRight from "../../Icons/IconRight"
import './chatFooter.css'
import { useDispatch } from "react-redux"
import { actionCreateImage } from "../../store/slices/createImage/createImage"
import { actionAddMessage } from "../../store/slices/message/message"

const ChatFooter = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const [isImage, setIsImage] = useState(false)
    const createNewImage = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImage(reader.result)
        }
        setIsImage(true)
    }
    const submitImage = () => {
        setIsImage(false)
        dispatch(actionCreateImage(image))
    }
    const addMessage = (e) => {
        e.preventDefault()
        dispatch(actionAddMessage(inputRef.current.value.toLowerCase()))
        inputRef.current.value = ''
    }
    return (
        <div className="chatFooter">
            {image && isImage ? <div className="doneImage">
                <p>File attachment preview</p>
                <img className="image" src={image} alt="" />
                <hr />
                <input type="text" placeholder="Attachment caption" />
                <button className="submitImage" onClick={submitImage}><IconRight /></button>
            </div> : null}
            <form action="" onSubmit={addMessage}>
                <button className="iconPaperclip"><IconPaperclip /></button>
                <input onChange={createNewImage} className="file" type="file" />
                <input ref={inputRef} type="text" placeholder="Type your message" />
                <button className="iconRight"><IconRight /></button>
            </form>
        </div>
    )
}
export default ChatFooter