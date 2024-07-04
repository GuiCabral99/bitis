import Footer from "@/components/Footer";
import {
  FranchiseHeader,
  FranchiseSection1,
  FranchiseSectionTitle2,
  FranchiseSection2,
  FranchiseSection3,
  FranchiseSectionTitle3,
} from "@/components/FranchiseComponents";

export default () => {
  return (
    <main className="min-h-screen">
      <FranchiseHeader />
      <FranchiseSection1 />
      <FranchiseSectionTitle2 />
      <FranchiseSection2 />
      <FranchiseSectionTitle3 />
      <FranchiseSection3 />
      <Footer />
    </main>
  );
};
