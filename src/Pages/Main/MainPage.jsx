import Section from "../../Components/Section1/Section"
import SectionTwo from "../../Components/Section2/SectionTwo"
import SectionThree from "../../Components/Section3/SectionThree"

const MainPage = () => {
    return (
        <div>
            <div className="container">
                <Section />
                <SectionTwo />
                <SectionThree />
            </div>
        </div>
    )
}

export default MainPage