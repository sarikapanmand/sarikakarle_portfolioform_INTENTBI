import React, { useState } from "react";
import "./PortfolioForm.css";

const PortfolioForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [resume, setResume] = useState("");
  const [testimonials, setTestimonials] = useState("");
  const [blogArticles, setBlogArticles] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleProjectChange = (index, event) => {
    const updatedProjects = [...projects];
    updatedProjects[index][event.target.name] = event.target.value;
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { projectName: "", description: "", liveDemo: "", sourceCode: "" }
    ]);
  };

  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Invalid email address");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }

    setSubmitted(true);

    // Open a new window with the message
    const newWindow = window.open("", "_blank", "width=400,height=200");
    newWindow.document.write(`
      <html>
        <head>
          <style>
          body {
            text transformation:uppercase;
            background: -webkit-gradient(
              linear,
              left bottom,
              right top,
              color-stop(0.21, #33475b),
              color-stop(0.7, #ff9900)
            );
            background: -webkit-linear-gradient(bottom left, #33475b 21%, #dbf9fc 70%);
            background: -moz-linear-gradient(bottom left, #33475b 21%, #dbf9fc 70%);
            background: -o-linear-gradient(bottom left, #33475b 21%, #dbf9fc 70%);
            background: -ms-linear-gradient(bottom left, #33475b 21%, #dbf9fc 70%);
            background: linear-gradient(to top right, #33475b 21%, #dbf9fc 70%);
          }
  
          h2 {
            text-transform: uppercase;
            font-size: 2em; /* Default font size */
            line-height: 1.2; /* Default line height */
          }
          
          @media screen and (max-width: 768px) {
            /* Adjust font size for screens up to 768px wide */
            h2 {
              font-size: 1.5em;
            }
          }
          
          @media screen and (max-width: 480px) {
            /* Adjust font size for screens up to 480px wide */
            h2 {
              font-size: 1.2em;
            }
          }
          </style>
        </head
        <body>
          <h2>Your portfolio is created successfully!</h2>
        </body>
      </html>
    `);
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phoneNumber);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setProjects([]);
    setSkills("");
    setExperience("");
    setEducation("");
    setResume("");
    setTestimonials("");
    setBlogArticles("");
    setSubmitted(false);
  };

  return (
    <div className="portfolio-form">
      <>
        <h2>Create Your Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          {/* Projects */}
          <h3>Projects:</h3>
          {projects.map((project, index) => (
            <div key={index} className="project-inputs">
              <label>Project {index + 1}:</label>
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={project.projectName}
                onChange={(e) => handleProjectChange(index, e)}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, e)}
                required
              ></textarea>
              <input
                type="url"
                name="liveDemo"
                placeholder="Live Demo URL"
                value={project.liveDemo}
                onChange={(e) => handleProjectChange(index, e)}
                required
              />
              <input
                type="url"
                name="sourceCode"
                placeholder="Source Code URL"
                value={project.sourceCode}
                onChange={(e) => handleProjectChange(index, e)}
                required
              />
              <button type="button" onClick={() => deleteProject(index)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addProject}>
            Add Project
          </button>

          {/* Skills */}
          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          ></textarea>

          {/* Experience */}
          <label htmlFor="experience">Experience:</label>
          <textarea
            id="experience"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          ></textarea>

          {/* Education */}
          <label htmlFor="education">Education:</label>
          <textarea
            id="education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          ></textarea>

          {/* Resume/CV */}
          <label htmlFor="resume">Resume/CV:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          {/* Testimonials */}
          <label htmlFor="testimonials">Testimonials:</label>
          <textarea
            id="testimonials"
            name="testimonials"
            value={testimonials}
            onChange={(e) => setTestimonials(e.target.value)}
          ></textarea>

          {/* Blog or Articles */}
          <label htmlFor="blogArticles">Blog or Articles:</label>
          <textarea
            id="blogArticles"
            name="blogArticles"
            value={blogArticles}
            onChange={(e) => setBlogArticles(e.target.value)}
          ></textarea>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <br />
          <button type="submit">Create</button>
          <br />
        </form>
      </>
    </div>
  );
};

export default PortfolioForm;
