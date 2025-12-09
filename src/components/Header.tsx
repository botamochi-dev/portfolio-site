import { headerData } from "@/data/header";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        {headerData.title}
      </h1>
      <p className="header-subtitle">
        {headerData.subtitle}
      </p>
    </header>
  );
}
