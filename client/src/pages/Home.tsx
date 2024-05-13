import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form, { FormProps } from '../components/Form';
import { apiUsers } from '../api/users';
import { FaSquareCheck } from 'react-icons/fa6';
import { FaSquare } from 'react-icons/fa';

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
  const { t } = useTranslation();

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

      <div className="mt-[10px]">
        <button>Test de traduction : {t("Home")}</button>
    </div>

      <Button content="Clique ici" />

      <p>Exemples d'utilisation de Forms</p>
      <Form {...formProps} />
      <Form action={formProps.action} inputs={formProps.inputs} className="w-full max-w-lg p-4 bg-gray-300 text-black rounded-lg text-center" />
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
          <th className='border border-slate-700 bg-green-300'>{t("username.label")}</th>
          <th className='border border-slate-700 bg-green-300'>{t("email.label")}</th>
          <th className='border border-slate-700 bg-green-300'>{t("createdOn")}</th>
          <th className='border border-slate-700 bg-green-300'>{t("isDeleted.label")}</th>
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
            <div className="flex flex-row gap-1 justify-center items-center h-full"><FaSquareCheck className="text-green-500" /> {t('yes')}</div>  
            )  : <div className="flex flex-row gap-1 justify-center items-center h-full"><FaSquare className=' text-pink-500'></FaSquare>{t('no')}</div>}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Home;
