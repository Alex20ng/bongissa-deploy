import { About } from "./about";
import { Projets } from "./projets"
import { Contacts } from "./contacts"
import { Home } from "./home";
import { Questions } from "./questions";
import {useRef} from "react";

export default function Acceuil() {
   const year = new Date().getFullYear();

   const homeRef = useRef<HTMLElement | null>(null);
   const aboutRef = useRef<HTMLElement | null>(null);
   const projetRef = useRef<HTMLElement | null>(null);
   const contactRef = useRef<HTMLElement | null>(null);
   const questionRef = useRef<HTMLElement | null>(null);

   const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior:"smooth"});
   }

  return (
    
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="">
        <section ref={homeRef}>
          <Home 
            toHome={() => scrollTo(homeRef)}
            toAbout={() => scrollTo(aboutRef)}
            toProjet={() => scrollTo(projetRef)}
            toQuestion={() => scrollTo(questionRef)}
            toContact={() => scrollTo(contactRef)}
          />
        </section>
        <section ref={aboutRef}><About/></section>
        <section ref={projetRef}><Projets/></section>
        <section ref={questionRef}><Questions/></section>
        <section ref={contactRef}>
          <Contacts
            toAbout={()=> scrollTo(aboutRef)}
            toProjet={()=> scrollTo(projetRef)}
            toQuestion={()=> scrollTo(questionRef)}
          />
        </section>
      </main>
      <footer className="text-center p-3 bg-primary text-white">
        Copyright © Bongissa {year} . Tous droits réservés.
      </footer>
    </div>
  )
}
