import React, { FC, useState, useEffect } from 'react';


interface ProjectpageProps {
  projectName: String;
  projectSummary: String;
  projectUrlImage: string;
  projectSkills: string[];
  linksGithub: string[];
  linkWebsite: string; 
}


const Projectpage: FC<ProjectpageProps> = (props) => {

  const colors = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % colors.length;
      setCurrentColor(colors[index]);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (

<div className='flex flex-col bg-contain bg-rigth bg-fixed'>
  <div className='flex flex-col items-center '>
    <button type="button" className={`
      flex items-center
      w-full m-1 py-1 px-2 
      justify-center  text-center text-base font-semibold
      bg-mountain-800
      text-white
      focus:ring-mountain-500 focus:ring-offset-gray-200
      transition ease-in duration-200  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
      rounded-lg`}
    >
      <div className="grow text-white font-bold text-xl mb-2 top-0">{props.projectName}</div>
    </button>
  </div>
  <div className="flex flex-row basis-1 md:basis-10/12">
    <div className="basis-0 md:basis-4/12 
      h-48 md:h-auto md:w-48 
      bg-contain bg-no-repeat md:bg-center 
      invisible md:visible" 
    style={{ backgroundImage: `url(${props.projectUrlImage})`}} title="Microservice architecture">
    </div>
    <div className="md:basis-8/12 justify-between leading-normal w-full">
      <p className="grow w-full text-gray-700 text-base p-4">{props.projectSummary}</p>
    </div>
  </div>
  <div className="flex flex-col basis-2/12 w-full justify-center">
    <div className="grow justify-center px-6 pt-4 pb-2">
      {props.projectSkills.map((skill) => {
        return <span className="
          inline-block 
          bg-mountain-700
          text-white 
          rounded-full 
          text-sm font-semibold
          px-3 py-1 mr-2 mb-2">#{skill}</span>
      })}
    </div>
    <div className="grow flex flex-col items-center justify-center px-6 pt-4 pb-2">
      {props.linksGithub.map((linkGithub) => {
          return(
          <button type="button" className="
            flex
            justify-center items-center
            whitespace-nowrap
            text-white 
            text-sm font-semibold
            px-3 py-1 mr-2 mb-2
            bg-mountain-600
            hover:bg-mountain-700 
            focus:ring-gray-500 focus:ring-offset-gray-200 
            text-center
            transition ease-in duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
            rounded-lg"
          >
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1792 1792">
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
            </svg>
            <a className="flew flex row text-white hover:text-mountain-400" href={`https://www.github.com/sebajou/${linkGithub}`}>
              {linkGithub}
            </a>
          </button>
          )
        })
      }
      {props.linkWebsite ? 
      <button type="button" className="
        inline-block
        text-white 
        whitespace-nowrap
        text-sm font-semibold
        px-3 py-1 mr-2 mb-2
        justify-center items-center
        bg-mountain-600
        hover:bg-mountain-700 
        focus:ring-gray-500 focus:ring-offset-gray-200 
        text-center text-base font-semibold
        transition ease-in duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
        rounded-lg"
      >
        <svg 
          className="mr-2" 
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path 
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"
          />
        </svg>
        <a className="flew flex row text-slate-500 hover:text-blue-600" href={`${props.linkWebsite}`}>
          {props.projectName} WebSite Link
        </a> 
      </button>
        : null}
    </div>
  </div>
</div>
);};

export default Projectpage;