import { IoIosGlobe, IoLogoLinkedin, IoIosPin } from "react-icons/io";

export const contactInfo = [
  {
    to: "https://www.inspire11.com/",
    icon: <IoIosGlobe />,
    text: "Website",
  },
  {
    to: "https://www.linkedin.com/company/inspire11/",
    icon: <IoLogoLinkedin />,
    text: "LinkedIn",
  },
  {
    to: "https://maps.app.goo.gl/BdomWRvHKgLp1LTm8",
    icon: <IoIosPin />,
    text: "Address",
  },
];

const CardContent = [
  {
    title: "Inspire 11 Bio",
    text: "Founded in 2016, Inspire11 is a leading tech consulting company with over 300 employees, delivering innovative solutions globally from hubs in Chicago, Atlanta, Minneapolis, Dallas, and the Balkans (Tetovo, Prishtina, and Tirana).",
  },
  {
    title: "App Purpose",
    text: "This year at Inspire11 we wanted to observe Stress Awareness Month (April) and Mental Health Awareness Month (May), by highlighting the importance of managing stress and mental health. That's why we created this set of resources and suggestions to help raise awareness around mental health management in our community.",
  },
  {
    title: "Recognitions and Awards",
    list: [
      "Inc. 5000 Fastest-Growing Company (2020-2023)",
      "Great Place to Work Certified (2022-2024)",
      "Fortune Best Workplace in Chicago (2022)",
      "Glassdoor Best Place to Work (2022)",
    ],
  },
  {
    title: "Special Thanks!",
    text: "A big thank you to our talented interns (Besart S. , Krenar H. , Albinot I.) for creating this app. Your dedication and hard work have made a real difference in promoting mental health awareness.",
  },
];

export default CardContent;
