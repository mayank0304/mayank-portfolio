import ContactTab from "@/components/tabs/ContactTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Mayank Sharma | Get In Touch",
  description: "Get in touch with me for freelance projects, job opportunities, or collaboration. Contact form, email, phone, and social media links available.",
};

export default function Contact() {
  return <ContactTab />;
}
