const { Workout } = require("../models");

class WorkoutController {
  static async getAllWorkouts(req, res) {
    try {
      const workouts = await Workout.findAll();
      res.status(200).json(workouts);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }

  static async createWorkout(req, res) {
    try {
      const { type, duration, date } = req.body;
      if (!type || !duration || !date) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newWorkout = await Workout.create({
        type,
        duration,
        date,
        userId: req.user.id,
      });

      res.status(201).json(newWorkout);
    } catch (error) {
      res.status(500).json({ message: "Error creating workout", error });
    }
  }

  static async updateWorkout(req, res) { 
    try {
      const { id } = req.params;
      const { type, duration, date } = req.body;

      const workout = await Workout.findByPk(id);
      if (!workout) {
        return res.status(404).json({ message: "Workout not found" });
      }

      await workout.update({ type, duration, date });

      res.status(200).json({ message: "Workout updated successfully", workout });
    } catch (error) {
      res.status(500).json({ message: "Error updating workout", error });
    }
  }

  static async deleteWorkout(req, res) {
    try {
      const { id } = req.params;
      const workout = await Workout.findByPk(id);

      if (!workout) {
        return res.status(404).json({ message: "Workout not found" });
      }

      await workout.destroy();
      res.status(200).json({ message: "Workout deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  }
}

module.exports = WorkoutController;
