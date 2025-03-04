const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes); 

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
