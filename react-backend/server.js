// const createError = require("http-errors");
const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var mongojs = require("mongojs");
const app = express();
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

//Retrieve Routes
const boats = require("./routes/API/boats");

//Bodyparser Middleware
app.use(bodyParser.json());

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "p3";
var collections = ["boats"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/boats", boats);

//port setup

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port ${port}"));

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// //Mount Component Users by JC

// class App extends Component {
//   state = { users: [] };

//   componentDidMount() {
//     fetch("/users")
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

//   //Render Componenemts by JC

//   render() {
//     return (
//       <div className="App">
//         <h1>Users</h1>

//         <ul>
//           {this.state.users.map(user => (
//             <li key={user.id}>{user.username}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

// export default App;
