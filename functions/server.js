// // // const express = require('express');
// // // const sql = require('mssql');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');
// // // // const sql = require('mssql/msnodesqlv8');
// // // require('dotenv').config();
// // // const app = express();
// // // const port = 3001;  // Ensure this port is free or change as necessary

// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Configure database connection
// // // const config = {
// // //     user: process.env.DB_USER,
// // //     password: process.env.DB_PASSWORD,
// // //     server: process.env.DB_SERVER,
// // //     database: process.env.DB_NAME,
// // //     options: {
// // //         encrypt: true,
// // //         trustServerCertificate: true
// // //     }
// // // };

// // // // Establish a connection to the database
// // // sql.connect(config).then(pool => {
// // //     if (pool.connecting) {
// // //         console.log('Connecting to the SQL database...');
// // //     }

// // //     if (pool.connected) {
// // //         console.log('Connected to SQL database.');
// // //     }

// // //     return pool;
// // // }).catch(err => {
// // //     console.error('Failed to connect to the database:', err);
// // // });

// // // // const pool = new sql.ConnectionPool({
// // // //     database: 'YourDatabaseName',
// // // //     server: 'DESKTOP-48C94E6\\SQLEXPRESS',
// // // //     driver: 'msnodesqlv8',
// // // //     options: {
// // // //         trustedConnection: true
// // // //     }
// // // // });

// // // // API endpoint to add a task
// // // app.post('/api/tasks', async (req, res) => {
// // //     try {
// // //         await sql.connect(config);
// // //         const result = await sql.query`insert into tasks (description) values (${req.body.task})`;
// // //         res.json({ message: 'Task added', taskId: result.recordset[0].id });
// // //     } catch (err) {
// // //         res.status(500).send({ message: 'Error connecting to the database', error: err });
// // //     }
// // // });

// // // // Start server
// // // app.listen(port, () => {
// // //     console.log(`Server running on port ${port}`);
// // // });

// // // const express = require('express');
// // // const sql = require('mssql');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');
// // // require('dotenv').config();

// // // const app = express();
// // // const port = 3001;  // Ensure this port is free or change as necessary

// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Configure database connection
// // // const config = {
// // //     user: process.env.DB_USER,
// // //     password: process.env.DB_PASSWORD,
// // //     server: process.env.DB_SERVER,
// // //     database: process.env.DB_NAME,
// // //     options: {
// // //         encrypt: true,
// // //         trustServerCertificate: true
// // //     }
// // // };

// // // // Establish a connection pool
// // // const poolPromise = sql.connect(config)
// // //     .then(pool => {
// // //         if (pool.connected) {
// // //             console.log('Connected to SQL database.');
// // //         }
// // //         return pool;
// // //     })
// // //     .catch(err => {
// // //         console.error('Failed to connect to the database:', err);
// // //         process.exit(1);  // Exit process if database connection fails
// // //     });

// // // // API endpoint to add a task
// // // app.post('/api/tasks', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         const result = await pool.request()
// // //             .input('description', sql.NVarChar, req.body.task)
// // //             .query('INSERT INTO tasks (description) OUTPUT Inserted.Id VALUES (@description)');

// // //         res.json({ message: 'Task added', taskId: result.recordset[0].Id });
// // //     } catch (err) {
// // //         res.status(500).send({ message: 'Error executing the query', error: err });
// // //     }
// // // });

// // // // Start server
// // // app.listen(port, () => {
// // //     console.log(`Server running on port ${port}`);
// // // });

// // // const express = require('express');
// // // const sql = require('mssql');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');
// // // require('dotenv').config();

// // // const app = express();
// // // const port = 3001;  // Ensure this port is free or change as necessary

// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Configure database connection
// // // const config = {
// // //     user: process.env.DB_USER,
// // //     password: process.env.DB_PASSWORD,
// // //     server: process.env.DB_SERVER,
// // //     database: process.env.DB_NAME,
// // //     options: {
// // //         encrypt: true,
// // //         trustServerCertificate: true
// // //     }
// // // };

// // // // Establish a connection pool
// // // const poolPromise = sql.connect(config)
// // //     .then(pool => {
// // //         if (pool.connected) {
// // //             console.log('Connected to SQL database.');
// // //         }
// // //         return pool;
// // //     })
// // //     .catch(err => {
// // //         console.error('Failed to connect to the database:',process.env.DB_NAME, err);
// // //         process.exit(1);  // Exit process if database connection fails
// // //     });

// // // // API endpoint to add a task
// // // app.post('/api/tasks', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         const result = await pool.request()
// // //             .input('description', sql.NVarChar, req.body.task)
// // //             .query('INSERT INTO tasks (description) OUTPUT Inserted.Id VALUES (@description)');

// // //         res.json({ message: 'Task added', taskId: result.recordset[0].Id });
// // //     } catch (err) {
// // //         res.status(500).send({ message: 'Error executing the query', error: err });
// // //     }
// // // });

// // // // Start server
// // // app.listen(port, () => {
// // //     console.log(`Server running on port ${port}`);
// // // });

// // const express = require('express');
// // const sql = require('mssql');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // require('dotenv').config();
// // const app = express();
// // const port = 1433;

// // app.use(cors());
// // app.use(bodyParser.json());

// // const config = {
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASSWORD,
// //     server: process.env.DB_SERVER.replace("\\\\", "\\"),
// //     database: process.env.DB_NAME,
// //     port: 1433,
// //     options: {
// //         encrypt: true,
// //         trustServerCertificate: true,
// //         connectTimeout: 30000
// //     }
// // };

// // sql.connect(config).then(pool => {
// //     if (pool.connecting) {
// //         console.log('Connecting to the SQL database...');
// //     }

// //     if (pool.connected) {
// //         console.log('Connected to SQL database.');
// //     }

// //     return pool;
// // }).catch(err => {
// //     console.error('Failed to connect to the database:', err);
// // });

// // // app.post('/api/tasks', async (req, res) => {
// // //     try {
// // //         await sql.connect(config);
// // //         const result = await sql.query`insert into tasks (description) values (${req.body.task})`;
// // //         res.json({ message: 'Task added', taskId: result.recordset[0].id });
// // //     } catch (err) {
// // //         res.status(500).send({ message: 'Error connecting to the database', error: err });
// // //     }
// // // });

// // // API endpoint to delete a task
// // app.delete('/api/tasks/:id', async (req, res) => {
// //     const taskId = parseInt(req.params.id, 10);
// //     try {
// //         await sql.connect(config);
// //         await sql.query`DELETE FROM tasks WHERE TaskID = ${taskId}`;
// //         res.json({ message: 'Task deleted',taskId });
// //     } catch (err) {
// //         console.error('Error deleting task:', err);
// //         res.status(500).json({ message: 'Error deleting task', error: err.message });
// //     }
// // });

// // app.post('/api/tasks', async (req, res) => {
// //     try {
// //         await sql.connect(config);
// //         const result = await sql.query`INSERT INTO tasks(Description) VALUES (${req.body.task})`;
// //         res.json({ message: 'Task added' });
// //     } catch (err) {
// //         console.error('Database error:', err);
// //         res.status(500).json({
// //             message: 'Internal Server Error',
// //             error: err.message
// //         });
// //     }
// // });

// // // POST endpoint to insert a new task
// // // app.post('/tasks', (req, res) => {
// // //     const { description, isComplete } = req.body;
// // //     const query = `INSERT INTO Tasks (Description, IsComplete) VALUES (@description, @isComplete)`;

// // //     // Create a request object
// // //     const request = new sql.Request();
// // //     request.input('description', sql.NVarChar, description);
// // //     request.input('isComplete', sql.Bit, isComplete);

// // //     // Execute the query
// // //     request.query(query, (err, result) => {
// // //         if (err) {
// // //             console.error("Error executing query", err);
// // //             res.status(500).send('Failed to insert task');
// // //         } else {
// // //             console.log("Task added successfully", result);
// // //             res.status(201).send('Task added successfully');
// // //         }
// // //     });
// // // });

// // app.listen(port, () => {
// //     console.log(`Server running on port ${port}`);
// // });

// // const express = require('express');
// // const sql = require('mssql');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // require('dotenv').config();

// // const app = express();
// // const port = 1433;

// // app.use(cors());
// // app.use(bodyParser.json());

// // // Configure database connection
// // const config = {
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASSWORD,
// //     server: process.env.DB_SERVER,
// //     database: process.env.DB_NAME,
// //     options: {
// //         encrypt: true,
// //         trustServerCertificate: true,
// //         connectTimeout: 30000 // Optional: Timeout setting for connections
// //     }
// // };

// // // Establish a connection pool
// // const poolPromise = sql.connect(config)
// //     .then(pool => {
// //         if (pool.connected) {
// //             console.log('Connected to SQL database.');
// //         }
// //         return pool;
// //     })
// //     .catch(err => {
// //         console.error('Failed to connect to the database:', err);
// //         process.exit(1);  // Exit process if database connection fails
// //     });

// // // API endpoint to get the list of tasks
// // // app.get('/api/tasks', async (req, res) => {
// // //     try {
// // //         const pool = await poolPromise;
// // //         const result = await pool.request()
// // //             .query('SELECT TaskId, Description FROM tasks');

// // //         res.json(result.recordset);
// // //     } catch (err) {
// // //         console.error('Error fetching tasks:', err);
// // //         res.status(500).send({ message: 'Error fetching tasks', error: err });
// // //     }
// // //});

// // app.get('/api/tasks', async (req, res) => {
// //     try {
// //         const pool = await poolPromise;
// //         const result = await pool.request()
// //             .execute('GetTasks'); // Execute the stored procedure

// //         res.json(result.recordset);
// //     } catch (err) {
// //         console.error('Error fetching tasks:', err);
// //         res.status(500).send({ message: 'Error fetching tasks', error: err });
// //     }
// // });

// // //API Endpoint to Add Tasks
// // app.post('/api/task', async (req,res)=>{
// //     const {description}=req.body;
// //     // console.log(description)
// //     if (!description){
// //         return res.status(400).send({message: 'Task Description is reqiured'});
// //     }
// //     try{
// //         const pool=await poolPromise;
// //         const result=await pool.request()
// //         .input('Description',sql.NVarChar,description)
// //         .execute('AddTask')

// //     }
// //     catch(err){
// //         console.log('Error adding task:',err);
// //         res.status(500).send({message:'Error Adding Task',error:err.message });
// //     }
// // })

// // // Start server
// // app.listen(port, () => {
// //     console.log(`Server running on port ${port}`);
// // });

// const express = require("express");
// const sql = require("mssql");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const port = 1433;

// app.use(cors());
// app.use(bodyParser.json());

// // Configure database connection
// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   server: process.env.DB_SERVER,
//   database: process.env.DB_NAME,
//   options: {
//     encrypt: true,
//     trustServerCertificate: true,
//     connectTimeout: 30000, // Optional: Timeout setting for connections
//   },
// };

// // Establish a connection pool
// const poolPromise = sql
//   .connect(config)
//   .then((pool) => {
//     if (pool.connected) {
//       console.log("Connected to SQL database.");
//     }
//     return pool;
//   })
//   .catch((err) => {
//     console.error("Failed to connect to the database:", err);
//     process.exit(1); // Exit process if database connection fails
//   });

// // API endpoint to get the list of tasks
// app.get("/api/tasks", async (req, res) => {
//   try {
//     const pool = await poolPromise;
//     const result = await pool.request().execute("GetTasks"); // Execute the stored procedure

//     res.json(result.recordset);
//   } catch (err) {
//     console.error("Error fetching tasks:", err);
//     res.status(500).send({ message: "Error fetching tasks", error: err });
//   }
// });

// // API endpoint to add a task
// app.post("/api/tasks", async (req, res) => {
//   const { description } = req.body;

//   if (!description) {
//     return res.status(400).json({ message: "Task description is required" });
//   }

//   try {
//     const pool = await poolPromise;
//     const result = await pool
//       .request()
//       .input("Description", sql.NVarChar, description)
//       // .output('TaskId', sql.Int)
//       .execute("AddTask"); // Execute the stored procedure

//     // Assuming the stored procedure returns the new task ID
//     const taskId = result.recordset[0].TaskId; // Adjust if needed
//     res.status(201).json({ message: "Task added", taskId });
//     // res.status(201).json({ message: 'Task added',taskId});
//   } catch (err) {
//     console.error("Error adding task:", err);
//     res.status(500).json({ message: "Error adding task", error: err.message });
//   }
// });

// //API Endpoint to DELETE Task

// app.delete("/api/tasks/:id", async (req, res) => {
//   const taskId = parseInt(req.params.id);
//   // try block
// //   console.log("")

//   if (isNaN(taskId)) {
//     return res.status(400).json({ message: "Invalid task ID format.",taskId });
//   }
//   try {
//     console.log("");
//     const pool = await poolPromise;
//     const result = await pool
//       .request()
//       .input("TaskId", sql.Int, taskId)
//       .execute("DeleteTask");

//     const affectedRows = result.rowsAffected[0];
//     if (affectedRows === 0) {
//       return res
//         .status(404)
//         .json({ message: `Task with ID ${taskId} not found.` });
//     }

//     res
//       .status(200)
//       .json({ message: `Task with ID ${taskId} deleted successfully.` });
//   } catch (err) {
//     console.log("Error deleting task", err);
//     res
//       .status(500)
//       .json({ message: "Error deleting task", error: err.message });
//   }
//   //catch block
// });

// //API Endpoint to UPDATE Task
// app.put('/api/tasks/update',async(req,res)=>{
//         // const {description}=req.body;
//         const {taskId,description}=req.body;
//         // const {taskId}=parseInt(req.params.id);
//         // const taskId = parseInt(req.params.id);

        
//         console.log(description,taskId)
// })


// // Endpoint to update a task using .execute
// app.put('/api/tasks/update', async (req, res) => {
//     const { taskId, description } = req.body;
  
//     try {
//       const pool = await poolPromise;
//       await pool.request()
//         .input('TaskId', sql.Int, taskId)
//         .input('Description', sql.NVarChar, description)
//         .execute('UpdateTask'); // Use .execute to call the stored procedure
//       res.status(200).json({ message: 'Task updated successfully' });
//     } catch (error) {
//       console.error('Error updating task:', error);
//       res.status(500).send(error.message);
//     }
//   });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// 

// FOR FIREBASE 
const functions = require('firebase-functions');
const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Default port for local testing

app.use(cors());
app.use(bodyParser.json());

// Configure database connection
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    connectTimeout: 30000, // Optional: Timeout setting for connections
  },
};

// Establish a connection pool
const poolPromise = sql
  .connect(config)
  .then((pool) => {
    if (pool.connected) {
      console.log('Connected to SQL database.');
    }
    return pool;
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit process if database connection fails
  });

// API endpoint to get the list of tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('GetTasks'); // Execute the stored procedure
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).send({ message: 'Error fetching tasks', error: err });
  }
});

// API endpoint to add a task
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
      .execute('AddTask'); // Execute the stored procedure

    // Assuming the stored procedure returns the new task ID
    const taskId = result.recordset[0].TaskId; // Adjust if needed
    res.status(201).json({ message: 'Task added', taskId });
  } catch (err) {
    console.error('Error adding task:', err);
    res.status(500).json({ message: 'Error adding task', error: err.message });
  }
});

// API endpoint to delete a task
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
    console.error('Error deleting task:', err);
    res.status(500).json({ message: 'Error deleting task', error: err.message });
  }
});

// API endpoint to update a task
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
      .execute('UpdateTask'); // Use .execute to call the stored procedure
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).send(error.message);
  }
});

// Export the app as a Firebase Cloud Function
exports.app = functions.https.onRequest(app);
