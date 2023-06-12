import faiveleytransporttours from "../assets/faiveleytransporttours.png";
import lesrestosducoeur from "../assets/lesrestosducoeur.png";
import Esp32 from "../assets/ESP32.jpg";
import GamingSquad from "../assets/gamingsquad.png";
import Velib from "../assets/velib.png";
import Portfolio from "../assets/portfolio.png";
import SimpleGE from "../assets/simplege.png";
import WaterLoose from "../assets/waterloose.png";
import ScalesNForks from "../assets/SnF.png";
import FormFinder from "../assets/formfinder.png";
import ADN from "../assets/adn.png";
import JungleFroide from "../assets/junglefroide.png";


interface Map {
    [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
    lesrestosducoeur: lesrestosducoeur,
    faiveleytransporttours: faiveleytransporttours,
};

export enum Constants {
    USERNAME = "Ayman RAMDANE",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
    "controlling relays with a esp32": Esp32,
    "qr code scanning for gaming squad startup - typescript": GamingSquad,
    "bike renting app in paris - kotlin": Velib,
    "portfolio": Portfolio,
    "simple game engine - c++": SimpleGE
};

export const gameImage: Map = {
    "waterloose": WaterLoose,
    "scales and forks": ScalesNForks,
    "form finder": FormFinder,
    "absolute destruction nyudo": ADN,
    "jungle froide": JungleFroide
};
