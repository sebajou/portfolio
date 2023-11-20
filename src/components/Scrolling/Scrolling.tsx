import React, { FC } from 'react';
import Presentation from '../Presentation/Presentation';
import Projectpage from '../Projectpage/Projectpage';
import Services from '../Services/Services';
import Resumes from '../Resumes/Resumes';


interface ScrollingProps {}
const projectsJson = {
  wordwidespring: {
    title: "WordWideSpring",
    summary: `
    This application will collect data about drinkable water and realize data processing on it. 
    WSW will be composed of a NodeJS (NestJS) CRUD to serve data, a FastAPI for collecting data from API and a FastAPI back end to manage a chatbot based on LLM. 
    Aim here it’s to play with back end framework, micro service architecture and with Retrieval augmented generation (RAG) on Large Language Model (LLM), Micro Service architecture and Kubernetes. 
    The Node.js micro service will be initially a REST API and will be a GraphQL data server. 
    `,
    imageUrl: "https://media.licdn.com/dms/image/D4D12AQHu5wlUZp3DzQ/article-cover_image-shrink_720_1280/0/1693935754168?e=2147483647&v=beta&t=NLZTcgBIEdIOMYTQtye_Im-DblUW8i3eUUgyp3TB1Go"
  }, 
  yogurtmaker: {
    title: "Yogurtmaker",
    summary: `
    This IoT project base on esp32. 
    The github page describe how to build an yogurt maker with esp32 C3, a sht40 and bme280 sensor and a relay. 
    Program on the esp32 is write in microPython. 
    `,
    imageUrl: ""
  }, 
  portfolio: {
    title: "Portfolio",
    summary: `
    The present page is made in React. 
    `,
    imageUrl: ""
  }
};
const arr : any[] = []
Object.keys(projectsJson).forEach(function(innerAttr, index) {
  arr.push(innerAttr[index]);
});

const Scrolling: FC<ScrollingProps> = () => (
  <div className='h-screen bg-local bg-emerald-800' data-testid="Scrolling">
        <div className="basis-1 bg-lime-600">
          <Presentation/>
        </div>
        {Object.values(projectsJson).map((project) => {
        return (
          <div className="basis-1">
              <Projectpage 
                projectName={project.title} 
                projectSummary={project.summary} 
                projectUrlImage={project.imageUrl}
                />
            </div>
          )})
        }

        <div className="basis-1 bg-lime-900">
          <Services/>
        </div>
        <div className="basis-1 bg-lime-400">
          <Resumes/>
        </div>
  </div>
);

export default Scrolling;
