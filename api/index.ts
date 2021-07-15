import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import db from "./src/models";
import routes from "./src/routes/index";


const port = 3001

const app: Application = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
// app.listen(port, function () {
//   console.log(`CORS-enabled web server listening on port ${port}`)
// })


db.sequelize
    //.sync({ force: true, logging: false })
    .sync({ force: true, logging: false })
    .then(() => {
        console.log("base de datos conectada");
        app.listen(port, () => {
            console.log(`El server esta corriendo en el puerto ${port}`);
        });
    })
    .catch((error: any) => console.error(error));


app.use("/", routes);