import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('server is healthy and running on port 3000. hurraaaayyyy!');
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});