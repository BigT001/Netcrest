"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";


const formSchema = z
  .object({
    emailAddress: z.string().email({
      message: "Enter a valid email.",
    }),
    fullName: z.string().regex(/^[A-Za-z\s]+$/, {
      message: "Full name must contain only alphabets and spaces",
    }),
    phoneNumber: z.string().regex(/^\d+$/, {
      message: "Phone number must contain only digits",
    }),
    project: z.string(),
  })
  

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      fullName: "",
      phoneNumber: "",
      project: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // You can add user feedback here (e.g., show a success message)
      } else {
        console.error('Form submission failed');
        // You can add error handling here
      }
    } catch (error) {
      console.error('Error:', error);
      // You can add error handling here
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 mb-5">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Full name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Full name" 
                  {...field} 
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Email address" 
                  type="email"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Phone number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Phone number with country code" 
                  {...field} 
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="project"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project</FormLabel>
              <FormControl>
                <Textarea placeholder="Your project description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <a
            href="/ContactPage"
            className="inline-block rounded border-2 
            border-blue-700 bg-white px-12 py-3 
            text-md font-medium text-black  
            shadow-md shadow-blue-300 transform hover:scale-105 
            transition-transform duration-300 mt-5">
            Get in Touch
          </a>
      </form>
    </Form>
  )
}