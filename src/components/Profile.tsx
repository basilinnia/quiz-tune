"use client";
import {createTheme, Popover, ThemeProvider} from "flowbite-react";
import {MdOutlineLogout} from "react-icons/md";

export default function Profile() {
    const customTheme = createTheme({
        popover: {
            base:"dark:bg-white bg-white",
        }
    })

    const changeProfilePicture = () => {
        console.log("clicked");
    };

    const logOut = () => {
        console.log("clicked");
    };

    const content = (
        <div className="w-56 pt-1 px-1 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-indigo-200 px-3 py-2 dark:border-gray-600 dark:bg-indigo-200">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-900">User Name</h3>
            </div>
            <li onClick={changeProfilePicture}  className="hover:bg-gray-300 cursor-pointer"><p className="text-gray-800 p-2 px-3">Change Profile Picture</p></li>
            <hr className="border-gray-500 mx-2 "/>
            <div onClick={logOut}  className="hover:bg-gray-300 cursor-pointer text-gray-800 px-3 py-2 flex items-center">
                <MdOutlineLogout className="mr-2" color="red" />
                Log Out
            </div>
        </div>
    );

    return (
        <ThemeProvider theme={customTheme}>
            <Popover content={content}>
            <div
                className="p-8 w-20 h-20 bg-[url(../../public/profile.png)] bg-contain drop-shadow-xl/100 rounded-lg "/>
        </Popover>
        </ThemeProvider>

    )
}