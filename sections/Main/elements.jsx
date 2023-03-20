import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: block;
`;


export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
    color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
    margin: .5rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    color: black;
    font-family: sans-serif;
    text-align: center;
    margin: 6rem 0;
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
    margin: 0 auto;
    max-width: 1580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 1024px){
        justify-content: center;
        flex-direction: column;
    }
`;

export const StyledBackgroundContainer = styled(({ ...props }) => <div {...props} />)`
    width: 604px;
    display: block;
    height: 45rem;
    background-image: url('/img/background.png');    
    background-size: cover;
    background-position: left;
    @media (max-width: 1024px){
        margin-left: -33%;
    }
`;

export const StyledVideoContainer = styled(({ ...props }) => <div {...props} />)`
    height: 90%;
    width: 60%;
    float: right;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
`;


export const StyledCardsWrapper = styled(({ height, ...props }) => <div {...props} />)`
    max-width: 604px;
    height: 45rem;
    margin: 0;
    @media (max-width: 1024px){
        margin: 0 auto;
    }
`;
