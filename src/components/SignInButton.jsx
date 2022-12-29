import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <Card
      className="text-center shadow"
      style={{ marginLeft: "20rem", marginTop: "50px", marginRight: "20rem" }}
    >
      <Card.Header style={{ backgroundColor: "#1c3d90", color: "white" }}>
        CREW
      </Card.Header>
      <Card.Body>
        <Card.Title>Please click on Sign In to reload the page</Card.Title>
        <Button variant="primary" onClick={() => handleLogin("popup")}>
          Sign In
        </Button>
      </Card.Body>
    </Card>
  );
};
