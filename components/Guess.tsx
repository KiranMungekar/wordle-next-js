const Guess = ({ isGuessed, userGuess, word }) => {
    return (
        <div className="grid grid-cols-5 gap-2 mb-2">
            { new Array(5).fill(0).map((_,i) => {
                const bgColor = !isGuessed 
                    ? 'bg-black' 
                    : userGuess[i] === word[i]
                        ? 'bg-green-400' 
                        : word.includes(userGuess[i]) 
                            ? 'bg-yellow-400' 
                            : 'bg-black';

                return (<div key={i} className={`h-16 w-16 border border-gray-500 ${bgColor} text-white font-semibold uppercase flex items-center justify-center`}>
                    {userGuess[i]}
                </div>)
            })}
        </div>
    )
}

export default Guess;