import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
import img5 from './images/tour-5.jpeg'
import img6 from './images/tour-6.jpeg'

export const PageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
  { id: 4, href: '#featured', text: 'featured' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const servicesData = [
  {
    id: 1,
    serviceTitle: 'saving money',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-wallet fa-fw',
  },
  {
    id: 2,
    serviceTitle: 'endless hiking',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-tree fa-fw',
  },
  {
    id: 3,
    serviceTitle: 'amazing comfort',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    icon: 'fas fa-socks fa-fw',
  },
]

export const tourData = [
  {
    id: 1,
    img: img1,
    date: 'august 26th, 2020',
    tour: 'Tibet Adventure',
    text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    tourCity: 'china',
    duration: '6 days',
    pricing: 'from $2100',
  },
  {
    id: 2,
    img: img2,
    date: 'october 1th, 2020',
    tour: 'best of java',
    text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    tourCity: 'indonesia',
    duration: '11 days',
    pricing: 'from $1400',
  },
  {
    id: 3,
    img: img3,
    date: 'september 15th, 2020',
    tour: 'explore hong kong',
    text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    tourCity: 'hong kong',
    duration: '8 days',
    pricing: 'from $5000',
  },
  {
    id: 4,
    img: img4,
    date: 'december 5th, 2020',
    tour: 'kenya highlight',
    text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    tourCity: 'kenya',
    duration: '20 days',
    pricing: 'from $3300',
  },
  {
    id: 5,
    img: img5,
    date: 'january 2th, 2021',
    tour: 'New york zoo',
    text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    tourCity: 'New York',
    duration: '7 days',
    pricing: 'from $300',
  },
  {
    id: 6,
    img: img6,
    date: 'june 4th, 2021',
    tour: 'saudi tour',
    text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    tourCity: 'saudi arabia',
    duration: '17 days',
    pricing: 'from $7300',
  },
]
