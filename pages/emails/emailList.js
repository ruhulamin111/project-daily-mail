import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Section from "../../components/Section";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from "../../components/EmailRow";
import { useEffect, useState } from "react";
import database from "../../firebaseInit/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Emails() {
    let abc = []
    useEffect(() => {
        const getDocuments = async () => {
            const q = query(collection(database, "emails"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => abc.push(doc.data()));
        }
        console.log(abc);
        getDocuments()
    }, [])
    console.log(abc)

    return (
        <div className='emailList'>
            <div className='emailList-settings'>
                <div className="emailList-settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList-settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsApplicationsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList-sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="emailList-list">
                {
                    abc.map((a, i) => <EmailRow
                        key={i}
                        title={a.to}
                        subject={a.subject}
                        description={a.message}
                        time='10pm'
                    />)
                }
                <EmailRow
                    title='Hi'
                    subject='hello'
                    description='name'
                    time='10pm'
                />

            </div>

        </div>
    )
}
