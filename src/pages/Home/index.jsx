import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Form, ContainerInput, Input, Title, InputLabel } from "./styles.js"
import api from '../../services/api.js'

import DefaultButton from '../../components/Button/index.jsx'
import TopBackgroundComponent from "../../components/TopBackground/index.jsx"






function Home() {

  const navigate = useNavigate()

  const InputName = useRef()
  const InputAge = useRef()
  const InputEmail = useRef()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      name: InputName.current.value,
      age: parseInt(InputAge.current.value),
      email: InputEmail.current.value
    })



  }


  return (
    <Container>
      <TopBackgroundComponent />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInput>

          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={InputName} /></div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={InputAge} />
          </div>

        </ContainerInput>
        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={InputEmail} />
        </div>

        <DefaultButton type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</DefaultButton>
      </Form>
      <DefaultButton onClick={() => navigate("/lista-de-usuarios")}>
        Visualizar Cadastros
      </DefaultButton>
    </Container>

  )
}

export default Home;
