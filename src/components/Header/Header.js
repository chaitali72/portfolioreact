import React from 'react'
import profile from '../../images/profile.jpg';
import './header.scss';


const Header = (props) => {
  if (props.section === 'header'){
    return (
     <header>
       <div className="main-img">
          
          <img src={profile} alt="main" id="profile-photo"></img>
        </div>
              <div className="introduction">
          <div className="introduction-inner">
            <h1>
              Hi! I'm <span id="name" >Chaitali,</span>
              <br />
              <span id="job-title" >Software developer</span>
            </h1>
            <p>
             I am a software developer who is passionate about building
              in JavaScript (including React) and also hands-on User Experience
              design. Follow me if you want to know more about Me!
               </p>
               <p className="quote"><br/> “Choose a job you love, and you will never have to work a day in your life.”
               <br/> -Confucius 
              </p>
            <ul>
              <li>
              <a href="https://github.com/chaitali72" target="_blank" rel ="noopener noreferrer">
                  <i className="fab fa-github">   </i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/chaitalimahida/" target="_blank" rel ="noopener noreferrer">
                 <i className="fab fa-linkedin">   </i></a>
              </li>
             
              <li>
                <a href="https://chaitali72.github.com" target="_blank" rel ="noopener noreferrer">
                  <i className="fas fa-rocket"></i> </a>
              </li>
              
              <li>
                <a
                 href="mailto:chaitalismahida@gmail.com"  >
                  <i className="far fa-envelope"></i> </a>
                
              </li>
            </ul>
          </div>
          </div>
     </header>
    );
     } else if(props.section === 'work'){
      return (
        <header className="work-header">
        <a href={props.url} target="_blank"  rel="noopener noreferrer">
        <img src={props.imgSrc} alt="work" id="work-photo" />
        </a>
        </header>
      );
    }
    else if(props.section === 'experience'){
      return (
        <header className="work-header">
        <a href={props.url} target="_blank"  rel="noopener noreferrer">
        <img src={props.imgSrc} alt="work" id="work-photo" />
        </a>
        </header>
      );
    }else{
      return (

          <header className="about-header">
             <img src={props.imgSrc} alt="about" id="about_photo" />
           </header>
      );
    }
};

export default Header;
