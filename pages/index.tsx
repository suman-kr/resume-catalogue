import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useCookies, Cookies } from "react-cookie";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { connect } from "react-redux";
import { NavBar } from "../src/Components/NavBar";
import StepWizard from "../src/Components/Wizard";
import { FormActions } from "../src/Redux/Actions/FormActions";

const Main = (props: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (cookies.token) {
      setLoggedIn(true);
    }
  }, []);

  const _handleSuccess = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    res = (res as unknown) as GoogleLoginResponse;
    setCookie("token", res.tokenId);
    setLoggedIn(true);
    fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${res.tokenId}`
    )
      .then((res) => res.json())
      .then((res) =>
        props.updateForms({
          ...props.forms,
          fullName: res.name,
          email: res.email,
        })
      );
  };
  return (
    <>
      <Head>
        <title>Fill Details</title>
      </Head>
      <NavBar user={props.forms.fullName} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {loggedIn ? (
          <StepWizard {...props} key={props.forms} />
        ) : (
          <div style={{ marginTop: "5em" }}>
            <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
              buttonText="Log In with Google"
              onSuccess={_handleSuccess}
              onFailure={(err) => console.error(err)}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (store: any) => {
  const { forms } = store;
  return {
    forms,
  };
};

const mapDispatchToProps = {
  updateForms: FormActions.UpdateForms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
