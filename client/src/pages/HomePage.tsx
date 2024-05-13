import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { apiUsers } from '../api/users';
import { FaSquareCheck } from 'react-icons/fa6';
import { FaSquare } from 'react-icons/fa';

// Voir comment éviter de dupliquer les données provenant du backend C#
interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: number;
  avatar: string;
  lastLoginDate: Date;
  status: number;
  usersGroups: User[];
  createdOn: Date;
  isDeleted: boolean;
  deletedOn: Date;
}

const HomePage: React.FC = () => {
  const { t } = useTranslation();

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
      <p>Test de traduction : {t('Home')}</p>

      <p className="text-xl font-medium m-5 text-center">Liste des utilisateurs</p>
      <div className="flex">
        <table className="table-auto border-collapse border border-slate-400 text-center flex-1">
          <thead>
            <tr>
              <th className="border border-slate-700 bg-green-300">Name</th>
              <th className="border border-slate-700 bg-green-300">Email</th>
              <th className="border border-slate-700 bg-green-300">Creation Date</th>
              <th className="border border-slate-700 bg-green-300">Deleted</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-slate-500">{user.username}</td>
                <td className="border border-slate-500">{user.email}</td>
                <td className="border border-slate-500">
                  {new Date(user.createdOn).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}{' '}
                  <strong>à</strong>{' '}
                  {new Date(user.createdOn).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </td>
                <td className="border border-slate-500">
                  {user.isDeleted ? (
                    <div className="flex flex-row gap-1">
                      <FaSquareCheck className="text-green-500" /> Yes
                    </div>
                  ) : (
                    <div className="flex flex-row gap-1">
                      <FaSquare className=" text-pink-500"></FaSquare> No
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
