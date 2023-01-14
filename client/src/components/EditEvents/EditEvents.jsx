import React from 'react';
import { Box, Flex, Text, Button, useDisclosure, Modal, Editable, EditablePreview, EditableInput} from '@chakra-ui/react';
import Calendar from 'react-calendar'
import { useState } from 'react';
import TimelineCard from './TimelineCard';
import { createContext } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { useEffect } from 'react';

export let EditContext = createContext();

function EditEvents() {
    // mode: calendar | day
    const [mode, setMode] = useState('calendar')
    const [day, setDay] = useState("")
    const [eventData, setEventData] = useState([]);
    const [modalTitle, setModalTitle] = useState("")
    const [modalTime, setModalTime] = useState(['10:00', '11:00'])
    const [modalDesc, setModalDesc] = useState("")
    const [modalID, setModalID] = useState("") 
    const {onOpen, isOpen, onClose} = useDisclosure();
    //const navigation = useNavigation();
    

    const changeMode = (value) => {
        if (mode === 'calendar') {
            setMode('day')
            // get events of the day, display on card
            let selectedDay = "";
            for (let i = 0; i < 4; i++) {
                selectedDay += value.toString().split(" ")[i] + " "
            }
            setDay(selectedDay)
        } else {
            setMode('calendar')
        }
    }   

    useEffect(() => {
        setEventData(mock_data);
    }, [])

    useEffect(() => {
        for (let i = 0; i < eventData.length; i++) {
            if (i === modalID) {
                let temp = eventData;
                temp[i].eventName = modalTitle;
            }
        }
    }, [modalTitle, modalTime, modalDesc])

    // dont change server data, duplicate it and change it there
    const mock_data = [
        {
            "eventId": 0,
            "date": "Thu Jan 12 2023 11:30",
            "eventName": "PHYS 2211",
            "courseId": 0,
            "duration": "00:30"
        },
        {
            "eventId": 1,
            "date": "Thu Jan 12 2023 13:40",
            "eventName": "PHYS 2211",
            "courseId": 0,
            "duration": "00:45"
        },
        {
            "eventId": 2,
            "date": "Thu Jan 12 2023 15:30",
            "eventName": "CS 1331",
            "courseId": 1,
            "duration": "00:20"
        }
    ]

    return (
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" >
        {mode === 'calendar' ? 
            <Box 
                w="40%"
                h="40%"
                border="0.5px solid gray"
                borderRadius="25px"
                boxShadow="2px 2px 5px"
                py="4%"
                px="1%"
            >
                <Calendar onClickDay={changeMode} />
            </Box>
        : 
            <Flex  
                w="60%"
                alignItems="center"
                py="2%"
                flexDirection="column"
                h="90%" 
                border="0.5px solid gray"
                borderRadius="25px" 
                boxShadow="2px 2px 5px"
                > 
                <Text 
                    fontSize="2.5rem" 
                    fontWeight="bold" 
                    w="75%"
                    onClick={changeMode}
                    borderBottom="medium solid gray"
                    > {day} 
                </Text>
                <EditContext.Provider value={{setModalTitle, setModalTime, setModalDesc, onOpen, onClose, isOpen, setModalID, eventData}} >
                    <Flex flexDirection="column" w="100%" h="100%" overflowY="auto">
                        {eventData.map((d, i) => {
                            // calculates the end time using date and duration
                            let startTime = d.date.split(" ")[4];
                            let mins = parseInt(startTime.split(":")[1]) + parseInt(d.duration.split(":")[1]);
                            let hrs = parseInt(startTime.split(":")[0])
                            let endTime;
                            if (mins >= 60) {
                                hrs++;
                                mins = mins % 60;
                            } 
                            endTime = (hrs > 9 ? hrs : "0" + hrs) +  ":" + (mins > 9 ? mins : "0" + mins);
                            return <TimelineCard id={d.eventId} time={[startTime, endTime]} title={d.eventName} desc="square" isLast={i == eventData.length - 1} data={eventData[i]} />
                        })}
                    </Flex>
                </EditContext.Provider>
            </Flex>}
            <Button pos='absolute' top='0' left='0' p='2%' m='2%'> 
                back
            </Button>
            <Modal isOpen={isOpen} >
                <Flex flexDirection="column" h="40vh" w="70vw" pos="absolute"
                        left="50%"
                        top="50%"
                        transform="translate(-50%, -50%)" 
                        borderRadius="25px" 
                        px="2%" py="1%" border="1px solid gray" 
                        bgColor="gray.500">
                    <Box h="80%" w="100%">
                        <Editable fontSize="6xl" defaultValue={modalTitle}>
                            <EditablePreview />
                            <EditableInput onChange={(e) => {setModalDesc(e.target.value)}} />
                        </Editable>
                        <TimeRangePicker value={modalTime} onChange={setModalTime} disableClock={true} />
                        <Editable fontSize="3xl" defaultValue={modalDesc}>
                            <EditablePreview />
                            <EditableInput onChange={(e) => {setModalDesc(e.target.value)}}  />
                        </Editable>
                    </Box>
                    <Flex justifyContent="flex-end" h="20%" w="100%" >
                        <Button onClick={onClose} >save</Button>
                    </Flex>
                </Flex>
            </Modal>
        </Flex>
   );
}

export default EditEvents;