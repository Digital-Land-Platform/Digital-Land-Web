import Login from "../Authentication/Login";

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-10 font-medium">Home Page</h1>
      <Login />
    </div>
  );
};

export default Home;
