import './App.css';
import logo from './images/logo.svg';
import computer from './images/image-computer.png';
import devices from './images/image-devices.png';
import blacklist from './images/icon-blacklist.svg';
import text from './images/icon-text.svg';
import preview from './images/icon-preview.svg';
import google from './images/logo-google.png';
import ibm from './images/logo-ibm.png';
import microsoft from './images/logo-microsoft.png';
import hewlett from './images/logo-hp.png';
import vector from './images/logo-vector-graphics.png';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';

function App() {
  return (
    <>

      {/* Section 1 */}
      <div className='section1'>
        <img src={logo} alt="" />
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you 
           copy. Instantly access your clipboard on all your devices.</p>
        <div className='download-btn'>
          <button className='download-ios' type='submit'>Download for iOS</button>
          <button className='download-mac' type='submit'>Download for Mac</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className='section2'>
        <h2>Keep track of your snippets</h2>
        <p>Clipboard instantly stores any item you copy in the cloud, 
           meaning you can access your snippets immediately on all your 
           devices. Our Mac and iOS apps will help you organize everything.</p>
      </div>

      {/* Section 3 */}
      <div className='section3'>
        <img src={computer} alt="" />
        <div className='features'>
          <div className='search'>
            <h3>Quick Search</h3>
            <p>Easily search your snippets by content, category, 
               web address, application, and more.</p>
          </div>
          <div className='iCloud'>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div className='history'>
            <h3>Complete History</h3>
            <p>Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className='section4'>
        <h2>Access Clipboard anywhere</h2>
        <p>Whether you’re on the go, or at your computer, 
           you can access all your Clipboard snippets in a few 
           simple clicks.</p>
        <img src={devices} alt="" />
      </div>

      {/* Section 5 */}
      <div className='section5'>
        <h3>Supercharge your flow</h3>
        <p>We’ve got the tools to boost your productivity.</p>
        <div className='tools'>
          <div className='blacklists'>
            <img src={blacklist} alt="" />
            <h4>Create blacklists</h4>
            <p> Ensure sensitive information never makes its way 
                to your clipboard by excluding certain sources.</p>
          </div>
          <div className='text-snippet'>
            <img src={text} alt="" />
            <h4>Plain text snippet</h4>
            <p>Remove unwanted formatting from copied text for a consistent look.</p>
          </div>
          <div className='preview'>
            <img src={preview} alt="" />
            <h4>Sneak preview</h4>
            <p>Quick preview of all snippets on your Clipboard for easy access.</p>
          </div>
        </div>
        <div className='companies'>
          <img className='google' src={google} alt="" />
          <img className='ibm' src={ibm} alt="" />
          <img className='microsoft' src={microsoft} alt="" />
          <img className='hp' src={hewlett} alt="" />
          <img className='vector' src={vector} alt="" />
        </div>
      </div>

      {/* Section 6 */}
      <div className='section6'>
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>Available for free on the App Store. Download for Mac or iOS,
           sync with iCloud and you’re ready to start adding 
           to your clipboard.</p>
        <div className='download-btn'>
          <button className='download-ios' type='submit'>Download for iOS</button>
          <button className='download-mac' type='submit'>Download for Mac</button>
        </div>
      </div>

      {/* Footer */}
      <div className='footer-container'>
        <div className='footer'>
          <img className='footer-logo' src={logo} alt="" />
          <div className='quick-access'>
            <div className='access1'>
              <p>FAQs</p>
              <p>Contact Us</p>
            </div>
            <div className='access2'>
              <p>Privacy Policy</p>
              <p>Press Kit</p>
            </div>
            <div className='access3'>
              <p>Install Guide</p>
            </div>
          </div>
          <div className='socials'>
            <img src={facebook} alt="" className='my-svg' />
            <img src={twitter} alt="" className='my-svg'/>
            <img src={instagram} alt="" className='my-svg'/>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
