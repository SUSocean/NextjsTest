import styled from "styled-components";

import { SectionSubheading, SectionParagraph } from "~/components";


export const StyledCardSubheading = styled((props) => <SectionSubheading {...props} />)`
font-weight: 600;
margin: 0;
`;

export const StyledSectionParagraph = styled((props) => <SectionParagraph {...props} />)`
margin: 0;
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
    position: relative;
    height: 35px;
    width:  80px;
    padding-right: 45px;
    `;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    `;

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
    display: flex;
    align-items: center;
    float: left;
    background: ${({ theme }) => theme.grayF0};
    padding: 20px 40px;
    max-width: ${(props) => props.width};
    height: 142px;
    margin: 3rem 0;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active{
        background: ${({ theme }) => theme.hover.main};
        border: 3px solid #0070f3;
        ${StyledCardSubheading}{
            color: #0070f3;
            text-decoration: underline;
        }
    }
    }
    @media (max-width: 1024px){
        margin-left: 60px;
    }
    `;