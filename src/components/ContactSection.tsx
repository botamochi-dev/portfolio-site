import { contacts } from "@/data/contacts";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <div className="section-card">
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
