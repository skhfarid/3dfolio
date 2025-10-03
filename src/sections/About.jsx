import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I’m passionate about creating fast, seamless applications—from flawless React interfaces to reliable, serverless backends. Every project I build is driven by one commitment: delivering quality that users can truly experience.
  When I’m not shipping:
◻ Reading to expand ideas and perspectives
◻ Drawing as a creative outlet beyond code
◻ Traveling to discover new cultures and inspiration
◻ Engaging in social work to give back to the community`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    // <section id="about" className="min-h-screen bg-black rounded-b-4xl">
    //   <AnimatedHeaderSection
    //     subTitle={"Created with care, Built for scalability"}
    //     title={"About"}
    //     text={text}
    //     textColor={"text-white"}
    //     withScrollTrigger={true}
    //   />
    //   <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
    //     <img
    //       ref={imgRef}
    //       src="images/mine.jpg"
    //       alt="farid"
    //       className="w-2/5 rounded-3xl"
    //     />
    //     <AnimatedTextLines text={aboutText} className={"w-full"} />
    //   </div>
    // </section>



    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
  <AnimatedHeaderSection
    subTitle={"Created with care, Built for scalability"}
    title={"About"}
    text={text}
    textColor={"text-white"}
    withScrollTrigger={true}
  />
  <div className="flex flex-col items-center justify-between gap-16 px-6 pb-16 text-xl font-light tracking-wide text-white/60
                  md:flex-row md:px-10 md:text-2xl lg:text-3xl">
    <img
      ref={imgRef}
      src="images/mine.jpg"
      alt="farid"
      className="w-full max-w-md rounded-3xl md:w-2/5"
    />
    <AnimatedTextLines text={aboutText} className="w-full md:w-3/5" />
  </div>
</section>


  );
};

export default About;