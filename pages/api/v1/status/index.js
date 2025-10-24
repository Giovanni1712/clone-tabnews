function status(request, response) {
  response.status(200).json({ chave: "Aluno acima da Media" });
}

export default status;
