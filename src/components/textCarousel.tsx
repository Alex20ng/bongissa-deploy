import Carousel from "antd/es/carousel";

export const TextCarousel = () => {
    return (
        <Carousel autoplay={{dotDuration:true}} autoplaySpeed={4000} dots={false}>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">Le savez-vous ?</h1>
                <p className="text-2xs text-left text-clip ">
                    D'après le Ministère de l'environnement, la pollution plastique en forte
                    croissance menace les écosystemes et pourrait dépasser la quantité 
                    des poissons dans les océans d'ici 2050 en République du Congo.
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">ONU</h1>
                <p className="text-2xs text-left text-clip">
                    Chaque congolais produit environ 13 kilos de déchets plastiques
                    par années.<br/>Alors il est temps de penser à recycler
                    nos déchets plastiques.
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">PND 2022-2026</h1>
                <p className="text-2xs text-left text-clip">
                    La République du congo dispose d'un fort potentiel agricole avec 10 millions
                    d'hectares de terres arables, un climat favorable et de nombreux débouchés,
                    mais moins de 2% de ces terres sont exploitées.<br/>
                    <span className="font-bold">Pourquoi ne pas investir dans ce secteur ?</span>
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">Eujournal</h1>
                <p className="text-2xs text-left text-clip">
                    Plus de 60% des déchets produit par les ménages en République du Congo
                    sont biodégradables.<br/>
                    <span className="font-bold">Plutôt pratique pour faire de la métanisation
                        et du compostage, vous ne trouvez pas ?
                    </span>
                </p>
            </div>
        </Carousel>
    )
}