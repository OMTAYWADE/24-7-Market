const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { apiLimiter } = require('./middleware/rateLimiter');

const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoutes');
const requestRouter = require('./routes/requestRoute');
const securityEventRoute =require("./routes/securityEventRoute");

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(apiLimiter);

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/requests", requestRouter);
app.use( "/api/security-events", securityEventRoute );
app.use(errorHandler);

module.exports = app;