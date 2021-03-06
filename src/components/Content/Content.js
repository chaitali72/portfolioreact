import React from 'react';
import './Content.scss';
import { Link, useLocation } from 'react-router-dom';

const Content = ({ contentObj }) => {
  let location = useLocation();

  const generateProjectLabel = (project) => {
    return <span className="project-label">{`#${project}`}</span>;
  };

  const generateGitHubLabel = (project) => {
    if (project === 'All') {
      return (
        <a
          href={contentObj.gitHub}
          alt="github"
          target="_blank"
          rel="noopener noreferrer" >
            
          </a>
      );
    }
  };

  const stackLink = contentObj.stack.map((val, index) => {
    if (index < contentObj.stack.length - 1) {
      return <li key={index}>{`${val} /`}</li>;
    } else {
      return <li key={index}>{`${val}`}</li>;
    }
  });
  return (
    <div className="contents">
      {contentObj.featured && location.pathname === '/' ? (
        <div className="contents_image">
         
          <Link to={contentObj.url}>
            <img src={contentObj.image} alt="thumbnail" />
          </Link>
        </div>
      ) : (
        <div className="contents_image">
          <Link to={contentObj.url}>
            <img src={contentObj.image} alt="thumbnail" />
          </Link>
        </div>
      )}

      <div className="contents_description">
        <h3>
          <Link to={contentObj.url}>
            {contentObj.title}
            {generateProjectLabel(contentObj.project)}
          </Link>
        </h3>

        <div className="contents_stack_wrapper">
          <ul className="contents_stack">{stackLink}</ul>
          {generateGitHubLabel(contentObj.project)}
        </div>
        <p>{contentObj.description}</p>
        <Link to={contentObj.url} className="contents-detail">
         Live
        </Link>
        <Link to={contentObj.gitHub} className="contents-detail">
         Github
        </Link>
      </div>
    </div>
  );
};

export default Content;