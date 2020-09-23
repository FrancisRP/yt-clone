/** @jsx jsx */ import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'
import { Avatar } from "@material-ui/core";

const videoCardContainer = css`
    width: 330px;
    margin: 0 10px 40px 10px;
    cursor: pointer;
`;

const thumbnail = css`
    width: 100%;
    max-width: 330px;
    height: 100%;
    max-height: 201px;
    object-fit: cover;
`;

const videoCardInfo = css`
    display: flex;
    margin-top: 10px;
`;

const videoCardAvatar = css`
    margin-right: 15px;
    height: 36px !important;
    width: 36px !important;
`;

const videoCardtext = css`
    font-size: 15px;
    color: #606060;
`;

const videoCardTitle = css`
    color: #030303;
    font-size: 16px;
    margin-bottom: 3px;
`;

function VideoCard({ image, title, channel, timestamp, channelImage, views}) {
    return (
        <div className="videoCard" css={videoCardContainer}>
            <img className="videoCard_thumbnaill" src={image} alt="" css={thumbnail} />
            <div className="videoCard__info" css={videoCardInfo}>
                <Avatar className="videoCard__avatar" src={channelImage} alt={channel}  css={videoCardAvatar} />
                <div className="videoCard__text">
                    <h4 css={videoCardTitle}>{title}</h4>
                    <p css={videoCardtext}>{channel}</p>
                    <p css={videoCardtext}>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
