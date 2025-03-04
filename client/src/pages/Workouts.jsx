import { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid"; // Generate fake IDs

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]); // Store workouts
  const [formData, setFormData] = useState({ type: "", duration: "", date: "" });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate "Create" (Add Workout)
  const handleCreate = (e) => {
    e.preventDefault();
    const newWorkout = { id: uuidv4(), ...formData }; // Fake ID
    setWorkouts([...workouts, newWorkout]); // Update workouts list
    setFormData({ type: "", duration: "", date: "" }); // Reset form
  };

  // Simulate "Delete" (Remove Workout)
  const handleDelete = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-white text-center"
      >
        Track Your Workouts (Fake Data)
      </motion.h1>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleCreate}
        className="card mb-8"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <input 
            type="text" 
            name="type" 
            placeholder="Workout Type" 
            value={formData.type} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" 
            required 
          />
          <input 
            type="number" 
            name="duration" 
            placeholder="Duration (mins)" 
            value={formData.duration} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" 
            required 
          />
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="btn-primary w-full mt-4"
        >
          Add Workout
        </button>
      </motion.form>

      <div className="grid gap-4">
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <motion.div 
              key={workout.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{workout.type}</h3>
                <p className="text-gray-400">{workout.duration} mins on {workout.date}</p>
              </div>
              <button 
                onClick={() => handleDelete(workout.id)} 
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Delete
              </button>
            </motion.div>
          ))
        ) : (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-8"
          >
            No workouts found. Start by adding one!
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Workouts;
