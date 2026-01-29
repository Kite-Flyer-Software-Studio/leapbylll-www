import { SignupForm } from "@/components/pages/signup/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - Leap by LLL",
  description:
    "Everything AI seamlessly integrated all the modern AI generation tools into one platform so that you can generate content with a single click.",
  openGraph: {
    images: ["/banner.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
