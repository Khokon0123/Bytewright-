export interface TeamMember {
  id: string;
  name: string;
  bio: string;
  initials: string;
  gradient: string;
  linkedin: string;
  photo?: string; // optional — path in /public/images/team/
}

export const team: TeamMember[] = [
  {
    id: "wasif-karim",
    name: "Wasif Karim",
    bio: "Drives Bytewright's vision and client relationships. Wasif ensures every project exceeds expectations and that our clients always feel heard.", /* [PLACEHOLDER] */
    initials: "WK",
    gradient: "from-indigo-500 to-violet-600",
    linkedin: "#", /* [PLACEHOLDER] */
    photo: "/images/team/wasif.jpg",
  },
  {
    id: "khokon-barua",
    name: "Khokon Barua",
    bio: "Architects the technical foundations of every project. Obsessed with performance, clean code, and building things that last.", /* [PLACEHOLDER] */
    initials: "KB",
    gradient: "from-cyan-500 to-indigo-600",
    linkedin: "#", /* [PLACEHOLDER] */
    photo: "/images/team/khokon.jpg",
  },
  {
    id: "hridoy",
    name: "Hridoy Barua",
    bio: "Brings creative precision to every interface. Sourva turns complex requirements into experiences that feel effortless to use.", /* [PLACEHOLDER] */
    initials: "SR",
    gradient: "from-emerald-500 to-teal-600",
    linkedin: "#", /* [PLACEHOLDER] */
    // photo: "/images/team/sourva.jpg", /* [PLACEHOLDER] */
  },
  {
    id: "mostafa",
    name: "Mostafa",
    bio: "Full-stack engineer with a sharp eye for detail. Mostafa builds fast, reliable systems that scale with our clients' ambitions.", /* [PLACEHOLDER] */
    initials: "MF",
    gradient: "from-orange-500 to-rose-600",
    linkedin: "#", /* [PLACEHOLDER] */
    photo: "/images/team/mostafa.jpg",
  },
];
