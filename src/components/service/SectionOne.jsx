import React, { useState } from "react";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import Select from "react-select";
import { PiCurrencyDollarLight } from "react-icons/pi";
import ReactSlider from "react-slider";
function SectionOne({ data }) { 

  const customStyles = {
    control: () => ({
      display: "flex",
      border: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "#6D6D6D",
      backgroundColor: state.isSelected ? "#0051CB" : "white",
      opacity: state.isFocused ? "0.6" : "1",
    }),
  };

  const wilayas = [
    "Adrar",
    "Ain Defla",
    "Aïn Témouchent",
    "Alger",
    "Batna",
    "Béchar",
    "Béjaïa",
    "Biskra",
    "Blida",
    "Bordj Badji Mokhtar",
    "Bordj Bou Arréridj",
    "Bouira",
    "Djanet",
    "Djelfa",
    "El Bayadh",
    "El Menia",
    "El Oued",
    "El Tarf",
    "Ghardaia",
    "Guelma",
    "Illizi",
    "In Guezzam",
    "In Salah",
    "Jijel",
    "Khenchela",
    "Laghouat",
    "Mascara",
    "Médéa",
    "Mila",
    "Mostaganem",
    "M'Sila",
    "Naama",
    "Ouargla",
    "Oran",
    "Oum El Bouaghi",
    "Relizane",
    "Sétif",
    "Skikda",
    "Souk Ahras",
    "Souk Abrahm",
    "Tamanghasset",
    "Tébessa",
    "Tiemimoun",
    "Tindouf",
    "Tipasa",
    "Tissemsilt",
    "Tlemcen",
    "Touggourt",
  ];
  const wilayaOptions = wilayas.map((wilaya) => ({
    value: wilaya,
    label: wilaya,
  }));
    const minPrice = 500;
    const maxPrice = 50000;
    const [isShown, setIsShown] = useState(false);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedWilaya, setSelectedWilaya] = useState(null);

    return (
    <div className="container py-32">
       <div className="grid md:grid-flow-row md:grid-cols-[2fr_1.6fr] gap-12" >
          {/* Partie Gauche : Description et Barre de Recherche */}
          <div>
            <div className="pr-16 leading-8">
              <h1 className="text-3xl py-8 font-bold md:text-start text-center">{data.nom}</h1>
              <p className="font-medium md:text-start text-center">{data.description}</p>
            </div>

            {/* Barre de Recherche */}
            <div className="py-14 w-[90%] flex items-center relative">
              <input
                type="text"
                placeholder="Effectuez une recherche"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 bg-secondary border rounded-3xl shadow-md  tracking-wider"
              />
              <button className="bg-primary p-2  ml-2 rounded-3xl text-white absolute right-[15px]">
                <IoSearchOutline size={20} />
              </button>
            </div>

            <div className="flex  gap-16 items-center">
            <div className="flex flex-col  relative bg-secondary w-[37%] border rounded-2xl border-primary px-2 ">
             <IoLocationOutline className="text-xl absolute left-2 top-3" />
            <span className="pl-6 pt-2 font-semibold">Location</span>
             <Select
             classNamePrefix="react-select"
             value={selectedWilaya}
             onChange={(selectedOption) => setSelectedWilaya(selectedOption)}
             options={wilayaOptions}
             placeholder="Sélectionnez la location"
             className=" text-xs lg:text-sm"
              styles={customStyles} />
          </div>
             <div className="flex flex-col  relative bg-secondary w-[37%] border rounded-2xl border-primary px-2 ">
               <div onClick={() => setIsShown(!isShown)} className="cursor-pointer flex flex-col justify-between gap-2">
                 <PiCurrencyDollarLight className="text-xl absolute left-2 top-3"/>
                 <span className="pl-6 pt-2 font-semibold">Price Range</span>
                 <p className="text-xs lg:text-sm pb-2 flex justify-center items-center  text-nowrap">
                  <span className="linline-block text-[#777777] mr-1 lg:mr-2">  Min: {priceRange[0]} DA  </span>
                  <span className="inline-block text-[#777777]"> Max: {priceRange[1]} DA  </span>
                 </p>
               </div>
                <div className={`absolute bottom-[-70px] z-30 lg:bottom-[-81px] left-[-36px] w-[200%] md:w-[300px] lg:w-[300px] px-4 lg:px-6 py-2 lg:py-3 h-16 lg:h-20 border-primary border bg-secondary rounded-full ${
                 !isShown && `opacity-0`
                 } transition-opacity duration-150`} >
                  <h3 className=" max-md:text-xs">Select a price range</h3>
                  <ReactSlider className="w-full h-full flex justify-center items-center translate-y-[-10px]"
                   value={priceRange}
                   min={minPrice}
                   max={maxPrice}
                   onChange={setPriceRange}
                   trackClassName="bg-primary h-2 lg:h-3 rounded-full"
                   minDistance={0}
                   thumbClassName="h-4 w-4 lg:h-5 lg:w-5 outline-none bg-white text-center text-sm cursor-pointer  border-[2px] border-primary rounded-full" />
                </div>
            </div>
          </div>
          </div>
          {/* Partie Droite : Image */}
          <div className="pl-10 pt-4  ">
            <img src={data.cover} className="md:w-full md:h-auto w-0 h-0 rounded-lg shadow-lg"  alt="service"/>
          </div>
        </div>
   
    </div>
  );
}

export default SectionOne;
