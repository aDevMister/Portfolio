import './index.css';

// Component
import Header from '../../components/Header';
import MajorProject from '../../components/MajorProject';

// Provider
import Projects from '../../provider/projects';
import OtherProject from '../../components/OtherProject';

const WorkedOn = ({aos}) => {

    return ( 
        <section data-aos={aos} className="project-section" id='project'>
            <Header label={'03.'} title={"Some Things I've Built"} />

            <div className="project-body">
                <div className="major-project">
                    {Projects?.slice(0,3).map(project => (
                        <MajorProject project={project} key={project.id} />
                    ))}
                </div>

                <h1 className='sub-heading'>Other Noteworthy Projects</h1>

                <div className="other-project">
                    {Projects?.slice(3,4).map(project => (
                        <OtherProject project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default WorkedOn;