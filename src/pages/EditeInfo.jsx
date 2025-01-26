import EditInfo from "../components/ArtisanProfil/EditInfo"
import {useState , useEffect} from "react"
import axios from "axios"

const EditeInfo=() =>{
    const [user, setUser] = useState({});
      useEffect(() => {
        // Replace with your actual API endpoint
        axios.get("https://dzartisansapp.onrender.com/profile/getartisan", { withCredentials: true })
          .then(response => {
            
            setUser(response.data);
            
          })
          
          .catch(error => {
            console.error("Error fetching user data:", error);
           
          });
        }
      , []);
      console.log("this is user " ,user)
    const artisaninfo = user
    console.log("this is artisan ",artisaninfo)
   // {
    //     name: user.nom,
    //     fname:user.prenom,
    //     service: user.service,
    //     email: user.email,
    //     location: user.wilaya,
    //     phone: user.phone_number,
    //     photo :user.photo_de_profil,
    //     coutMin:user.prix ,
    //     description:
    //       user.description,
    //   };
      
      
    return(
        <>
         <EditInfo data={user}/>
        </>
    )
}
export default EditeInfo