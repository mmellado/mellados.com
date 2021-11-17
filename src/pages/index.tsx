import React from "react";
import styled from "styled-components";

import Layout from "src/templates/Layout";
import Seo from "src/components/atoms/Seo";

const Paragraph = styled.p`
  max-width: 500px;
  font-size: 16px;
  margin-bottom: 1.5rem;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Paragraph>
      Software engineer specialized in frontend technologies, user experience,
      accessibility and web animations.
    </Paragraph>

    <Paragraph>
      Marcos is currently a Technical Delivery Manager at AKQA, where he leads
      the technology department for the Amsterdam studio. He previously worked as a UI
      Engineer at LinkedIn, where he contributed to several projects including
      the Homepage stream, Onboarding experience, Global header, the
      company&apos;s internal design system and Accessibility.
    </Paragraph>

    <Paragraph>
      He also worked at Google as a lead engineer for the Google Fiber marketing
      team. He has a Bachelor&apos;s degree in Computer Science from Tecnológico
      de Monterrey.
    </Paragraph>
  </Layout>
);

export default IndexPage;
