import { types } from 'react-bricks/frontend'

// =========================================
// REACT BRICKS UI
// You may also import { Single Bricks }
// to reduce the bundle size
import Blog from 'react-bricks-ui/blog'
import Website from 'react-bricks-ui/website'

// Example custom brick
import MyHeroUnit from './MyHeroUnit'
import MdwpHeroUnit from './MdwpHeroUnit'
import MdwpContentUnit from './MdwpContentUnit'
import Slide from './MdwpSlide'
import MdwpSlider from './MdwpSlider'
import MdwpPopup from './MdwpPopup'
import Tab from './MdwpTab'
import MdwpTabs from './MdwpTabs'
import MdwpTextImage from './MdwpTextImage/MdwpTextImage'

const bricks: types.Brick<any>[] = [
  ...Website,
  ...Blog,
  MyHeroUnit,
  MdwpHeroUnit,
  MdwpContentUnit,
  Slide,
  MdwpSlider,
  MdwpPopup,
  MdwpTabs,
  Tab,
  MdwpTextImage
  
  // Put here your other bricks...
]

export default bricks
