import React from 'react';
import './social.css';


const social = () => {

    return (
     <div className="social-box">

  <div className="follow-label">
    
     <span>Follow Me</span>
 </div>
 <div className="social">
             <a href="https://github.com/chaitali72" target="_blank" rel ="noopener noreferrer">
                 <i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/chaitalismahida/">
                <i className="fab fa-linkedin">   </i></a>
                 <a href="https://chaitali72.github.com">
                   <i className="fas fa-rocket"></i> </a>
                  <a href="mailto:chaitalismahida@gmail.com"  >
                  <i className="far fa-envelope"></i> </a>
                
 </div>
 </div> 
    );
}
export default social;