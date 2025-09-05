import { motion } from 'framer-motion';

export default function ProgressBar({ progress }) {
  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-1 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  );
} 