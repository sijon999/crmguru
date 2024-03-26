
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import ISide from "./components/iSide/lSide";
import './App.css'

function App() {
  return (
    <>
      <div className="bg-slate-200 ">
      <Header />
      <Body />
      <ISide/>
      <Footer />
      </div>
    </>
  )
}

export default App
