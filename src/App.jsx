// import React, { useEffect, useState } from 'react';
// import Navbar from './sections/Navbar';
// import { useProgress } from '@react-three/drei';
// import Hero from './sections/Hero'
// import ServiceSummary from "./sections/ServiceSummary";
// import Services from "./sections/Services";
// import ReactLenis from "lenis/react";
// import About from "./sections/About";
// import Works from "./sections/Works";
// import ContactSummary from "./sections/ContactSummary";
// import Contact from "./sections/Contact";


// const App = () => {
//   const { progress } = useProgress();
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (progress === 100) {
//       setIsReady(true);
//     }
//   }, [progress]);


//   return (
//     <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
//       {!isReady && (
//         <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
//           <p className="mb-4 text-xl tracking-widest animate-pulse">
//             Loading {Math.floor(progress)}%
//           </p>
//           <div className='relative h-1 overflow-hidden rounded w-60 bg-white/20'>
//             <div
//               className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         </div>
//       )}
//       <div 
//         className={`${
//           isReady ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-1000`}
//       >
//         <Navbar/>
//         <Hero/>
//         <ServiceSummary />
//         <Services />
//         <About />
//         <Works />
//         <ContactSummary />
//         <Contact />
//       </div>
//     </ReactLenis>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Fallback: show site after 2 seconds even if no assets are loading
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading...
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div className="absolute top-0 left-0 h-full w-full transition-all duration-300 bg-white"></div>
          </div>
        </div>
      )}

      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
