import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notifications from './Notifications';
import Messages from './Messages';
import { FaSignOutAlt, FaUser, FaBars } from 'react-icons/fa';
import axios from "axios";
import Cookies from "js-cookie"

function UserGreeting({ isSignedUp, isJoined, user, notifications, messages }) {
  const location = useLocation();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? "text-primary border-b-2 border-b-primary"
      : "hover:text-primary";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => {
    try {
      
      // const response = await axios.post('https://dzartisansapp.onrender.com/auth/logout', {}, { withCredentials: true });
      Cookies.remove('userSave', { path: '/', domain: 'dzartisansapp.onrender.com', secure: true, sameSite: 'None' });
    // if (response.status === 200) {
    //   alert('Logged out successfully');
     
    // } else {
    //   throw new Error(`Logout failed with status: ${response.status}`);
    // }
      
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Logout failed. Please try again.');
    }
  };
  if (isSignedUp) {
    return (
      <nav className="flex items-center justify-between w-full px-4 md:px-8 lg:px-5">
        {/* Zone principale du menu */}
        <div className="hidden md:flex gap-14 font-semibold justify-center w-full">
          <Link to="/" className={linkClass("/")}>
            accueil
          </Link>
          <Link to="/services" className={linkClass("/service")}>
            services
          </Link>
          <Link to="/demandedeviss" className={linkClass("/demandes")}>
            demandes
          </Link>
          {isJoined ? (
            <Link to="/gestionproject" className={linkClass("/projets")}>
              gestions des projets
            </Link>
          ) : (
            <Link to="/joinus" className={linkClass("/joinus")}>
            <button className="bg-primary text-white  px-5 py-[3.5px] rounded-lg text-[14px]">
              Rejoignez nous
            </button>
            </Link>

          )}
        </div>

        {/* Icône pour le menu mobile (visible uniquement sur les petits écrans) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary text-xl">
            <FaBars />
          </button>
        </div>

        {/* Notifications, Messages, Profil */}
        <span className="flex items-center gap-6 relative ml-auto">
          <Notifications
            notifications={notifications}
            isNotificationsOpen={isNotificationsOpen}
            toggleNotifications={() =>
              setIsNotificationsOpen(!isNotificationsOpen)
            }
          />
          <Messages
            messages={messages}
            isMessagesOpen={isMessagesOpen}
            toggleMessages={() => setIsMessagesOpen(!isMessagesOpen)}
          />
          <img
            src={user.photo_de_profil}
            alt="User Avatar"
            className="w-7 h-7 rounded-full object-cover cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute right-[-5px] mt-[150px] w-[250px] bg-white shadow-lg rounded-md py-2 z-50">
              <Link to="/editinfo" className={linkClass("/editinfo")}>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                <FaUser /> Informations personnelles
              </button>
              </Link>

              <button
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={handleLogout}
              >
                <FaSignOutAlt /> Se déconnecter
              </button>
            </div>
          )}
        </span>

        {/* Menu mobile (affiché uniquement lorsque le bouton est cliqué) */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-50 md:hidden">
            <Link
              to="/"
              className={`${linkClass("/")} block px-4 py-2`}
              onClick={toggleMobileMenu}
            >
              accueil
            </Link>
            <Link
              to="/services"
              className={`${linkClass("/service")} block px-4 py-2`}
              onClick={toggleMobileMenu}
            >
              services
            </Link>
            <Link
              to="/demandedeviss"
              className={`${linkClass("/demandes")} block px-4 py-2`}
              onClick={toggleMobileMenu}
            >
              demandes
            </Link>
            {isJoined ? (
              <Link
                to="/gestionproject"
                className={`${linkClass("/projets")} block px-4 py-2`}
                onClick={toggleMobileMenu}
              >
                gestions des projets
              </Link>
            ) : (
              <Link to="/joinus" className={linkClass("/joinus")}>
                              <button
                className="bg-primary text-white px-4 py-2 w-full text-left"
                onClick={toggleMobileMenu}
              >
                Rejoignez nous
              </button>
              </Link>

            )}
          </div>
        )}
      </nav>
    );
  } else {
    return (
      <div className="flex items-center justify-end gap-12 font-semibold w-full">
        <Link to="/" className={linkClass("/")}>
          accueil
        </Link>
        <Link to="/services" className={linkClass("/service")}>
          services
        </Link>
        <Link to="/login" className={linkClass("/login")}>
          se connecter/s'inscrire
        </Link>
      </div>
    );
  }
}

export default UserGreeting;

