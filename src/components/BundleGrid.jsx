import {useEffect, useState} from "react";
import api from "../utils/api.jsx";
import {delay} from "../utils/delay.jsx";
import {useUser} from "../contexts/userContext.tsx";
import {useNavigate} from "react-router-dom";
import Spinner from "./Spinner.jsx";

const BundleGrid = () => {

    const {user, setUser}= useUser();
    const [bundles, setBundles] = useState(null);
    const [loading, setLoading] = useState(false);
    const [viewAllPressed, setViewAllPressed] = useState(false);
    const navigate = useNavigate();

    const fetchBundles = async () => {
        setLoading(true);
        setViewAllPressed(true);

        try {
            const response = await api.get("/api/v1/bundles");
            await delay(2000);

            setBundles(response.data);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setViewAllPressed(false);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`/api/v1/users/${user.id}`);
                await delay(500);

                if(response.status === 200) setUser(response.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleBundleClick = (bundle) => {
        if (!user.relationships.bundles.find((b) => b.id === bundle.id)) {
            navigate(`/bundle/${bundle.id}/buy`);
        }

        else navigate(`/bundle/${bundle.id}/view`);
    };

    return (
      <div className="px-6 mt-8">
          <div className="flex justify-between items-center mb-4 space">
              <h1 className={"text-black text-xl font-semibold"}>Bundle-uri disponibile</h1>
              <button className="text-white bg-purple-900 text-sm px-4 py-2 rounded-lg hover:bg-purple-800" onClick={fetchBundles} disabled={loading}>
                  View All
              </button>
          </div>
          {loading ?
              <Spinner text = "Încărcăm bundle-urile noastre..." /> :
              <div className="grid grid-cols-3 gap-4">
                  {(viewAllPressed ? bundles : user.relationships.bundles).map((bundle) => (
                      <div
                          key={bundle.id}
                          onClick={() => handleBundleClick(bundle)}
                          className={
                              `text-purple-900 flex flex-col items-center justify-center rounded-lg py-4 shadow-lg hover:shadow-md
                                ${user.relationships.bundles.find((b) => b.id === bundle.id) ? "bg-white text-purple-900" : "bg-gray-100 text-gray-800"}`}>
                          <span className="text-3xl mb-2">{bundle.attributes.icon}</span>
                          <p className="text-sm font-medium text-center">{bundle.attributes.name}</p>
                      </div>
                  ))}
              </div>
          }
      </div>
    )
};

export default BundleGrid;