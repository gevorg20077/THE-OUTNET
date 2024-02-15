import { useRef, useState } from 'react'

import ArrowDown from '../../Icons/ArrowDown'
import './headerResult.css'
import { useSelector } from 'react-redux'

const HeaderResult = () => {
    const [clickRecommended, setClickRecommended] = useState(false)
    const [text, setText] = useState('Recommended')
    const clothes = useSelector((state) => state.clothes);


    const liRef1 = useRef(null)
    const liRef2 = useRef(null)
    const liRef3 = useRef(null)
    const liRef4 = useRef(null)
    const liRef5 = useRef(null)
    const funcClick = () => {
        setClickRecommended(!clickRecommended)
    }
    const clickLi1 = (e) => {
        setText(e.target.innerHTML)
        setClickRecommended(false)
        liRef1.current.classList.add('active')
        liRef2.current.classList.remove('active')
        liRef3.current.classList.remove('active')
        liRef4.current.classList.remove('active')
        liRef5.current.classList.remove('active')
    }
    const clickLi2 = (e) => {
        setText(e.target.innerHTML)
        setClickRecommended(false)
        liRef2.current.classList.add('active')
        liRef1.current.classList.remove('active')
        liRef3.current.classList.remove('active')
        liRef4.current.classList.remove('active')
        liRef5.current.classList.remove('active')
    }
    const clickLi3 = (e) => {
        setText(e.target.innerHTML)
        setClickRecommended(false)
        liRef3.current.classList.add('active')
        liRef1.current.classList.remove('active')
        liRef2.current.classList.remove('active')
        liRef4.current.classList.remove('active')
        liRef5.current.classList.remove('active')
    }
    const clickLi4 = (e) => {
        setText(e.target.innerHTML)
        setClickRecommended(false)
        liRef4.current.classList.add('active')
        liRef1.current.classList.remove('active')
        liRef2.current.classList.remove('active')
        liRef3.current.classList.remove('active')
        liRef5.current.classList.remove('active')
    }
    const clickLi5 = (e) => {
        setText(e.target.innerHTML)
        setClickRecommended(false)
        liRef5.current.classList.add('active')
        liRef1.current.classList.remove('active')
        liRef2.current.classList.remove('active')
        liRef4.current.classList.remove('active')
        liRef3.current.classList.remove('active')
    }

    return (
        <div className='headerResult'>
            <p className="results">{clothes.length} Results</p>
            <div style={{ border: clickRecommended && '1px solid black' }} className='recommended' onClick={funcClick}>
                {clickRecommended ? <p>Sort By</p> : <p>{text}</p>}
                <p className='arrowDown'><ArrowDown /></p>
            </div>
            {clickRecommended && <ul style={{ border: clickRecommended && '1px solid black' }}>
                <li ref={liRef1} onClick={clickLi1} className={text === 'Recommended' && 'active'}>Recommended</li>
                <li ref={liRef2} onClick={clickLi2} className={text === 'Newest' && 'active'}>Newest</li>
                <li ref={liRef3} onClick={clickLi3} className={text === 'Highest Discount' && 'active'}>Highest Discount</li>
                <li ref={liRef4} onClick={clickLi4} className={text === 'Price Low - High' && 'active'}>Price Low - High</li>
                <li ref={liRef5} onClick={clickLi5} className={text === 'Price High - Low' && 'active'}>Price High - Low</li>
            </ul>}
        </div>
    )
}
export default HeaderResult