import './index.css';
import { useState } from 'react';


// Component
import Header from '../../components/Header';
import JobDetails from '../../components/JobDetails';

// Provider
import experience from '../../provider/experience';

const WorkedAt = ({aos}) => {
    const [focus, setFocus] = useState(false);
    const [currentId, setCurrentId] = useState(experience.length);

    const toggleCompany = (id) => {
        setCurrentId(id)
        setFocus(true)
    };

    const sortedExp = experience.sort((a,b) => b.id - a.id)

    const {title, company, url, startDate, endDate, tasks, contract} = sortedExp.find(data => data.id === currentId);

    return ( 
        <section data-aos={aos} className='experience-section' id='experience'>
            <Header label={'02.'} title={"Where I've Worked"} />
            <div className="experience-body">
                <div className="company-list">
                    <ul>
                        {sortedExp.map(value => {
                            const {id, company} = value;
                            const noFocus = id === currentId ? 'active' : null
                            return <li 
                                className={focus && id === currentId ? 'active focus' : noFocus} 
                                key={id} 
                                onClick={() => toggleCompany(id)}>{company}</li>
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
