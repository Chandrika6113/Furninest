import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import  { assets } from "../assets/assets"


const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to FurniNest! Our mission is to provide high-quality, comfortable, and stylish furniture
        to make your home a perfect nest. This website allows you to browse, select, and purchase the
        best furniture suited to your needs.
      </p>
      <p>
        Our team is passionate about making your shopping experience smooth and enjoyable. Get to know
        the people behind FurniNest!
      </p>

      <div className="team-section">
        <div className="profile-card">
          <img src={assets.prof} alt="Chandrika Jalluri" className="profile-image" />
          <h3>Chandrika Jalluri</h3>
          <p>
            The backbone of FurniNest’s functionality. A wizard with server-side logic, she is responsible for making sure that everything works seamlessly behind the scenes. Her expertise in backend development and her knack for problem-solving ensure that the website is fast, secure, and reliable. When she’s not optimizing our systems, she’s probably finding new ways to integrate cutting-edge technology into our platform.
          </p>
        </div>
      </div>

      <div className="importance-section">
        <h2>Why FurniNest?</h2>
        <p>
          FurniNest is your one-stop shop for stylish and affordable furniture.
          We believe that furnishing your home should be easy and enjoyable.
        </p>
        <p>
          Whether you're moving into a new place or just want to refresh your space,
          we've got you covered. Our wide range of furniture is designed to suit all
          tastes and budgets.
        </p>
        <p>
          With FurniNest, you can:
        </p>
        <ul>
          <li>Explore a variety of styles, from modern to classic.</li>
          <li>Find high-quality furniture at great prices.</li>
          <li>Enjoy a seamless shopping experience, from browsing to delivery.</li>
        </ul>
        <p>
          We’re here to help you create the home of your dreams, one piece at a time.
          Happy shopping!
        </p>
      </div>

        {/* Additional Links Section */}
        <section className="additional-links">
        <Link to="/return-policy">Return Policy</Link>
        {/* Add more links here if needed */}
      </section>

      <Footer />

    </div>
  );
};

export default About;
