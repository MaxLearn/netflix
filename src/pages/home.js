import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Feature, OptForm } from "../components";
import HeaderContainer from "../containers/header";
import FaqsContainer from "../containers/faqs";
import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <HeaderContainer>
          <Feature>
            <Feature.Title>
              Unlimited films, TV programmes and more.
            </Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
            <OptForm>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Try it now</OptForm.Button>
              <OptForm.Break />
              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership
              </OptForm.Text>
            </OptForm>
          </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </Route>
    </Router>
  );
}
