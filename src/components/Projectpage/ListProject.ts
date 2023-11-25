export const listProjects = {
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
      linkGithub: "www.github.com/sebajou/",
      linkWebsite: "",
    }, 
    yogurtmaker: {
      title: "Yogurtmaker",
      summary: `
      This IoT project is base on esp32. 
      The github page describe how to build an yogurt maker with esp32 C3, a sht40 and bme280 sensor and a relay. 
      Program on the esp32 is write in microPython. 
      `,
      imageUrl: "",
      skills: ["IoT", "MicroPython", "MicroController"],
      linkGithub: "www.github.com/sebajou/",
      linkWebsite: "",
    }, 
    portfolio: {
      title: "Portfolio",
      summary: `
      The present page is made in React and TailwindCSS. 
      `,
      imageUrl: "",
      skills: ["React", "Tailwind"],
      linkGithub: "www.github.com/sebajou/",
      linkWebsite: "",
    }
  };