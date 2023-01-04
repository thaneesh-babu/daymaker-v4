import React, { Component } from 'react';
import { Box, Flex, Text, Heading, Button, useDisclosure, Modal, Editable, EditablePreview, EditableInput, useEditableControls } from '@chakra-ui/react';
import Calendar from 'react-calendar'
import { useState } from 'react';
import TimelineCard from './TimelineCard';
import { createContext } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

export let EditContext = createContext();

function EditEvents() {
    /**
     * NOTES: 
     * has multiple modes
     * react-calendar, react-time-range-picker react-date-picker
     * make my own day view
     * click on events to open an edit modal
     */

    // mode: calendar | day
    const [mode, setMode] = useState('calendar')
    const [day, setDay] = useState("")
    const [modalTitle, setModalTitle] = useState("")
    const [modalTime, setModalTime] = useState(['10:00', '11:00'])
    const [modalDesc, setModalDesc] = useState("")
    const {onOpen, isOpen, onClose} = useDisclosure();

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
            <Box
                h="90%" 
                w="50%" 
                border="0.5px solid gray"
                borderRadius="25px" 
                alignItems="center"
                boxShadow="2px 2px 5px">
                
                <Flex  
                    w="100%"
                    alignItems="center"
                    py="2%"
                    flexDirection="column"
                    > 
                    <Text 
                        fontSize="2.5rem" 
                        fontWeight="bold" 
                        w="75%"
                        onClick={changeMode}
                        borderBottom="medium solid gray"
                        > {day} 
                    </Text>
                    <EditContext.Provider value={{setModalTitle, setModalTime, setModalDesc, onOpen, onClose, isOpen}} >
                    <Flex flexDirection="column" w="100%" overflowY="scroll" scrollBehavior="smooth">
                        <TimelineCard time={['11:00','11:30']} title="MATH 1552" desc="square regressive factorials" />
                        <TimelineCard time={['13:45','15:00']} title="MATH 1552" desc="square regressive factorials" />
                    </Flex>
                    </EditContext.Provider>
                </Flex>
                
            </Box>}
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