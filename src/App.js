import logo from './logo.svg';
import './App.css';
const logo1 = require('./Images/ichseinbruder.png');
const logo2 = require('./Images/pashaniminsta.jpg');
const logo3 = require('./Images/toilet.webp');
const logo4 = require('./Images/gibby.jpg');
const logo5 = require('./Images/lightskindog.jpg');
const logo6 = require('./Images/youngboybetter.jpg');
const logo7 = require('./Images/chiefkeef.jpg');
const logo8 = require('./Images/lilbaby.png');
const logo9 = require('./Images/measf.jpg');
const logo10 = require('./Images/drake.jpg');



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div id="gallery">
              <figure>
                  <div className="titelbild">
                      <img src={logo1}/>
                  </div>
                  <figcaption>Ich sein Bruder</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo2}/>
                  </div>
                  <figcaption>pasha</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo3}/>
                  </div>
                  <figcaption>toilet</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo4}/>
                  </div>
                  <figcaption>Gibby</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo5}/>
                  </div>
                  <figcaption>lightskin</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo6}/>
                  </div>
                  <figcaption>youngboy better</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo7}/>
                  </div>
                  <figcaption>this pic goes hard, feel free to screenshot</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo8}/>
                  </div>
                  <figcaption>lil babby</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo9} height={1000}/>
                  </div>
                  <figcaption>me asf</figcaption>
              </figure>
              <figure>
                  <div className="titelbild">
                      <img src={logo10}/>
                  </div>
                  <figcaption>certified boy lover</figcaption>
              </figure>
          </div>
      </header>
    </div>
  );
}

export default App;
