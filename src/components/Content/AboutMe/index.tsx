import {styled, Box} from "@mui/material";
import MyImage from "../../../assets/my-pic.png";
import ResumeEn from "../../../assets/Ayman RAMDANE_Resume.pdf";
import ResumeFr from "../../../assets/Ayman RAMDANE_CV.pdf";
import {
    CustomButton,
    SectionWrapper,
    TitleWrapper,
} from "../../../styles/sectionStyles";
import aboutMeInfo from "../../../data/AboutMe.json";
import {useEffect} from "react";

const AboutMeContainer = styled(Box)(({theme}) => ({
    display: "flex",
    alignSelf: "center",
    "& img": {
        width: 400,
        [theme.breakpoints.down("sm")]: {
            width: 350,
        },
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const DetailsWrapper = styled(Box)(({theme}) => ({
    fontSize: 16,
    marginLeft: 15,
    "& .actions": {
        margin: "12px 0",
    },
    [theme.breakpoints.down("md")]: {
        margin: "10px 0 0 0",
    },
}));
export const AboutMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SectionWrapper>
            <TitleWrapper>About Me</TitleWrapper>
            <AboutMeContainer>
                <img src={MyImage} alt={"MyImage"}/>
                <DetailsWrapper>
                    <div>{aboutMeInfo.aboutMe}</div>
                    <div className="actions">

                    </div>
                </DetailsWrapper>
            </AboutMeContainer>
        </SectionWrapper>
    );
};
