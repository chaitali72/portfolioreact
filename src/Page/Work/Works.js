import React, { useState } from 'react';
import Layout from '../../components/Header/Layout';
import project2 from '../../images/project2.jpeg';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Projects from '../../components/work/Projects';
import './Works.css';


const Works = () => {
  const [project,setProject] = useState('All');

  const HandleChange = (e) => {
    setProject(e.target.value);
  }
  return (
    <Layout section ="header" imgSrc={project2} >
    <ContentContainer project = {project} HandleChange= {HandleChange}  obj = {Projects} />
    </Layout>
    );
}


export default Works;