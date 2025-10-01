import ContactTab from "@/components/tabs/ContactTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Mayank | Get In Touch",
  description: "Get in touch with me for freelance projects, job opportunities, or collaboration. Contact form, email and social media links available.",
};

export default function Contact() {
  return <ContactTab />;
}
