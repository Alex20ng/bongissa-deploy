import { Card } from "../../components/card";
import { CardLong } from "../../components/cardLong";
import { ProgressBar } from "../../components/progressBar";
import { motion } from "framer-motion";
import img1 from "../../assets/image3.jpeg";
import img2 from "../../assets/image4.jpeg";
import img3 from "../../assets/image2.jpeg"
import img4 from "../../assets/img2.jpeg";
import { Card1 } from "../../components/card1";

const container = {
  hidden: { },
  visible: {
   
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};


const title = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};


const slideLeft = {
  hidden: { x: -120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};


const slideRight = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const buttonAnim = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, }
  }
};

export const About = () => {
  return (
    <div className="relative overflow-hidden  bg-emerald-800">
      <div className="absolute inset-0 bg-black/40"></div>
    <motion.div
      className="relative z-10 min-h-screen p-10 lg:-mt-5 text-white"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount: 0.4, margin: "150px"}}
    >

      <motion.h1
        className="text-3xl font-bold text-center mb-[10%] lg:mb-[3%]"
        variants={title}
      >
        <span className="text-secondary">Bon</span>
        <span className="text-primary">gissa</span> en bref
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:ml-6">
          <div className="block lg:flex mb-4">
            <motion.div variants={slideLeft} className="mb-[10%] lg:mb-0">
              <Card src={img1}/>
            </motion.div>

            <motion.div variants={slideLeft}>
              <Card src={img2}/>
            </motion.div>
          </div>

          <motion.div variants={slideLeft} className="hidden lg:block">
            <CardLong src={img3}/>
          </motion.div>

          <motion.div variants={slideLeft} className="block lg:hidden">
            <Card1 src={img4}/>
          </motion.div>

        </div>

        <motion.div
          className="mt-[3%] lg:mt-0 lg:ml-10"
          variants={slideRight}
        >
          <p className="text-justify text-2xs mb-10 leading-relaxed">
            L’ONG Bongissa, basée au Congo-Brazzaville, œuvre pour la protection de 
            l’environnement et le développement durable. Elle agit face aux défis tels 
            que la pollution, la déforestation et le changement climatique. Ses interventions
            couvrent la valorisation des déchets, les énergies renouvelables, la construction 
            écologique, l’écotourisme et l’agriculture durable. Alignée sur le Plan National de
            Développement 2022-2026, elle vise à réduire l’impact environnemental tout en 
            améliorant les conditions de vie. Elle s’appuie sur la sensibilisation, l’innovation
            et une gestion responsable des ressources.
          </p>

          <ProgressBar value={80} title="Solution durable et Innovation"/>
          <ProgressBar value={60} title="Sensibiisation et education enrvironnementale"/>
          <ProgressBar value={90} title="Gestion et valorisation des dechets"/>
        </motion.div>

      </div>

      <motion.button
        className="block mx-auto bg-primary px-5 py-2 rounded-3xl font-semibold mt-8 cursor-pointer text-white"
        variants={buttonAnim}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        About Us
      </motion.button>

    </motion.div>
    </div>
  );
};