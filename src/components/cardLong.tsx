export  const CardLong = ({src}: {src:string}) => {
    return (
        <div className="w-xl h-60 bg-primary rounded-3xl mr-6 overflow-hidden">
            <img src={src} className="w-full h-full object-cover object-[50%_65%]"/>
        </div>
    );
}