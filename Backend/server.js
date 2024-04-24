const express = require('express');
const bodyParser = require('body-parser');
const { create } = require('node-persist');

const app = express();
const port = 3000;

// Initialize node-persist
(async () => {
  try {
    const store = await create();
    
    // Middleware to parse JSON bodies
    app.use(bodyParser.json());

    // POST route for /inputText
    app.post('input/', async (req, res) => {
      try {
        const input = req.body.input;
        if (!input) {
          throw new Error('Input text is missing');
        }
        // Store input text
        await store.setItem('inputText', input);
        res.send({ message: 'Input text stored successfully' });
      } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send({ error: 'Internal Server Error' });
      }
    });
        
    // Start server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error initializing store:', err);
  }
})();
