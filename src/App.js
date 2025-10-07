import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  researchActivites,
  defense,
  publications
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import ResearchActivites from "./components/home/ResearchActivities"
import Defense from "./components/home/Defense"
import Publications from "./components/home/Publications"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        defense.show && (
          <Defense defense={defense}/>
        )
      }
      {
        researchActivites.show && (
          <ResearchActivites researchActivities={researchActivites}/>
        )
      }
      {
        publications.show && (
          <Publications publications={publications}/>
        )
      }
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});


function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Timeout = attendre que le DOM de React soit monté
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [hash]);

  return null;
}

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {navBar.show && <Navbar ref={titleRef} />}
      
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
      </Routes>
      
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            logos={getInTouch.logos}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};


export default App;
