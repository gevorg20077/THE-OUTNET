import { useDispatch, useSelector } from "react-redux"
import { actionClickVariant1 } from "../../store/slices/clickVariant1/clickVariant1"
import { actionClickVariant2 } from "../../store/slices/clickVariant2/clickVariant2"
import { actionClickVariant3 } from "../../store/slices/clickVariant3/clickVariant3"
import { actionClickVariant4 } from "../../store/slices/clickVariant4/clickVariant4"

const SmallMessage = () => {
    const dispatch = useDispatch()
    const clickVariant1 = useSelector((state) => state.clickVariant1)
    const clickVariant2 = useSelector((state) => state.clickVariant2)
    const clickVariant3 = useSelector((state) => state.clickVariant3)
    const clickVariant4 = useSelector((state) => state.clickVariant4)
    return (
        <div className="smallMessage">
            {clickVariant1 || clickVariant2 || clickVariant3 || clickVariant4 || <div className="message" onClick={() => dispatch(actionClickVariant1())}>
                <p>Help with my order</p>
            </div>}
            {clickVariant1 || clickVariant2 || clickVariant3 || clickVariant4 || <div className="message" onClick={()=>dispatch(actionClickVariant2())}>
                <p>Product information</p>
            </div>}
            {clickVariant1 || clickVariant2 || clickVariant3 || clickVariant4 || <div className="message" onClick={()=>dispatch(actionClickVariant3())}>
                <p>Help with Exchange/Return</p>
            </div>}
            {clickVariant1 || clickVariant2 || clickVariant3 || clickVariant4 || <div className="message" onClick={()=>dispatch(actionClickVariant4())}>
                <p>Something Else</p>
            </div>}
        </div>
    )
}

export default SmallMessage