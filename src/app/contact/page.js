import styles from "@/app/styles/contact.module.css";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import ContactCard from "../../../components/ContactCard";
import ContactForm from "../../../components/ContactForm";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.grid}>
        <ContactCard
          icon={<MdEmail />}
          title={"Email"}
          para={"Monday to Friday Expected"}
          para1={"response time: 72 hours"}
          link={"Send Email"}
        />
        <ContactCard
          icon={<MdVoiceChat />}
          title={"Live Chat"}
          para={"Monday to Friday Expected"}
          para1={"response time: 72 hours"}
          link={"Chat Now"}
        />
        <ContactCard
          icon={<MdForum />}
          title={"Community Forum"}
          para={"Monday to Friday Expected"}
          para1={"response time: 72 hours"}
          link={"Ask the Community"}
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default contact;
