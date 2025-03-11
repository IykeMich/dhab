import Chef from "./components/Chef";
import Dishes from "./components/Dishes";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Dishes />
      <Chef />
    </main>
    
  );
}
