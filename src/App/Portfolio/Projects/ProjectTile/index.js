import React from "react";
import {
  Description,
  Link,
  LinkRow,
  LinkValue,
  Links,
  Tile,
  Title,
} from "./styled";

export const ProjectTile = ({ project }) => (
  <Tile>
    <Title>{project.name}</Title>
    <Description>{project.description}</Description>
    <Links>
      {!!project.homepage && (
        <LinkRow>
          <dt>Demo:</dt>
          <LinkValue>
            <Link href={project.homepage} target="_blank" rel="noreferrer">
              {project.homepage}
            </Link>
          </LinkValue>
        </LinkRow>
      )}
      <LinkRow>
        <dt>Code:</dt>
        <LinkValue>
          <Link href={project.html_url} target="_blank" rel="noreferrer">
            {project.html_url}
          </Link>
        </LinkValue>
      </LinkRow>
    </Links>
  </Tile>
);
