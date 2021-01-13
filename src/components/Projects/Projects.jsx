import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { element } from 'prop-types';

const Projects = () => {
  const { projects } = useContext(PortfolioContext); // get all projects from data.js?

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState({
    open: false,
    id: null,
  });
  const [checked, setChecked] = useState(false);
  // const [count, setCount] = useState(0);

  let outcome = '';

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  // useEffect(() => {
  //   console.log('Case Study Action: ', isCaseStudyOpen.id);
  // }, []);

  useEffect(() => {
    if (checked) {
      console.log('Checked: ', checked);
    }
    else{ 
      console.log('Checked: ', checked);
    }
  }, [checked]);


  useEffect(() => {
    if (isCaseStudyOpen.open === true) {
      console.log('Case study is open: ', isCaseStudyOpen.id);
    } else {
      console.log('Case Study is closed:', isCaseStudyOpen.id);
    }
  }, []);

  const handleCaseStudy = (csId) => {
    console.log('CASE STUUUUDY!');
    outcome = 'outcome';
    // compare id of current case study (csId = case study id) to that which is stored in state
    if (csId === isCaseStudyOpen.id) {
      // clicked the SAME case study button of a project whose case study status was last changed (previously in state)
      if (isCaseStudyOpen.open === true) {
        // If the 'open' status of the last case study is 'true', we want to close that case study
        outcome += '- selfOpen-->selfClosed -';
        setIsCaseStudyOpen({ open: false, id: csId });
      } else {
        outcome += '- selfClosed-->selfOpen -';
        // If the 'open' status of the last case study is 'false', we want to open that case study
        setIsCaseStudyOpen({ open: true, id: csId });
      }
    } else {
      // Clicked the case study button of a DIFFERENT project than that which was last changed (previously in state)
      if (isCaseStudyOpen.open === true) {
        outcome += '- otherClosed -';
        // Close the previously changed state if it is 'open'
        setIsCaseStudyOpen({ open: false, id: isCaseStudyOpen.id });
      }
      // Now to open the new case study
      outcome += '- selfOpen -';
      setIsCaseStudyOpen({ open: true, id: csId });
    }

    console.log(outcome);
  };

  // const handleCountClick = (n) => {
  //   const plusOne = n + 1;
  //   setCount(plusOne);
  // };

  const handleCheck = (e) => {
    console.log(e.currentTarget);
    //  console.log(e.currentTarget.checked);
    setChecked(e.currentTarget.checked);
    console.log('checked...?');
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;
            // for each project, store its variables to use for rendering

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={250}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <ButtonGroup toggle vertical className="proj-btns">
                        <ToggleButton
                          type="checkbox"
                          id={title}
                          className="cta-btn cta-btn--hero case-study-btn"
                          value="1"
                          checked={checked}
                          onChange={(e) => handleCheck(e)}
                        >
                          View Case Study
                        </ToggleButton>
                        <ButtonGroup className="live-src-btns">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={url || '#!'}
                          >
                            See Live
                          </a>

                          {repo && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-btn text-color-main"
                              href={repo}
                            >
                              Source Code
                            </a>
                          )}
                        </ButtonGroup>
                      </ButtonGroup>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={250}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
