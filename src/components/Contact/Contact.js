import './contact.scss'

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="contact__title">Contact</div>
                <form className="contact__form">
                    <div className="contact__input">
                        <p>Name</p>
                        <input placeholder="Jhon Doe" type="text" />
                    </div>
                    <div className="contact__input">
                        <p>Email</p>
                        <input placeholder="jhon@email.com" type="email" />
                    </div>
                    <div className="contact__area">
                        <p>Message</p>
                        <textarea
                            placeholder="Enter your message here..."
                            type="text"
                        />
                    </div>
                    <button className="contact__btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
