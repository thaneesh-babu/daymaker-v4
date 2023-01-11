import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import EditEvents from "../components/EditEvents/EditEvents";

export default function EditEventsPage() {
    const navigate = useNavigate();
    return (
        <>
            <EditEvents />
            <Button onClick={() => {
                navigate("/")
            }}>Start over</Button>
        </>
    );
}
