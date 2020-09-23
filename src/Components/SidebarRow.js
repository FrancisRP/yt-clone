/** @jsx jsx */ import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'

const sidebarIcons = css`
    color: #606060;
    margin-right: 24px;
`;

const sidebarText = css`
    color: #030303;
    font-size: 15px;
    font-weight: 400;
    flex: 1;
`;

const sidebarFlex = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;
    transition: all ease .3s;
    &:hover {
        background: #f2f2f2;
        .sidebarIcon {
            color: red;
        }
    }
`;

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className="sidebarRow">
            <div className={`sidebar__options ${selected && 'selected'}`} css={sidebarFlex}>
                <Icon css={sidebarIcons} className="sidebarIcon" />
                <h5 css={sidebarText}>{title}</h5>
            </div>
        </div>
    )
}

export default SidebarRow
