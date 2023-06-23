"use client";
import React from "react";
import  Link  from "next/link";
import { Col, Row } from "react-bootstrap";

const FooterBottomData = {
  social: [
    {
      icon: "fab fa-twitter",
      url: "#"
    },
    {
      icon: "fab fa-pinterest",
      url: "#"
    },
    {
      icon: "fab fa-facebook-f",
      url: "#"
    },
    {
      icon: "fab fa-youtube",
      url: "#"
    }
  ]
};
const FooterContactData = {
  title: "Contact",
  infos: [
    {
      text: "000 8888 999",
      url: "tel:000-8888-999"
    },
    {
      text: "needhelp@printify.com",
      url: "mailto:needhelp@printify.com"
    },
    {
      text: "88 New Street, Washington DC \n United States, America",
      url: ""
    }
  ]
};
const FooterLinksData = {
  title: "Explore",
  links: [
    {
      label: "About",
      url: "/about"
    },
    {
      label: "Contact",
      url: "/contact"
    },
    {
      label: "Our Services",
      url: "/services"
    },
    {
      label: "Plans & Pricing",
      url: "/pricing"
    },
    {
      label: "How it Works",
      url: "/about"
    }
  ]
};


function NewFooter() {
  return (
    <>
    <div className="footer">
      <div className="thm-container">
        <Row>
          <Col lg={4}>
            <div className="footer-widget about-widget">
              <div className="title">
                <h3>About Ignite Empowerment</h3>
              </div>
              <p>Ignite Empowerment is a non-profit equipping the youth of broward with unshakable mindsets.</p>

             
            </div>
          </Col>
          <Col lg={2}>
            <div className="footer-widget links-widget explore">
              <div className="title">
                <h3>Explore</h3>
              </div>
              <ul className="link-list">
                {FooterLinksData.links.map(({ url, label }, index) => {
                  return (
                    <li key={index}>
                      <Link href={url}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>

          <Col lg={3}>
            <div className="footer-widget contact-widget">
              <div className="title">
                <h3>{FooterContactData.title}</h3>
              </div>
              {FooterContactData.infos.map(({ text, url }, index) => {
                return (
                  <p key={index}>
                    <Link href={url}>{text}</Link>
                  </p>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="thm-container clearfix">
        <div className="float-left copy-text">
          <p>
            &copy; Copyright {new Date().getFullYear()} Created by{" "}
            <Link href="#">Layerdrops Team</Link>
          </p>
        </div>
        <div className="social-box float-right">
          {FooterBottomData.social.map(({ icon, url }, index) => {
            return (
              <Link key={index} href={url} className={`${icon} hvr-pulse`}></Link>
            );
          })}
        </div>
      </div>
    </div>
  </>
  )
}

export default NewFooter
