import { PlusIcon, MinusIcon } from "lucide-react";
import { useState } from "react";
import {motion, AnimatePresence } from "framer-motion";


export const QuestionCard = ({question,reponse}: {question: string, reponse: string}) => {    
    const [isOpen, setIsOpen] = useState(false);


    return (
        <motion.div layout className="w-full bg-[#D9D9D9] rounded-2xl">
            <div className="flex justify-between px-6 py-5 items-center font-semibold">
                {question}
                <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                    {isOpen ? <MinusIcon/> : <PlusIcon/>}
                </button>
            </div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div 
                        layout
                        initial={{opacity:0, height: 0}} 
                        animate={{opacity:1, height: "auto"}} 
                        exit={{opacity: 0, height: 0}}
                        transition={{duration:0.2}} 
                        className="px-6 pb-4 overflow-hidden"
                    >
                        <p>{reponse}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}