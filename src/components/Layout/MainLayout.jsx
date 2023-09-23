import BeachSection from "../Section/BeachSection/BeachSection"
import ConferenceSection from "../Section/ConferenceSection/ConferenceSection"
import ConferenceSpaceSection from "../Section/ConferenceSpaceSection/ConferenceSpaceSection"
import DesignerSection from "../Section/DesignerSection/DesignerSection"
import Jennifer from "../Section/Jennifer/Jennifer"
import LightSection from "../Section/LightSection/LightSection"
import LocationSection from "../Section/LocationSection/LocationSection"
import MarketingSection from "../Section/MarketingSection/MarketingSection"
import MelissaSection from "../Section/MelissaSection/MelissaSection"
import MenuSection from "../Section/MenuSection/MenuSection"
import PerfectSection from "../Section/PerfectSection/PerfectSection"
import PerformSection from "../Section/PerformSection/PerformSection"
import PhotoShotSection from "../Section/PhotoShotSection/PhotoShotSection"
import PlanSection from "../Section/PlanSection/PlanSection"
import ProfileSection from "../Section/ProfileSection/ProfileSection"
import SearchProjects from "../Section/SearchJProjects/SearchProjects"
import TemplateSection from "../Section/TemplateSection/TemplateSection"
import TimerSection from "../Section/TimerSection/TimerSection"
import UpcomingTask from "../Section/UpcomingTask/UpcomingTask"
import VenomGtSection from "../Section/VenomGtSection/VenomGtSection"
import WeddingSection from "../Section/WeddingSection/WeddingSection"

const MainLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <LightSection />
      <PerfectSection />
      <DesignerSection />
      <SearchProjects />
      <PhotoShotSection />
      <PlanSection />
      <WeddingSection />
      <MelissaSection />
      <VenomGtSection />
      <TimerSection />
      <MenuSection />
      <TemplateSection />
      <PerformSection />
      <ConferenceSection />
      <ConferenceSpaceSection />
      <LocationSection />
      <UpcomingTask />
      <BeachSection />
      <ProfileSection />
      <Jennifer />
      <MarketingSection />
      </div>
  )
}

export default MainLayout