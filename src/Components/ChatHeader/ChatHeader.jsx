import { useDispatch, useSelector } from "react-redux"
import { actionClickArrowDown, actionClickEnd, actionClickYes } from "../../store/slices/clickChat/clickChat"
import Icon3Dots from "../../Icons/Icon3Dots"
import IconArrowDown from "../../Icons/IconArrowDown"
import IconPrint from "../../Icons/IconPrint"
import IconMute from "../../Icons/IconMute"
import IconMessageDelete from "../../Icons/IconMessageDelete"
import IconEnd from "../../Icons/IconEnd"
import IconSound from "../../Icons/IconSound"
import IconSetting from "../../Icons/IconSetting"
import { actionClickMute } from "../../store/slices/ClickMute/ClickMute"
import { actionClickClear, actionClickNo, actionClickYesClear } from "../../store/slices/clickClear/clickClear"
import { actionClick3Dots } from "../../store/slices/click3Dots/click3Dots"
import { actionClickClearVariant1 } from "../../store/slices/clickVariant1/clickVariant1"
import { actionClearVariant2 } from "../../store/slices/clickVariant2/clickVariant2"
import { actionClearVariant3 } from "../../store/slices/clickVariant3/clickVariant3"
import { actionClearVariant4 } from "../../store/slices/clickVariant4/clickVariant4"

import './chatHeader.css'
import { NavLink } from "react-router-dom"
const ChatHeader = () => {
    const dispatch = useDispatch()
    const clickMute = useSelector((state) => state.clickMute)
    const clickClear = useSelector((state) => state.clickClear)
    const click3Dots = useSelector((state) => state.click3Dots)
    return (
        <div className="chatHeader">
            <p>Message us</p>
            <div className="icons">
                <p onClick={() => dispatch(actionClick3Dots())}><Icon3Dots /></p>
                <p className="arrowDown" onClick={() => dispatch(actionClickArrowDown())}><IconArrowDown /></p>
            </div>
            {click3Dots &&
                <div className="chatMenu">
                    <ul>
                        <li><NavLink to="" target="_blank"><IconPrint /> Print transcript</NavLink></li>
                        {clickMute ? <li onClick={() => dispatch(actionClickMute())}><IconSound /> Mute: On</li> : <li onClick={() => dispatch(actionClickMute())}><IconMute /> Mute: Off</li>}
                        <li onClick={() => dispatch(actionClickClear())}><IconMessageDelete /> Clear history</li>
                        {clickClear && <div className="clear">
                            <p className="text1">Are you sure you want to clear your conversation history?</p>
                            <p className="text2">If you choose "Yes" the conversation will be closed automatically and your history will no longer be available when you reopen the window.</p>
                            <div className="buttons">
                                <button onClick={() => dispatch(actionClickNo())} className="no">No</button>
                                <button onClick={() => { dispatch(actionClickYes()); dispatch(actionClickYesClear()); dispatch(actionClickClearVariant1()); dispatch(actionClearVariant2()); dispatch(actionClearVariant3()); dispatch(actionClearVariant4()) }} className="yes">Yes</button>
                            </div>
                        </div>}
                        <li onClick={() => dispatch(actionClickEnd())}><IconEnd /> End conversation</li>
                    </ul>
                    <p className="person"><b><IconSetting /> LIVE</b>PERSON</p>
                </div>
            }
        </div>
    )
}
export default ChatHeader