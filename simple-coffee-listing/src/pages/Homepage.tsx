import { Container } from "../components/container/Container";
import { Footer } from "../components/footer/Footer";
import { PageWrapper } from "../components/page-wrapper/PageWrapper";
import { Hero } from "../components/page-wrapper/PageWrapper.styled";

const Homepage = () => {
  return (
    <PageWrapper>
      <Hero />
      <Container />
      <Footer />
    </PageWrapper>
  );
};

export default Homepage;
