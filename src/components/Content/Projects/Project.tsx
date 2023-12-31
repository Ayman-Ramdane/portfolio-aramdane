import {Box, styled} from "@mui/material";
import ProjectImg from "../../../assets/project.jpg";
import {projectImage} from "../../../data/constants";
import {CustomButton} from "../../../styles/sectionStyles";
import {StyleConstants} from "../../../styles/StyleConstants";

interface project {
    name?: string;
    description?: string;
    sourceCode?: string;
    sourceCode2?: string;
    sourceCode3?: string;
    demoLink?: string;
}

interface Prop {
    project: project;
}

const InfoWrapper = styled(Box)(() => ({
    "& .name": {
        fontSize: StyleConstants.SIZE_ITEM_TITLE,
    },
    "& .desc": {
        padding: 10,
    },
    "& .actions button": {
        margin: "0 12px 12px 0",
    },
}));
const ProjectWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));
const ImageBox = styled(Box)(({theme}) => ({
    marginRight: 10,
    width: 400,
    "& img": {
        border: "1px solid black",
        width: 400,
    },
    [theme.breakpoints.down("sm")]: {
        width: 350,
        "& img": {
            width: 350,
        },
    },
}));
export const Project = ({project}: Prop) => {
    const {
        name = "",
        description = "",
        sourceCode = "",
        sourceCode2 = "",
        sourceCode3 = "",
        demoLink = "",
    } = project;
    return (
        <ProjectWrapper>
            <InfoWrapper>
                <div className="name bold">{name}</div>
                <div className="desc">{description}</div>
                <div className="actions">
                    {sourceCode === "" ? "" :
                        <CustomButton>
                            <a href={sourceCode} target="_blank" rel="noreferrer">
                                Source Code
                            </a>
                        </CustomButton>}

                    {sourceCode2 === "" ? "" :
                        <CustomButton>
                            <a href={sourceCode2} target="_blank" rel="noreferrer">
                                Source Code 2
                            </a>
                        </CustomButton>}

                    {sourceCode3 === "" ? "" :
                        <CustomButton>
                            <a href={sourceCode3} target="_blank" rel="noreferrer">
                                Source Code 3
                            </a>
                        </CustomButton>}

                    {demoLink === "" ? "" :
                        <CustomButton>
                            <a href={demoLink} target="_blank" rel="noreferrer">
                                Demo
                            </a>
                        </CustomButton>}
                </div>
            </InfoWrapper>
            <ImageBox>
                <img
                    src={projectImage[name.toLowerCase()] || ProjectImg}
                    alt="project"
                />
            </ImageBox>
        </ProjectWrapper>
    )
        ;
};
