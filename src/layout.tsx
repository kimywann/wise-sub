import Header from "./common/components/Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;
