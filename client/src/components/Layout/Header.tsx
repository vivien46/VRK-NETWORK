import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-[#100d28] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img className="h-20 w-auto mr-3" src="/logo.png" alt="Logo" />
          <h1 className="text-xl font-semibold">VRK-Network</h1>
        </div>
        {/* Essayer de mettre plus sur la gauche */}
        <nav className="mr-4 space-x-5">
          <a href="#" className="hover:text-gray-300">
            {t('Home')}
          </a>
          <a href="/login" className="hover:text-gray-300">
            {t('Login')}
          </a>
          <a href="#" className="hover:text-gray-300">
            {t('Logout')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
