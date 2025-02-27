import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return <button onClick={goToAbout}>Go to About</button>;
}

export default HomePage;
