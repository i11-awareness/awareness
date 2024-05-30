import { useState, useEffect } from "react";
import PhaseIndicator from "../components/PhaseIndicator";
import PhaseTimer from "../components/PhaseTimer";
import BreathingCircle from "../components/BreathingCircle";
import StartButton from "../components/StartButton";
import { Phases } from "../enums/Phases";
import SeeMore from "./SeeMore";

const Circle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("");

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationPhase("inhale");
  };

  useEffect(() => {
    let animationInterval;

    if (isAnimating) {
      let phaseIndex = 0;

      const animateNextPhase = () => {
        setAnimationPhase(Phases[phaseIndex]);
        phaseIndex++;
        if (phaseIndex > Phases.length) {
          phaseIndex = 0;
          setIsAnimating(false);
        }
      };
      animateNextPhase();

      animationInterval = setInterval(() => {
        animateNextPhase();
      }, 4000);
    } else {
      clearInterval(animationInterval);
    }

    return () => clearInterval(animationInterval);
  }, [isAnimating]);

  
  return (<>
      {!isAnimating && <h4 className="font-semibold flex justify-center">Take a breath to relax by clicking below</h4>} 
    <div className="relative top-24 sm:top-40 iphonese:mt-[-44px] flex flex-col justify-center items-center mt-0" >
      {!isAnimating ? (
        <>
        
        <StartButton onClick={startAnimation} />
        </>
      ) : (
        <PhaseIndicator phase={animationPhase} />
      )}
      <BreathingCircle phase={animationPhase}></BreathingCircle>
      <div>
        {isAnimating && <PhaseTimer key={animationPhase} />}
        {!isAnimating && <SeeMore />}
      </div>
    </div>
  </>
  );
};

export default Circle;
