import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Verification from "./pages/OTPVerfication";
import Layout from "./components/common/layout";
import DemandeDevis from "./pages/DemandeDevis"
import PropositionDevis from "./pages/PropositionDevis"
import JoinUS from "./pages/Joinus"
import ServicesPage from "./pages/ServicesPage"
import ServicePage from "./pages/ServicePage"
import GestionProject from "./pages/GestionProject"
import AddPortfolio from "./pages/AddPortfolio"
import ArtisanProfil from "./pages/ArtisanProfile"
import EditeInfo from "./pages/EditeInfo"
import DemandeDeviss from "./pages/DemandeDeviss";
import ProposDeviss from "./pages/ProposDeviss"

 
function App() {
  return (
    <Router>  
      <Routes>  
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/DemandeDevis" element={<Layout><DemandeDevis/></Layout>} /> 
        <Route path="/PropositionDevis" element={<Layout><PropositionDevis/></Layout>} />
        <Route path="/JoinUs" element={<Layout><JoinUS/></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/services/service" element={<Layout><ServicePage /></Layout>} />
        <Route path="/gestionproject" element={<Layout><GestionProject /></Layout>} />
        <Route path="/addportfolio" element={<Layout><AddPortfolio /></Layout>} />
        <Route path="/artisanprofile" element={<Layout><ArtisanProfil /></Layout>} />
        <Route path="/editinfo" element={<Layout><EditeInfo /></Layout>} />
        <Route path="/demandedeviss" element={<Layout><DemandeDeviss /></Layout>} />
        <Route path="/proposdevis" element={<Layout><ProposDeviss /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
