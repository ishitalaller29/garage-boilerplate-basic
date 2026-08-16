import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { TeamAvatar } from '@/features/team/components/TeamAvatar'
import { TeamBio } from '@/features/team/components/TeamBio'

export const metadata: Metadata = { title: 'Team' }

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl?: string
  imageAlt: string
}

const teamMembers: TeamMember[] = [
  {
    id: 'pm',
    name: 'Jason Sun',
    role: 'PM',
    bio: 'Hi there! I am currently in my final year in my Bachelors of IT at RMIT. My interests mainly include sports such as Volleyball and Motorsports (Motorcycles specifically) and I am also very very rich. (I have hundreds of dollars to my name)',
    imageAlt: 'Photo of Jason Sun, Project Manager',
  },
  {
    id: 'ba',
    name: 'Dhruv Patel',
    role: 'BA',
    bio: 'Hi I am currently in my final year of my bachelors of IT and am really hoping to get a job in it as well. With my interest I love to play sports and am a very adventurous person and love doing new things and learning.  ',
    imageAlt: 'Photo of Dhruv Patel, Business Analyst',
  },
  {
    id: 'ux',
    name: 'Maria Khmelevskaya',
    role: 'UX',
    bio: 'I am currently in my final semester studying a Bachelor of IT, majoring in Cybersecurity. In my spare time I enjoy bouldering, travelling, and watching movies/series - one of my favourite films is Heretic, and my personality type is INTP.',
    imageUrl: '/team-page-image-Maria.jpg',
    imageAlt: 'Photo of Maria Khmelevskaya, UX Designer',
  },
  {
    id: 'dev1',
    name: 'Ishita',
    role: 'DEV1',
    bio: 'I am currently in my final semester of a Bachelor in Computer Science, majoring in cyber security. Whenever I find spare time on my hands, I usually love to read books and comics or sketch something.',
    imageUrl: '/team-page-image-Ishita.jpg',
    imageAlt: 'Photo of Ishita, Developer 1',
  },
  {
    id: 'dev2',
    name: 'James Eustice',
    role: 'DEV2',
    bio: 'With a few years of experience in various IT roles and aiming to finish my degree this semester, I am a cyber security engineer looking to pursue a specialist role. My hobbies include motor sports, gaming and guitar, only to name a few. ',
    imageUrl: '/team-page-image-James.png',
    imageAlt: 'Photo of James Eustice, Developer 2',
  },
]

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="-m-6 min-h-[calc(100%+3rem)] bg-[#a1b5d1] px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-base font-medium text-white">Configurable Blockchain Scam Detection</p>
        <div className="rounded-full w-80 bg-[#10283d] px-10 py-3">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl">Team B</h1>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 items-start gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <span className="w-full text-center rounded-full bg-[#8094B3] px-6 py-2 text-sm font-bold text-[#04243b]">
              {member.role}
            </span>
            <div className="mt-4">
              <TeamAvatar imageUrl={member.imageUrl} imageAlt={member.imageAlt} />
            </div>
            <p className="mt-4 flex min-h-10 items-center justify-center text-center text-sm font-bold text-[#182d43]">
              {member.name}
            </p>
            <div className="mt-4 w-full rounded-2xl bg-[#8094b3] p-4 text-xs text-[#04243b]">
              <TeamBio bio={member.bio} />
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
