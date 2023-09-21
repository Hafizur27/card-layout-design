import DesignerSection from "../Section/DesignerSection/DesignerSection"
import LightSection from "../Section/LightSection/LightSection"
import PerfectSection from "../Section/PerfectSection/PerfectSection"
import PhotoShotSection from "../Section/PhotoShotSection/PhotoShotSection"


const MainLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <LightSection />
      <PerfectSection />
      <DesignerSection />
      <PhotoShotSection />
      </div>
  )
}

export default MainLayout