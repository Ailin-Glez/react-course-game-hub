import { Icon } from "@chakra-ui/react";
import { BsNintendoSwitch, BsPlaystation, BsXbox, BsAndroid2 } from 'react-icons/bs';
import { AiOutlineMacCommand } from 'react-icons/ai';
import { DiLinux } from 'react-icons/di';
import { MdComputer } from 'react-icons/md';
import { Platform } from "@models";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[]
}

const mappedLogos: { [key: string]: IconType } = {
    nintendo: BsNintendoSwitch,
    playstation: BsPlaystation,
    xbox: BsXbox,
    android: BsAndroid2,
    mac: AiOutlineMacCommand,
    pc: MdComputer,
    linux: DiLinux    
}

function PlatformItems({ platforms }: Props) {
    return (
        <>
            {platforms.map(p => <Icon key={p.id} color='gray.500' as={mappedLogos[p.slug]} />)}
        </>
    );
}

export default PlatformItems;