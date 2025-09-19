import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionText,
  ContactsCards,
  ContactSectionContent1,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const About = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="about">
      <Container>
        <ContactSectionContent1 ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading1" color="grey4">
                Sobre{" "}
                <Text as="span" type="heading1" color="brand1">
                  mim
                </Text>
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <Text type="body1" color="grey3">
              Olá! Meu nome é{" "}
              <Text as="span" type="heading5" color="brand1">
                {userData.nameUser}
              </Text>
              , sou desenvolvedor Full Stack, apaixonado por programação, tenho
              trabalhado com afinco para me aprimorar e crescer como
              profissional. Durante minha jornada, tive a oportunidade de
              trabalhar em projetos desafiadores, que me permitiram expandir
              minhas habilidades em JavaScript, TypeScript, Python e outras.
              Acredito na importância de manter-me atualizado com as tendências
              e tecnologias emergentes do setor, estou sempre em busca de
              oportunidades de novas experiencias de aprendendizagem e
              desenvolvimento.
              <p>
                <br></br>
              </p>
              Me considero uma pessoa criativa e curiosa, sempre explorando
              novas ideias e buscando soluções inovadoras. Estou entusiasmado em
              compartilhar meu portfólio com você, espero que aprecie o
              trabalho. Se tiver alguma pergunta ou quiser saber mais sobre
              minhas experiências, fique à vontade para entrar em contato.
              <p>
                <br></br>
              </p>
              Obrigado por visitar o meu portfólio!
            </Text>
          </ContactsCards>
        </ContactSectionContent1>
      </Container>
    </ContactSection>
  );
};
