import Feed from "@/components/Feed"


const Home = () => {

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      Créez, partagez et découvrez
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center"> Créez et Partagez Vos Proverbes </span>
      </h1>
      <p className="desc text-center">
      NouveauProverbe vous invite à façonner la sagesse populaire de demain. Créez, partagez et découvrez des proverbes inédits dans une communauté d'amoureux des mots.
        </p>
        {<Feed/>}
    </section>
  )
}

export default Home
