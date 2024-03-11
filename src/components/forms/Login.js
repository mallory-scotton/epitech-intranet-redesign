import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter} from "@nextui-org/react";
import Ms365 from './ms365.png';

export default function Login() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState("blur");

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    return (
    <>
    <div className="flex flex-wrap gap-3">
        <Button key="blur" variant="flat" color="warning" onPress={() => handleOpen("blur")} className="capitalize">
           Open
        </Button>
    </div>
    <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        isDismissable={false}
        isKeyboardDismissDisabled={false}
        hideCloseButton={true}
        defaultOpen={true}
    >
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="flex flex-col gap-1">Connection</ModalHeader>
                <ModalBody>
                    <Button isIconOnly color="warning" variant="faded" className="w-full h-min p-6" aria-label="Connect using MS365">
                        <img src={Ms365} className="pointer-events-none"/>
                    </Button>
                </ModalBody>
                <ModalFooter/>
            </>
            )}
        </ModalContent>
    </Modal>
    </>
    );
}
