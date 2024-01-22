import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useDarkMode } from "../../../context/DarkModeContext";
type DarkModeCheckBoxType = {};

const DarkModeCheckBox = ({}: DarkModeCheckBoxType) => {
  const [darkmode, toggleDarkMode] = useDarkMode();

  return (
      <div
        onClick={() => toggleDarkMode()}
        className="p-1 border-border-2 w-14 bg-black rounded-full dark:bg-white dark:border-white"
      >
        {darkmode ? <Moon /> : <Sun />}
      </div>
  );
};

const Moon = () => (
  <motion.div
    className="cursor-pointer py-1 flex justify-center align-middle bg-slate-700 rounded-full w-6 h-6"
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: "0%" }}
    exit={{ opacity: 0, x: "100%" }}
  >
    <BsMoonFill className="text-white" />
  </motion.div>
);

const Sun = () => (
  <motion.div
    className="cursor-pointer py-1 flex justify-center align-middle bg-white rounded-full w-6 h-6"
    initial={{ opacity: 0, x: "0" }}
    animate={{ opacity: 1, x: "100%" }}
    exit={{ opacity: 0, x: "0%" }}
  >
    <BsFillSunFill className="text-yellow-700" />
  </motion.div>
);

export default DarkModeCheckBox;
