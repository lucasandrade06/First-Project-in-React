import { Container, Title, CardUsers, TrashIcon, ContainerUsers, AvatarIcon } from "./styles.js"
import api from "../../services/api.js";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import DefaultButton from "../../components/Button/index.jsx";
import TopBackgroundComponent from "../../components/TopBackground/index.jsx";
import trashIcon from '../../assets/trash.svg'


function   ListUsers() {
const [users, setUsers] = useState([])
const navigate = useNavigate()

   useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios');
      setUsers(data);
    }
    getUsers();
  }, [])

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };
  

  return (
    <Container>
      <TopBackgroundComponent />
      <Title>Lista de Usuários</Title>
      <ContainerUsers>
      {users.map(user => (
        <CardUsers key={user.id}>
          <AvatarIcon src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
          <div>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
          <p>{user.email}</p>
          </div>
          <TrashIcon src={trashIcon} alt="Lixeira" onClick={() => deleteUser(user.id)}/>
        </CardUsers>
      ))}
      </ContainerUsers>
      <DefaultButton onClick={() => navigate("/")}>Voltar</DefaultButton>
    </Container>
  )
}


export default ListUsers;