const express = require('express');
const apiGatewayRoutes = require('./routes/apiGatewayRoutes');

const app = express();
app.use(express.json());

app.use('/api', apiGatewayRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
