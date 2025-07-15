import { SimpleWidget, WidgetsGrid } from "@/components";
import { describe } from "node:test";

export const metadata={
  title:'Admin Dashboard',
  description:'SEO title'
}

export default function MainPage() {
  return (
    <div className="text- p-2">
      <h1 className="mt-2 text-3xl">Admin Dashboard</h1>
      <span className="text-xl">General info</span>
      <WidgetsGrid></WidgetsGrid>
    </div>
  );
}