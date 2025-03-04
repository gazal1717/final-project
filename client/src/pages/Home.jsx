import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-center mb-8"
      >
        Track Your Fitness Journey
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-400 text-center max-w-2xl mb-12"
      >
        Your personal gym companion. Track workouts, set goals, and achieve results.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <a href="/workout" className="btn-primary text-lg">
          Get Started
        </a>
      </motion.div>
    </div>
  )
}

export default Home