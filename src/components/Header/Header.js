import './header.scss'
import header1 from '../../assets/img/header_1.jpg'
import header2 from '../../assets/img/header_2.jpg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__menu">
                    <div className="header__logo">MICHAIEL</div>
                    <div className="header__links">
                        <div className="header__link">
                            <a href="#">HOME</a>
                        </div>
                        <div className="header__link">
                            <a href="#portfolio">PORTFOLIO</a>
                        </div>
                        <div className="header__link">
                            <a href="#about">ABOUT</a>
                        </div>
                        <div className="header__link">
                            <a href="#contact">CONTACT</a>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="header__title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </div>
                    <div className="header__img header__img_right">
                        <img src={header1} alt="" />
                    </div>
                    <div className="header__text">Creative Design</div>
                    <a href="#contact" className="header__btn">
                        Get a Quote
                    </a>
                    <div className="header__img header__img_left">
                        <img src={header2} alt="" />
                    </div>
                </div>
                <div className="line header__line"></div>
            </div>
        </header>
    )
}

export default Header
