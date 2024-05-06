import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form, { FormProps } from '../components/Form';
import { apiUsers } from '../api/users';

// Voir comment éviter de dupliquer les données provenant du backend C#
interface User {
  id: number,
  username: string,
  password: string,
  email: string,
  role: number,
  avatar: string,
  lastLoginDate: Date,
  status: number,
  usersGroups: User[],
  createdOn: Date,
  isDeleted: boolean,
  deletedOn: Date
}

const Home: React.FC = () => {
  const formInputs = [
    { label: 'Nom', type: 'text', field: 'name', isRequired: true },
    { label: 'Email', type: 'email', field: 'email', isRequired: true },
    { label: 'Message', type: 'text', field: 'message', isRequired: false },
  ];

  const formProps: FormProps = {
    action: 'POST',
    inputs: formInputs,
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiUsers();
        if (response.ok) {
          const data: User[] = await response.json();
          setUsers(data);
        } else {
          throw new Error('Erreur lors de la récupération des utilisateurs');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Mon Application</h1>
      <Button content="Clique ici" />

      <p>Exemples d'utilisation de Forms</p>
      <Form {...formProps} />
      <Form action={formProps.action} inputs={formProps.inputs} />
      <Form
        action="POST"
        inputs={[
          { label: 'InputTest', type: 'password', field: 'name', isRequired: true },
        ]}
      />
      <Form action="POST" inputs={[formProps.inputs[2]]} />

      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
