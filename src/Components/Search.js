/** @jsx jsx */ import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'
import TuneIcon from '@material-ui/icons/Tune';

const searchFlex = css`
    flex: 0.8;
    background-color: #f9f9f9;
    padding-bottom: 0;
    padding: 40px 50px;
`;

const searchFilter = css`
    display: flex;
    align-items: center;
    color: #606060;
    font-size: 15px;
`;

const searchFilterTitle = css`
    margin-left: 10px;
    font-size: 18px;
    font-weight: 500;
`;

function Search() {
    return (
        <div className="search"  css={searchFlex}>
            <div className="search__filter" css={searchFilter}>
                <TuneIcon />
                <h2 css={searchFilterTitle}>Filter</h2>
            </div>
        </div>
    )
}

export default Search
