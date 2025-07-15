import "./index.css";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

// Components
import Navbar from "../../components/Navbar";

const phrases = [
  "I build with people in mind.",
  "I turn ideas into experiences.",
  "I simplify the complex.",
  "I care about how things feel.",
];

const Hero = ({ aos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3s

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
            I build more than just software — I build for people.
            <br />
            I&apos;m a developer who cares about how things feel, not just how they work.
            For me, coding isn&apos;t just a technical task — it&apos;s a creative process of
            shaping ideas into simple, intuitive experiences. I love turning messy problems
            into products that just make sense. If someone walks away thinking,
            <em> &quot;That was easy,&quot;</em> then I know I&apos;ve done it right.
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
              href="https://x.com/devgorithm"
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
