
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Discord, Github, Fiverr, Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mrbqjnpe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-purple-400">Get In Touch</h1>
            <p className="text-lg text-gray-300">
              Have a project in mind or questions about our services? We'd love to hear from you!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gray-800 border-gray-700 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <User size={18} />
                        </span>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10 bg-gray-700 border-gray-600 text-white focus:border-purple-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Mail size={18} />
                        </span>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 bg-gray-700 border-gray-600 text-white focus:border-purple-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <MessageSquare size={18} />
                        </span>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="pl-10 bg-gray-700 border-gray-600 text-white focus:border-purple-500"
                          placeholder="Project inquiry"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full rounded-md bg-gray-700 border border-gray-600 p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Tell us about your project or inquiry..."
                        required
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 h-auto text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Email Info Card */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Contact Information</CardTitle>
                  <CardDescription>
                    Here's how you can reach out to us directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-full">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-200">Email</h3>
                      <a href="mailto:ojdevelop3@gmail.com" className="text-purple-400 hover:underline">
                        ojdevelop3@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media Card */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Connect With Us</CardTitle>
                  <CardDescription>
                    Follow us on social media for updates and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <a 
                      href="https://discord.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors"
                    >
                      <Discord className="h-8 w-8 text-[#5865F2]" />
                      <div>
                        <h3 className="font-medium text-white">Discord</h3>
                        <p className="text-sm text-gray-400">Join our gaming community</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors"
                    >
                      <Github className="h-8 w-8 text-white" />
                      <div>
                        <h3 className="font-medium text-white">GitHub</h3>
                        <p className="text-sm text-gray-400">Check out our open source projects</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://fiverr.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors"
                    >
                      <Fiverr className="h-8 w-8 text-[#1DBF73]" />
                      <div>
                        <h3 className="font-medium text-white">Fiverr</h3>
                        <p className="text-sm text-gray-400">Hire us for your next project</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-850 bg-opacity-30">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300">
              Have questions about our game development services? We've got answers!
            </p>
          </motion.div>
          
          <div className="grid gap-6">
            {[
              { 
                q: "What types of games do you develop?", 
                a: "We specialize in a wide range of game types including 3D and 2D games, game environments, visual effects, and Roblox games. Our team has experience across multiple platforms and genres." 
              },
              { 
                q: "How long does it take to develop a game?", 
                a: "Development timelines vary greatly depending on the scope, complexity, and scale of the project. A simple mobile game might take 3-6 months, while a more complex 3D game could take a year or more." 
              },
              { 
                q: "What is your pricing structure?", 
                a: "We offer customized pricing based on project requirements. After an initial consultation, we provide a detailed proposal outlining costs, milestones, and deliverables." 
              },
              { 
                q: "Do you offer ongoing support after game launch?", 
                a: "Yes! We provide post-launch support packages to help with updates, bug fixes, and new features to ensure your game continues to perform well." 
              },
              { 
                q: "Can you help with publishing my game?", 
                a: "Absolutely. We can guide you through the publishing process for various platforms including Steam, mobile app stores, and console marketplaces." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-300">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 z-0" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1)' }}
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">Let's Create Something Amazing Together</h2>
            <p className="text-lg mb-8 text-gray-300">
              Whether you have a specific project in mind or need help defining your vision, 
              we're here to assist at every step of your game development journey.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-6 h-auto"
              >
                Contact Us Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
