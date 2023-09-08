import Link from "next/link";
import Card from "./components/Card";
import contacts from "./contacts";
import QRCode from "qrcode.react";

function createCard(contact) {
  return (
    <Link className="link" href={contact.link} key={contact.id}>
      <Card
        name={contact.name}
        img={contact.imgURL}
        star={contact.stars}
        infos={contact.info}
        location={contact.location}
      />
      <QRCode value={contact.link} />
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="heading">Explore Mani</h1>
      {contacts.map(createCard)}
    </div>
  );
}
