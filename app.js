const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/schema/schema");
const connectDB = require("./src/config/db");
require("dotenv").config()

// Create an App
const app = express();

// graphQL initialize
const graph = graphqlHTTP({
  schema: schema,
  graphiql: true,
});

// Set Use Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Common API
app.use("/graphql", graph);

// Port
const PORT = process.env.PORT || 3001

connectDB();

// Server Start
app.listen(PORT, () => {
  console.log(`Connected! ${PORT}`);
});
