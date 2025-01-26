import ArtisansInfo from "../components/ArtisanProfil/AtisansInfo"
import ArtisansPortfolio from "../components/ArtisanProfil/ArtisansPortfolio";
const ArtisanPage=() =>{
    const artisaninfo = {
        name: "Adel",
        fname:"Belkacem",
        service: "Peintre",
        email: "a_belkacem@gmail.com",
        location: "Béjaia",
        phone: "+213 6 59 01 97 12",
        photo:"../../public/utilisateur1.jpg",
        description:
          "Je suis Belkacem Adel, peintre en bâtiment spécialisé dans la rénovation et la décoration intérieure. Avec 10 années d’expérience, je vous accompagne pour transformer vos espaces grâce à un travail soigné et des matériaux de qualité. Contactez-moi pour donner une nouvelle vie à votre maison !    N’hésitez pas à me contacter pour discuter de vos envies et obtenir un devis. Votre satisfaction est ma priorité !",
        portfolio: [
          {
            title: "Rénovation d'un salon contemporain",
            image: "../../public/salon.jpg",
            description: "Rafraîchissement des murs et plafonds avec des peintures durables, apportant luminosité et modernité à cet espace de vie.",
          },
          {
            title: "Une façade extérieure moderne",
            image: "../../public/home.jpg",
            description: "Application d’une peinture résistante aux intempéries pour redonner du cachet à cette maison.",
          },
          {
            title: "Création d'une ambiance chaleureuse",
            image: "../../public/chambre.jpg",
            description: "Peinture intérieure avec des teintes claires et élégantes, idéale pour une chambre à coucher.",
          },
          {
            title: "Rafraîchissement d'une cuisine classique",
            image: "../../public/cuisine.jpg",
            description: "Peinture des murs pour apporter clarté et chaleur à cet espace, tout en mettant en valeur les éléments décoratifs.",
          },
        ],
        
        isArtisan: true,
      };
      
    return(
        <>
        <ArtisansInfo data={artisaninfo}/>
        <ArtisansPortfolio data={artisaninfo}/>
        </>
    )
}
export default ArtisanPage