import "./index.css";
import { useEffect } from "react";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import Aos from "aos";

const OtherProject = ({ project }) => {
  const { repo, url, details, title, tools } = project;

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div data-aos="fade-up" className="other-card">
      <div className="card-head">
        <div className="icon-card">
          <FiFolder className="folder-icon" size={42} />
          <div className="icon-small-container">
            {repo && (
              <a href={repo} target='_blank' rel="noopener noreferrer">
                <FiGithub size={21} className="small-icon git" />
              </a>
            )}
            {url && (
              <a href={url} target='_blank' rel="noopener noreferrer">
                <FiExternalLink size={21} className="small-icon link" />
              </a>
            )}
          </div>
        </div>
        <h2>
          <a href={url} target='_blank' rel="noopener noreferrer">{title}</a>
        </h2>
        <p>{details}</p>
      </div>
      <h6>{tools}</h6>
    </div>
  );
};

export default OtherProject;
