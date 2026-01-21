import express from "express";

const app = express();
const port = 3000;

const estudantes = [
  { "id": "1", "aluno": "miguel", "media": 9 },
  { "id": "2", "aluno": "renan", "media": 7.5 },
  { "id": "3", "aluno": "jorge", "media": 4 },
  { "id": "4", "aluno": "renato", "media": 8 },
  { "id": "5", "aluno": "artur", "media": 6 }
];

app.get("/", (req, res) => {
  res.json(estudantes);
});

app.get("/:id",(req,res) =>{
    const {id} = req.params;
    const estudante = estudantes.find(e => e.id === id)
    res.json(estudante)

})

app.listen(port, () => {
  console.log("server on");
});
