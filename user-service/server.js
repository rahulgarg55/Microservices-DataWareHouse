const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3001;

app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://localhost/user-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('User Service DB Connected'));

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});
