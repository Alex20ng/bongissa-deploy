import phone from "../assets/phone.png";

export const ServiceCard = () => {
    return (
        <div className="w-full lg:w-[60%] h-[25%] lg:h-[20%] p-6 bg-[#D9D9D9] rounded-2xl">
            <div className="flex gap-8 items-center">
                <div className="w-[13%] aspect-square">
                    <img src={phone} alt="..." className="object-contain"/>
                </div>
                <h1 className="text-xl font-semibold">24/7 Service</h1>
            </div>
            <p className="text-2xs text-center">+242 06 971 16 67</p>
        </div>
    )
}