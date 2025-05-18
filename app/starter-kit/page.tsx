"use client";

import { PricingCard } from "@/components/pricing-card";
import { SkepticalBanner } from "@/components/skeptical-banner";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { BlinkistLogo } from "@/components/ui/blinkist-logo";

export default function StarterKitPage() {
  // Use a state to hold the BASE_URL and set it on the client side
  const [baseUrl, setBaseUrl] = useState<string>("");

  useEffect(() => {
    // Set the base URL on the client side
    const url = process.env.NEXT_PUBLIC_BASE_URL || 
      (typeof window !== 'undefined' ? window.location.origin : "");
    setBaseUrl(url);
  }, []);

  // Function to create properly encoded v0 URLs
  const createV0Link = (title: string, prompt: string, registryItem: string) => {
    const encodedUrl = encodeURIComponent(`${baseUrl}/r/${registryItem}.json`);
    const encodedPrompt = encodeURIComponent(prompt);
    const encodedTitle = encodeURIComponent(title);
    
    return `https://v0.dev/chat/api/open?title=${encodedTitle}&prompt=${encodedPrompt}&url=${encodedUrl}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-midnight mb-4">Blinkist UI Component Library</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">A collection of reusable UI components and templates for building Blinkist-like applications.</p>
          </div>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-midnight">
                  Blinkist Starter Kit
                </h3>
                <p className="text-gray-700">A complete Blinkist themed app with pricing card, dashboard, Blinkist logo, and components.</p>
              </span>

              {baseUrl && (
                <a 
                  href={createV0Link(
                    "Blinkist Starter Kit", 
                    "Blinkist UI components and templates for building Blinkist-like interfaces.", 
                    "home"
                  )} 
                  className="flex-shrink-0"
                  target="_blank"
                >
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              )}
            </div>
            <div className="h-[800px] w-full rounded-md border border-gray-200 overflow-hidden shadow-sm">
              <iframe
                src="/"
                className="w-full h-full"
                title="Dashboard"
              />
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between mb-6 p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-midnight">
                  Dashboard
                </h3>
                <p className="text-gray-700">A complete dashboard layout with sidebar and header.</p>
              </span>

              {baseUrl && (
                <a 
                  href={createV0Link(
                    "Blinkist Dashboard", 
                    "A dashboard with Blinkist styling and components.", 
                    "dashboard"
                  )} 
                  className="flex-shrink-0"
                  target="_blank"
                >
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              )}
            </div>

            <div className="h-[900px] w-full rounded-md border border-gray-200 overflow-hidden shadow-sm">
              <iframe
                src="/dashboard"
                className="w-full h-full"
                title="Dashboard"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 