function gerarLista(number) {
  let lista = []
  for (let i = 0; i <= number; i++) {
    lista.push(<span>{i}, </span>)
  }

  return lista
}

function Lista() {
  return (
    <div>
      {gerarLista(10)}
    </div>
  )
}

export default Lista