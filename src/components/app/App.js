import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials'
import './App.scss'

function App() {
    return (
        <>
            <Header />
            <Portfolio />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
