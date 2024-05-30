import { keyframes } from "../enums/keyframes";



export default function BreathingCircle ({ phase }) {
    const phaseStyles = {
      inhale: {
        filter: "drop-shadow(14px 15px 25px rgba(0, 0, 0, 0.55))",
        animation: "inhale-animation 4s forwards",
      },
      hold1: {
        filter: "drop-shadow(14px 15px 25px rgba(0, 0, 0, 0.55))",
        animation: "hold1-animation 4s forwards",
      },
      exhale: {
        filter: "drop-shadow(10px 8px 15px rgba(0, 0, 0, 0.3))",
        animation: "exhale-animation 4s forwards",
      },
      hold2: {
        animation: "hold2-animation 4s forwards",
      },
    };
    return (
        <>
          <style>{keyframes}</style>
          <div
            className={`w-32 h-32 sm:w-48 iphonese:w-24 iphonese:h-24 13.3:h-28 13.3:w-28 sm:h-48 bg-[#1C0C24] rounded-full relative`}
            style={phaseStyles[phase]}
          />
        </>
      );
    };

  