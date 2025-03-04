const express = require("express");
const router = express.Router();
const WorkoutController = require("../controllers/WorkoutControllers");
const authenticate = require("../middlewares/auth");

router.get("/", authenticate, WorkoutController.getAllWorkouts);
router.post("/", authenticate, WorkoutController.createWorkout);
router.put("/:id", authenticate, WorkoutController.updateWorkout); 
router.delete("/:id", authenticate, WorkoutController.deleteWorkout);

module.exports = router;
