'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Send email using EmailJS
    emailjs
      .send(
        'service_rvlyq6f', // Replace with your EmailJS Service ID
        'template_sm3zjfb', // Replace with your EmailJS Template ID
        {
          name: values.name,        // Sender's name
          email: values.email,      // Sender's email
          subject: values.subject,       // Email subject
          message: values.message,       // Main message content
        },
        'U_z6vdYLFS0U9Pf-Z' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you for your message! We will get back to you soon.');
        },
        (error) => {
          console.error('FAILED...', error);
          alert(
            'Sorry, there was an issue sending your message. Please try again later.'
          );
        }
      );
  }

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Message subject" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </div>

      <footer className="w-full bg-black text-white py-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-8">
    {/* Logo */}
    <div>
      <img
        src="/atlaslogo.png" // Replace with the ATLS logo path
        alt="ATLS Sports Agency"
        className="h-12"
      />
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-6">
      <a
        href="https://twitter.com/atls_agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-blue-400 transition-colors duration-300"
      >
        <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
      </a>
      <a
        href="https://instagram.com/atlsagency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition-colors duration-300"
      >
        <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
      </a>
      <a
        href="https://linkedin.com/company/atls-agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-600 transition-colors duration-300"
      >
        <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
      </a>
    </div>


    {/* Copyright */}
    <div>
      <p className="text-sm text-gray-400 text-center">
        2024 © ATLS SPORTS AGENCY
      </p>
    </div>
  </div>
</footer>

    </main>
  );
}