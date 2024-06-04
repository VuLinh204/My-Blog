'use client';

import { useState, useEffect } from "react";
import Aos from "aos";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import styles from "./about.module.css";
import "aos/dist/aos.css";
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import AboutText from '@/components/aboutText/aboutText';


import { useState, useEffect } from 'react';
import Aos from 'aos';
import Tilt from 'react-parallax-tilt';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import styles from './about.module.css';
import 'aos/dist/aos.css';
import ScrollToTopButton from '@/components/scrollToTopButton/scrollToTopButton';


const AboutPage = () => {
  useEffect(() => {
    // Initialize AOS after components are rendered
    Aos.init({ duration: 2000 });
  }, []);


  useEffect(() => {
    // Initialize AOS after components are rendered
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas, flexibility, and precision. We’re the world’s
            best consulting & finance solution provider. Wide range of web and software development services.
          </p>

          <div className={styles.about}>
            <a className="" href="#">
              <button
                id="CTA-button"
                data-aos="fade-down"
                className={styles.register}
              >
                Register Here
              </button>
            </a>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <div data-aos="fade-down" className="hero__image hidden lg:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">
                <img
                  src=
                  "https://gssoc.girlscript.tech/Hero_Image_Lite_Theme.svg"
                  alt="hero-image"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>

      <div
        className={styles.contentAbout}
      >
        <div>
          <img
            id="Learn_more"
            className="mb-10"
            src="https://github.com/girlscript/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
            alt="Learn More light"
          />
          <div>
            <h1 className={styles.title}>
              About
            </h1>
          </div>
        </div>
        <div className={styles.number}>
          <h1>
            GSSoC 2024
          </h1>
          <div>
            {" "}
            by the numbers
          </div>
          <div className={styles.grid}>
            <div className="statscol">
              <div className={styles.spacing}>
                <h1 className={styles.text}>
                  <VisibilitySensor
                    partialVisibility
                    offset={{ bottom: 0 }}
                  >
                    {({ isVisible }) => (
                      <div>
                        {isVisible ? <CountUp end={27000} /> : null}+
                      </div>
                    )}
                  </VisibilitySensor>
                </h1>
                <p>
                  {" "}
                  Registrations
                </p>
              </div>

              return (
              <div>
                <div className={styles.container}>
                  <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>About Agency</h2>
                    <h1 className={styles.title}>
                      We create digital ideas that are bigger, bolder, braver and better.
                    </h1>
                    <p className={styles.desc}>
                      We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas,
                      flexibility, and precision. We’re the world’s best consulting & finance solution provider. Wide
                      range of web and software development services.
                    </p>


                    <div className={styles.about}>
                      <a className="" href="#">
                        <button id="CTA-button" data-aos="fade-down" className={styles.register}>
                          Register Here
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className={styles.imgContainer}>
                    <div data-aos="fade-down" className="hero__image hidden lg:block">
                      <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 600, width: 600 }}>
                        <div className="img__container">
                          <img src="https://gssoc.girlscript.tech/Hero_Image_Lite_Theme.svg" alt="hero-image" />
                        </div>
                      </Tilt>
                    </div>
                  </div>
                </div>

                <div className={styles.contentAbout}>
                  <div>
                    <img
                      id="Learn_more"
                      className="mb-10"
                      src="https://github.com/girlscript/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
                      alt="Learn More light"
                    />
                    <div>
                      <h1 className={styles.title}>About</h1>
                    </div>
                  </div>
                  <div className={styles.number}>
                    <h1 className="mt-8 pt-6 pl-8 text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">GSSoC 2024</h1>
                    <div className="pl-8 text-2xl text-primary_orange-0 1.5rem 2rem "> by the numbers</div>
                    <div className={styles.grid}>
                      <div className="statscol">
                        <div className={styles.spacing}>
                          <h1 className={styles.text}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                              {({ isVisible }) => <div>{isVisible ? <CountUp end={27000} /> : null}+</div>}
                            </VisibilitySensor>
                          </h1>
                          <p> Registrations</p>
                        </div>

                        <div className={styles.spacing}>
                          <h1 className={styles.text}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                              {({ isVisible }) => <div>{isVisible ? <CountUp end={1000} /> : null}+</div>}
                            </VisibilitySensor>
                          </h1>
                          <p> Registrations</p>
                        </div>

                        <div className={styles.spacing}>
                          <h1 className={styles.text}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                              {({ isVisible }) => <div>{isVisible ? <CountUp end={200} /> : null}+</div>}
                            </VisibilitySensor>
                          </h1>
                          <p> Registrations</p>
                        </div>
                      </div>
                      <div className="statscol">
                        <div className={styles.spacing}>
                          <h1 className={styles.text}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                              {({ isVisible }) => <div>{isVisible ? <CountUp end={7000} /> : null}+</div>}
                            </VisibilitySensor>
                          </h1>
                          <p> Registrations</p>
                        </div>

                        <div className={styles.spacing}>
                          <h1 className={styles.text}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                              {({ isVisible }) => <div>{isVisible ? <CountUp end={500} /> : null}+</div>}
                            </VisibilitySensor>
                          </h1>
                          <p> Registrations</p>
                        </div>

                        <div className={styles.spacing}>
                          <h1 className={styles.text}>
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                              {({ isVisible }) => <div>{isVisible ? <CountUp end={20000} /> : null}+</div>}
                            </VisibilitySensor>
                          </h1>
                          <p> Registrations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AboutText />

                <ScrollToTopButton />
              </div >
              );
         
};

              export default AboutPage;
