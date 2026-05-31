"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  description: z.string().min(10, "Please describe your project (min. 10 characters)"),
  budget: z.string().min(1, "Please select a budget range"),
});

type FormData = z.infer<typeof schema>;

const inputClass = cn(
  "w-full bg-surface border border-line rounded-lg px-4 py-2.5 text-sm text-primary placeholder:text-muted",
  "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20",
  "transition-all duration-200 ease-out font-sans"
);

const labelClass = "block font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-2";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Unable to connect. Please try again later.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 p-8 rounded-lg border border-accent bg-accent-dim">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/20 text-accent">
          <CheckCircle2 size={24} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display font-bold text-primary text-xl mb-2">
            Request received!
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Thanks for reaching out. We&apos;ve received your request and will
            follow up within 24 hours to schedule a time that works for you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className={cn(inputClass, errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className={cn(inputClass, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClass}>
          Company <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="Your company name"
          className={inputClass}
          {...register("company")}
        />
      </div>

      {/* Service interest */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Service Interest <span className="text-accent">*</span>
        </label>
        <select
          id="service"
          className={cn(inputClass, errors.service && "border-red-500")}
          {...register("service")}
          defaultValue=""
        >
          <option value="" disabled>Select a service…</option>
          <option value="portfolio-site">Portfolio Site</option>
          <option value="ai-chatbot">AI Chatbot</option>
          <option value="business-dashboard">Business Dashboard</option>
          <option value="website">Website</option>
          <option value="software-app">Software App</option>
          <option value="web-app">Web App</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
        )}
      </div>

      {/* Project description */}
      <div>
        <label htmlFor="description" className={labelClass}>
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Tell us about your project — what you're building, who it's for, and any specific requirements or timeline."
          className={cn(inputClass, "resize-none", errors.description && "border-red-500")}
          {...register("description")}
        />
        {errors.description && (
          <p className="mt-1.5 text-xs text-red-400">{errors.description.message}</p>
        )}
      </div>

      {/* Budget range */}
      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget Range <span className="text-accent">*</span>
        </label>
        <select
          id="budget"
          className={cn(inputClass, errors.budget && "border-red-500")}
          {...register("budget")}
          defaultValue=""
        >
          <option value="" disabled>Select a range…</option>
          <option value="under-1k">Under $1,000</option>
          <option value="1k-5k">$1,000 – $5,000</option>
          <option value="5k-15k">$5,000 – $15,000</option>
          <option value="15k-plus">$15,000+</option>
          <option value="lets-discuss">Let&apos;s discuss</option>
        </select>
        {errors.budget && (
          <p className="mt-1.5 text-xs text-red-400">{errors.budget.message}</p>
        )}
      </div>

      {/* Server error */}
      {serverError && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Request
            <Send size={15} strokeWidth={1.75} />
          </>
        )}
      </Button>
    </form>
  );
}
