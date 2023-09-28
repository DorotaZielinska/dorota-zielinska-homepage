import React, { useEffect } from "react";
import { ProjectsContainer } from "./styled";
import { ProjectTile } from "./ProjectTile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  selectProjects,
  selectStatus,
} from "./ProjectTile/ProjectSlice";
import { Error } from "../Error";
import { Loader } from "../Loader";

export const Projects = () => {
  const projects = useSelector(selectProjects);
  console.log("projects",projects);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  switch (status) {
    case "initial":
      return <></>;
    case "error":
      return <Error />;
    case "loading":
      return <Loader />;
    default:
      return (
        <ProjectsContainer>
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </ProjectsContainer>
      );
  }
};
