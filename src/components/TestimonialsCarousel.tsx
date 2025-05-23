
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating?: number;
}

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Indie Game Publisher",
      content: "The team at OjDevelop Studio transformed our concept into a stunning game that exceeded all expectations. Their technical prowess and creativity are unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Game Studio Director",
      content: "We've collaborated with OjDevelop on multiple projects, and they consistently deliver exceptional quality. Their attention to detail and innovative solutions make them an invaluable partner.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 4
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "AR/VR Developer",
      content: "The visual effects created by OjDevelop Studio for our VR experience were groundbreaking. They have a deep understanding of what makes immersive experiences truly memorable.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      rating: 5
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Mobile Game Developer",
      content: "Working with OjDevelop Studio has been a game-changer for our mobile gaming projects. Their expertise in optimizing performance while maintaining visual quality is remarkable.",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
      rating: 5
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: "Game Art Director",
      content: "The art and environments created by OjDevelop Studio are breathtaking. They have an exceptional ability to translate conceptual ideas into vivid, engaging game worlds.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      rating: 5
    },
    {
      id: 6,
      name: "David Wilson",
      role: "Indie Game Developer",
      content: "As a small indie studio, working with OjDevelop was exactly what we needed. They understood our budget constraints while still delivering a high-quality product that helped us stand out.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 4
    }
  ];

  const [api, setApi] = useState<any>(null);
  
  useEffect(() => {
    if (!api) return;
    
    // Auto-rotate carousel
    const autoRotate = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(autoRotate);
  }, [api]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative">
      <Carousel 
        setApi={setApi} 
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {testimonials.map((testimonial) => (
            <CarouselItem 
              key={testimonial.id} 
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static transform-none bg-gray-800 border-gray-700 hover:bg-gray-700 hover:text-purple-400 transition-colors" />
          <CarouselNext className="static transform-none bg-gray-800 border-gray-700 hover:bg-gray-700 hover:text-purple-400 transition-colors" />
        </div>
      </Carousel>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  // Default to 5 stars if no rating is provided
  const rating = testimonial.rating || 5;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group h-full"
      whileHover={{ y: -10 }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 blur-md -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      
      <div className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300 p-6 rounded-lg h-full">
        <div>
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500/50"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h4 className="text-lg font-medium text-purple-300">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Star 
                  size={16} 
                  className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} mr-1`} 
                />
              </motion.div>
            ))}
          </div>
          
          <p className="italic text-gray-300">"{testimonial.content}"</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsCarousel;
