
export const ResponseCard = ({reponse}: {reponse: string}) => {    

    return (
        <div className="flex justify-between w-[80%] h-[15%] items-center px-6 bg-[#D9D9D9] rounded-2xl font-semibold">
            {reponse}
        </div>
    )
}