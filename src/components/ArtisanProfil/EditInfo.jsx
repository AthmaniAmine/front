import React, { useState , useEffect } from 'react';
import {MdExitToApp, MdVisibility ,MdVisibilityOff,MdLocationOn,MdPhoneAndroid,MdEmail } from "react-icons/md";
import axios from "axios"


function EditInfo({ data }) {
  const [formData, setFormData] = useState({});

  
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);
    // console.log("data" , data)
    // const [formData, setFormData] = useState(data);
    //   console.log(formData)
    
      const [newMdp, setNewMdp] = useState('');
      const [confirmMdp, setConfirmMdp] = useState('');
      const [showCurrentPassword, setShowCurrentPassword] = useState(false);
      const [showNewPassword, setShowNewPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
      const [newPhoto, setNewPhoto] = useState(null);
    
      const toggleShowCurrentPassword = () => setShowCurrentPassword((prev) => !prev);
      const toggleShowNewPassword = () => setShowNewPassword((prev) => !prev);
      const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
    
      const handleNewMdpChange = (e) => setNewMdp(e.target.value);
      const handleConfirmMdpChange = (e) => setConfirmMdp(e.target.value);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setNewPhoto(URL.createObjectURL(file));
        }
      };
    
      const handlePhotoDelete = () => {
        setNewPhoto(null);
        setFormData({ ...formData, photo: '' });
      };
    
      const resetForm = () => {
        setFormData({
          name: data.name,
          fname: data.fname,
          service: data.service,
          email: data.email,
          location: data.location,
          phone: data.phone,
          coutMin: data.coutMin,
          description: data.description,
          photo: data.photo || defaultPhoto,
        });
        setNewMdp('');
        setConfirmMdp('');
        setNewPhoto(null);
      };
    
      const handleSave = async (e) => {
        e.preventDefault();
    
        if (newMdp || confirmMdp) {
          if (newMdp !== confirmMdp) {
            alert('Le nouveau mot de passe et la confirmation ne correspondent pas.');
            return;
          }
          setFormData({ ...formData, mdp: newMdp });
          console.log('Modification du mot de passe :', newMdp);
        } else {
          console.log('Aucun nouveau mot de passe fourni.');
        }
    
        if (newPhoto) {
          console.log('Nouvelle photo ajoutée.' , newPhoto);
          setFormData({ ...formData, photo: newPhoto });
        }
        try {
          const response = await axios.post('http://localhost:4000/profile/updateProfile', {
            nom: formData.name,
            prenom: formData.fname,
            email: formData.email,
            phonenumber: formData.phone,
            wilaya: formData.location,
            cout_minimale: formData.coutmin,
            service: formData.service,
            description: formData.description,
            
          });
      
          if (response.status === 200) {
            alert('Modifications enregistrées avec succès!');
          } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
          }
        } catch (error) {
          console.error('Erreur lors de la soumission du formulaire:', error);
          alert('Impossible de sauvegarder les modifications. Veuillez réessayer.');
        }
    
        console.log('Données sauvegardées :', formData);
        alert('Modifications enregistrées avec succès!');
      };    
  return (
   <form onSubmit={handleSave} className='container py-28'>
     <h1 className='text-2xl md:text-start text-center font-bold mb-8'>Éditer mes informations personnelles</h1>
      {/* Section Photo */}
      <div className='md:flex md:justify-between px-12 py-8 border-b border-gray-300'>
         <div className='flex items-center md:gap-4 gap-10 '>
            <img src={newPhoto || formData.photo} alt='Profil' className='w-[6rem] h-[6rem] object-cover border-[3px] border-gray-300 rounded-full'/>
            <div>
              <h1 className='font-semibold'>{formData.fname} {formData.name}</h1>
              <p className='text-gray-400'>{formData.service}</p>
              <p className='text-gray-400'>{formData.location}</p>
           </div>
        </div>
        <div className='flex items-center  gap-2 md:py-0 py-6 '>
           <input  type='file' accept='image/*' onChange={handlePhotoChange}  className='hidden' id='photo-upload' />
           <div className='flex items-center gap-2'>
              <label htmlFor='photo-upload' className='bg-primary text-white px-4 py-2 rounded-md cursor-pointer font-semibold'>   Mettre à jour ma photo  </label>
              <button type='button'   onClick={handlePhotoDelete}  className='text-black border border-black w-[8rem] px-4 py-2 rounded-md'>Supprimer</button>
          </div>
        </div>
      </div>
     {/* 📝 Section Formulaire */}
      <div className='px-10 pv-8 pt-12 grid grid-cols-2 gap-6'>
        <div className='flex flex-col gap-3'>
          <label className='font-semibold pl-1'>Nom</label>
          <input name='name' value={formData.name} onChange={handleChange} placeholder='Nom' className='border p-2 rounded-md' />
        </div>
         <div className='flex flex-col gap-3'>
          <label className='font-semibold pl-1'>Prenom</label>
          <input name='fname' value={formData.fname} onChange={handleChange} placeholder='Prénom' className='border p-2 rounded-md' />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold pl-1">Adresse Email</label>
          <div className="relative">
             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse Email" className="border p-2 rounded-md w-full pr-10"/>
             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"> <MdEmail /></span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold pl-1">Numéro de téléphone</label>
         <div className="relative">
           <input  type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Numéro de téléphone" className="border p-2 rounded-md w-full pr-10"/>
           <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"> <MdPhoneAndroid /> </span>
         </div>
       </div>
       <div className="flex flex-col gap-3">
          <label className="font-semibold pl-1">Wilaya</label>
         <div className="relative">
           <input name="location" value={formData.location} onChange={handleChange} placeholder="Wilaya" className="border p-2 rounded-md w-full pr-10"/>
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"> <MdLocationOn /></span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
       <label className="font-semibold pl-1">Coût minimum</label>
       <div className="relative">
         <input type="number" name="coutMin" value={formData.coutmin}   min="0" onChange={handleChange} placeholder="Coût Minimum" className="border p-2 rounded-md w-full pr-12" />
        <span className="font-semibold absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">DA </span>
      </div>
     </div>
    </div>
     <div className='flex flex-col gap-3 px-10 mt-8'>
      <label className='font-semibold pl-1'>Services Proposés</label>
      <select name="service" value={formData.service} onChange={handleChange} className="border p-2 rounded-md">
            <option value="Menuiserie">Menuiserie</option>
            <option value="Électricité">Électricité</option>
            <option value="Peinture">Peinture</option>
            <option value="Ménage">Ménage</option>
            <option value="Maçonnerie">Maçonnerie</option>
            <option value="Plomberie">Plomberie</option>
      </select>
     </div>
     <div className='px-10 pb-8 pt-12 grid grid-cols-2 gap-6 border-t border-gray-300 mt-20'>
        <div className='flex flex-col gap-3'>
           <label className='font-semibold pl-1'>Mot de passe actuel</label>
           <div className='relative'>
              <input  type={showCurrentPassword ? 'text' : 'password'} name='mdp' value={formData.mdp} onChange={handleChange}  placeholder='Mot de passe actuel'
               className='border p-2 rounded-md w-full' />
              <span
                className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500' onClick={toggleShowCurrentPassword} >
               {showCurrentPassword ? <MdVisibilityOff /> : <MdVisibility />}
             </span>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='font-semibold pl-1'>Nouveau mot de passe</label>
          <div className='relative'>
             <input type={showNewPassword ? 'text' : 'password'}  value={newMdp}
               onChange={handleNewMdpChange} placeholder='Nouveau mot de passe' className='border p-2 rounded-md w-full' />
             <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500' onClick={toggleShowNewPassword} >
               {showNewPassword ? <MdVisibilityOff /> : <MdVisibility />}
             </span>
         </div>
      </div>
    </div>
    <div className='flex flex-col gap-3 px-10'>
      <label className='font-semibold pl-1'>Confirmer le nouveau mot de passe</label>
       <div className='relative'>
          <input type={showConfirmPassword ? 'text' : 'password'}
            value={confirmMdp}
            onChange={handleConfirmMdpChange}
            placeholder='Confirmer le nouveau mot de passe'
            className='border p-2 rounded-md w-full' />
          <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500' onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </span>
       </div>
   </div>
      {/*  Boutons */}
      <div className='py-16 md:my-12 px-10 flex justify-between items-center'>
      <button type='button' className='text-black border border-black px-4 md:py-2 md:mr-0 mr-3 rounded-md flex items-center'> Se déconnecter
           <MdExitToApp className='ml-2' />
     </button>
        <div className='flex gap-4'>
          <button type="button" className="text-black border border-black px-4 md:py-2 rounded-md" onClick={resetForm}>Annuler</button>
          <button type='submit' className='bg-primary text-white px-4 md:py-2 rounded-md'>Enregistrer les modifications</button>
        </div>
      </div>
    </form>
  );
}

export default EditInfo;
