import jamThumb from "../images/events/jam1.jpg";
import jam from "../images/events/jam2.jpg";
import roofThumb from "../images/events/roof1.jpg";
import roof from "../images/events/roof2.jpg";
import concertThumb from "../images/events/concert1.jpg";
import concert from "../images/events/concert2.jpg";

const eventsData = () => {
  return [
    {
      id: 1,
      name: "Weekly Jam Session",
      description1:
        "Hosted by Colin and Kylie, our weekly jam session creates the opportunity for our students and staff to learn the fundemantals of improvisation and playing with their fellow musicians.",
      description2:
        "Students of all skill levels are encouraged to join and participate! If you are interested in attending Murphy's Music School we highly encourage you to attend this event and see what our students are capable of.",
      thumb: jamThumb,
      image: jam,
      date: "Every Friday night from 7pm-9pm!",
      location: "Murphy's Music School - Concert Hall KK1050",
      cost: "Current Students: Free, Non-students: $5.00",
    },
    {
      id: 2,
      name: "Rooftop Concert",
      description1:
        "Hosted by Luca, every month we host a performance on the very roof of Murphy's Music School. One of the many benefits of attending Murphy's is the opportunity to form your own band with your fellow students and we love to show off the bands that have been formed at our school.",
      description2: `Bring your friends, bring your family, sit back and enjoy the likes of A Band Named Bob, 45 Second Neighbors, The Moscow Gentlemen, Crab Rangoon Cometh Forth, and Scooter Duders. We promise you won't be disappointed`,
      thumb: roofThumb,
      image: roof,
      date: "Every third Saturday of the month from 7pm-9pm!",
      location: "Murphy's Music School - Rooftop",
      cost: "Current Students: Free, Non-students: $5.00",
    },
    {
      id: 3,
      name: "Student Performances",
      description1:
        "At Murphy's Music School we believe one of the best ways to master your instrument is to perform in front of a live audience. We give students who are interested the space and support to do so, performing a piece of their choice, solo.",
      description2:
        "While this can be daunting for most students, they always come out of this experience empowered as a musician and obtain a greater sense of confidence in their abilities.",
      thumb: concertThumb,
      image: concert,
      date: "Every Wednesday night from 7pm-9pm!",
      location: "Murphy's Music School, Concert Hall M1072",
      cost: "Current Students: Free, Non-students: $5.00",
    },
  ];
};

export default eventsData;
