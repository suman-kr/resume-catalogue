import React, { useState } from "react";
import { SideBarStyled } from "./styled";
import { WizardStyled } from "../Wizard/styled";
import { SummerResume } from "../Resume/Layouts/Summer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

const { SideBar, ViewText } = SideBarStyled();
const { Button } = WizardStyled();
export const ResumeSideBar: React.FC<any> = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const _handleSidebar = () => {
    setSideBar((prevValue: boolean) => {
      if (!prevValue) {
        {
          document.getElementById("overlay")!.style.display = "block";
          document.getElementById("mySidebar")!.style.width = "70%";
        }
      } else {
        document.getElementById("overlay")!.style.display = "none";
        document.getElementById("mySidebar")!.style.width = "0";
      }
      return !prevValue;
    });
  };

  return (
    <>
      <Button
        className="view-button"
        onClick={_handleSidebar}
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <ViewText>VIEW</ViewText>
      </Button>
      <div id="overlay"></div>
      <SideBar>
        <div id="mySidebar" className="sidebar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "sticky",
            }}
          >
            <div style={{ color: "white", padding: "10px" }}>RESUME VIEW</div>
            <div
              style={{ color: "white", padding: "10px", cursor: "pointer" }}
              onClick={_handleSidebar}
            >
              Close
            </div>
          </div>
          <SummerResume forms={props.forms} />
        </div>
      </SideBar>
    </>
  );
};
