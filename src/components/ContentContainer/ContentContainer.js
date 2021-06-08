import React from "react";
import Content from "../Content/Content";
import { Link, useLocation } from "react-router-dom";
import "./ContentContainer.scss";
import ProjectSelection from "../../components/Select/ProjectSelection";

const ContentsContainer = (props) => {
  let location = useLocation();

  const returnFilteredObject = (filteringWord, projectArray) => {
    if (filteringWord === "All") {
      return projectArray;
    } else {
      const filteredObj = projectArray.filter(
        (val) => val.project === filteringWord
      );
      return filteredObj;
    }
  };

  const filteredObj = returnFilteredObject(props.project, props.obj);

  const contentLists = filteredObj.map((obj, index) => {
    return <Content contentObj={obj} key={index} />;
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">
        <ProjectSelection
          project={props.project}
          handleChange={props.handleChange}
        />
        {contentLists}
        {location.pathname === "/" && (
          <div className="view_more">
            <Link to="/works">View more works</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentsContainer;