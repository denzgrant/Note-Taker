const app = require("./app.js");

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
