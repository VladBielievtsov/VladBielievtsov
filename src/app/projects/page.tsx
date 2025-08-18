import { Metadata } from "next";
import ProjectsPage from "./projects-page";

export default function Page() {
  return (
    <ProjectsPage />
  )
}

export const metadata: Metadata = {
  title: 'Projects',
};
