import image1 from "../../Images/red.avif"
import image2 from "../../Images/w1500_q80.jpg"
import './affiliates.css'
const Affiliates = () => {
    return (
        <div className="affiliates">
            <div className="container">
                <p className="p1">WANT TO BECOME AN AFFILIATE?</p>
                <p>Since April 2009, millions of fashion-savvy customers have flocked to the site to snap up items from 350+ designer labels at irresistible prices!</p>
                <p className="p2">We want to promote THE OUTNET through like-minded fashion blogs and websites that are fully functioning and visually stunning.</p>
                <img src={image1} alt="" />
                <p className="p3">IT'S FREE TO JOIN</p>
                <p>We'll supply you with a weekly calendar that will keep you updated on all of our upcoming designer events, trends and products, so that you can work them into your content ahead of time.</p>
                <p className="p2">You will also be provided with high-quality creative assets and links to support each promotional story.</p>
                <img src={image2} alt="" />
                <p className="p4">READY TO JOIN?</p>
                <button>Apply Now</button>
                <p>We'll get back to you about your application as soon as we can.</p>
                <p className="p5">Feel free to email affiliates@theoutnet.com with any queries.</p>
            </div>
        </div>
    )
}

export default Affiliates