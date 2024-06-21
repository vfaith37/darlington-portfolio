// src/pages/about.tsx
// import Header from '../components/Header';

import Header from "@/components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 mt-16">
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </main>
    </>
  );
};

export default About;

// Repeat similar structure for other pages: booknow.tsx, contact.tsx, event.tsx, index.tsx, portfolio.tsx, press.tsx
