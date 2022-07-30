import React from 'react'
import portfolio1 from '../../assets/img/Rectangle1.png'
import portfolio2 from '../../assets/img/Rectangle2.png'
import portfolio3 from '../../assets/img/Rectangle3.png'
import portfolio4 from '../../assets/img/Rectangle4.png'
import portfolio5 from '../../assets/img/Rectangle5.png'
import portfolio6 from '../../assets/img/Rectangle6.png'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div className="container">
                <div className="portfolio__title">Portfolio</div>
                <div className="portfolio__blocks">
                    <div className="portfolio__block">
                        <img src={portfolio1} alt="" />
                    </div>
                    <div className="portfolio__block">
                        <img src={portfolio2} alt="" />
                    </div>
                    <div className="portfolio__block">
                        <img src={portfolio4} alt="" />
                    </div>
                    <div className="portfolio__block">
                        <img src={portfolio3} alt="" />
                    </div>
                    <div className="portfolio__block">
                        <img src={portfolio5} alt="" />
                    </div>
                    <div className="portfolio__block">
                        <img src={portfolio6} alt="" />
                    </div>
                </div>
                <div className="portfolio__line line">sdg</div>
            </div>
        </div>
    )
}

export default Portfolio
