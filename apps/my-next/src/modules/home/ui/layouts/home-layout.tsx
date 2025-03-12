interface LayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-blue-500">
        <p>Home navbar</p>
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
