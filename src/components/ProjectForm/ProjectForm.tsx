import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "../ui/checkbox";

export function ProjectForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Project Submitted",
      description: "We'll review your project and get back to you soon!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto space-y-6 bg-white backdrop-blur-sm p-8 rounded-xl"
    >
      <div className="space-y-2">
        <Label htmlFor="title" className="text-black text-left">
          Project Title
        </Label>
        <Input
          id="title"
          placeholder="Enter your project title"
          required
          className="border-black/20 text-black placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="synopsis" className="text-black">
          Short Description / Synopsis
        </Label>
        <Textarea
          id="synopsis"
          placeholder="Tell us about your project"
          required
          className="bg-black/10 border-black/20 text-black placeholder:text-gray-400 min-h-[120px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="media" className="text-black">
          Upload Media
        </Label>
        <Input
          id="media"
          type="file"
          accept=".pdf,.mp4,.jpg,.png"
          className="border-black/20 text-black  file:text-black file:border-0 file:rounded-md file:cursor-pointer"
        />
        <p className="text-xs text-gray-400">
          Upload trailers, concept art, or pitch decks (PDF)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-black">
          Full Name
        </Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          required
          className=" border-black/20 text-black placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2 space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-black peer-disabled:opacity-70">
        I agree to Afrokaviar's submission terms and privacy policy.
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white"
      >
        {isSubmitting ? "Submitting..." : "Submit Project"}
      </Button>
    </form>
  );
}
