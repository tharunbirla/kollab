import React from 'react'
import './SwipeButtons.css'
// Icons
import CloseIcon from '@mui/icons-material/Close';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DoneIcon from '@mui/icons-material/Done';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <button><CloseIcon className="swipeButtons_close" fontSize="large" /></button>
            <button className="downBtn"><ThumbDownIcon className="swipeButtons_down" fontSize="large" /></button>
            <button className="playBtn"><PlayArrowIcon className="swipeButtons_play" fontSize="large" /></button>
            <button className="upBtn"><ThumbUpIcon className="swipeButtons_up" fontSize="large" /></button>
            <button><DoneIcon className="swipeButtons_done" fontSize="large" /></button>
        </div>
    )

}

export default SwipeButtons