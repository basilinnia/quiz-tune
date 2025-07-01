export default function Checkboxes() {
    return (
        <>
            <h5 className="w-full text-center text-blue-200">What you want to play</h5>
            <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                    <input id="guess-song" type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"/>
                    <label htmlFor="guess-song" className="text-gray-900 dark:text-white">Guess the song</label>
                </div>
                <div className="flex items-center gap-2">
                    <input id="guess-artist" type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"/>
                    <label htmlFor="guess-artist" className="text-gray-900 dark:text-white">Guess the artist</label>
                </div>
                <div className="flex items-center gap-2">
                    <input id="complete-lyrics" type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"/>
                    <label htmlFor="complete-lyrics" className="text-gray-900 dark:text-white">Complete the lyrics</label>
                </div>
                <div className="flex items-center gap-2">
                    <input id="surprise-me" type="checkbox" className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"/>
                    <label htmlFor="surprise-me" className="text-gray-900 dark:text-white">Surprise me!</label>
                </div>
            </div>
            </div>
        </>
    )
}