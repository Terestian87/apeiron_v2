import React, { useState } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import Spiral from "../components/Spiral";
import { motion } from "framer-motion";

//#region Styled components
const StyledNotesWrapper = styled("div")`
  display: flex;
  width: 100%;
  height: calc(100vh - ${process.env.REACT_APP_NAVBAR_HEIGHT});
  `;

const StyledFormAnimator = styled(motion.div)`
  width: 100%;
  display: flex;
  `;

const StyledSpiralAnimator = styled(motion.div)`
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  `;
//#endregion

const Notes = () => {
  const [spiral, setSpiral] = useState<boolean>(false);
  return (
    <StyledNotesWrapper>
      <StyledFormAnimator
        animate={{
          opacity: spiral ? 0 : 1,
        }}
        transition={{
          duration: spiral ? 6 : 1,
        }}
      >
        <Form setSpiral={setSpiral} spiral={spiral} />
      </StyledFormAnimator>
      <div className="spiralPositioner ">
        {spiral && (
          <StyledSpiralAnimator
            animate={{ opacity: spiral ? 1 : 0 }}
            onAnimationComplete={() =>
              setTimeout(() => {
                setSpiral(false);
              }, 5000)
            }
            transition={{ duration: 2 }}
          >
            <Spiral isReverse={false} />
          </StyledSpiralAnimator>
        )}
      </div>
    </StyledNotesWrapper>
  );
};

export default Notes;
