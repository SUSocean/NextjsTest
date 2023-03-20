import { CardContainer, StyledCardSubheading, StyledSectionParagraph, StyledIconContainer, StyledTextContainer } from "./elements";

import Image from "next/image";

export function Card({ ...props }) {



    return (
        <CardContainer {...props}>
            <StyledIconContainer>
                <Image src={props.icon} layout='responsive' alt="" width='55' height='55' />
            </StyledIconContainer>
            <StyledTextContainer>
                <StyledCardSubheading>
                    {props.subheading}
                </StyledCardSubheading>
                <StyledSectionParagraph dangerouslySetInnerHTML={{ __html: props.description }}>
                </StyledSectionParagraph>
            </StyledTextContainer>
        </CardContainer >
    );
};
