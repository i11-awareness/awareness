import { useEffect, useState } from "react";

export default function PhaseTimer() {
  const [complitionTime, setComplitionTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setComplitionTime((c) => c + 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return ( 
    <div className=" mt-20 transform p-10 w-full">
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-[#1C0C24] h-full rounded-full"
          style={{ width: `${(complitionTime / 4000) * 100}%` }}
        />
      </div>
    </div>
  );
}