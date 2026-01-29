import "./index.css";
import { BsCaretRight } from "react-icons/bs";
import { stack } from "../../provider/stack";

import Header from "../../components/Header";

const About = ({ aos }) => {

  const displayStackList = () => {
    return stack.map((each, i) => (
      <div className="stack-list" key={i}>
        <span>
          <BsCaretRight />
        </span>
        <p>{each}</p>
      </div>
    ));
  };

  return (
    <section data-aos={aos} className="about-section" id="about">
      <Header label={"01."} title={"About Me"} />
      <div className="about-body">
        <div className="about-content">
          <p>
            Hi, I&apos;m AbdulQudus, a Frontend Engineer passionate about building
            web applications that solve real problems. I specialize in React, Next.js, JavaScript
            and TypeScript, with experience integrating AI features using OpenAI&apos;s API.
          </p>
          <p>
            I&apos;ve founded and built 3 web applications, including AiNameIt an AI-powered
            SaaS platform serving over 167+ users. Currently, I&apos;m developing ProofArk
            (a certificate generator using Fabric.js) and Sunnah Companion (an Islamic learning
            platform with AI-powered features).
          </p>
          <p>
            What drives me is building products that people actually use. I focus on performance
            optimization, clean code, and user experience. When I&apos;m not coding, I&apos;m
            learning new technologies or helping other developers grow.
          </p>

          <p>
            Here are the technologies I work with:
          </p>
          <div className="my-stack">{displayStackList()}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
