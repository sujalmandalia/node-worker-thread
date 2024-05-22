const express = require("express")
const { Worker } = require("worker_threads")
const app = express()
const PORT = process.env.PORT || 3000

app.get("/non-blocking", (req, res) => {
  try {
    return res.status(200).json({
      message: "This page is non-blocking",
    })
  } catch (error) {
    return res.status(500).json({
      message:error.message
    })
  }
});


app.get('/fibonacci/:n', (req, res) => {
  try {
    const n = parseInt(req.params.n);
    if (isNaN(n) || n < 0) {
      res.status(400).json({ message: "Invalid input" });
      return;
    }

    const worker = new Worker('./worker.js', { workerData: n });

    worker.on('message', (result) => {
      res.status(200).json({ fibonacci: result });
    });

    worker.on('error', (error) => {
      console.error('Worker error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
});


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:3000`)
})