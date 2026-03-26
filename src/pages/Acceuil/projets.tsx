import {motion} from "framer-motion";
import { ProjectCard } from "../../components/projectCard";
import img1 from "../../assets/image9.jpeg";
import img2 from "../../assets/image10.jpeg";
import img3 from "../../assets/image5.jpeg";

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4
        }
    }
}

const titre = {
    hidden: {y: -100, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}

const slideBottom = {
    hidden: {y: 150,opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}


export const Projets = () => {

    return (
        <div className="relative overflow-hidden bg-emerald-800">
            <div className="absolute inset-0 bg-black/40"></div>
        <motion.div 
            className="relative z-10 min-h-screen p-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.4,margin: "150px"}}
        >
            <motion.h1 
                className="text-3xl font-bold" 
                variants={titre}
            >
                <span className="text-secondary">Nos </span>
                <span className="text-primary">derniers</span><br/>
                <span className="text-primary">projets & </span>
                <span className="text-secondary">Annonces</span>
            </motion.h1>
            <div className="min-h-screen block mt-[15%] lg:flex gap-10 lg:mt-[5%]">
                <motion.div variants={slideBottom} className="mb-[10%] lg:mb-0">
                    <ProjectCard 
                        titre="Corbeilles en bouchons réutilisés" 
                        src={img1}
                        description="Bongissa met en place des corbeilles fabriquées à partir des bouchons
                        plastiques réutilisés dans une démarche de valorisation des déchets.
                        Cette initiative contribue à la réduction de la pollution, à la promotion
                        du recyclage et du dévéloppement durable en Republique du Congo."
                    />
                </motion.div>

               <motion.div variants={slideBottom} className="mb-[10%] lg:mb-0">
                    <ProjectCard 
                        titre="Un campus plus vert grâce à Bongissa" 
                        src={img2}
                        description="Bongissa encourage et mobilise les jeunes à mener une opération de planting visant à verdir
                        et embellir le campus de l'Universite Denis Sassou-N'GUESSO.
                        Cette initiative contribue également à la lutte contre le changement climatique
                        et à la promotion d'un environnement durable."
                    />
                </motion.div>

                <motion.div variants={slideBottom}>
                    <ProjectCard 
                        titre="Bongissa convié aux 5 ans de l'UDSN" 
                        src={img3}
                        description="Bongissa a pris part à une conférence organisée par l'Université Denis Sassou-
                        N'GUESSO à l'occasion de son 5ème anniversaire, affirmant ainsi son engagement à contribuer
                        activement aux reflexions et aux dialogues autour des enjeux environnementaux."
                    />
                </motion.div>
            </div>
        </motion.div>
        </div>
    )
}