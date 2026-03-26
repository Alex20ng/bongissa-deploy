export  const Card1 = ({src}: {src:string}) => {
    return (
        <div className="w-xs lg:w-2xs h-50 lg:h-45 rounded-3xl mr-2 overflow-hidden">
            <img src={src} className="w-full h-full object-cover object-[50%_55%]"/>
        </div>
    );
}