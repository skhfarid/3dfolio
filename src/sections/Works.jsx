// import { Icon } from "@iconify/react/dist/iconify.js";
// import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
// import { projects } from "../constants";
// import { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const Works = () => {
//   const overlayRefs = useRef([]);
//   const previewRef = useRef(null);

//   const [currentIndex, setCurrentIndex] = useState(null);
//   const text = `Featured projects that have been meticulously
//     crafted with passion to drive
//     results and impact.`;

//   const mouse = useRef({ x: 0, y: 0 });
//   const moveX = useRef(null);
//   const moveY = useRef(null);

//   useGSAP(() => {
//     moveX.current = gsap.quickTo(previewRef.current, "x", {
//       duration: 1.5,
//       ease: "power3.out",
//     });
//     moveY.current = gsap.quickTo(previewRef.current, "y", {
//       duration: 2,
//       ease: "power3.out",
//     });

//     gsap.from("#project", {
//       y: 100,
//       opacity: 0,
//       delay: 0.5,
//       duration: 1,
//       stagger: 0.3,
//       ease: "back.out",
//       scrollTrigger: {
//         trigger: "#project",
//       },
//     });
//   }, []);

//   const handleMouseEnter = (index) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(index);

//     const el = overlayRefs.current[index];
//     if (!el) return;

//     gsap.killTweensOf(el);
//     gsap.fromTo(
//       el,
//       {
//         clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
//       },
//       {
//         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//         duration: 0.15,
//         ease: "power2.out",
//       }
//     );

//     gsap.to(previewRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = (index) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(null);

//     const el = overlayRefs.current[index];
//     if (!el) return;

//     gsap.killTweensOf(el);
//     gsap.to(el, {
//       clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
//       duration: 0.2,
//       ease: "power2.in",
//     });

//     gsap.to(previewRef.current, {
//       opacity: 0,
//       scale: 0.95,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (window.innerWidth < 768) return;
//     mouse.current.x = e.clientX + 24;
//     mouse.current.y = e.clientY + 24;
//     moveX.current(mouse.current.x);
//     moveY.current(mouse.current.y);
//   };

//   return (
//     <section id="work" className="flex flex-col min-h-screen">
//       <AnimatedHeaderSection
//         subTitle={"Logic meets Aesthetics, Seamlessly"}
//         title={"Works"}
//         text={text}
//         textColor={"text-black"}
//         withScrollTrigger={true}
//       />
//       <div
//         className="relative flex flex-col font-light"
//         onMouseMove={handleMouseMove}
//       >
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             id="project"
//             className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             {/* overlay */}
//             <div
//               ref={(el) => {
//                 overlayRefs.current[index] = el;
//               }}
//               className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
//             />

//             {/* title */}
//             <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
//               <h2 className="lg:text-[32px] text-[26px] leading-none">
//               <a 
//                 href={project.href} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//              {project.name}
//             </a>
//             </h2>
//               <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
//             </div>
//             {/* divider */}
//             <div className="w-full h-0.5 bg-black/80" />
//             {/* framework */}
//             <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
//               {project.frameworks.map((framework) => (
//                 <p
//                   key={framework.id}
//                   className="text-black transition-colors duration-500 md:group-hover:text-white"
//                 >
//                   {framework.name}
//                 </p>
//               ))}
//             </div>
//             {/* mobile preview image */}
//             <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
//               <img
//                 src={project.bgImage}
//                 alt={`${project.name}-bg-image`}
//                 className="object-cover w-full h-full rounded-md brightness-50"
//               />
//               <img
//                 src={project.image}
//                 alt={`${project.name}-image`}
//                 className="absolute bg-center px-14 rounded-xl"
//               />
//             </div>
//           </div>
//         ))}
//         {/* desktop Flaoting preview image */}
//         <div
//           ref={previewRef}
//           className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
//         >
//           {currentIndex !== null && (
//             <img
//               src={projects[currentIndex].image}
//               alt="preview"
//               className="object-cover w-full h-full"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Works;



import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [showImage, setShowImage] = useState(null); // modal state

  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      {/* Project List */}
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => setShowImage(project)} // open modal
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black/20 clip-path z-0"
            />

            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-black relative z-10">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              {/* <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" /> */}
              <Icon
                icon="lucide:arrow-up-right"
                className="md:size-6 size-5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering the modal open
                  window.open(project.href, "_blank", "noopener,noreferrer");
                }}
              />
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/80 mt-2 relative z-10" />

            {/* framework */}
            <div className="flex px-10 text-xs leading-loose uppercase gap-x-5 md:group-hover:px-12 mt-2 relative z-10">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-black"
                >
                  {framework.name}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Desktop floating preview */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>

      {/* Modal Popup */}
      {showImage && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Background image */}
          <img
            src={showImage.bgImage}
            alt={`${showImage.name}-bg`}
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />

          {/* Modal content */}
          <div className="relative z-[101] max-w-4xl w-[90%] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Project image clickable */}
            <a
              href={showImage.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={showImage.image}
                alt={showImage.name}
                className="w-full h-auto max-h-[80vh] object-contain cursor-pointer"
              />
            </a>

            {/* Close button */}
            <button
              onClick={() => setShowImage(null)}
              className="absolute top-3 right-3 bg-black/70 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-black transition"
            >
              ✕
            </button>

            {/* Project name */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{showImage.name}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
