import { Button } from "@mui/material";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.navbar}>
      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </Button>
    </div>
  );
};

export default Navbar;
