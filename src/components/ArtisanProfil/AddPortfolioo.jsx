import React, { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";

function AddPortfolioo() {
  const [image, setImage] = useState(null); // Stocke l'image en tant que fichier
  const [projectName, setProjectName] = useState(""); // Nom du projet
  const [projectDescription, setProjectDescription] = useState(""); // Description du projet

  // Fonction pour gérer le téléchargement de l'image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Stocke l'image sous forme de fichier
    }
  };


  const handleSubmit = () => {
    if (!image || !projectName || !projectDescription) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    
  };

  return (
    <div className="py-16 container">
      <div className="flex justify-between pb-12 pt-6">
        <h1 className="title">Ajouter un nouveau projet au portfolio</h1>
        <div className="flex gap-4 items-center">
          <button className="flex justify-center items-center rounded-md w-[6rem] text-black border border-black font-semibold py-2">
            Annuler
          </button>
          <button onClick={handleSubmit} className="dbutton bg-primary font-semibold">
            + ajouter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[1.3fr_3fr] h-[380px] gap-4">
        {/* Section pour télécharger une image */}
        <div className="border p-4 rounded-lg">
          <h1 className="block mb-2 font-semibold text-center text-lg">
            Télécharger une image
          </h1>
          <div className="border-dashed border-primary border-2 rounded-lg h-[80%] mx-4 mt-4 flex items-center justify-center flex-col gap-4 relative">
            {image ? (
              <img
                src={URL.createObjectURL(image)} 
                alt="Prévisualisation"
                className="h-[274px] w-full object-cover rounded-lg"
              />
            ) : (
              <>
                <BiSolidImageAdd size={50} color="gray" />
                <p className="text-gray-500 px-10">Télécharger une image ou glisser-déposer</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        {/* Section pour les informations du projet */}
        <div className="border p-4 rounded-lg">
          <h1 className="text-center font-semibold text-lg mb-2">Information sur le projet</h1>
          <div className="pt-2 pb-3">
            <label className="block mb-3 font-semibold">Nom du Projet</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Entrez le nom de votre projet"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)} 
            />
          </div>
          <div>
            <label className="block mt-4 mb-3 font-semibold">Description du projet</label>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              rows="4"
              placeholder="Décrivez votre projet"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)} 
              maxLength="200"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPortfolioo;
