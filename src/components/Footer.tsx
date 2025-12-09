import { footerData } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {footerData.year} {footerData.name}. {footerData.copyright}</p>
    </footer>
  );
}
