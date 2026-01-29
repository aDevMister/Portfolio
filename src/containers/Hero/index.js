import "./index.css";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

// Components
import Navbar from "../../components/Navbar";

const phrases = [
  "I build AI-powered web applications.",
  "I turn ideas into reality.",
  "I create responsive experiences.",
  "I care about performance and UX.",
];

const Hero = ({ aos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="hero">
      <Navbar />
      <div data-aos={aos} className="hero-body container">
        <div className="body-wrapper">
          <h4>Hey, I&apos;m</h4>
          <h1>AbdulQudus Ajape.</h1>

          <div
            className="fade-phrase"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 key={currentIndex}>{phrases[currentIndex]}</h2>
          </div>

          <p>
            I&apos;m a Frontend Engineer who builds more than just code, I build experiences.
            <br />
            I specialize in React, Next.js, JavaScript, and TypeScript, creating responsive web applications
            that are fast, accessible, and intuitive. I&apos;ve founded 3 web applications including
            an AI-powered SaaS serving 167+ users. Whether it&apos;s integrating AI features,
            optimizing performance, or building from scratch, I focus on solutions that make a
            real impact.
            <em> If it works well and feels right, I&apos;ve done my job.</em>
          </p>

          <a
            href="mailto:abdulqudusajape05@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-hero"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="sticky-bottom">
        <div className="sticky-left">
          <div className="social-icons">
            <a
              href="https://github.com/aDevMister"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="horizontal-icon" />
            </a>

            <a
              href="https://x.com/AbdulQudusAjape"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine className="horizontal-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulqudusajape/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="horizontal-icon" />
            </a>
          </div>
          <span className="left-line"></span>
        </div>

        <div className="sticky-right">
          <div className="my-mail">
            <a
              href="mailto:abdulqudusajape05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              abdulqudusajape05@gmail.com
            </a>
          </div>
          <span className="right-line"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
