import Search from "../navbar/search"
import './hero.css'
import hero from '../../assets/hero.jpg'

const HeroComponent = () => {
    return (
        <div className='hero-wrapper'>
        <div className="hero-bg-container">
          <div className="hero-content-wrapper">
            <div className="hero-text-wrapper">
              <h1 className="hero-header">Unsplash</h1>
              <div className="hero-subheader">
                <p>
                  The internet’s source of{' '}
                  <span>
                    freely-usable images.
                  </span>
                </p>
                <p>Powered by creators everywhere.</p>
              </div>
              <div className="hero-btn">
                <Search inputType='hero-btn'/>
              </div>
            </div>
          </div>
          <div className='overlay-img'>
            <img className="hero-img h-full object-cover w-full bg-bottom brightness-50" src={hero} alt="hero" />
          </div>
        </div>
      </div>
    )
  }
  
  export default HeroComponent;


