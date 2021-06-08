import React,{useState} from 'react';
import Projects from '../work/Projects';
import HomeContainer from './HomeContainer';

const HomeContent = () => {

const [project,setProject] = useState('all');

const handleChange = (e) => {
setProject(e.target.value);
}
const featuredWork = Projects.filter((val) => val.featured);

return (
    <HomeContainer
     project= {project} 
     handleChange={handleChange} 
     obj = {featuredWork}>

    </HomeContainer>
);
};
export default HomeContent;
