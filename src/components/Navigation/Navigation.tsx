import React, { useState, createRef } from "react";
import { Classes } from "jss";

import rebrewLogoBw from "../../images/rebrew-logo-bw.png";
import Button from "../Button";
import ClickOutsideElementHandler from "../../utils/ClickOutsideElementHandler";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";

interface NavigationProps {
  classes: Classes;
}

const Navigation: React.FC<NavigationProps> = ({ classes }) => {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setSignupModalOpen(false);

    return setLoginModalOpen(true);
  };
  const openSignupModal = () => {
    setLoginModalOpen(false);

    return setSignupModalOpen(true);
  };
  const navRef = createRef<HTMLDivElement>();

  ClickOutsideElementHandler(navRef, () => {
    setLoginModalOpen(false);
    return setSignupModalOpen(false);
  });

  return (
    <div ref={navRef} className={classes.root}>
      <img src={rebrewLogoBw} alt="logo" className={classes.logo} />
      <div className={classes.navButtonsWrapper}>
        <Button flat onClick={openSignupModal}>
          Sign up
        </Button>
        <Button flat onClick={openLoginModal}>
          Log in
        </Button>
      </div>
      {signupModalOpen && (
        <SignupModal onCancel={() => setSignupModalOpen(false)} />
      )}
      {loginModalOpen && (
        <LoginModal onCancel={() => setLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default Navigation;
