import { useEffect } from "react";

const useBodyOverflow = (open) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
};

export default useBodyOverflow;
