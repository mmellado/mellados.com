import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Head = styled.header`
  background: #333;
  margin-bottom: 1.45rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const FooterLinks = styled.ul`
  display: flex;
  max-width: 500px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const FooterLink = styled.a`
  margin-left: 15px;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle = "" }) => (
  <Head>
    <Wrapper>
      <H1>
        <HomeLink to="/">{siteTitle}</HomeLink>
      </H1>

      <nav>
        <FooterLinks>
          <li>
            <FooterLink
              href="https://github.com/mmellado"
              target="_blank"
              rel="noopener noreferrer"
            >
              GithHub
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://codepen.io/mmellado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codepen
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://linkedin.com/in/mellado"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </FooterLink>
          </li>
        </FooterLinks>
      </nav>
    </Wrapper>
  </Head>
);

export default Header;
