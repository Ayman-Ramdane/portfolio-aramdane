import {styled, Box, Link} from "@mui/material";
import {StyleConstants} from "../../styles/StyleConstants";
import Contact from "../../data/Contact.json";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {FaItchIo} from "react-icons/fa";

const FooterContainer = styled(Box)(({theme}) => ({
    height: 150,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: StyleConstants.FOOTER,
    bottom: 0,
    zIndex: 1,
    fontWeight: 600,
    "& .mail": {
        display: "flex",
        padding: 6,
        minWidth: 350,
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            paddingRight: 12,
            fontSize: 32,
        },
    },
    "& .links": {
        display: "flex",
        padding: 6,
        width: 100,
        justifyContent: "space-between",
        "& svg": {
            paddingRight: 12,
            fontSize: 32,
        },
    },
    "& .divider": {
        height: 7,
        borderTop: "1px solid rgba(0,0,0,0.1)",
        width: "95%",
    },
    "& .creator": {
        fontSize: 10,
        opacity: 0.85,
        padding: "0 0 5px",
        "& a": {
            textDecoration: "none",
            color: StyleConstants.WHITE_COLOR,
            "&:hover": {
                color: StyleConstants.HEADER,
            }
        },
    },
    "& .actions": {
        padding: 5,
        "& button": {
            marginRight: 6,
        },
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 14,
    },
}));
export const Footer = () => {
    const {emailId = "", linkedIn = "", itchio = "", github = ""} = Contact;
    return (
        <FooterContainer>
            <Box className="mail">
                <AiOutlineMail/> {emailId}
            </Box>
            <Box className="links">
                {github && (
                    <div>
                        <Link href={github} target="_blank" style={{color: "white"}}>
                            <AiFillGithub/>
                        </Link>
                    </div>
                )}
                {linkedIn && (
                    <div>
                        <Link href={linkedIn} target="_blank" style={{color: "white"}}>
                            <AiFillLinkedin/>
                        </Link>
                    </div>
                )}
                {itchio && (
                    <div>
                        <Link href={itchio} target="_blank" style={{color: "white"}}>
                            <FaItchIo/>
                        </Link>
                    </div>
                )}
            </Box>
            <Box className="divider"/>
            <Box className="creator">
                2022 - Template created by{" "}
                <a rel="noreferrer" href="https://github.com/harini24/Life-folio" target="_blank">
                    Harini Sivakumar
                </a>
                {" "}- Using{" "}
                <a href="https://www.flaticon.com/" title="game controller icons">icons</a>
                {" "}created by Freepik, prettycons and Smashicons - Flaticon
            </Box>
        </FooterContainer>
    );
};
