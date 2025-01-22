import './index.css';
import {BsCaretRight} from 'react-icons/bs';

const JobDetails = (props) => {
    const {title, url, company, startDate, endDate, tasks, contract} = props;

    return ( 
        <div className="active-company">
            <h2>{title}<a href={url} target='_blank' rel="noopener noreferrer" className='animated-link'> @ {company}</a></h2>
            <div>
                <p>{startDate} &#8212; {endDate}</p>
                <span className='contract-type'>{contract}</span>
            </div>
            <ul className="task-container">
                {tasks.map(task => (
                    <li key={task.id}>
                        <span><BsCaretRight/></span>
                        <p>{task.details}</p>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default JobDetails;