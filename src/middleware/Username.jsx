import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect({ to }) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

export default function Username({children}) {
    const storedName = localStorage.getItem('name');

    if (!storedName) {
        return <Redirect to="/404" />
    }
    return children;
}
