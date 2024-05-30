import { Phases } from "../enums/Phases";


export default function PhaseIndicator ({ phase })  {
    return (
      <div className="text-white px-5 py-2.5 text-sm sm:text-base iphonese:text-xs transition-colors font-bold duration-300 absolute z-20">
        {phase===Phases[1] || phase===Phases[3] ? "HOLD" : phase.toUpperCase()}
      </div>
    );
  };