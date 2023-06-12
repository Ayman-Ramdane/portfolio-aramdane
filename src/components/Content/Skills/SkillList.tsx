import {Box, styled} from "@mui/material";
import Programming from "../../../assets/programming.png";
import Software from "../../../assets/software.png";
import Language from "../../../assets/languages.png";
import SoftSkill from "../../../assets/softSkills.png";

import {StyleConstants} from "../../../styles/StyleConstants";

interface Prop {
    skills: string[];
    type: string;
}

const SkillListWrapper = styled(Box)(() => ({
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .skillType": {
        width: "80%",
        textAlign: "center",
        border: "1px solid black",
        background: StyleConstants.SKILLS_BG,
    },
    "& .skillIcon": {
        height: 75,
        width: 75,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: "50%",
        position: "absolute",
        background: StyleConstants.SKILLS_BG,
        top: 23,
        "& img": {
            height: 58,
            width: 58,
        },
    },
    "& .skillsList": {
        display: "flex",
        flexDirection: "column",
        justifyContent: StyleConstants.SKILLS_BG,
        width: 250,
        height: 250,
        marginTop: 78,
        border: "1px solid black",
        background: "#2f2b3a",
        padding: 25,
        "& div": {
            padding: 3,
        },
    },
}));
export const SkillList = ({type, skills}: Prop) => {
    return (
        <SkillListWrapper>
            <Box
                className="skillType bold">{type === "softSkills" ?
                "Soft Skill" : type === "softwares" ?
                    "Softwares" : type === "languages" ?
                        "Languages" : "Programming"}</Box>
            <Box className="skillIcon">
                <img
                    src={type === "softSkills" ?
                        SoftSkill : type === "softwares" ?
                            Software : type === "languages" ?
                                Language : Programming} alt={"Skill Icon"}/>
            </Box>
            <Box className="skillsList">
                {skills.map((skill, ind) => (
                    <div key={ind}>{`${skill}`}</div>
                ))}
            </Box>
        </SkillListWrapper>
    );
};
