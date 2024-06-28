import './About.css';
import imageabout from "../assets/aboutPhoto.jpg" 

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
            </div>
            <div className="about-content">
                <div className="about-image">
                    <img src={imageabout} alt="Tailor Shop" height="500px"/>
                </div>
                <div className="about-text">
                    <p>
                        Welcome to <strong>our Tailor Shop</strong>, where we specialize in creating bespoke clothing
                        tailored to your exact measurements and preferences. Our experienced team of tailors and designers
                        are dedicated to providing you with the highest quality garments, crafted with precision and care.
                    </p>
                    <p>
                        At <strong>our Tailor Shop</strong>, we believe that every individual deserves to look and feel
                        their best. Whether you need a custom suit for a special occasion or everyday wear, we are here
                        to help you achieve your perfect fit. Our services include alterations, repairs, and custom
                        tailoring for men, women, and children.
                    </p>
                    <p>
                        Visit us at our shop or contact us to schedule a fitting appointment. We look forward to serving
                        you and helping you create the wardrobe of your dreams.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
