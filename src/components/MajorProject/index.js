import './index.css';
import { useEffect } from 'react';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import Aos from 'aos';

const MajorProject = ({project}) => {

    const {title, id, url, img, repo, tools, details, status } = project;

    const majorCardBackground = (project) => {
        return {
            background: `linear-gradient(#0a192fe0,#0a192fe0), url(${img})`,
            backgroundSize: 'cover',
        }
    };
    
    useEffect(() => {
        Aos.init({duration: 600})
    }, []);

    // Status badge helper
    const getStatusBadge = () => {
        if (status === 'development') {
            return <span className="status-badge development">🚀 In Development - Launching Soon</span>;
        }
        if (status === 'live') {
            return <span className="status-badge live">✅ Live</span>;
        }
        return null;
    };

    return ( 
        <div data-aos='fade-up' style={majorCardBackground(project)} className={id % 2 === 1 ? "major-card" : "major-card reverse" }>
            <div className={id % 2 === 1 ? "img-container" : "img-container reverse" }>
                <a href={url} target='_blank' rel="noopener noreferrer">
                    <img src={img} className='project-img' alt={title} />
                </a>
            </div>

            <div className={id % 2 === 1 ? 'other-content': 'other-content reverse'}>
                <h2>Featured Project</h2>
                <h1>{title}</h1>
                {getStatusBadge()}
                <p className='project-details'>{details}</p>
                <p className='tools'>{tools}</p>
                <div className="project-links">
                    {repo && <a href={repo} target='_blank' rel="noopener noreferrer"><FiGithub size={21} className='small-icon git'/></a>}
                    {url && <a href={url} target='_blank' rel="noopener noreferrer"><FiExternalLink size={21} className='small-icon link'/></a>}
                </div>
            </div>
        </div>
    );
};
 
export default MajorProject;
