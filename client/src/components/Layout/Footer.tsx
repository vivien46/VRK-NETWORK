import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const publishedYear: number = 2024;
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="mt-4 flex items-center justify-center space-x-5">
        <FaInstagram />
        <FaTiktok />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-sm">Copyright VRK-Network. &copy; {publishedYear != currentYear ? (publishedYear + '-' + currentYear) : (publishedYear)}. {t('All rights reserved')}.</p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a href="#" className="mx-2 hover:text-gray-300">
            À propos
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
