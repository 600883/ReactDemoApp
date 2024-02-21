import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        <Link component={RouterLink} to="/" color="inherit" variant="h6">Microsoft identity platform</Link>
                    </Typography>
                    <Button component={RouterLink} to="/Examples" color="inherit">Examples</Button>
                    {/* <WelcomeName /> */}
                    <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>
                    <SignInButton />
                    <SignOutButton />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;