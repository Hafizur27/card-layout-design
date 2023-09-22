import DesignerSection from "../Section/DesignerSection/DesignerSection"
import LightSection from "../Section/LightSection/LightSection"
import PerfectSection from "../Section/PerfectSection/PerfectSection"
import PhotoShotSection from "../Section/PhotoShotSection/PhotoShotSection"
import PlanSection from "../Section/PlanSection/PlanSection"
import SearchProjects from "../Section/SearchJProjects/SearchProjects"
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
      </div>
  )
}

export default MainLayout