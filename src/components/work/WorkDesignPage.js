import React from 'react';
import './WorkDesign.scss';

const WorkDesignPage = props => {
    const cnvertHtml = () => {
        let div = document.createElement('div');
        div.innerHTML = props.difficultPartDescription;
        return div;
      };

      cnvertHtml();
    
    return (
<div className="work_template">
    <div className="work-inner">
    <h1 className="work_title">{props.title}</h1>
        <p className="work-description">{props.description}</p>

        <div className="work-skills">
            <ul className="tags">{props.tags}</ul>
        </div>

        <h2 className="headline"> How It Works</h2>
        <p className="headline-content">{props.howItWorksDescription}</p>

<div className="content-images">{props.contentImage}</div>

<h2 className="headline">The most difficult part</h2>
<p className="headline-content">{props.difficultPartDescription}</p>

<h2 className="headline">How to solve the problems</h2>

<p className="headline-content">{props.problemSolvingDescription}</p>

<h2 className="headline">Links</h2>
<ul className="work_links">{props.relatedWebsitesLists}</ul>
</div>
    </div>


    );
};
export default WorkDesignPage;