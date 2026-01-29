import './index.css';
import { useState } from 'react';

// Component
import Header from '../../components/Header';
import JobDetails from '../../components/JobDetails';

// Provider
import experience from '../../provider/experience';

const WorkedAt = ({aos}) => {
    const [focus, setFocus] = useState(false);
    
    // Set default to most recent experience (highest id)
    const sortedExp = experience.sort((a,b) => b.id - a.id);
    const [currentId, setCurrentId] = useState(sortedExp[0]?.id || 1);

    const toggleCompany = (id) => {
        setCurrentId(id);
        setFocus(true);
    };

    const currentExperience = sortedExp.find(data => data.id === currentId);
    
    if (!currentExperience) return null;

    const {title, company, url, startDate, endDate, tasks, contract} = currentExperience;

    return ( 
        <section data-aos={aos} className='experience-section' id='experience'>
            <Header label={'02.'} title={"Where I've Worked"} />
            <div className="experience-body">
                <div className="company-list">
                    <ul>
                        {sortedExp.map(value => {
                            const {id, company} = value;
                            const isActive = id === currentId;
                            return (
                                <li 
                                    className={`${isActive ? 'active' : ''} ${focus && isActive ? 'focus' : ''}`}
                                    key={id} 
                                    onClick={() => toggleCompany(id)}
                                    role="tab"
                                    aria-selected={isActive}
                                    tabIndex={isActive ? 0 : -1}
                                >
                                    {company}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <JobDetails 
                    title={title}
                    company={company}
                    url={url}
                    startDate={startDate}
                    endDate={endDate}
                    tasks={tasks}
                    contract={contract}
                />
            </div>
        </section>
     );
}
 
export default WorkedAt;

