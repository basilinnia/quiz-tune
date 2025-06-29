import { IoMdMusicalNote } from "react-icons/io";
export default function Logo() {
    return (
       <div className="w-full flex items-stretch p-4">
           <IoMdMusicalNote className="w-16 h-16" />
           <h1 className="logo text-3xl font-bold font-mono self-center">Quiz Tune</h1>
        </div>
    )
}