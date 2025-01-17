import { Button } from "@mui/material";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.navbar}>
      <Button
        variant="text"
        className={styles.button}
        onClick={() => handleNavigate("/")}
      >
        Home
      </Button>
      <Button
        variant="text"
        className={styles.button}
        onClick={() => handleNavigate("/profile")}
      >
        Profile
      </Button>
    </div>
  );
};

export default Navbar;
