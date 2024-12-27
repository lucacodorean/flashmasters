import {useUser} from "../contexts/userContext";
import {useEffect} from "react";
import Spinner from "../components/Spinner.jsx";
import {delay} from "../utils/delay.jsx";
import api from "../utils/api.jsx";
import {mapToUserModel} from "../models/user";

const GoogleLoginBuffer = () => {
    const {user, setUser} = useUser();

    useEffect( () => {
        const fetchUser = async () => {
            const params = new URLSearchParams(window.location.search);
            const userid = params.get("user");
            const response =  await api.get(`/api/v1/users/${userid}`);

            if (response.status === 200) {
                const mappedUser = mapToUserModel(response.data);
                setUser(mappedUser);
                sessionStorage.setItem("user", JSON.stringify(mappedUser))
                delay(1000).then(() => window.location.href = "/dashboard");
            }
        }

        fetchUser();
    }, []);

    return user ? null : <Spinner text="Stabilim conexiunea..."/>;
}

export default GoogleLoginBuffer;