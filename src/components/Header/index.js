import './index.css';

const Header = ({label, title}) => {
    return ( 
        <div className="section-header">
            <label className="section-label">{label}</label>
            <h2 className='section-title'>{title}</h2>
            <span className='section-decor'></span>
        </div>
     );
}
 
export default Header;