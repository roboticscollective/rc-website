"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Send, Bot, Wrench } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [showErrorPageMessage, setShowErrorPageMessage] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Check if user came from error page
  useEffect(() => {
    const source = searchParams.get("source");
    const action = searchParams.get("action");

    if (source === "404" && action === "join") {
      setShowErrorPageMessage(true);

      // Pre-fill the message for users coming from the error page
      setValue("message", "I'd like to help improve the robotics collective website and projects.");
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Netlify Forms submission
      const submitData = new FormData();
      submitData.append('form-name', 'contact');
      submitData.append('name', data.name);
      submitData.append('email', data.email);
      submitData.append('message', data.message);

      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(submitData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "We'll get back to you as soon as possible.",
        });
        reset();
        setShowErrorPageMessage(false);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-gray-300">
                Interested in joining the collective or learning more about our
                work? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="md:col-span-1 space-y-8">
                <a
                  href="mailto:info@roboticscollective.org"
                  className="block bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400">info@roboticscollective.org</p>
                </a>

                <a
                  href="https://maps.google.com/maps?q=Jülicher+Str.+209q-s,+52070+Aachen,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
                >
                  <MapPin className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-gray-400">Robotics Collective e.V.</p>
                  <p className="text-gray-400">Jülicher Str. 209q-s</p>
                  <p className="text-gray-400">52070 Aachen, Germany</p>
                </a>

                {/* Additional info card for those coming from 404 */}
                {showErrorPageMessage && (
                  <div className="bg-card p-6 rounded-lg border border-yellow-secondary/40">
                    <Bot className="h-6 w-6 text-yellow-secondary mb-4" />
                    <h3 className="text-lg font-medium mb-1">
                      Join Our Development Team
                    </h3>
                    <p className="text-gray-400">
                      We're always looking for talented individuals to hop
                      onboard!
                    </p>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                {/* Custom message for users from error page */}
                {showErrorPageMessage && (
                  <Alert className="mb-6 bg-yellow-secondary/10 border-yellow-secondary/30 text-gray-200">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-yellow-secondary" />
                      <AlertDescription className="text-sm">
                        Great! We could use your help improving our software.
                        Tell us a bit about yourself and your skills.
                      </AlertDescription>
                    </div>
                  </Alert>
                )}

                <div className="bg-card p-8 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className="bg-card border-primary/20 focus:border-primary"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-400">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          {...register("email")}
                          className="bg-card border-primary/20 focus:border-primary"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        {...register("message")}
                        rows={5}
                        className="bg-card border-primary/20 focus:border-primary resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="default" 
                      className="px-8 py-6 text-lg rounded-3xl"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin h-4 w-4 border-2 border-black/50 border-t-black rounded-full mr-2" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
