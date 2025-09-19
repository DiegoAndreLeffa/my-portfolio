import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { About } from "@/components/About";
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";
import { FaGithub } from "react-icons/fa";

import { useState, useEffect, JSX } from "react";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  ProjectsAreaFilters,
} from "./style";

interface IRepository {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  created_at: string;
  owner: {
    login: string;
  };
}

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");

  useEffect(() => {
    const organizationsToFetch = [
      "CodeQuiz-PMI",
      "Orbis-Life-Simulator",
      "Poke-Projects",
      "StayInn-O-Futuro-do-Gerenciamento",
    ];

    const fetchRepos = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
        );
        const userRepos = await userResponse.json();

        const orgsReposPromises = organizationsToFetch.map((org) =>
          fetch(`https://api.github.com/orgs/${org}/repos`).then((res) => {
            if (!res.ok) {
              console.error(
                `Falha ao buscar repositórios para a organização: ${org}`
              );
              return [];
            }
            return res.json();
          })
        );

        const orgsReposArrays = await Promise.all(orgsReposPromises);
        const orgsRepos = orgsReposArrays.flat();

        const allFetchedRepos = [...userRepos, ...orgsRepos];

        const filteredByRules = allFetchedRepos.filter((repo) => {
          if (repo.owner.login === "CodeQuiz-PMI") {
            return (
              repo.name.includes("front") || repo.name.includes("back-no-sql")
            );
          }
          return true;
        });

        const uniqueRepos = Array.from(
          new Set(filteredByRules.map((repo) => repo.id))
        ).map((id) => filteredByRules.find((repo) => repo.id === id));

        setRepositories(uniqueRepos as IRepository[]);

        const uniqueLanguages = [
          "All",
          ...Array.from(
            new Set(uniqueRepos.map((repo) => repo.language).filter(Boolean))
          ),
        ];
        setLanguages(uniqueLanguages as string[]);
      } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos =
    selectedLanguage === "All"
      ? repositories
      : repositories.filter((repo) => repo.language === selectedLanguage);

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                Amo
              </Text>{" "}
              criar e{" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey2">
              Conheça aqui neste ambiente, criado especialmente para você, todos
              os meus projetos e tecnologias
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código-fonte do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack
                  key={index}
                  id={index}
                  title={stack.title}
                  icon={stack.img}
                />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>

      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Projetos que criei ou participei, clique na linguagem para
                filtrar.
              </Text>

              <ProjectsAreaFilters>
                {languages.map((lang) => (
                  <Button
                    key={lang}
                    type="outline"
                    css={
                      selectedLanguage === lang
                        ? { borderColor: "$brand1", color: "$brand1" }
                        : {}
                    }
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {lang}
                  </Button>
                ))}
              </ProjectsAreaFilters>
            </ProjectsAreaSocialMediaMessage>

            <ProjectsAreaContent>
              {filteredRepos.length > 0 ? (
                filteredRepos.map((repo) => (
                  <Project key={repo.id} repository={repo} />
                ))
              ) : (
                <Text type="body1" color="grey2">
                  Carregando projetos ou nenhum projeto encontrado para esta
                  linguagem.
                </Text>
              )}
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <About />
      <Contacts />
    </main>
  );
};
