import Image from "next/image";

import { Card } from "~/collections"

import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledContentContainer,
    StyledVideoContainer,
    StyledBackgroundContainer,
    StyledCardsWrapper,
} from "./elements";

export const Main = ({ video, background, title, description, ctaText, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledContentContainer>
                <StyledBackgroundContainer>
                    <StyledVideoContainer>
                        <Image layout='fill' objectFit="cover" src={video.src} alt={video.alt} />
                    </StyledVideoContainer>
                </StyledBackgroundContainer>
                <StyledCardsWrapper>
                    <Card
                        width='80%'
                        icon='/img/calculating.png'
                        subheading='Brief'
                        description={`Complete <strong> brief writing or simple guidance </strong> on what to include, we've got you covered.`}
                    />
                    <Card
                        width='85%'
                        subheading='Search'
                        icon='/img/presentation.png'
                        description={`In depth agency search covering; <strong> criteria matching </stong> door knocking and due-dilligence wetting.`} />
                    <Card
                        width='90%'
                        subheading='Pitch'
                        icon='/img/workshop.png'
                        description={`Comprehensive <strong> pitch management<strong>, including comms, diary management and pitch hosting.`} />
                </StyledCardsWrapper>
            </StyledContentContainer>
        </StyledContainer>
    );
};
