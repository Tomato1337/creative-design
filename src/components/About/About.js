import img from '../../assets/img/about.jpg'
import './about.scss'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="about__title">About</div>
                <div className="about__block">
                    <div className="about__descr">
                        We create stunning Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.We create stunning Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        <br />
                        After 10 years of experience Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.We create stunning Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.We
                        create stunning Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </div>
                    <div className="about__img">
                        <img src={img} alt="about img" />
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default About
