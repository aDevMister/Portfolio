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
      <h1>Let&apos;s Connect!</h1>
      <p>
        If you&apos;re here to connect, whether it&apos;s about a project, a job or just a
        good chat about tech and creativity, I&apos;d love to hear from you! Shoot me
        a message and I&apos;ll get back to you as soon as I can. Looking forward to
        it!
      </p>
      <a
        href="mailto:abdulqudusajape05@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Get in touch
      </a>
    </section>
  );
};

export default Contact;
