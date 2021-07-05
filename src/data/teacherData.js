import kylie from "../images/teachers/kylie.jpg";
import nick from "../images/teachers/nick.jpg";
import colin from "../images/teachers/colin.jpg";
import linguini from "../images/teachers/linguini.jpg";
import michelle from "../images/teachers/michelle.jpg";

export const Teachers = () => {
  return [
    {
      id: 1,
      name: "Kylie Murphy",
      description:
        "Kylie, the founder of Murphy's Music School, is a lover of music and snails. After discovering a passion for music at a young age, Kylie dove into the world of musicianship head first and learned how to play multiple instruments including the piano, bassoon, guitar, ukulele, saxaphone, and anything else she could get her hands on. Later in life Kylie eventually put together her first band 'Tegratree' where she played hundreds of succesful shows. After living the exciting lifestyle of a rockstar Kylie decided to settle down and join the Seattle Symphony where she expressed her true passion, the bassoon. In her free time Kylie runs her own music school and consistantly encourages her community to experience the joys of music. ",
      image: kylie,
      instrument: "Piano, Bassoon, Guitar, Ukulele, Saxaphone",
    },
    {
      id: 2,
      name: "Nick Nordstrom",
      description:
        "Nick, a retired lumberjack, found his passion for the bass at a late age. However this did not prevent Nick from putting the entirety of his effort into mastering the instrument. After two years of practicing Nick explained to his friends and family that he will be going on a retreat into nature for the next five years where he will do nothing but practice bass. Upon his return Nick was capable of what most bass players would claim to be impossible and could playing the grooviest of base lines. He was later recruited into the famous band Tegratree and now teaches alongside his fellow band members.",
      image: nick,
      instrument: "Bass",
    },
    {
      id: 3,
      name: "Colin Edwards",
      description:
        "Colin originally began his musical journey on the piano and later discovered a passion for the guitar. Colin then devoted his life to mastering the ins and outs of the instrument, eventually obtaining the skillset to play alongside famous musicians and joining them on their tours. These muscians included the likes of Jacob Collier, Hozier, Gregory Alon Isakov, and his personal favorite, John Mayer. Colin then joined the band Tegratree and after a extremely successful career, joined his fellow band mates in teaching his community about the joys of music.",
      image: colin,
      instrument: "Guitar",
    },
    {
      id: 4,
      name: "Linguini",
      description:
        "Linguini is simply Linguini, the man has no last name that we know of and is an engima that appeared out of no where, but he's a master of the drums. He is versed in almost every genre of drumming including rock, blues, funk, and jazz. His teaching style is both exciting and laid back, he chooses his words wisely and speaks seldom, putting most of his effort into encouraging his students to simply play, making for an excellent teacher. During his free time Linguini competes in street drum battles and knits.",
      image: linguini,
      instrument: "Drums",
    },
    {
      id: 5,
      name: "Michelle Ross",
      description:
        "Michelle is an award-winning singer, composer, improviser, and record producer. She has composed, recorded, and produced more than 500 compositions and has released dozens of solo and collaborative recordings. Being a self-taught musician has helped her develop a creative approach to teaching her students, creating the opprotunity for even the quietest of students to show their pipes. Michelle is an essential member of Murphy's Music School.",
      image: michelle,
      instrument: "Voice",
    },
  ];
};
