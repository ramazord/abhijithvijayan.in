import React from 'react';
import styled from 'styled-components';

const EmailWrapper = styled.div`
    font-family: ${props => {
        return props.theme.sfmono;
    }};
    font-weight: ${props => {
        return props.theme.medium;
    }};
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: 40px;

    div {
        width: 100%;
        margin: 0px auto;
        position: relative;
        text-align: center;

        &::after {
            content: '';
            display: block;
            width: 1px;
            height: 90px;
            background-color: ${props => {
                return props.theme.lightBlue;
            }};
            margin: 0px auto;
        }

        a {
            writing-mode: vertical-rl;
            font-size: 13px;
            letter-spacing: 2px;
            margin: 20px auto;
            padding: 10px;
        }
    }
`;

const RightSidebar = () => {
    return (
        <EmailWrapper className="d-md-block d-none">
            <div>
                <a
                    className="fade-link"
                    href="mailto:iam@abhijithvijayan.in"
                    title="Email"
                    data-toggle="tooltip"
                    data-placement="left"
                >
                    iam@abhijithvijayan.in
                </a>
            </div>
        </EmailWrapper>
    );
};

export default RightSidebar;