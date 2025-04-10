'use client'
import Featuresection from "@/components/medicalAdherence";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AdherenceTools from "@/components/medicaladherencetools";
import Textimonials from "@/components/textimonials";
import Faqs from "@/components/faqs";
import MedicalGallery from "@/components/medicalgallery";
import AdherenceChart from "@/components/adherenceChart";
export default function Home() {
  return (
    <div>
      <section id="home">
      <Hero />
      </section>
      
      <section id="features">
      <Featuresection/>
      </section>
      <section id="adherence">
      <AdherenceTools/>
      </section>
     
      <section id="gallery">
      <MedicalGallery/>
      </section>
       <section id="faqs">
      <Faqs/>
      </section>
       <section id="adherenceChart">
      <AdherenceChart/>
      </section>
      {/* <section id="testimonials">
      <Textimonials/> */}
      {/* </section> */}
      <section id="footer">
      <Footer/></section>

    </div>
  );
}
