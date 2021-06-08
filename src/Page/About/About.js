import React from 'react';
import Layout from '../../components/Header/Layout';
import project2 from '../../images/project2.jpeg';
// import HomeContent from '../../components/home/Homecontent';
import { DiVisualstudio} from "react-icons/di";
 import { DiGithubBadge} from "react-icons/di";
 import { DiJavascript1} from "react-icons/di";
 import {DiSass} from "react-icons/di";
 import { DiReact} from "react-icons/di";
 import { DiCss3} from "react-icons/di";
 import { DiNodejs} from "react-icons/di";
 import {  DiHtml5} from "react-icons/di";
 import { DiBootstrap} from "react-icons/di";
 import { DiFirebase} from "react-icons/di";
 import { DiMongodb} from "react-icons/di";
 import { DiJqueryLogo} from "react-icons/di";
//  import { DiFirebase} from "react-icons/di";
import './About.scss';


const About = () => {
    const topicsObj = {
        AboutMe: {
         headline: 'About',
        text :'Hello,I am a Software Developer based in Toronto.I enjoy being part of every stage of developement from planning to building,debugging and deployment.I have a deep passion for writing clean Javascript, and React is my favourite frameworks to work in.I also enjoy learning and teaching new technologies and frameworks that help make designs more effective and user friendly.I am specialized in HTML5/CSS3 and JavaScript on the frontend, but I am pretty comfortable with ReactJS, NodeJS, MongoDB, Firebase, Wordpress, PHP, etc.'
        },
        Experience: {
        headline: 'About Me',
        text : 'Languages: English,Hindi,Gujarati'       
            },
        Skills :
            {
            headline: 'Here are a few technologies I have been working with recently:',
            text : 'React.js,REact-Redux, Node.Js, MongoDB, Javscript, Wordpress ,Firebase'
            },
            };
            const topicsLinks = Object.keys(topicsObj).map((keyName,index) => {
                return(
                    <div className="topic" key={index}>
                        <h2>{topicsObj[keyName].headline}</h2>
                        <p>{topicsObj[keyName].text}</p>
                    </div>
                );
            });
    return (
        
        <Layout section="header" imgSrc={project2}>
        {/* <HomeContent/> */}
        <div className="about">
            <div className="about-inner">
                <section className="about-intro">
                    <h1> Thank you for stopping By.</h1> 
                </section>

                <section className="about-topics">{topicsLinks}</section>

                   <section className="container">
                       <div className="title_container">
                            <h1>My Toolkit</h1></div>
                           
                            <ul> 
                            <li><DiHtml5 className="toolkit_items"/></li>
                            <li><DiCss3 className="toolkit_items"/></li>
                            <li><DiSass className="toolkit_items"/></li>
                            <li><DiBootstrap className="toolkit_items"/></li>
                            <li ><DiJavascript1 className="toolkit_items"/></li>
                            <li ><DiJqueryLogo className="toolkit_items"/></li>
                            <li ><DiNodejs className="toolkit_items"/></li>
                            <li><DiReact className="toolkit_items"/></li> 
                            <li><DiMongodb className="toolkit_items"/></li>
                            <li ><DiGithubBadge className="toolkit_items"/> </li>
                            <li > <DiVisualstudio className="toolkit_items"/></li>
                            <li><DiFirebase className="toolkit_items"/></li>
                           
                            </ul>
                       
                            </section>
            </div>
        </div>
        </Layout>
        
    )
}
export default About;