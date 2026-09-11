import ContactCta from "../components/website/contact/ContactCta";
import ContactForm from "../components/website/contact/ContactForm";
import ContactHero from "../components/website/contact/ContactHero";
import ContactInfo from "../components/website/contact/ContactInfo";

function Contact() {
  return (
    <>
      <ContactHero />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

export default Contact;
