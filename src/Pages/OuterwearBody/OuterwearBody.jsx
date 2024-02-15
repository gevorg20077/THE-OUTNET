import AsideClothes from '../../Components/AsideClothes/AsideClothes'
import Clothes from '../../Components/Clothes/Clothes'
import HeaderResult from '../../Components/HeaderResult/HeaderResult'
import './outerwearBody.css'

const OuterwearBody = () => {
    return (
        <div className="outerwearBody">
            <div className="container">
                <p className="outerwear">OUTERWEAR</p>
                <hr />
                <HeaderResult />
                <div className="body">
                    <AsideClothes /> 
                    <Clothes />
                </div>
            </div>
        </div>
    )
}
export default OuterwearBody