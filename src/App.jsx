import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Popular from "./components/Popular.jsx";
import Footer from './components/Footer.jsx';

const App = () => (
    <main className="relative">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
            <Hero />
        </section>
        <section className="padding">
            <Popular />
        </section>
        <section className="padding"></section>
        <section className="bg-black padding-x padding-t pb-8">
            <Footer/>
        
        </section>
    </main>
);

export default App;
