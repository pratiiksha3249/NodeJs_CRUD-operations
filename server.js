import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

//middleware
app.use(cors());
app.use(express.json());

//Test rout
app.get("/", (req, res) => {
    res.send("api work correct....");
});

//server start

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});





