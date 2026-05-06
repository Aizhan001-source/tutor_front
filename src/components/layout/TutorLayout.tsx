import type { ReactNode } from "react";
import { Footer } from "../Footter/Footer";

export const TutorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-100">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};