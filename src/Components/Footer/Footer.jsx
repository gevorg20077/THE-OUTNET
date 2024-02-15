import { Link } from 'react-router-dom'
import '../Footer/footer.css'
import Facebook from '../../Icons/Facebook'
import Twitter from '../../Icons/Twitter'
import Pinterest from '../../Icons/Pinterest'
import Instagram from '../../Icons/Instagram'
import Youtube from '../../Icons/YouTube'
const Footer = () => {
    return (
        <div className="AllFooter">
            <div className="container">
                <div className="Footer">
                    <div className="Footer1">
                        <div className="Footer2">
                            <h3>Help and Information</h3>
                            <p><Link to="/about">About Us</Link></p>
                            <p><Link to="/affiliates">Affiliates</Link></p>
                            <p>Careers</p>
                            <p>Contact Us</p>
                            <p>Help</p>
                            <p>Privacy Policy</p>
                            <p>How To Find Your Size With Fit Finder</p>
                            <p>Terms and Conditions</p>
                            <p>Modern Slavery Statement</p>
                            <p>Our Considered Pledge</p>
                            <div className="carts">
                                <img src="https://www.freepnglogos.com/uploads/visa-inc-png-18.png" alt="" />
                                <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt="" />
                                <img src="https://freepngimg.com/thumb/logo/127388-logo-american-express-hq-image-free.png" alt="" />
                            </div>
                        </div>
                        <div className="Footer3">
                            <p>Payment</p>
                            <p>Delivery</p>
                            <p>Returns</p>
                            <p>Track your Order</p>
                            <p>Create a Return  </p>
                            <p>Track your Return</p>
                            <p>Cookie Policy</p>
                            <p>Cookie Center</p>
                            <p>Our Resale Service</p>
                            <p>Download Our APP</p>
                        </div>
                    </div>
                    <div className="Footer4">
                        <h4>Want to stay stylishly in the know?</h4>
                        <div className="infoFooter">
                            <p>Subscribe to THE OUTNET to receive an extra 15% off your next order!</p>
                            <p>You'll also be the first to know about our exclusive new arrivals,</p>
                            <p>latest trends, and upcoming promotions.</p>
                        </div>
                        <div className="mail">
                            <input type="Email" placeholder='Enter your Email ,address' />
                            <button>Subscribe</button>
                        </div>
                        <div className="Footer5">
                            <h4>Need Help?</h4>
                            <p>For any enquiries please visit THE OUTNET <Link className='customerCare'>Customer Care.</Link> </p>
                        </div>
                        <div className="Footer7">
                            <h4>Stay Social</h4>
                            <div className="SocialIcons">
                                <p><Facebook /></p>
                                <p><Twitter /></p>
                                <p><Pinterest /></p>
                                <p><Instagram /></p>
                                <p><Youtube /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer8">
                    <div className="Footer9">
                        <div className="one"><h3>NET-A-PORTER</h3></div>
                        <div className="two"><h3>MR PORTER</h3></div>
                    </div>
                    <div className="Footer10">
                        <p>© 2009 - 2024 THE OUTNET , part of YOOX NET-A-PORTER GROUP.
                            <br />
                            The individuals featured on this site do not endorse THE OUTNET or the products shown.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer