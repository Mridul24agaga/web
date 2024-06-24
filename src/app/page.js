import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import WeAre from "@/components/Home/WeAre/WeAre";
import WeMake from "@/components/Home/WeMake/WeMake";
import Prefer from "@/components/Home/Prefer/Prefer";
import { PageWrapper } from "./page-wrapper";
import HomeStats from "@/components/Home/Stats/HomeStats";
import Test from "@/components/Testimonials/Test";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import WeCan from "@/components/Home/WeCan/WeCan";
import ContactForm from "@/components/ContactPage/ContactForm";

export default function Home() {
  const content = [{
    heading: "Lorem",
    description: "Lorem",
  },{
    heading: "Lorem",
    description: "Lorem"
  },{
    heading: "Lorem",
    description: "Lorem"
  }]



  const homeSections = [
    {
      page: <Feature content={content} mainHeading={`Lorem`}/>
    },    {
      page: <WeAre/>
    },{
      page: <WeCan/>
    },    {
      page: <WeMake/>
    },    {
      page: <HomeStats/>
    },    {
      page: <Prefer/>
    },    {
      page: <CaseStudy/>
    },    {
      page: <Test/>
    },    {
      page: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    }
  ]
  return (
    <>
    <Hero/>
    {homeSections.map((i, k) => {
      return (
        <PageWrapper key={k}>
        {i.page}
        </PageWrapper>
      )
    })}
    </>
  )
}
