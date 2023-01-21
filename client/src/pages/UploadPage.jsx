import { Center, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import axios from "axios";
import FormData from "form-data";

export default function UploadPage() {
    const fileInputRef = useRef();
    const navigate = useNavigate();
    const toast = useToast();
    const onChangeHandler = async () => {
        const selectedFile = fileInputRef.current.files[0];
        console.log("selected file", selectedFile);
        try {
            if (selectedFile.name.split(".").pop().toLowerCase() !== "pdf") {
                throw "type error";
            }
            // https://stackoverflow.com/questions/61154675/how-can-i-upload-file-from-react-to-express-server
            const data = new FormData();
            data.append("file", selectedFile);
            const res = await axios.post(
                "http://127.0.0.1:7000/fileUpload",
                data
            );
            console.log(res);
            navigate("/edit");
        } catch (e) {
            const options = {
                title: e.toString(),
                description:
                    e == "type error" ? "PDFs only rn" : "bruh bruh bruh",
                status: "error",
                duration: 6000,
                isClosable: true,
            };
            toast(options);
        }
    };
    return (
        <>
            <Center width="100%" h="100vh">
                <FileUpload
                    fileInputRef={fileInputRef}
                    onChangeHandler={onChangeHandler}
                />
            </Center>
        </>
    );
}
