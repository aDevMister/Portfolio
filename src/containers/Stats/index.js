import './index.css';
import Header from "../../components/Header";

const Stats = ({ aos }) => {
    return (
        <section data-aos={aos} className='stats-section' id='statistics'>
            <Header label={'04.'} title={"Technical Analysis"} />

            <div className='stats-center'>
                <div>
                    <div className='stat-container time-stat'>
                        <figure className='stat-item'><embed src="https://wakatime.com/share/@devgorithm/f194663e-ee2c-428b-97ac-95c5f80fd045.svg" ></embed></figure>
                    </div>
                    <div className='stat-container'>
                        {<figure className='stat-item'><embed src="https://wakatime.com/share/@devgorithm/47491da6-cb9e-40a0-9a54-7610156ccd8b.svg"></embed></figure>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
