import "./aboutSection.css"
import { imagesAbout } from "../../imagesAbout/imagesAbout"
const AboutSection = () => {
    return (
        <div className="aboutParents">
            <p>WHAT YOU CAN EXPECT</p>
            <div className="items">
                <div className="aboutItem">
                    <img src={imagesAbout.image1} alt="" />
                    <p>JUST IN</p>
                    <p>With new arrivals every week, keep browsing to secure your favorites</p>
                    <button>Shop Women's</button>
                    <button>Shop Men's</button>
                </div>
                <div className="aboutItem">
                    <img src={imagesAbout.image2} alt="" />
                    <p>350+ DESIGNERS</p>
                    <p>Our site is brimming with top designers from Sandro to Valentino</p>
                    <button>Shop Women's Brands</button>
                    <button>Shop Men's Brands</button>
                </div>
                <div className="aboutItem">
                    <img src={imagesAbout.image3} alt="" />
                    <p>THE OUTNET APP</p>
                    <p>Shop on the go and get early access to Sale and next week’s Just In</p>
                    <button>Download on iOS</button>
                    <button>Download on Android</button>
                </div>
                <div className="aboutItem">
                    <img src={imagesAbout.image4} alt="" />
                    <p>EXCLUSIVE TREATS</p>
                    <p>Enjoy surprise promotions and previews of our Just In, exclusively on the APP</p>
                </div>
                <div className="aboutItem">
                    <img src={imagesAbout.image5} alt="" />
                    <p>STAY IN THE KNOW</p>
                    <p>Register to be the first to hear of what’s new, our promotions and more</p>
                    <button>Sign Up Now</button>
                </div>
                <div className="aboutItem">
                    <img src={imagesAbout.image6} alt="" />
                    <p>CREATE A WISH LIST</p>
                    <p>Add your most-wanted styles to your Wish List and share them with family and friends </p>
                </div>
                <div className="aboutItem withoutImage">
                    <p>SEND IT BACK</p>
                    <p>Our online returns and exchanges are super simple with our guide</p>
                    <button>Read Our Guide</button>
                </div>
                <div className="aboutItem withoutImage">
                    <p>WE CARE</p>
                    <p>A 24/7 customer care team is available to you in your preferred language</p>
                    <button>Contact The Team</button>
                </div>
                <div className="aboutItem withoutImage">
                    <p>OUT FOR DELIVERY</p>
                    <p>We ship to over 100+ countries with standard, express and next-day delivery</p>
                    <button>View Our Options</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection