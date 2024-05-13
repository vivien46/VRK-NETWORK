import { useTranslation } from 'react-i18next';
import Form from '../components/Form';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <Form
        title={t('Login')}
        action="POST"
        inputs={[
          {
            label: t('Username'),
            type: 'text',
            field: 'username',
            placeholder: t('Your username'),
            isRequired: true,
          },
          {
            label: t('Password'),
            type: 'password',
            field: 'password',
            placeholder: t('Your password'),
            isRequired: true,
          },
        ]}
        submitBtnText={t('Login')}
      />
    </div>
  );
};

export default LoginPage;
