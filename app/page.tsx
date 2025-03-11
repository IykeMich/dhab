import Chef from "./components/Chef";
import Customers from "./components/Customers";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Dishes />
      <Chef />
      <Customers />
      <Footer />
    </main>
    
  );
}
