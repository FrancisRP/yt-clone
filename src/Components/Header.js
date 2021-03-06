/** @jsx jsx */ import { jsx } from '@emotion/core'
import React , {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from "@material-ui/core";
import { css } from '@emotion/core'
import Tooltip from '@material-ui/core/Tooltip';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const headerFlex = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fff;
`;

const headerLogo = css`
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
`;

const headerLeft = css`
    display: flex;
    align-items: center;
`;

const headerInput = css`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    width: 40%;
`;

const headerInputText = css`
    flex: 1;
    border:none;
    outline: none;
    padding-left: 5px;
    font-size: 16px;
`;

const headerSearch = css`
    border-left: 1px solid #ccc;
    cursor: pointer;
    width: 50px !important;
    color: #333333;
    background: #f8f8f8;
    font-size: 23px !important;
    padding: 5px 15px;
`;

const headerIcons = css`
    display: flex;
    align-items: center;
`;

const headerIconsOptions = css`
    margin-right: 20px;
    color: #606060;
    cursor: pointer;
`;

function Header() {
    const [inputSearch, setInputSearch] = useState('')
    return (
        <div className="header" css={headerFlex}>
            <div className="header__left" css={headerLeft}>
                <MenuIcon />
                <Link to={'/'}>
                    <img
                        className="youtube__logo"
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
                        css={headerLogo}
                    />
                </Link>    
            </div>

            <div className="header__search" css={headerInput}>
                <input 
                    type="text" 
                    css={headerInputText}
                    placeholder="Search"
                    value={inputSearch}
                    onChange={ e => setInputSearch(e.target.value)}
                />
                <Link to={`/search/${setInputSearch}`}>
                    <SearchIcon 
                        className="header__searchBtn" 
                        css={headerSearch}
                    />
                </Link>
            </div>

            <div className="header__right" css={headerIcons}>
                <Tooltip
                    title="Create"
                    placement="bottom"
                >
                    <VideoCallIcon className="header__option" css={headerIconsOptions}/>
                </Tooltip>
                <Tooltip
                    title="YouTube apps"
                    placement="bottom"
                >
                    <AppsIcon className="header__option" css={headerIconsOptions} />
                </Tooltip>
                <Tooltip
                    title="Notification"
                    placement="bottom"
                >
                    <NotificationsIcon  className="header__option" css={headerIconsOptions}/>
                </Tooltip>
                
                <Avatar 
                    alt="Francis Pegenia"
                    src="https://avatars2.githubusercontent.com/u/42527972?s=460&u=c6b5fb62eacf4ecb9d4932a7e7455313e17195fe&v=4"
                />
            </div>
        </div>
    )
}

export default Header;
