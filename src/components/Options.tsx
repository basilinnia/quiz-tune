import {Button, createTheme, ThemeProvider} from "flowbite-react";

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-[#ffea00] hover:bg-[#ffea00]",
      secondary: "bg-blue-500 hover:bg-blue-600",
    }
  },
});

export default function Options({options}: { options: string[] }) {
    return (
        <ThemeProvider theme={customTheme}>
            <div className="flex flex-col w-full gap-4 px-18">
                <div className="grid grid-cols-2 gap-x-[6vw] gap-y-7">
                    {options.map((option) => {
                            return (
                                <Button
                                    className="stext h-16 rounded-lg shadow-lg hover:bg-[#9c7d0c] transition-colors drop-shadow-xl/90 text-lg text-black font-bold"
                                    key={option}
                                    color="primary"
                                >
                                    {option}
                                </Button>
                            )
                        }
                    )}
                </div>
            </div>
        </ThemeProvider>
    );
}
