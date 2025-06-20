const express = require("express"); //loads express framework which helps build the server and define API routes easily
const mongoose = require("mongoose"); //To interact with DB
const cors = require("cors"); // Allo Cross Origin access to backend
require("dotenv").config(); //load env variables

const authRoutes = require("./routes/auth"); //route handler for endpoints
const taskRoutes = require("./routes/tasks"); //route handler for end points

//my notes
//A route handler is a function that runs when the server gets a request to a specific path (URL).

const app = express(); //initializes express app instance
app.use(cors()); //enable frontend - backend communication
app.use(express.json()); //allows server to accept json bodies from requests


//A route prefix is a base path you attach to a group of related routes.
app.use("/api/auth", authRoutes); 
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(err));
