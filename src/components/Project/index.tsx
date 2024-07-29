import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

const mockRepositories = [
  {
    id: 1,
    name: "StayInn-O-Futuro-do-Gerenciamento (Frontend)",
    language: "typescript",
    description: "Projeto de um sistema de gerenciamento de hotel - Frontend",
    html_url: "https://github.com/StayInn-O-Futuro-do-Gerenciamento/front-end",
    homepage: "",
  },
  {
    id: 2,
    name: "StayInn-O-Futuro-do-Gerenciamento (Backend)",
    language: "typescript",
    description: "Projeto de um sistema de gerenciamento de hotel - Backend",
    html_url: "https://github.com/StayInn-O-Futuro-do-Gerenciamento/back-end/tree/develop",
    homepage: "",
  },
  {
    id: 3,
    name: "ICarSell (Frontend)",
    language: "typescript",
    description: "Projeto de um site de venda de carros - Frontend",
    html_url: "https://github.com/ICarSell/ICarSell-frontEnd",
    homepage: "",
  },
  {
    id: 4,
    name: "ICarSell (Backend)",
    language: "typescript",
    description: "Projeto de um site de venda de carros - Backend",
    html_url: "https://github.com/ICarSell/ICarSell-backEnd",
    homepage: "",
  },
  {
    id: 5,
    name: "EpicLoot (Frontend)",
    language: "typescript",
    description: "Projeto de um site de venda de jogos online - Frontend",
    html_url: "https://github.com/DiegoAndreLeffa/epicloot-frontend",
    homepage: "",
  },
  {
    id: 6,
    name: "EpicLoot (Backend)",
    language: "typescript",
    description: "Projeto de um site de venda de jogos online - Backend",
    html_url: "https://github.com/DiegoAndreLeffa/epicloot-backend",
    homepage: "",
  },
  {
    id: 7,
    name: "Clone Spotfy (Frontend)",
    language: "typescript",
    description: "Projeto de um clone do Spotify - Frontend",
    html_url: "https://github.com/DiegoAndreLeffa/Clone-Spotfy-Front",
    homepage: "",
  },
  {
    id: 8,
    name: "Clone Spotfy (Backend)",
    language: "typescript",
    description: "Projeto de um clone do Spotify - Backend",
    html_url: "https://github.com/DiegoAndreLeffa/Clone-Spotfy-Back",
    homepage: "",
  },
];

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<any[]>(mockRepositories);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={`https://${repository.homepage}`}
                >
                  <FaShare /> See demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
