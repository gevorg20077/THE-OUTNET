import AboutSection from "../../Components/AboutSection/AboutSection"
import Text1 from "../../Components/Text1/Text1"
import Text2 from "../../Components/Text2/Text2"
import VideoCard from "../../Components/VideoCard/VideoCard"
import './about.css'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <Text1 />
                <VideoCard />
                <Text2 />
                <AboutSection />
            </div>
        </div>
    )
}

export default About