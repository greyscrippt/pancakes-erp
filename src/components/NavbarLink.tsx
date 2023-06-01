import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface NavbarLinkProps {
    name: string,
    uri: string,
}

export default function NavbarLink(props: NavbarLinkProps) {
    return(
        <li>
            <Link className="navbar-link" to={props.uri}>
                <Button variant="contained">
                    {props.name}
                </Button>
            </Link>
        </li>
    );
}
