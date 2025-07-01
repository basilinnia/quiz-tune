import Navbar from "../components/Navbar";
import {EnterRoom} from "@/components/EnterRoom";
import CreateRoom from "@/components/CreateRoom";



export default function Home() {
  return (
      <div className="bg-[url(../../public/grid_back.png)] h-screen flex flex-col bg-cover bg-center w-full">
          <Navbar/>
          <h1 className="btext text-[2.5rem] tracking-2 font-bold text-emerald-400 w-full text-center mb-2">
              How Well Do You Really Know Your Tunes?
          </h1>
          <p className="stext text-[1.5rem] text-white w-full text-center my-1">
              Get to know the songs you like or compete with a friend!
          </p>

          <div
              className="px-8 pt-4 pb-12 mx-48 bg-violet-200/80  rounded-xl drop-shadow-2xl/70 shadow-xl my-8 justify-center">
              <div className="my-12 text-center text-white">
                  <h2 className="text-3xl text-gray-700 font-bold mb-4">How does it work?</h2>
                  <div className="flex flex-row justify-around mx-24">
                      <div>
                          <p className="text-4xl">🎧</p>
                          <p className="text-gray-700">Pick your playlist</p>
                          <p className="font-bold">you can also use one of our playlists!</p>
                      </div>
                      <div>
                          <p className="text-4xl">❓</p>
                          <p className="text-gray-700">Answer music questions</p>
                          <p>guess the artist or the song</p>
                      </div>
                      <div>
                          <p className="text-4xl">🏆</p>
                          <p className="text-gray-700">See who knows more</p>
                          <p>or improve your knowledge</p>
                      </div>
                  </div>
              </div>

              <div className="flex flex-row justify-around">
                  <EnterRoom/>
                  <CreateRoom/>
              </div>
          </div>
      </div>
  );
}
