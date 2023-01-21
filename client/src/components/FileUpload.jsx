import { Button, Box, Square } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { useRef } from "react";

// https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
export default function FileUpload(props) {
    const { fileInputRef = useRef() } = { ...props };
    const WrapperHandler = () => {
        fileInputRef.current.click();
    };
    const {
        onChangeHandler = (event) => {
            console.log(fileInputRef.current.files);
        },
    } = { ...props };

    return (
        <Box>
            <Square size={150}as={Button} onClick={WrapperHandler}>
                <Box>
                    Upload File <AttachmentIcon ml={2} />
                </Box>
            </Square>
            <input
                onChange={onChangeHandler}
                style={{ display: "none" }}
                type="file"
                ref={fileInputRef}
            />
        </Box>
    );
}
