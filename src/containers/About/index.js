import "./index.css";
import { BsCaretRight } from "react-icons/bs";
import { stack } from "../../provider/stack";

import Header from "../../components/Header";

const About = ({ aos }) => {
  //   const [imgHover, setImgHover] = useState(false);

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
            Hi, I&apos;m AbdulQudus, a developer passionate about turning ideas
            into impactful digital experiences through code.
          </p>
          <p>
            Coding is my creative outlet and problem-solving tool. Each project
            I take on is an opportunity to learn, grow, and make a real
            difference.
          </p>
          <p>
            I&apos;m driven by building solutions that matter and collaborating
            with like-minded individuals. Let&apos;s create something amazing
            together!
          </p>

          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className="my-stack">{displayStackList()}</div>
        </div>
        {/*    <div
          className="wrapper"
          onMouseOver={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          <div className="my-image-container">
            <div className={`shade ${imgHover && "hidden"}`}></div>
            <img src={myImage} alt="AbdulQudus" className="my-image" />
            <div className={`frame ${imgHover && "resize"}`}></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
