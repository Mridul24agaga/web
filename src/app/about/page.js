import AboutUs from "@/components/About/AboutUs/AboutUs"
import AboutWorking from "@/components/About/AboutWorking/AboutWorking"
import Award from "@/components/About/Award/Award"
import BestFeature from "@/components/About/BestFeature/BestFeature"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Cta from "@/components/CTA/Cta"
import { PageWrapper } from "../page-wrapper"
import ContactForm from "@/components/ContactPage/ContactForm"

export const metadata = {
  title: 'About - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const aboutSections = [
  {
    section: <AboutUs/>
  },
  {
    section: <Award/>
  },
  {
    section: <BestFeature/>
  },
  {
    section: <Cta heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimisation) and SEO (Search Engine Optimisation) strategies, designed to maximise online visibility and engagement for businesses."}/>
  },
  {
    section: <AboutWorking/>
  },
  {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
  }
]
const About = () => {
  return (
    <>
    {
      aboutSections.map((i) => {
        return (
          <PageWrapper key={i}>
          {i.section}
          </PageWrapper>
        )
      })
    }
    </>
  )
}

export default About