import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { v4 as uuidv4 } from "uuid";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

export default function Menubar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  bg-gray-900  ">
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          background: "#000000",
        }}
      >
        <EffectComposer>
          <Fluid />
        </EffectComposer>
      </Canvas>
      <div className="">
        <Button
          className=" px-96"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ backgroundColor: "white", color: "black" }}
        >
          Select Language
          <i className="ri-arrow-down-s-line"></i>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <a
              href={`code/javascript/${uuidv4()}`}
              className="h-[120%] w-[140%]"
            >
              Javascript
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href={`code/java/${uuidv4()}`} className="h-[120%] w-[140%]">
              Java
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href={`code/python/${uuidv4()}`} className="h-[120%] w-[140%]">
              Python
            </a>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
