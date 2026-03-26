import { QuestionCard } from "../../components/questionCard";
import { ContactCard } from "../../components/contactCard";
import { ServiceCard } from "../../components/serviceCard";
import { motion } from "framer-motion";


const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4
        }
    }
};

const titre = {
    hidden: {opacity: 0, y: -120},
    visible: {
        opacity: 1,
        y: 0,
        transition: {druration: 0.6}
    }
}

const slideRight = {
    hidden: {opacity: 0, x: 100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.6}
    }
}

const slideBottom = {
    hidden: {opacity: 0, y: 120},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6}
    }
}

export const Questions = () => {

    return (
        <motion.div 
            className="min-h-screen p-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.4, margin: "150px"}}
        >
            <motion.h1 
                className="text-3xl font-bold text-center"
                variants={titre}
            >
                Questions ?
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20%] lg:mt-[3%] min-h-screen">
                <div className="flex flex-col gap-5">
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Qui sommes nous ?" 
                            reponse="Bongissa est une organisation non gouvernementale basée au Congo-Brazzaville,
                            engagée dans la protection de l'environnement et la promotion du développement durable.
                            Nous agissons à travers des initiatives innovantes visant à reduire l'impact envionnemental, valoriser
                            les ressources naturelles et améliorer les conditions de vie des populations."
                        />
                    </motion.div>
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Qu'elle est notre vision ?" 
                            reponse="Notre vision est de devenir une référence en matière de conservation de l'environnement
                            et de développement durable en République du Congo. Nous aspirons à impulser un changement durable
                            des comportements des populations et des acteurs économiques en faveur d'un environnement sain."
                        />
                    </motion.div>
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Quelles sont les missions de Bongissa ?" 
                            reponse="Bongissa a pour mission de protéger l'environnement et de promouvoir le développement durable à
                            travers des actions concrètes de sensibilisation, d'innovation écologique et de gestion responsable
                            des ressources naturelles, afin d'améliorer les conditions de vie des populations."
                        />
                    </motion.div>
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Quels sont les domaines d'intervension de Bongissa ?" 
                            reponse="Bongissa intervient dans plusieurs domaines clés, notamment la valorisation
                            des déchets, la construction écologique, les energies renouvelables, l'écotourisme ainsi que 
                            l'agriculture et l'élevage durables."
                        />
                    </motion.div>
                </div>
                <motion.div variants={slideRight} className="flex flex-col lg:items-end gap-4 mt-[5%] lg:mt-0">
                    <ContactCard/>
                    <ServiceCard/>
                </motion.div>
            </div>
        </motion.div>
    )
}