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
        Whether you&apos;re here to explore potential collaborations, discuss
        exciting opportunities, or simply say hello, I&apos;d love to hear from you!
        Feel free to reach out—whether it&apos;s for a project idea, a job
        opportunity, or a quick chat about technology and creativity. Just hit
        the button below, and I&apos;ll make sure to get back to you as soon as
        possible. Looking forward to hearing from you!
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
