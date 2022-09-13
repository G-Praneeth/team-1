const app = require("express")();
const PORT = process.env.PORT || 3000;
app.get("", (req, res) => {
    res.send("https://usharama.edu.in/home");
});

app.listen(PORT, () => {
    console.log('App up at port ${PORT}');
});
