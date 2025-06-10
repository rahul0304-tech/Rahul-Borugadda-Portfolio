import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { useToast } from '../hooks/useToast';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {

    console.log('Form submitted:', data);
    toast({
      title: 'Message Sent!',
      description: `Thanks for your message, ${data.name}! I'll get back to you soon.`,
    });
    form.reset();
  };

  const handleResumeDownload = () => {
    window.open('/ATS_RAHUL_RESUME.pdf', '_blank');
    toast({
      title: 'Resume Download',
      description: 'Resume opened in a new tab.',
    });
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <div className="bg-[#181818] p-6 rounded-md">
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Email</p>
                <p className="text-white text-lg">rahulabhirs0325@gmail.com</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Phone</p>
                <p className="text-white text-lg">+91 6303175715</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Location</p>
                <p className="text-white text-lg">Guntur, India</p>
              </div>
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://github.com/rahul0304-tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/borugadda-rahul-890231269" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <Button 
                  onClick={handleResumeDownload}
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded flex items-center justify-center"
                >
                  <i className="fas fa-download mr-2"></i> Resume
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <div className="bg-[#181818] p-6 rounded-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            {...field} 
                            rows={4}
                            className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700 w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;