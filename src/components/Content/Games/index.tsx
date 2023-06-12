import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { Game } from "./Game";
import games from "../../../data/Games.json";
export const GamesContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionWrapper>
      <TitleWrapper>PROJECTS</TitleWrapper>
      <Box>
        {games.map((game,ind) => (
          <Game game={game} key={ind}/>
        ))}
      </Box>
    </SectionWrapper>
  );
};
