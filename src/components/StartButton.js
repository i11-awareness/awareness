


export default function StartButton  ({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-transparent border font-bold border-transparent text-white px-5 iphonese:text-xs cursor-pointer text-sm sm:text-base rounded transition-colors duration-300 absolute z-20"
      >
        START
      </button>
    );
  };