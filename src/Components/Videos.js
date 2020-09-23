/** @jsx jsx */ import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'

const videos = css`
    flex: 0.8;
    background-color: #f9f9f9;
    padding-bottom: 0;
    padding: 40px 20px;
`;
function Videos() {
    return (
        <div className="videos" css={videos}>
            <h1>All Videos</h1>
        </div>
    )
}

export default Videos
