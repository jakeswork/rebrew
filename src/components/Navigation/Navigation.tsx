import React, { useState, createRef, Fragment } from "react";
import { Classes } from "jss";

import rebrewLogoBw from "../../images/rebrew-logo-bw.png";
import Button from "../Button";
import ClickOutsideElementHandler from "../../utils/ClickOutsideElementHandler";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";
import { UserAuthorized, logOut } from "../../utils/auth";

interface NavigationProps {
  classes: Classes;
}

const Navigation: React.FC<NavigationProps> = ({ classes = {} }) => {
  const isAuthorizedUser = UserAuthorized();
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
      <a href="/">
        <img src={rebrewLogoBw} alt="logo" className={classes.logo} />
      </a>
      <div className={classes.navButtonsWrapper}>
        {isAuthorizedUser ? (
          <Button flat onClick={logOut}>
            Log out
          </Button>
        ) : (
          <Fragment>
            <Button flat onClick={openSignupModal}>
              Sign up
            </Button>
            <Button flat onClick={openLoginModal}>
              Log in
            </Button>
          </Fragment>
        )}
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
