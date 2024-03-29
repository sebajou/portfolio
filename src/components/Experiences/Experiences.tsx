import React, { FC, useState } from 'react';


interface ExperiencesProps {
  experienceTitle: String;
  experienceCompany: String;
  experienceDate: {start: Date, end: Date};
  experienceSummary: String;
  experienceSummaryBullet: String[];
  experienceSkills: String[];
  experienceLinkWebsite: String[];
}

const Experiences: FC<ExperiencesProps> = (props) => {

  const [isShown, setIsShown] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
    setIsRotated(!isRotated);
  };


  
  return (
  <div data-testid="Educations" id={`${props.experienceTitle}`}>
    <div className='flex flex-col bg-contain bg-rigth bg-fixed'>
      <div className='flex flex-col items-center '>
        <button type="button" className={`
          flex items-center
          w-full m-1 py-1 px-2 
          justify-center  text-center text-base font-semibold
          bg-mountain-300
          focus:ring-mountain-500 focus:ring-offset-gray-200
          transition ease-in duration-200  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
          rounded-lg`}
          onClick={handleClick}
        >
          <div className='flew flew-row mb-2'>
            <div className="grow font-bold text-xl top-0"><strong>{props.experienceTitle} at {props.experienceCompany}</strong></div>
            <div className='text-mountain-100 italic'>from <span className='date'>{props.experienceDate.start.toLocaleDateString()}</span> until {props.experienceDate.end.toLocaleDateString()}</div>
            <div className='flex justify-center items-center'><svg className={`transform ${isRotated ? 'rotate-90' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="29" height="51" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"/></svg></div>
          </div>
        </button>
      </div>

      {isShown && (<div>
      <div className="flex flex-row basis-1">
          <p className="grow w-full text-gray-700 text-base p-4">{props.experienceSummary}</p>
      </div>
      <div>
        <ul className="pace-y-4 text-left text-gray-500 dark:text-gray-400 m-10">
          {props.experienceSummaryBullet.map((sumarybullet) => {
            return <li className="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="155" height="235" stroke-width="1000" viewBox="0 0 335 395">
                        <path id="path881" stroke="black" stroke-width="1" d="M 76.02,330.65 C 76.49,328.08 79.28,320.88 82.21,314.64 92.72,292.26 94.27,288.46 97.38,277.28 99.12,271.05 100.54,263.24 100.54,259.93 100.55,253.92 100.55,253.92 110.32,249.53 122.40,244.10 129.05,237.84 131.92,229.21 134.71,220.80 134.15,215.84 130.24,214.41 127.49,213.40 127.24,213.69 127.24,217.99 127.24,223.66 123.48,231.33 118.35,236.10 114.39,239.78 102.83,245.91 92.54,249.78 81.51,253.94 80.23,255.61 80.03,266.14 79.87,274.66 79.41,276.09 74.58,283.10 70.86,288.50 69.31,292.15 69.31,295.50 69.31,300.26 69.31,300.26 66.79,297.15 64.71,294.58 64.43,292.78 65.17,286.87 66.25,278.22 64.14,271.94 60.17,271.94 58.70,271.94 55.16,274.04 52.32,276.61 45.84,282.46 41.49,282.64 36.47,277.27 32.29,272.79 29.16,273.03 27.93,277.93 25.85,286.21 14.26,294.19 6.72,292.53 2.87,291.69 2.87,291.69 6.17,288.15 7.98,286.20 10.18,282.38 11.05,279.65 12.51,275.09 17.29,269.85 22.87,266.71 24.88,265.58 24.64,264.96 20.78,261.17 13.85,254.38 13.72,251.03 20.14,245.36 23.12,242.73 27.85,236.97 30.64,232.57 33.44,228.17 41.00,219.03 47.45,212.28 55.04,204.32 59.19,198.92 59.22,196.93 59.29,193.13 63.16,182.65 65.85,178.94 66.96,177.42 70.27,175.05 73.20,173.68 80.24,170.37 80.57,167.08 74.58,159.92 68.68,152.85 68.17,146.67 73.18,142.73 77.60,139.26 77.39,136.18 72.41,131.04 66.81,125.27 65.75,117.55 69.77,111.90 71.40,109.61 73.90,107.80 75.42,107.80 78.42,107.80 78.38,106.27 75.02,92.24 73.59,86.28 73.67,84.92 75.56,82.03 76.76,80.20 80.32,77.84 83.47,76.79 89.17,74.89 89.20,74.85 89.39,68.11 89.78,54.27 94.76,47.75 104.94,47.75 110.43,47.75 111.22,46.33 111.22,36.50 111.22,31.49 111.89,28.88 113.56,27.40 116.78,24.54 124.68,22.57 127.90,23.83 132.19,25.50 132.42,25.35 135.41,19.00 139.77,9.72 147.57,6.72 155.37,11.32 159.19,13.58 159.26,13.56 163.55,9.18 167.40,5.24 168.48,4.83 173.52,5.40 176.95,5.79 180.79,7.41 183.32,9.53 187.24,12.83 187.69,12.92 191.32,11.04 197.64,7.77 202.81,8.47 206.19,13.05 208.47,16.12 210.20,17.05 213.66,17.05 219.54,17.05 223.33,19.17 223.33,22.44 223.33,24.60 224.25,25.06 228.62,25.06 234.23,25.06 236.68,27.47 236.68,32.98 236.68,34.52 237.55,35.74 238.66,35.74 240.68,35.74 242.99,41.88 241.52,43.35 241.07,43.80 241.22,44.82 241.84,45.62 242.47,46.42 243.37,48.70 243.84,50.68 244.58,53.78 243.75,53.27 237.71,46.88 229.62,38.33 223.39,34.40 209.38,29.01 196.03,23.86 185.22,22.86 173.28,25.66 154.84,29.97 142.71,37.67 128.71,53.94 116.98,67.57 110.11,82.06 106.55,100.70 102.74,120.59 104.27,134.08 112.40,152.17 116.45,161.18 116.45,161.18 110.83,163.99 104.36,167.24 97.87,172.92 97.87,175.36 97.87,178.86 100.96,178.68 106.33,174.87 116.35,167.75 123.07,166.02 136.60,167.04 144.30,167.62 149.54,167.43 151.26,166.51 156.41,163.76 153.86,167.61 145.13,175.78 137.35,183.05 124.03,190.95 114.71,193.82 112.29,194.56 112.29,194.70 114.56,197.21 117.54,200.50 120.45,199.87 134.42,192.91 144.93,187.66 144.93,187.66 150.26,192.77 159.04,201.17 166.98,209.77 171.71,216.01 180.87,228.07 185.96,235.94 185.96,238.03 185.96,239.22 183.71,244.48 180.96,249.72 171.95,266.89 156.68,279.64 124.13,297.17 96.00,312.32 85.51,320.13 77.51,331.88 75.16,335.32 75.16,335.32 76.02,330.65 76.02,330.65 76.02,330.65 76.02,330.65 Z M 74.45,211.43 C 76.32,208.97 77.85,206.61 77.85,206.18 77.85,204.43 69.01,208.04 66.84,210.68 63.67,214.54 63.91,215.89 67.78,215.89 69.91,215.89 72.22,214.34 74.45,211.43 74.45,211.43 74.45,211.43 74.45,211.43 Z" />
                      </svg>
                      <span>{sumarybullet}</span>
                    </li>;
          })}
        </ul>
      </div>
      <div className="flex flex-col basis-2/12 w-full justify-center">
        <div className="grow justify-center px-6 pt-4 pb-2">
          {props.experienceSkills.map((skill) => {
            return <span className="
              inline-block 
              bg-mountain-100
              rounded-full 
              text-sm font-semibold
              px-3 py-1 mr-2 mb-2">#{skill}</span>
          })}
        </div>
        <div className="grow px-6 pt-4 pb-2 flex flex-col items-center">
          {props.experienceLinkWebsite ? 
          <button type="button" className="
            flex
            justify-center items-center
            whitespace-nowrap
            text-sm font-semibold
            px-3 py-1 mr-2 mb-2
            bg-mountain-200
            hover:bg-mountain-500 
            focus:ring-gray-500 focus:ring-offset-gray-200 
            text-center
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
            <a className="flew flex row text-slate-500 hover:text-blue-600" href={`${props.experienceLinkWebsite}`}>
              {props.experienceTitle} WebSite Link
            </a> 
          </button>
            : null}
        </div>
      </div>
      </div>)}
    </div>
  </div>)
};

export default Experiences;
