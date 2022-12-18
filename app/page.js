import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    {/* https://www.figma.com/file/EyzNoOFak1Nb1bBx9ZKI7E/Modern-UI%2FUX-Framer-Motion?node-id=0%3A1&t=AlipLYsm8aENc8c1-0 */}
    {/* To add gradients like these we have to seperate our layout by surrounding divs */}
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />

    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
