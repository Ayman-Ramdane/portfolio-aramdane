import {Box, styled} from "@mui/material";
import ProjectImg from "../../../assets/project.jpg";
import {gameImage} from "../../../data/constants";
import {CustomButton} from "../../../styles/sectionStyles";
import {StyleConstants} from "../../../styles/StyleConstants";

interface game {
    name?: string;
    description?: string;
    role?: string;
    demoLink?: string;
}

interface Prop {
    game: game;
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
const GameWrapper = styled(Box)(({theme}) => ({
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
export const Game = ({game}: Prop) => {
    const {
        name = "",
        description = "",
        role = "",
        demoLink = "",
    } = game;
    return (
        <GameWrapper>
            <InfoWrapper>
                <div className="name bold">{name}</div>
                <div className="desc">{description}</div>
                <div className="desc">{`Role : ${role}`} </div>
                <div className="actions">
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
                    src={gameImage[name.toLowerCase()] || ProjectImg}
                    alt="game"
                />
            </ImageBox>
        </GameWrapper>
    );
};
