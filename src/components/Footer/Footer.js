import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="footer__company">2022 Company</div>
                <div className="footer__policy">
                    <p>
                        <a href="#">Privacy Policy</a>
                    </p>
                    <p>
                        <a href="#">Terms and Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
