import React from 'react';
import './/About.css';
const About = () => {
    return (
        <>
        <div class="about">
            <div class="About-Us">
                <h2>About QACinemas</h2>
                <p>We are a popular cinema chain hosting films in our 7-screen cinema.
                    This website has been developed by Millie, Sean, Michael and Olivia.
                </p>

                <h2>Our Developers</h2>
                <p>This website has been developed by Millie, Sean, Michael and Olivia.
                    Our team has worked on every aspect, from front-end to back-end, including the
                    implementation of a database.
                </p>
            </div>

            <div class="Scrum">
                <h2>Scrum</h2>
                <p>Scrum is
                </p>
                
                <p>Throughout the development process of this website, our developers made use of Scrum,
                    an Agile concept.
                </p>

                <a href="https://www.scrum.org/resources/what-scrum-module">Scrum Website</a>
            </div>

            <div class="Contact">
                <h3>Contact</h3>
                <p>Millie - @</p>
                <p>Sean - @</p>
                <p>Michael - @</p>
                <p>Olivia - @</p>

                <a href="/contact">Contact QACinemas</a>
            </div>
        </div>


        </>
    );
}
export default About;