const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is working!')
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})