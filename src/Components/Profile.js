import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import '../assets/Profile.css'
import app from '../firebase'

function Profile() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const userType = [
        {
            value: 'Admin',
            label: 'Admin',
        },
        {
            value: 'Staff',
            label: 'Staff',
        },
        {
            value: 'User',
            label: 'User',
        },
        {
            value: 'Test',
            label: 'Test',
        },
    ];

    return (
        <div className="profile">
            <div className="settings">
                <h1>Settings</h1>
                <div className="settings_container">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                General settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>Username, Bio, Email, Tags</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="message">
                                    These details will be visible to other users
                                </p>
                                <div className="input">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        id="outlined-read-only-input"
                                        label="Username"
                                        defaultValue="Test"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <div className="input">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        id="outlined-read-only-input"
                                        label="Email"
                                        defaultValue="test@test.com"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <div className="input">
                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        id="outlined-multiline-flexible"
                                        label="Bio"
                                        multiline
                                        sx={{ width: '100%' }}
                                        maxRows={4}
                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input">
                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        id="outlined-multiline-flexible"
                                        label="Tags"
                                        multiline
                                        sx={{ width: '100%' }}
                                        maxRows={4}
                                        defaultValue="EDM, Beat producer, Composer"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        id="outlined-read-only-input"
                                        label="Demo (optional)"
                                        defaultValue="https://file.link/demo-music.mp3"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>User</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                You are currently not a user
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="message">
                                    You are using a test account.
                                </p>
                                <div className="input">
                                    <TextField
                                        disabled
                                        sx={{ width: '100%' }}
                                        id="outlined-select-currency"
                                        select
                                        label="User Tpye"
                                        value={userType}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="message topMargin">
                                    Looking for:
                                </p>
                                <div className="input">
                                    <TextField
                                        disabled
                                        sx={{ width: '100%' }}
                                        id="outlined-read-only-input"
                                        label=""
                                        defaultValue="vocalist, singer"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Advanced settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Reset Password
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className="input">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        id="outlined-read-only-input"
                                        label="Password"
                                        type="password"
                                        defaultValue="Test"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <a onClick={() => app.auth().signOut()} className="save">Save</a>
                <a href="" className="logout">Logout</a>
            </div>
        </div>
    )
}

export default Profile