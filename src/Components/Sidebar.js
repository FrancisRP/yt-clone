/** @jsx jsx */ import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const sidebar = css`
    flex: 0.2;
`;
const sidebarFlex = css`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const sidebarIcons = css`
    color: #606060;
`;

const sidebarText = css`
    color: #030303;
    font-size: 16px;
    font-weight: 400;
`;

const divider = css`
    height: 1px;
    border: 0;
    background-color: #606060;
    margin-top: 10px;
    margin-bottom:10px;
`;

function Sidebar() {
    return (
        <div className="sidebar" css={sidebar}>
            <div className="sidebar__container">
                <SidebarRow selected Icon={HomeIcon} title="Home" />
                <SidebarRow Icon={WhatshotIcon} title="Trending" />
                <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
                <hr css={divider}/>
                <SidebarRow Icon={VideoLibraryIcon} title="Library" />
                <SidebarRow Icon={HistoryIcon} title="History" />
                <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
                <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
                <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
                <hr css={divider}/>
            </div>
        </div>
    )
}

export default Sidebar
