import Sidebar from "./Sidebar";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <section className="flex w-full h-screen">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 flex flex-col h-fit shadow-2xl">
        <div className="h-16">
          <Header />
        </div>
        <div className="h-full">
          <Body />
        </div>
      </div>
    </section>
  );
};

export default App;
