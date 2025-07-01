import Navbar from "@/components/Navbar";
import {Card, createTheme, ThemeProvider} from "flowbite-react";
import { AiFillSound  } from "react-icons/ai";
import Options from "@/components/Options";

const customTheme = createTheme({
  card: {
    root: {
      base: "rounded-xl shadow-xl drop-shadow-xl/80 dark:bg-[#e65c00] bg-[#e65c00]",
      children: "space-y-4 p-6",
    }
  },
});

const options = ["Die With a Smile - Bruno Mars", "Crazy in love - Pitbull", "Shape of you - Ed Sheeran", "Perfect - Ed Sheeran"];
export default function Page() {
    return (
        <ThemeProvider theme={customTheme}>
            <div className=" bg-[url(../../public/backgrounds/4.png)] bg-cover bg-center h-screen flex flex-col w-full items-center">
                <Navbar/>
                <Card className="w-1/2 mx-auto -my-4 h-1/12 mb-8">
                    <h1 className="btext font-bold text-xl text-center py-4">Name the song!</h1>
                </Card>
                <div className="h-40 w-40 rounded-2xl bg-gray-800 shadow-2xl mb-16 flex justify-center items-center">
                    <AiFillSound  className="w-20 h-20 transition-transform duration-300 ease-in-out hover:scale-125"/>
                </div>
            <Options options={options}/>
            </div>

        </ThemeProvider>
    )
}