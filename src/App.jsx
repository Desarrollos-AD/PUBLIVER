import AppRouter from "./router/AppRouter";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main" id="top">
        <Nav />
        <AppRouter />
        <Footer />
      </main>
    </>
  );
}

export default App;
