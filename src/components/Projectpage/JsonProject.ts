export const jsonProjects = {
    wordwidespring: {
      title: "WorldWideSpring",
      summary: `
      This application will collect data about drinkable water and realize data processing on it. 
      WSW will be composed of a NodeJS (NestJS) CRUD to serve data, a FastAPI for collecting data from API and a FastAPI back end to manage a chatbot based on LLM. 
      Aim here it’s to play with back end framework, micro service architecture and with Retrieval augmented generation (RAG) on Large Language Model (LLM), Micro Service architecture and Kubernetes. 
      The Node.js micro service will be initially a REST API and will be a GraphQL data server. 
      `,
      imageUrl: "https://docs.oracle.com/fr/solutions/learn-architect-microservice/img/monolithic_vs_microservice.png",
      skills: ["Microservice", "FastAPI", "Kubernetes", "Node.js", "GraphQL", "NestJS", "RAG LLM", "Chatbot"],
      linksGithub: ["back_world_wide_spring", "collector_world_wide_springs", "front_world_wide_spring"],
      linkWebsite: "",
    }, 
    yogurtmaker: {
      title: "Yogurtmaker",
      summary: `
      This IoT project is base on esp32. 

      This project is a home made DIY Yogurt maker realise with:
      esp microcontroler, m5stack esp32 C3 Mate.
      environement sensor, m5stack ENVIV with a SHT40 sensor and BME280 sensor for temperature and more.
      relay, 3A relay unit, for provide or cut current for heater
      a bedside lamp with a Infra Red bulb for heating
      a camping cooler box, sensor, heater and yogurt will go inside
      and a bit of micropython code.

      A Yogurt is made by melt one yogurt for one liter of milk, then by heat it at 40°C during 10 ti 15 hours. This is what this project do.
      `,
      imageUrl: "./img/yahourtier.jpeg",
      skills: ["IoT", "MicroPython", "MicroController"],
      linksGithub: ["esp32_yogurt_maker"],
      linkWebsite: "",
    }, 
    portfolio: {
      title: "Portfolio",
      summary: `
      The present page is made in React and TailwindCSS. 
      `,
      imageUrl: "./img/moutainStyle_4.png",
      skills: ["React", "Tailwind"],
      linksGithub: ["portfolio"],
      linkWebsite: "https://sebajou.github.io/portfolio",
    }, 
    Pytickdo: {
      title: "Pytickdo ticket management for coders",
      summary: `
      Pytickdo is a project of a ticket manager (like Jira of Trello). 
This ticket manager project want to create a communautary ticket manager, handable by a Web App GUI like by Python CLI, abble to interact with a forum, Git, Github, README.md, JetBrain IDE, Visual Studio Code IDE, Slack...
A Python CLI, a Python Back End and React front GUI will allow to create and manage project's ticket in a agile way or in any project way. 

Created and modified ticket will allow to directly follow ticket ongoing on project's README.md (and will be potentially push on GitHub, GitLab...). 

This project is dedicace for open source project, little structure or solo developer, to help them to drive their projects and allow community to openly follow the advancment and participate by coding, comment, vote... 
      `,
      imageUrl: "",
      skills: ["Python", "Mardown"],
      linksGithub: ["pytickdo"],
      linkWebsite: "",
    }, 
    TTDD: {
      title: "Test the Test Driven Design",
      summary: `
      TTDD is example of tutorial to lead learner to make TDD. The learner is abble to following the tutorial in autonomy. Automatic test, test the test created by the learner and monitor the correct sequence of step in the spiritual way of Test Driven Design. 
      `,
      imageUrl: "https://marsner.com/wp-content/uploads/test-driven-development-TDD.png",
      skills: ["Python", "Pytest"],
      linksGithub: ["TTDD"],
      linkWebsite: "",
    }
  };