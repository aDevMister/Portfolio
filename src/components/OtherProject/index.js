import "./index.css";
import { useEffect } from "react";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import Aos from "aos";

const OtherProject = ({ project }) => {
  const { repo, url, details, title, tools, status } = project;

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  // Status badge helper
  const getStatusBadge = () => {
    if (status === 'development') {
      return <span className="status-badge-small development">🚀 In Dev</span>;
    }
    if (status === 'live') {
      return <span className="status-badge-small live">✅ Live</span>;
    }
    return null;
  };

  return (
    <div data-aos="fade-up" className="other-card">
      <div className="card-head">
        <div className="icon-card">
          <FiFolder className="folder-icon" size={42} />
          <div className="icon-small-container">
            {repo && (
              <a 
                href={repo} 
                target='_blank' 
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
              >
                <FiGithub size={21} className="small-icon git" />
              </a>
            )}
            {url && (
              <a 
                href={url} 
                target='_blank' 
                rel="noopener noreferrer"
                aria-label={`View ${title} live site`}
              >
                <FiExternalLink size={21} className="small-icon link" />
              </a>
            )}
          </div>
        </div>
        <div className="title-wrapper">
          <h2>
            {url ? (
              <a href={url} target='_blank' rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
          {getStatusBadge()}
        </div>
        <p>{details}</p>
      </div>
      <h6>{tools}</h6>
    </div>
  );
};

export default OtherProject;