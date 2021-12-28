import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
}

export default AppLayout;