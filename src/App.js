import './App.css';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import { Hero, About, WorkedAt, WorkedOn, Contact, Footer, Stats } from './containers/index'
import Loader from './components/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  setTimeout(() => {
    setShowLoader(false);
  }, 1500);

  return (
    <div className="App">
      {
        showLoader ?
          (<Loader />) :
          (<>
            <Hero aos='fade-up' />
            <div className='container'>
              <About aos='fade-up' />
              <WorkedAt aos='fade-up' />
              <WorkedOn aos='fade-up' />
              <Stats aos='fade-up' />
              <Contact />
              <Footer />
            </div>
          </>)
      }
    </div>
  );
}

export default App;
