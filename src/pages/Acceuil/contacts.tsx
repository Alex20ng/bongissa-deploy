import {motion} from "framer-motion";
import logo from "../../assets/logo.png";
import send from "../../assets/send.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import whatsapp from "../../assets/whatsapp.png";

export const Contacts = ({toAbout, toProjet, toQuestion}: {toAbout:any, toProjet:any, toQuestion:any}) => {

    return (
        <div className="p-10">
            <div className="hidden lg:block w-14 aspect-square">
                <img src={logo} alt="Logo" className="object-contain"/>
            </div>
            <div className="block lg:flex mt-20 mb-15">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold">News Lettter</label>
                    <div className="flex gap-2">
                        <input
                            type="email" 
                            id="email" 
                            placeholder="bongissa@exemple.com" 
                            className="px-4 py-2 border-2 border-primary bg-green-200 rounded-2xl"
                        />
                        <motion.div 
                            className="w-10 aspect-square bg-primary rounded-full flex justify-center items-center cursor-pointer"
                            whileTap={{scale: 0.95}}
                            whileHover={{scale: 1.05}}
                        >
                                <img src={send} alt="..." className="object-contain"/>
                        </motion.div>
                    </div>
                </div>
            <motion.button 
                whileTap={{scale: 0.95}}
                whileHover={{scale: 1.05}}
                className="w-fit bg-primary px-5 py-2 mt-[10%] rounded-3xl font-semibold cursor-pointer text-white ml-auto"
            >
                Contactez Nous
            </motion.button>
            </div>
            <div className="w-full lg:w-6xl h-0.5 bg-gray-400 mr-auto ml-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-15">
                <div className="flex justify-start gap-4">
                    <a 
                        href="https://facebook.com/share/1HWhnLBDJT/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={facebook} alt="..." className="object-contain"/>
                    </a>
                    <a 
                        href="https://instagram.com/bongissa_officiel?igsh=MXBIdXc3Ym9iY29IcQ%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={instagram} alt="..." className="object-contain"/>
                    </a>
                    <a 
                        href="https://whatsapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={whatsapp} alt="..." className="object-contain"/>
                    </a>
                    <a 
                        href="https://www.tiktok.com/@bongissa_officile1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={tiktok} alt="..." className="object-contain"/>
                    </a>
                </div>
                <div className="flex flex-col gap-2 mr-auto mb-[10%] mt-[10%] lg:mt-0 lg:mb-0 lg:mx-auto">
                    <h1 className="text-2xs font-bold">Navigation</h1>
                    <button onClick={toAbout} className="text-2xs cursor-pointer">A propos</button>
                    <button onClick={toProjet} className="text-2xs cursor-pointer">Nos projets</button>
                    <button onClick={toQuestion} className="text-2xs cursor-pointer">FAQs</button>
                </div>
                <div className="flex flex-col justify-between h-30">
                    <h1 className="text-2xs font-bold">Contacts</h1>
                    <p className="text-2xs">(+242) 06 971 16 67</p>
                    <p className="text-2xs">bongissa242officiel1@gmail.com</p>
                    <p className="text-2xs">14 rue du marché, Talangai</p>
                </div>
            </div>
        </div>
    )
}