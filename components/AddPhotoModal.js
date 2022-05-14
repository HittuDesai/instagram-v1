import { ActionIcon, Button, Center, Grid, Group, Modal, SimpleGrid, Text, TextInput } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import { useRecoilState } from "recoil";
import modalComponent from "../atoms/modalAtom";

import { useState, useRef } from 'react'
import { MdAddPhotoAlternate, MdCancel, MdUpload, MdError, MdOutlineDone } from 'react-icons/md'

function AddPhotoModal()  {
    const [showModal, setShowModal] = useRecoilState(modalComponent);
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");
    const [dropZoneIcon, setDropZoneIcon] = useState(<MdAddPhotoAlternate size={40}/>);
    const captionRef = useRef(null);

    const dropzoneChildren = (status) => (
        <Group position="center" style={{ pointerEvents: 'none', padding: "1rem" }}>
            <Center style={{width: "100%"}}>
                <Group direction="column" position="center">
                    {dropZoneIcon}
                    <Text size="sm" align="center">
                        Drag images here or click to select files
                    </Text>
                </Group>
            </Center>
        </Group>
    );

    const handleOnPost = () => {
        if(file===null || caption==="") {
            console.log("BRUH");
            return;
        }
        console.log(file);
        console.log(caption);
    }

    return (
        <Modal
        centered
        opened={true}
        withCloseButton={false}
        onClose={() => setShowModal(false)}>
        <Center>
            <Group direction="column" style={{width: "100%", height: "100%"}}>
                <Center
                style={{width: "100%"}}
                onClick={() => {}}
                >
                    <Group direction="row">
                        <Dropzone
                        accept={IMAGE_MIME_TYPE}
                        onDrop={(file) => {
                            setDropZoneIcon(<MdOutlineDone size={40} />);
                            setFile(file);
                            captionRef.current.focus();
                        }}
                        onReject={() => {
                            setDropZoneIcon(<MdError color="red" size={40} />);
                            setTimeout(() => setDropZoneIcon(<MdAddPhotoAlternate size={40} />), 2000)
                        }}
                        >
                            {(status) => dropzoneChildren(status)}
                        </Dropzone>

                        <TextInput
                        ref={captionRef}
                        placeholder="Your name"
                        required
                        style={{width: "100%",}}
                        onChange={(e) => {
                            setCaption(e.target.value);
                        }}
                        />
                        <Group direction="row" position="apart" style={{width: "100%",}}>
                            <Button
                            style={{width: "45%",}}
                            onClick={handleOnPost}
                            >
                                Upload <MdUpload />
                            </Button>
                            <Button
                            style={{width: "45%",}}
                            onClick={() => {
                                setCaption("");
                                setFile(null);
                                setShowModal(false);
                            }}
                            ><MdCancel /></Button>
                        </Group>
                    </Group>
                </Center>
            </Group>
        </Center>
        </Modal>
    );
}

export default AddPhotoModal;
