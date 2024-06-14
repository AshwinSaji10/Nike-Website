import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';

const App = () => (
    <main className="relative">
        <section className="xl:padding-1 wide:padding-r padding-b">
          
          <Nav/>
        
        </section>
        <section className="padding">
          <Hero/>
          
          </section>
        <section className="padding"></section>
        <section className="padding"></section>
        <section className="padding">footer</section>
    </main>
);

export default App;
