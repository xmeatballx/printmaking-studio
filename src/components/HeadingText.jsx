import { StyledHeadingText } from "./styled/HeadingText.styled";

const HeadingText = ({
  color,
  alignment,
  mult,
  overlay,
  gridColumn,
  gridRow,
  children,
}) => {
  return (
    <StyledHeadingText
      color={color}
      alignment={alignment}
      mult={mult}
      overlay={overlay}
      gridColumn={gridColumn}
      gridRow={gridRow}
    >
      {children}
    </StyledHeadingText>
  );
};

export { HeadingText };
