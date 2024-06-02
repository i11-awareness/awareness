


export default function StartButton  ({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border font-bold border-transparent text-[#1C0C24] px-5 cursor-pointer text-sm sm:text-base rounded transition-colors duration-300 absolute z-20"
    >
      START
    </button>
  );
};