require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const boardRoutes = require("./routes/boards");

const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/boards", boardRoutes);

app.get("/", (req, res) => {
  const routesText = `
  <h1>Available methods</h1>
  <div>
    <pre><b>Check ./routes.js</b></pre>
  </div>
  
  <pre>
  BOARD:

  router.post('/api/boards'),
  router.get('/api/boards'),
  router.get('/api/boards/:id'),
  router.patch('/api/boards/:id'),
  router.delete('/api/boards/:id'),
  </pre>
    `;
  res.status(200).send(routesText);
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Connected to DB and listening on port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
