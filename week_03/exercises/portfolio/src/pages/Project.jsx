import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader, PageBody, Picture, Button, Navigation } from '../components';
import projects from '../data/projects.json'; // Ensure the file extension is correct if it's a JSON file.

export default function Project() {
  const { id } = useParams(); // Capture the 'id' from the URL.
  console.log("URL id:", id); // Log the ID from the URL for debugging.

  // Convert id to integer since JSON ids are numeric.
  const numericId = parseInt(id, 10);
  console.log("Converted numericId:", numericId); // Log the converted ID for debugging.

  // Find the project using numericId.
  const project = projects.projects.find(p => p.id === numericId);
  console.log("Found project:", project); // Log the found project for debugging.

  // Guard clause for when no project is found.
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <PageHeader title={project.name} />
      <PageBody content="This is a project page" />
      <Picture src="https://via.placeholder.com/150" alt="Project Image" />
      <Button label="Contact Us" url="/contact" />
    </div>
  );
}
