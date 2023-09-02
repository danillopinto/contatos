import { useDeferredValue, useState } from "react";

function Home() {

  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [assuntoInput, setAssuntoInput] = useState("")
  const [msgInput, setMsgInput] = useState("")

  const handleNameInputChange = (event) => setNameInput(event.target.value)
  const handleEmailInputChange = (event) => setEmailInput(event.target.value)
  const handleAssuntoInputChange = (event) => setAssuntoInput(event.target.value)
  const handleMsgInputChange = (event) => setMsgInput(event.target.value)

  function botao(event) {
    event.preventDefault()

    console.log(nameInput, emailInput, assuntoInput, msgInput )

  }

  return (
    <div>

      <form>
          <h1>Contato</h1>  

          <input type="text" placeholder="Digite seu nome e sobrenome" className="input123" id="input1" name="name" onChange={handleNameInputChange}/>

          <input type="text" placeholder="Digite seu e-mail" className="input123" id="input2" name="email" onChange={handleEmailInputChange}/>

          <input type="text" placeholder="Digite o assunto" className="input123" id="input3" name="assunto" onChange={handleAssuntoInputChange}/>

          <input type="text" placeholder="Sua mensagem" id="input4"  name="msg" onChange={handleMsgInputChange}/>

          <button id="bnt" onClick={botao}>Enviar</button>
          
      </form>

    </div>
  )
}

export default Home
