export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: "wasif-karim",
    name: "Wasif Karim",
    role: "CEO",
    bio: "Visionary leader with a passion for building products that matter. Wasif drives Bytewright's strategy, client relationships, and company culture — ensuring every project exceeds expectations.", /* [PLACEHOLDER] */
    initials: "WK",
    gradient: "from-indigo-500 to-violet-600",
    linkedin: "#", /* [PLACEHOLDER] */
  },
  {
    id: "khokon-barua",
    name: "Khokon Barua",
    role: "CTO",
    bio: "Engineering lead with deep expertise across the full stack. Khokon architects the technical foundations of every Bytewright project — obsessed with performance, elegance, and craft.", /* [PLACEHOLDER] */
    initials: "KB",
    gradient: "from-cyan-500 to-indigo-600",
    linkedin: "#", /* [PLACEHOLDER] */
  },
];
