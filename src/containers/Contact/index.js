import "./index.css";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <section data-aos="fade-up" className="contact-section" id="contact">
      <h2>05. What's Next?</h2>
      <h1>Let&apos;s Work Together</h1>
      <p>
        I&apos;m currently <strong>open to Frontend Engineer opportunities</strong> where I can 
        contribute to building great products with React, Next.js, and TypeScript. 
        Whether you&apos;re looking to build AI-powered features, optimize performance, 
        or launch a new product from scratch, I&apos;d love to discuss how we can work together.
      </p>
      <p className="contact-subtitle">
        Also open to freelance projects, collaborations, or just a chat about technology 
        and innovation. Let&apos;s connect!
      </p>
      <div className="contact-buttons">
        <a
          href="mailto:abdulqudusajape05@gmail.com"
          className="btn btn-primary"
          aria-label="Send email to AbdulQudus"
        >
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          download="Abdul-Qudus_Ajape_Frontend_Engineer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          aria-label="Download resume"
        >
          Download Resume
        </a>
      </div>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:abdulqudusajape05@gmail.com">
            abdulqudusajape05@gmail.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Kwara, Nigeria
        </p>
        <p>
          <strong>Availability:</strong> Open to remote opportunities worldwide
        </p>
      </div>
    </section>
  );
};

export default Contact;