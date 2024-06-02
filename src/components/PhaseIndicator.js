import { Phases } from "../enums/Phases";


export default function PhaseIndicator ({ phase })  {
    return (
<div className="text-[#1C0C24] px-5 pt-20 text-sm sm:text-base transition-colors font-bold duration-300 absolute z-20">
        {phase===Phases[1] || phase===Phases[3] ? "HOLD" : phase.toUpperCase()}
      </div>
    );
  };