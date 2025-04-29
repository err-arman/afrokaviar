import { BenefitCard } from "@/components/BenifiteCard/BenefitCard.tsx";
import Footer from "@/components/Footer";
import { ProjectForm } from "@/components/ProjectForm/ProjectForm.tsx";
import { Globe2, Lightbulb, Film, Users } from "lucide-react";
import logo from "/afrokaviar.png";

const SubmitProject = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="mb-2">
            <img
              src={logo}
              alt={logo}
              className="w-80 h-14 mx-auto mb-10"
            />
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Submit your project
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Submit your project to Afrokaviar and reach audiences hungry for
            bold, original, Afro-Global narratives.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <Globe2 className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <h3 className="font-semibold mb-1">Global Visibility</h3>
              <p className="text-sm text-gray-400">
                Your story deserves a worldwide stage.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <h3 className="font-semibold mb-1">Creative Empowerment</h3>
              <p className="text-sm text-gray-400">
                We support creators at every step.
              </p>
            </div>
            <div className="text-center">
              <Film className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <h3 className="font-semibold mb-1">Flexible Formats</h3>
              <p className="text-sm text-gray-400">
                Submit films, docs, series, or new formats.
              </p>
            </div>
          </div>

          {/* Project Form */}
        </div>
          <ProjectForm />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Benefits for Creative Partners
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Join our community of storytellers and unlock exclusive benefits
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BenefitCard
              icon={Film}
              title="Platform for Exposure"
              description="Gain access to a growing global audience tuned into Afro-European narratives. REACH viewers worldwide while amplifying your voice."
            />
            <BenefitCard
              icon={Globe2}
              title="Keep 100% of Your Rights"
              description="Earn through SVOD (per supported ad TVOD [pay per view]) while maintaining full ownership of your content. We help you monetize—on your terms."
            />
            <BenefitCard
              icon={Film}
              title="Production Support"
              description="Get matched with funding opportunities for development and post-production. Afrokaviar supports both finished and in-progress projects."
            />
            <BenefitCard
              icon={Users}
              title="Creator Community"
              description="Connect with a vibrant network of filmmakers, writers, and storytellers. Enjoy mentorship, collaboration, and insider industry insights."
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SubmitProject;
