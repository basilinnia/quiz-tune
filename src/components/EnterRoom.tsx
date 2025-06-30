"use client";
import {Alert, Button, Label, Modal, ModalBody, ModalHeader, Spinner, TextInput} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";
import {useState} from "react";

export function EnterRoom() {
    const [openModal, setOpenModal] = useState(false);
    const [roomCode, setRoomCode] = useState("");
    const [joiningState, setJoiningState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const trueCode = "1234";

    const handleSubmit = () => {
        setErrorMessage("");

        if (roomCode.trim() === "") {
            setErrorMessage("Please fill in the room code.");
            return;
        }

        if (roomCode.trim() !== trueCode) {
            setErrorMessage("Room code is incorrect. Ask your friend and try again.");
            return;
        }

        setJoiningState(true);

        setTimeout(() => {
            setJoiningState(false);
            setOpenModal(false);
            setRoomCode("");
        }, 1500);
    };

    return (
        <>
            <Button
                className="px-8 py-8 w-2/5 bg-blue-900 rounded-lg drop-shadow-xl/80 shadow-xl
                 text-white text-[1.5rem] text-center
                 transform active:translate-y-1 active:bg-indigo-900 active:shadow-inner
                 transition-all duration-100"
                onClick={() => setOpenModal(true)}
            >
                enter a room
            </Button>

            <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => !joiningState && setOpenModal(false)}
            >
                <ModalHeader/>
                <ModalBody>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label className="btext text-xl text-center font-medium text-gray-900 dark:text-white">
                                    Enter room code
                                </Label>
                            </div>
                            <TextInput
                                className="mb-4"
                                placeholder="Enter the room code that your friend gave you"
                                required
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value)}
                                disabled={joiningState}
                            />

                            <Button
                                  className="my-4 w-full font-bold"
                                  color="pink"
                                  type="button"
                                  onClick={handleSubmit}
                                  disabled={joiningState}
                                >
                                  <>
                                    {joiningState ? (
                                      <span className="flex items-center justify-center gap-2">
                                        <Spinner color="pink" size="sm" aria-label="Joining..." />
                                        Joining...
                                      </span>
                                    ) : (
                                      "JOIN THE JOY"
                                    )}
                                  </>
                                </Button>


                            {errorMessage && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    <span className="font-medium">Oops!</span> {errorMessage}
                                </Alert>
                            )}
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}
