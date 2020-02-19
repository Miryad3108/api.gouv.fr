import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import colors from '../../styles/colors';

const Title = ({ title, logo }) => (
  <>
    <div className="title">
      <img src={`/images/api-logo/${logo}`} alt={title} className="ui image" />
      <h1>{title}</h1>
    </div>
    <style jsx>{`
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
      }

      .title img {
        flex-shrink: 0;
        border-radius: 100%;
        width: 48px;
        height: 48px;
        background-color: #fff;
      }

      .title h1 {
        font-family: Evolventa;
        margin: 0 0.5rem;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 43px;
        text-align: center;
      }
    `}</style>
  </>
);

const Tagline = ({ tagline }) => (
  <>
    <div className="tagline">{tagline}</div>
    <style jsx>{`
      .tagline {
        font-family: Evolventa;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
      }

      .inline {
        padding: 0.5rem 0rem 0.5rem 1rem;
        text-align: left;
      }
    `}</style>
  </>
);

const PageHeader = ({ title, logo, tagline }) => (
  <section id="mission-statement">
    <Link href="/">
      <a className="back-button">← Page d’accueil</a>
    </Link>
    <div className="ui container content">
      <Title title={title} logo={logo} />
      <Tagline tagline={tagline} />
    </div>

    <style jsx>{`
      #mission-statement {
        background: ${colors.backgroundBlueGradient};
        color: white;
        width: 100%;
        position: relative;
      }

      .content {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .back-button {
        position: absolute;
        top: 20px;
        color: #fff;
        left: 20px;
      }
      .back-button:hover {
        text-decoration: underline;
      }
    `}</style>
  </section>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default PageHeader;