const functions = require('firebase-functions');
const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('firebase-functions/logger');

// Create and configure the Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure database connection
const config = {
  user: functions.config().db.user,
  password: functions.config().db.password,
  server: functions.config().db.server,
  database: functions.config().db.name,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    connectTimeout: 30000,
  },
};

// Establish a connection pool
const poolPromise = sql
  .connect(config)
  .then((pool) => {
    if (pool.connected) {
      logger.info('Connected to SQL database.');
    }
    return pool;
  })
  .catch((err) => {
    logger.error('Failed to connect to the database:', err);
    process.exit(1);
  });

// API endpoints
app.get('/api/tasks', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('GetTasks');
    res.json(result.recordset);
  } catch (err) {
    logger.error('Error fetching tasks:', err);
    res.status(500).send({ message: 'Error fetching tasks', error: err.message });
  }
});

app.post('/api/tasks', async (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ message: 'Task description is required' });
  }
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('Description', sql.NVarChar, description)
      .execute('AddTask');
    const taskId = result.recordset[0].TaskId;
    res.status(201).json({ message: 'Task added', taskId });
  } catch (err) {
    logger.error('Error adding task:', err);
    res.status(500).json({ message: 'Error adding task', error: err.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return res.status(400).json({ message: 'Invalid task ID format.' });
  }
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('TaskId', sql.Int, taskId)
      .execute('DeleteTask');
    const affectedRows = result.rowsAffected[0];
    if (affectedRows === 0) {
      return res.status(404).json({ message: `Task with ID ${taskId} not found.` });
    }
    res.status(200).json({ message: `Task with ID ${taskId} deleted successfully.` });
  } catch (err) {
    logger.error('Error deleting task:', err);
    res.status(500).json({ message: 'Error deleting task', error: err.message });
  }
});

app.put('/api/tasks/update', async (req, res) => {
  const { taskId, description } = req.body;
  if (!taskId || !description) {
    return res.status(400).json({ message: 'Task ID and description are required' });
  }
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('TaskId', sql.Int, taskId)
      .input('Description', sql.NVarChar, description)
      .execute('UpdateTask');
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    logger.error('Error updating task:', error);
    res.status(500).send(error.message);
  }
});

// Export the Express app as a Firebase Cloud Function
exports.app = functions.https.onRequest(app);
