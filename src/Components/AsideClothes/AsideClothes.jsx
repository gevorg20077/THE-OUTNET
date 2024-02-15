import { useDispatch, useSelector } from 'react-redux'

import './asideClothes.css'
import { actionInputRangeValue } from '../../store/slices/inputRangeValue/inputRangeValue'
import { actionCLickColor, actionCLickDesigner, actionCLickPrice, actionClickCaregory, actionClickClothingSize, actionClickCollarSize, actionClickConsidered, actionClickFabric } from '../../store/slices/info/info'
import { useRef } from 'react'
import ArrowDown from '../../Icons/ArrowDown'
import ArrowTop from '../../Icons/ArrowTop'
import { actionClothesSize, actionColorCheck, actionRangeValue, resetClothesSize, resetColorSelection } from '../../store/slices/clothes/clothes'
const AsideClothes = () => {
    const dispatch = useDispatch()
    const inputRangeValue = useSelector((state) => state.inputRangeValue)
    const { clickCategory } = useSelector((state) => state.clickCategory)
    const { clickPrice } = useSelector((state) => state.clickPrice)
    const { clickColor } = useSelector((state) => state.clickColor)
    const { clickDesigner } = useSelector((state) => state.clickDesigner)
    const { clickClothingSize } = useSelector((state) => state.clickClothingSize)
    const { clickCollarSize } = useSelector((state) => state.clickCollarSize)
    const { clickConsidered } = useSelector((state) => state.clickConsidered)
    const { clickFabric } = useSelector((state) => state.clickFabric)
    const colorCheck = useSelector(state => state.clothes.colorCheck);
    const clothingSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "3XL"];
    const allRef = useRef()
    const allClothing = useRef()

    const clickAll = () => {
        allRef.current.childNodes[0].classList.toggle('checked')
        allClothing.current.childNodes[0].classList.remove('checked')
    }
    const clickClothing = () => {
        allClothing.current.childNodes[0].classList.toggle('checked')
        allRef.current.childNodes[0].classList.remove('checked')
    }

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            dispatch(actionColorCheck(value));
        }
    };

    const handleCheckboxSizes = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            dispatch(actionClothesSize(value));
        }
    };

    const unCheckAll = () => {
        dispatch(resetColorSelection())
    }

    const unselectAllClothingSizes = () => {
        dispatch(resetClothesSize())
    }
    return (
        <aside>
            <div className='filter' style={{ padding: clickCategory ? '80px 0px 30px' : '35px 0' }}>
                <div className="text" onClick={() => dispatch(actionClickCaregory())}>
                    <p>Category</p>
                    <span>All</span>
                </div>
                {clickCategory && <div className='checkboxes'>
                    <div ref={allRef} onClick={clickAll} className="checkbox">
                        <div className='check checked'></div>
                        <p>All</p>
                    </div>
                    <div ref={allClothing} onClick={clickClothing} className="checkbox">
                        <div className='check'></div>
                        <p>Clothing</p>
                    </div>
                </div>}
                {clickCategory ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
            <div className='filter' style={{ padding: clickPrice ? '60px 0' : '35px 0' }}>
                <div className='priceText' onClick={() => dispatch(actionCLickPrice())}>
                    <p>Price</p>
                </div>
                {clickPrice && <div>
                    <p>{inputRangeValue}</p>
                    <input max='3000' onChange={(e) => { dispatch(actionInputRangeValue(e.target.value)); dispatch(actionRangeValue(e.target.value)) }} type="range" className='range' />
                </div>}
                {clickPrice ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
            <div className='filter' style={{ padding: clickColor ? '200px 0' : '35px 0' }}>
                <div className="text" onClick={() => dispatch(actionCLickColor())}>
                    <p>Color</p>
                    <span>All</span>
                </div>
                {clickColor && <div className='color'>
                    <p className='graytext' onClick={unCheckAll}>Unselect all</p>
                    {["black", "blue", "brown", "gray", "green", "multicolor", "neutral", "orange", "pink", "purpule", "red", "white", "yellow"].map(color => (
                        <div key={color} className="item">
                            <input type="checkbox" name="checkbox" value={color} onChange={handleCheckboxChange} checked={colorCheck.includes(color)} />
                            <div className='square' style={{ background: color === 'multicolor' ? 'url("https://www.theoutnet.com/assets/ton-color-swatch/multi.jpg")' : color }}></div>
                            <p>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
                        </div>
                    ))}
                </div>}
                {clickDesigner ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
            <div className='filter clothingSize' style={{ padding: clickClothingSize ? '60px 0' : '35px 0' }}>
                <div className="text" onClick={() => dispatch(actionClickClothingSize())}>
                    <p>Clothing Size</p>
                    <span>All</span>
                </div>
                {clickClothingSize && (
                    <div className='clo'>
                        <p className='graytext' onClick={unselectAllClothingSizes}>Unselect all</p>
                        <div className="checks">
                            {clothingSizes.map((size) => (
                                <div key={size} className="check">
                                    <input type="checkbox" name="checkbox" value={size} onChange={handleCheckboxSizes} />
                                    <p>{size}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {clickClothingSize ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
            <div className='filter collarSize' style={{ padding: clickCollarSize ? '60px 0 30px' : '35px 0' }}>
                <div className="text" onClick={() => dispatch(actionClickCollarSize())}>
                    <p>Collar Size</p>
                    <span>All</span>
                </div>
                {clickCollarSize && <div className='size'>
                    <p className='inches'>Inches Neck</p>
                    <p className='unselect'>Unselect all</p>
                    <div className="check">
                        <input type="checkbox" />
                        <p>19 ¾ </p>
                    </div>
                </div>}
                {clickCollarSize ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
            <div className='filter consuidered' style={{ padding: clickConsidered ? '60px 0 30px' : '35px 0' }}>
                <div className="text" onClick={() => dispatch(actionClickConsidered())}>
                    <p>Considered</p>
                    <span>All</span>
                </div>
                {clickConsidered && <div className='consuider'>
                    <p className='unselect'>Unselect all</p>
                    <div className="check">
                        <input type="checkbox" />
                        <p>All Considered</p>
                    </div>
                </div>}
                {clickConsidered ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
            <div className='filter fabric' style={{ padding: clickFabric ? '60px 0 30px' : '35px 0' }}>
                <div className="text" onClick={() => dispatch(actionClickFabric())}>
                    <p>Fabric</p>
                    <span>All</span>
                </div>
                {clickFabric && <div className='fab'>
                    <p className='unselect'>Unselect all</p>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Wool</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Cotton</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Denim</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Cashmere</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Leather</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Linen</p>
                    </div>
                    <div className="check">
                        <input type="checkbox" />
                        <p>Silk</p>
                    </div>
                    <div className="check last">
                        <input type="checkbox" />
                        <p>Velvet</p>
                    </div>
                </div>}
                {clickFabric ? <button><ArrowTop /></button> : <button className='arrowDown'><ArrowDown /></button>}
            </div>
        </aside>
    )
}

export default AsideClothes