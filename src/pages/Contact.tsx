
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail, MessageSquare, User } from "lucide-react";
import { Discord, Fiverr } from "@/components/icons/CustomIcons";
import AnimatedSectionTitle from "@/components/AnimatedSectionTitle";

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
      const response = await fetch("https://formspree.io/f/mwpojray", {
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
          <AnimatedSectionTitle 
            title="Get In Touch" 
            subtitle="Have a project in mind or questions about our services? We'd love to hear from you!
            Fill out the form below and we'll get back to you as soon as possible."
          />
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
                      href="https://discord.gg/pcUnY3W2" 
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
                      href="https://github.com/ojdevelop234" 
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
                      href="https://www.fiverr.com/" 
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
      
      <Footer />
    </div>
  );
};

export default Contact;
