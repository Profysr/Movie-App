import Link from "next/link";

const ContactCard = ({ icon, title, para, para1, link }) => {
  return (
    <div>
      <i>{icon}</i>
      <h2>{title}</h2>
      <p>{para}</p>
      <p>{para1}</p>
      <Link href="/">
        {link} <span>-&gt;</span>
      </Link>
    </div>
  );
};

export default ContactCard;
