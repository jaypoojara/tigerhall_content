import { DurationProps } from "./type";
import TimeIcon from "../../assets/icons/TimeIcon.svg";
import { Container } from "./style";
import { XSHeaderBold } from "../TextComp/style";
import { theme } from "../../common/theme";

const Duration = ({ time }: DurationProps) => {
  return (
    <Container>
      <img src={TimeIcon} alt="TimeIcon" />
      <XSHeaderBold color={theme.palette.white}>{time}</XSHeaderBold>
    </Container>
  );
};

export default Duration;
