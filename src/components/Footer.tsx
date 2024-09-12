import { FaBirthdayCake, FaGifts, FaMusic } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-center py-5 text-pink-500 p-2">
      <h3 className="text-xl mb-4 font-primary">
        Celebremos con música y diversión 🎉
      </h3>
      <div className="flex justify-center space-x-8">
        <FaBirthdayCake className="text-4xl" />
        <FaGifts className="text-4xl" />
        <FaMusic className="text-4xl" />
      </div>
    </footer>
  );
};
