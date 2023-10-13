/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("laCanicaDB");

// Insert a few documents into the sales collection.
db.getCollection("articles").insert({
  title:
    "Debate 2023: Ecuatorianos decepcionados ante la falta de contenido para memes del debate",
  body: "Ecuatorianos decepcionados ante la falta de contenido para memes del debate.",
  category: "elecciones",
  date: Date.now(),
  hidden: false,
  kind: "main",
  createdAt: Date.now(),
  "updatedAt:": Date.now(),
  __v: 0,
  img_url:
    "https://lacanica.blob.core.windows.net/images/ecuatorianos-decepcionados.jpg",
  slug: "debate-2023-ecuatorianos-decepcionados-ante-la-falta-de-contenido-para-memes-del-debate",
});
