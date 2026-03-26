import {motion, useSpring, AnimatePresence} from "framer-motion";
import { TextCarousel } from "../../components/textCarousel";
import logo from "../../assets/logo.png";
import background from "../../assets/img.png";
import { useTransform, useScroll } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";

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

const header = {
    hidden: {opacity: 0, y: -100},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}


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

const menu = {
  hidden: {
    y: "-100%"
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.45,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.35
    }
  }
};

const menuItem = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

type HomeProps = {
    toHome: () => void;
    toAbout: () => void;
    toProjet: () => void;
    toQuestion: () => void;
    toContact: () => void;
}

export const Home = ({toHome, toAbout, toProjet, toQuestion, toContact}: HomeProps) => {
    const [onClick, setOnClick] = useState(false);

    const { scrollY } = useScroll();
    const rawRotate = useTransform(scrollY, [0,500], [0, 30]);
    const rotate = useSpring(rawRotate, {
        stiffness: 150,
        damping: 25
    })

    useEffect(() => {
        if (onClick) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [onClick]);

    return (
        <div className="relative h-[120vh] overflow-hidden p-5 bg-emerald-800">
            <motion.img 
                src={background} 
                style={{ rotate }}
                className="absolute inset-0 w-xs aspect-square mx-auto my-[67%] lg:my-0 lg:w-full lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            <motion.div
                className="relative z-10 mt-[10%] lg:mt-0"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, margin: "150px"}}
            >
                <div className="flex">
                    <div className="block lg:hidden w-14 aspect-square">
                        <img src={logo} alt="Logo" className="object-contain"/>
                    </div>
                    <button 
                        onClick={() => setOnClick(!onClick)} 
                        className="block lg:hidden ml-auto cursor-pointer relative z-50"
                    >
                        {onClick ? <XIcon color="white"/> :<MenuIcon color="white"/>}
                    </button>
                </div>
                <AnimatePresence>
                    {onClick && (
                        <motion.div
                            variants={menu}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 z-20 h-screen bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white text-2xl font-semibold"
                            >
                            <motion.button className="cursor-pointer" variants={menuItem} onClick={() => {toHome(); setOnClick(false)}}>
                                Accueil
                            </motion.button>

                            <motion.button  className="cursor-pointer" variants={menuItem} onClick={() => {toAbout(); setOnClick(false)}}>
                                A propos
                            </motion.button>

                            <motion.button className="cursor-pointer" variants={menuItem} onClick={() => {toProjet(); setOnClick(false)}}>
                                Projets
                            </motion.button>

                            <motion.button className="cursor-pointer" variants={menuItem} onClick={() => {toQuestion(); setOnClick(false)}}>
                                FAQs
                            </motion.button>

                            <motion.button className="cursor-pointer" variants={menuItem} onClick={() => {toContact(); setOnClick(false)}}>
                                Contact
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.header variants={header} className="hidden lg:flex items-center">
                    <div className="w-14 aspect-square">
                        <img src={logo} alt="Logo" className="object-contain"/>
                    </div>
                    <div className="flex justify-between items-center text-white text-2xs font-semibold w-[50%] pl-4 p-1  bg-primary mx-auto rounded-4xl">
                        <button className="cursor-pointer" onClick={toHome}>Acceuil</button>
                        <button className="cursor-pointer" onClick={toAbout}>A propos</button>
                        <button className="cursor-pointer" onClick={toProjet}>Projets</button>
                        <button className="cursor-pointer" onClick={toQuestion}>FAQs</button>
                        <motion.button
                            onClick={toContact}
                            className="w-[15%] p-1 bg-secondary text-white font-bold rounded-3xl cursor-pointer"
                            whileTap={{scale: 0.95}}
                            whileHover={{scale: 1.05}}
                        >
                            Contacts
                        </motion.button>
                    </div>
                </motion.header>
                <motion.div variants={slideLeft} className="mt-[20%] lg:mt-[10%]">
                    <h1 className="text-2xl lg:text-6xl text-white font-bold font-serif">
                        La créativité au service<br/>
                        de l'environnement.
                    </h1>
                </motion.div>
                <motion.div variants={slideRight} className="mt-[99%] lg:mt-0 lg:w-xs ml-auto">
                    <TextCarousel/>
                </motion.div>
            </motion.div>
        </div>
    )
}