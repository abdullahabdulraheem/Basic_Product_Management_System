const express = require('express');
const app = express();
const port = 3002;
const connectDB = require('./src/Config/db.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my Basic Product Management System API');
});

// app.use('/api/v1', require('./src/Route/index.route'));

app.use((err, req, res, next) => {
  console.error(`[Error] ${err.message}`);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    data: null,
  });
});

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();