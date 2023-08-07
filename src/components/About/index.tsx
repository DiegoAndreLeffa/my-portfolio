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
              </Text>{" "}
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

            {/* <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                  Estou disponível para chat de voz, vamos falar sobre
                  criatividade junto?
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Fale agora
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu email
                </Text>
                <Text color="grey2" type="body2">
                  Envie um email relatando feedbacks, sugestões e ideias
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:nekelpatrick.com")
                  }
                >
                  Mande um email
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                  Podemos criar interações mais constantes assim como um
                  compartilhamento rede
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={linkedInUrl}
                >
                  Acesse o LinkedIn agora
                </Text>
              </ContactCardContent>
            </ContactCard> */}
          </ContactsCards>
        </ContactSectionContent1>
      </Container>
    </ContactSection>
  );
};
