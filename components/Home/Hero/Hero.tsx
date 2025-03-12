"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  //This useEffect ensures that the component is only rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageGeneration = async () => {
    if (!prompt.trim()) {
      toast.error("Please, enter a prompt");
      return
    }
    setLoading(true);
    // Token
    const huggingFaceToken = process.env.NEXT_PUBLIC_HUGGINGFACE_API_TOKEN;
    try {
      // Using Stable Diffusion model from Hugging Face
      const response = await axios({
        method: "POST",
        url: "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        headers: {
          Authorization: `Bearer ${huggingFaceToken}`,
          "Content-Type": "application/json",
        },
        data: {
          inputs: prompt,
        },
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], { type: "image/jpeg" });
      const imageUrl = URL.createObjectURL(blob);

      setImage(imageUrl);
      toast.success("Successfully generated image");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("The image could not be generated. Please try again later.");
    } finally {
      setLoading(false);
    }
  } 

  const handleDownloadImage = () => {
    if (!image) return
    const link = document.createElement("a");
    link.href = image;
    link.download = `ai-image-${Date.now()}.jpg`;
    link.click();
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
                text-center bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent pb-2"
        >
          Transform your words into <br /> images with AI
        </h1>
        <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray-400">
          Start creating AI images now
        </p>
        <div
          className="h-11 md:h-14 w-[95%] sm:w-[80%] lg:w-[70%] xl:w-[60%] 
                bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between"
        >
          <input
            type="text"
            placeholder="Produce your perfect picture"
            className="h-full rounded-lg outline-none w-full text-black block 
                        flex-1 placeholder:text-xs sm:placeholder:text-base"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            onClick={handleImageGeneration}
            className="cursor-pointer"
            variant={"default"}
            size={"lg"}
            disabled={loading}
          >
            Generate
          </Button>
        </div>
        {/*Tags*/}
        <div className="flex justify-center mt-6 space-x-4 flex-wrap gap-2">
          <p>Popular Tags: </p>
          <Button variant={"secondary"} onClick={() => setPrompt("Creative colorful abstract art")}>
            Creative
          </Button>
          <Button variant={"secondary"} onClick={() => setPrompt("Hyperrealistic landscape photography")}>
            Hyperreality
          </Button>
          <Button variant={"secondary"} onClick={() => setPrompt("Steampunk city with airships")}>
            Steampunk
          </Button>
          <Button variant={"secondary"} onClick={() => setPrompt("3D animated character in vibrant colors")}>
            Animation
          </Button>
          <Button variant={"secondary"} onClick={() => setPrompt("Professional business meeting in modern office")}>
            Business
          </Button>
        </div>
        {/* Show loading and image */}
        {loading && (
          <div className="mt-6">
            <Loader className="animate-spin" size={32} />
          </div>
        )}
        {image && !loading && (
          <div className="mt-0 md:mt-8 flex flex-col items-center">
            <img
              src={image || "/placeholder.svg"}
              alt="AI generated image"
              className="max-w-full h-[500px] rounded-lg shadow-lg object-contain"
              loading="lazy"
            />
            <Button onClick={handleDownloadImage} className="mt-0 md:mt-4 mb-0 md:mb-8 bg-pink-500 hover:bg-pink-800 cursor-pointer">
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  )
};

export default Hero;