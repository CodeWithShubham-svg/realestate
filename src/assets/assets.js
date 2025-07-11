import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';

import brand_img from './brand_img.png';
import project_img_1 from './project_img_1.jpg';
import project_img_2 from './project_img_2.jpg';
import project_img_3 from './project_img_3.jpg';
import project_img_4 from './project_img_4.jpg';
import project_img_5 from './project_img_5.jpg';
import project_img_6 from './project_img_6.jpg';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';

// Exporting all assets for easy access in other parts of the app
export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  left_arrow,
  right_arrow,
};

// Projects data to be used wherever necessary in the app
export const projectsData = [
  {
    title: "Swimming Pool",
    image: project_img_1
  },
  {
    title: "Temple",
    image: project_img_2
  },
  {
    title: "Library",
    image: project_img_3
  },
  {
    title: "Open Theatre",
    image: project_img_4
  },
  {
    title: "Vista Verde",
    image: project_img_5
  },
  {
    title: "Serenity Suites",
    image: project_img_6
  },
  // If you need more, remove duplicates as per requirement.
];
export const SpaceData = [
  {
    title: "2 BHK Flat",
    image: project_img_1,
    brochure: "cross_icon",
  },
  {
    title: "3 BHK Flat",
    image: project_img_3,
    brochure: "path/to/office-brochure.pdf",
  }, 
   {
    title: "Shop",
    image: project_img_2,
    brochure: "path/to/shop-brochure.pdf",
  },
  {
    title: "Plot",
    image: project_img_4,
    brochure: "path/to/plot-brochure.pdf",
  },
];


// Testimonials data to be displayed in your app
export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
  }
];
 