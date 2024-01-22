import { motion } from "framer-motion";

const LoadingCube = () => {
    return (
        <motion.div className="w-20 h-20 rounded-xl bg-green-500"
        animate={{rotate: 360}}
        exit={{rotate: 0}}
        transition={{duration: 0.5, repeat: Infinity}}
        >
        </motion.div>
    )
}

export default LoadingCube;