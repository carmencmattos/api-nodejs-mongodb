import app from "./src/app.js";

const port = process.env.PORT || 3000;
console.log(process.env.MONGODB_CONNECT_KEY);
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
