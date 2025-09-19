import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  NewTag,
} from "./style";

import { Text } from "@/styles/Text";
import { JSX } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

interface IRepository {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  created_at: string;
}

export const Project = ({
  repository,
}: {
  repository: IRepository;
}): JSX.Element => {
  const projectCreationDate = new Date(repository.created_at);
  const today = new Date();
  const differenceInTime = today.getTime() - projectCreationDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const isNew = differenceInDays <= 5;

  return (
    <ProjectWrapper>
      {isNew && <NewTag>Novo</NewTag>}

      <ProjectTitle
        as="h2"
        type="heading3"
        css={{ marginBottom: "$3" }}
        color="grey4"
      >
        {repository.name}
      </ProjectTitle>

      <ProjectStack>
        <Text type="body2" color="grey3" css={{ marginRight: "$2" }}>
          Linguagem:
        </Text>
        {repository.language ? (
          <ProjectStackTech>
            <Text color="grey4" type="body2">
              {repository.language}
            </Text>
          </ProjectStackTech>
        ) : (
          <ProjectStackTech>
            <Text color="grey4" type="body2">
              N/A
            </Text>
          </ProjectStackTech>
        )}
      </ProjectStack>

      <Text type="body1" color="grey3">
        {repository.description}
      </Text>

      <ProjectLinks>
        <ProjectLink target="_blank" href={repository.html_url}>
          <FaGithub /> Código
        </ProjectLink>
        {repository.homepage && (
          <ProjectLink
            target="_blank"
            href={
              repository.homepage.startsWith("http")
                ? repository.homepage
                : `https://${repository.homepage}`
            }
          >
            <FaShare /> Demo
          </ProjectLink>
        )}
      </ProjectLinks>
    </ProjectWrapper>
  );
};
