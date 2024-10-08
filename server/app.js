import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { getFavorites, addFavorites } from "./controller.js";

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ViteExpress.config({ printViteDevServerHost: true });

app.get(`/api/favorite`, getFavorites);
app.post(`/api/favorite`, addFavorites);

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// General Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);
