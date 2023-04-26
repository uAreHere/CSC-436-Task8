import NonSocialLinks from "csc-start/components/NotSocialLinks";
import SocialLinks from "csc-start/components/SocialLinks";
import TopContent from "csc-start/components/TopContent";

export default async function Home() {
  return (
    <main>
      <TopContent />
      <SocialLinks />
      <NonSocialLinks />
    </main>
  );
}
