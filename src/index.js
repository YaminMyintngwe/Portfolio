const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/recipe-app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','recipe-app.html'));
});

// Define a route for file download
app.get('/download', (req, res) => {
  // Specify the path to the resume.pdf file
  const filePath = path.join(__dirname, 'resources', 'yamin-CV.pdf'); // Adjust path as needed

  // Send the file for download
  res.download(filePath, 'yaminmyintngwe.pdf', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error downloading the file.');
    }
  });
});

// Serve index.html when visiting root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});