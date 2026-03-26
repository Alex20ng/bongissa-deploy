import chat from "../assets/chat.png";
import {motion} from "framer-motion";


export const ContactCard = () => {
    return (
        <div className="w-full lg:w-[60%] h-[70%] lg:h-[50%] p-6 bg-[#D9D9D9] rounded-2xl flex flex-col items-center">
            <div className="w-[20%] aspect-square">
                <img src={chat} alt="..." className="object-contain"/>
            </div>
            <h1 className="text-xl font-semibold">Vous avez des questions ?</h1>
            <p className="text-xs text-center">
                <br/>
                Notre equipe repondra a toutes vos questions.
                Nous vous garantissons une reponse rapide.
            </p>
            <motion.button 
                whileTap={{scale: 0.95}}
                whileHover={{scale: 1.05}}
                className="w-fit bg-primary px-5 py-2 mt-[10%] rounded-3xl font-semibold cursor-pointer text-white"
                
            >
                Contactez Nous
            </motion.button>
        </div>
    )
}