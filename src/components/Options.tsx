import {Button} from "flowbite-react";

export default function Options({options}: { options: string[] }) {
    return (
        <div className="flex flex-col w-full gap-4 px-18">
            <div className="grid grid-cols-2 gap-x-[6vw] gap-y-7">
                {options.map((option) => {
                        return (
                            <Button
                                className="stext h-16 rounded-lg shadow-lg hover:bg-purple-700 transition-colors drop-shadow-xl/90 text-lg font-bold"
                                color="pink"
                            >
                                {option}
                            </Button>
                        )
                    }
                )}
            </div>
        </div>
    );
}
