import "./index.css";
import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

// Components
import Navbar from "../../components/Navbar";
import Typist from "react-typist";

const Hero = ({ aos }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="hero">
      <Navbar />
      <div data-aos={aos} className="hero-body container">
        <div className="body-wrapper">
          <Typist onTypingDone={() => setIsDone(true)}>
            <h4>Hey, I&apos;m</h4>
            <h1>AbdulQudus Ajape.</h1>
            <h2>I bring web ideas to life.</h2>
          </Typist>
          {isDone ? (
            <>
              <p>
                I&apos;m a developer with a deep passion for creating
                experiences that go beyond just functionality. For me, coding is
                about crafting products that not only work, but truly resonate
                with the people who use them. Right now, I&apos;m working at
                <span style={{ padding: "0 6px" }}>
                  <a
                    href="https://www.ainameit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="animated-link"
                  >
                    AiNameIt
                  </a>
                </span>
                , where I focus on building intuitive, interactive solutions
                that solve real-world problems.
              </p>

              <a
                href="mailto:abdulqudusajape05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero"
              >
                Get in touch
              </a>
            </>
          ) : null}
        </div>
      </div>
      <div className="sticky-bottom">
        <div className="sticky-left">
          <div className="social-icons">
            <a href="https://github.com/aDevMister" target="_blank" rel="noopener noreferrer">
              <FiGithub className="horizontal-icon" />
            </a>

            <a href="https://twitter.com/devgorithm" target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine className="horizontal-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulqudusajape/"
              target="_blank" rel="noopener noreferrer"
            >
              <FiLinkedin className="horizontal-icon" />
            </a>
          </div>
          <span className="left-line"></span>
        </div>

        <div className="sticky-right">
          <div className="my-mail">
            <a href="mailto:abdulqudusajape05@gmail.com" target="_blank" rel="noopener noreferrer">
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
