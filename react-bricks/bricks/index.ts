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
import Fact from './MdwpFactCounter'
import MdwpFactCounterSection from './MdwpFactCounterSection'
import MdwpTextImage from './MdwpTextImage/MdwpTextImage'
import HoricontalTab from './MdwpHoricontalTab'
import MdwpHoricontalTabs from './MdwpHoricontalTabs'
import SnipcartProduct from './SnipcartProduct'
import SnipcartProductsSlider from './SnipcartProductsSlider'
import AlgoliaStore from './AlgoliaStore'
import MdwpTeaserHero from './MdwpTeaserHero'
import TeaserCard from './TeaserCard'
import MdwpTestimonials from './MdwpTestimonials'
import MdwpTestimonial  from './MdwpTestimonial'
import BrickDocument from './Documents/Document'
import Documents from './Documents/Documents'
import MdwpMap from './MdwpMap'
import Airtable from './Airtable'



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
  MdwpHoricontalTabs,
  HoricontalTab,
  MdwpTextImage,
  SnipcartProduct,
  SnipcartProductsSlider,
  AlgoliaStore,
  MdwpTeaserHero,
  TeaserCard,
  MdwpTestimonials,
  MdwpTestimonial,
  MdwpFactCounterSection,
  Fact,
  Documents,
  BrickDocument,
  MdwpMap,
  Airtable

  
  // Put here your other bricks...
]

export default bricks
