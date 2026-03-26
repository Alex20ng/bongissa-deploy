

export const ProjectCard = ({titre, description, src}: {titre: string, description: string, src: string}) => {
    return (
        <div className=" bg-primary w-full lg:w-[90%] h-[70%] rounded-3xl p-5">
            <div className="w-full h-1/2 rounded-3xl overflow-hidden">
                <img src={src} className="w-full h-full object-cover"/>
            </div>
            <h1 className="text-xl text-white font-semibold mt-2">{titre}</h1>
            <p className="text-2xs text-left text-white mt-2">
                {description}
            </p>
        </div>
    )
}