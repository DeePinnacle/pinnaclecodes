import { ScrollProgressBar } from "./ScrollProgressBar";
import { Navbar } from "@/components/layout/navbar";
import { BackToTop } from "./BackToTop";
import { JSX } from "react/jsx-runtime";
export function SiteChrome(): JSX.Element {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <BackToTop />
    </>
  );
}
