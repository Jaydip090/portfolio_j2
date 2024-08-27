import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
    return (
        <Container id="project">
            <h2>Work Experience</h2>
            <div className="projects">
                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <div className="body">
                            <div className="role">
                                <h3>Software Developer (ShivInfotech)</h3>
                                <span className="date">Jan 2024 - Aug 2024</span>
                            </div>
                            <p>Developed interactive web applications using ReactJS, HTML, CSS, and JavaScript.</p>
                            <p>Implemented features such as customer dashboards, mechanic dashboards, and admin dashboards for
                                efficient service management.</p>
                            <p>Integrated RESTful APIs to fetch and display dynamic content.</p>
                            <p>Optimized application performance and user experience through efficient code and responsive design</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </Container>
    );
}
