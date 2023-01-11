import { Center, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";

export default function UploadPage() {
    const fileInputRef = useRef();
    const navigate = useNavigate();
    const toast = useToast();
    const onChangeHandler = async () => {
        const selectedFile = fileInputRef.current.files[0]
        try {
            if (selectedFile.name.split(".").pop().toLowerCase() !== "pdf") {
                throw "type error";
            }
            navigate("/edit")
        } catch (e) {
            const options = {
                "type error": {
                    title: "Invalid File Type",
                    description: "DayMaker currently supports PDF files only",
                    status: "error",
                    duration: 6000,
                    isClosable: true,
                }
            }
            toast(options[e])
        }
        // use fetch to make post request
        // upon successful request:
    }
    return <>
        <Center width="100%" h="100vh">
            <FileUpload fileInputRef={fileInputRef} onChangeHandler={onChangeHandler} />
        </Center>
    </>
}