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
      <Form action={formProps.action} inputs={formProps.inputs} className="w-full max-w-lg p-4 bg-black text-red-600 rounded-lg text-center" />
      <Form
        action="POST"
        inputs={[
          { label: 'InputTest', type: 'password', field: 'name', isRequired: true },
        ]}
      />
      <Form action="POST" inputs={[formProps.inputs[2]]} />

      <h1 className='text-xl font-medium m-5 text-center'>Liste des utilisateurs</h1>
      <div className='flex'>
      <table className='table-auto border-collapse border border-slate-400 text-center flex-1'>
          <thead>
        <tr>
          <th className='border border-slate-700 bg-green-300'>Name</th>
          <th className='border border-slate-700 bg-green-300'>Email</th>
          <th className='border border-slate-700 bg-green-300'>Creation Date</th>
          <th className='border border-slate-700 bg-green-300'>Deleted</th>
        </tr>
      </thead>
    <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className='border border-slate-500'>{user.username}</td>
            <td className='border border-slate-500'>{user.email}</td>
            <td className='border border-slate-500'>{new Date(user.createdOn).toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })} <strong>à</strong> {new Date(user.createdOn).toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}
        
            </td>
            <td className='border border-slate-500'>{ user.isDeleted ? (
            <>
              <i className='fa-regular fa-square-check text-green-500'></i> Yes 
            </>  
            )  : <><i className='fa-regular fa-square text-pink-500'></i> No </>}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Home;
