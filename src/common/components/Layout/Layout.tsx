import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
