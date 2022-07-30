import React from 'react'
import people from '../../assets/img/people.jpg'
import people1 from '../../assets/img/people1.jpg'
import people2 from '../../assets/img/people2.jpg'
import arrow from '../../assets/img/arrow.svg'
import './testimonials.scss'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <div className="testimonials__title">Testimonials</div>
                <div className="testimonials__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </div>
                <div className="testimonials__blocks">
                    <div className="testimonials__block_horizontals">
                        <div className="testimonials__block_horizontal">
                            <div className="testimonials__img">
                                <img src={people} alt="" />
                            </div>
                            <div className="testimonials__main">
                                <div className="testimonials__name">
                                    “Amazing Team with Lorem Ipsum”
                                </div>
                                <div className="testimonials__text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum
                                    dolor sit amet,
                                </div>
                                <div className="testimonials__see">
                                    <p>See full review </p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonials__block_horizontal">
                            <div className="testimonials__img">
                                <img src={people1} alt="" />
                            </div>
                            <div className="testimonials__main">
                                <div className="testimonials__name">
                                    “Big Dreams for lorem ipsum”
                                </div>
                                <div className="testimonials__text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum
                                    dolor sit amet,
                                </div>
                                <div className="testimonials__see">
                                    <p>See full review </p>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials__block_vertical">
                        <div className="testimonials__img">
                            <img src={people2} alt="" />
                        </div>
                        <div className="testimonials__main">
                            <div className="testimonials__name">
                                “Good Dreams for lorem ipsum”
                            </div>
                            <div className="testimonials__text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor
                                sit amet,
                            </div>
                            <div className="testimonials__see">
                                <p>See full review </p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials__btn">See All Reviews</div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Testimonials
