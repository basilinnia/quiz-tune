"use client";
import {Button, Modal, ModalBody, ModalHeader, Select, TextInput} from "flowbite-react";
import {useState} from "react";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import Checkboxes from "@/components/Checkboxes";

const playlists = [
    {
        name: "Happy Hits",
        imageUrl: "https://i.pinimg.com/736x/4d/06/bf/4d06bf7037163c76ce098232e7a47009.jpg",
    },
    {
        name: "Classic Rock",
        imageUrl: "https://i.pinimg.com/736x/7c/c3/a7/7cc3a7884dbc909b660bf1bff81c283f.jpg"
    },
    {
        name: "Pop Hits",
        imageUrl: "https://i.pinimg.com/736x/27/ce/06/27ce064eab0b9cdef67a2f81fa77dc9a.jpg"
    },
    {
        name: "Dance Hits",
        imageUrl: "https://i.pinimg.com/736x/50/5d/fd/505dfd561232a35d58cd2e2cc6c0a7eb.jpg"
    },
]

export default function CreateRoom() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                className="px-8 py-8 w-2/5 bg-blue-900 rounded-lg drop-shadow-xl/80 shadow-xl
                    text-white text-[1.5rem] text-center
                    transform active:translate-y-1 active:bg-indigo-900 active:shadow-inner
                    transition-all duration-100"
                onClick={() => setOpenModal(true)}
            >
                create new game
            </Button>

            <Modal
                show={openModal}
                size="lg"
                popup
                onClose={() => setOpenModal(false)}
            >
                <ModalHeader/>
                <ModalBody>
                    <div className="space-y-4 ">
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                You can choose one of our playlists!
                            </h3>
                        </div>
                        <PlaylistCarousel playlists={playlists}/>
                        <div className="flex flex-col gap-4">
                            <Checkboxes/>
                            <TextInput
                                id="playlist-link"
                                type="url"
                                placeholder="Enter a playlist link"
                            />
                            <Select>
                                <option disabled>Choose game mode</option>
                                <option value="1">Multiplayer</option>
                                <option value="2">Single player</option>
                            </Select>

                        </div>
                        <Button
                            className="mt-4 w-full font-bold"
                            color="pink"
                            type="button"
                        >CREATE GAME </Button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}
