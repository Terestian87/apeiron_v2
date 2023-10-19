import React from "react";
import styled from "styled-components";


interface ContainerProps {
  children: JSX.Element[]
}

const StyledPageContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 40px;
  max-width: 80%;
`;

const PageContainer: React.FC<ContainerProps> = (props: ContainerProps) => {
  return <StyledPageContainer>{props.children}</StyledPageContainer>;
};

export default PageContainer;
