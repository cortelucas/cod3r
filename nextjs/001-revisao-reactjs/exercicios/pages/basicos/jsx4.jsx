function JSX4() {
  const subtitle = "Estou no JavaScript"
  const array = [ "Abacate", "Banana", "Abacaxi" ]
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitle}</h2>
      <h3>3 x 3 = {3 * 3}</h3>
      <ul>
        {
          array.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default JSX4
