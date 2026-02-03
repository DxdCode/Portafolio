'use client';

import Navbar from '../components/Navbar';
import Section from '../components/Section';

function Home() {
    return (
        <section className="h-screen flex flex-col" id='about'>

            <Navbar />

            <div className="flex-1 py-5">
                <Section />

            </div>
        </section>
    );
}

export default Home;
