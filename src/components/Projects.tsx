
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
}

function ProjectCard({ category, title, description }: ProjectCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-md h-full transition-transform duration-300 hover:-translate-y-2.5 project-card p-2">
      {/* `hover:-translate-y-2.5` translates to 10px upward in Tailwind */}
      <CardHeader>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {category}
        </p>
        <CardTitle className="text-2xl font-bold mt-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function SubmitCard() {
  return (
    <Card className="bg-white rounded-lg shadow-md h-full transition-transform duration-300 hover:-translate-y-2.5 project-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Submit Your Project</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          Whether it's film, docuseries, or animations, Afrokaviar invites you to pitch your project 
          and let your voice shape the future of media.
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <section className="py-16 bg-[#e6b027]">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-24 text-white">
          Upcoming Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <ProjectCard
            category="DOCUMENTARY"
            title="Inclusion Delusion"
            description="An eye-opening exploration of diversity and racism in the United Kingdom within it's professional media landscape and film industry."
          />
          
          <ProjectCard
            category="FILM"
            title="Pickups"
            description="Set in urban London during the 2020 Covid pandemic, this story captures the intimate, day-to-day journey of a Black taxi driver navigating an eerie new normal."
          />
          
          <ProjectCard
            category="DOCUMENTARY"
            title="Yahya Jammeh"
            description="Interview with Yahya Jammeh: Power, Exile, and Legacy. A rare, unfiltered sit-down with The Gambia's former president exploring his two-decade rule."
          />
          
          <SubmitCard />
        </div>
      </div>
    </section>
  );
}
