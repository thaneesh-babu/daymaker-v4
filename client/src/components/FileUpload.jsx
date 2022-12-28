import { Button, Box } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import "../App.css";
import { useRef } from "react";

// https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
export default function FileUpload(props) {
    const { formInputRef = useRef() } = { ...props };
    const WrapperHandler = () => {
        formInputRef.current.click();
    };
    const {
        formInputChangeHandler = (event) => {
            console.log(formInputRef.current.files);
        },
    } = { ...props };

    return (
        <Box>
            <Button onClick={WrapperHandler}>
                Upload File <AttachmentIcon ml={3} />
            </Button>
            <input
                onChange={formInputChangeHandler}
                style={{ display: "none" }}
                type="file"
                ref={formInputRef}
            />
        </Box>
    );
}
