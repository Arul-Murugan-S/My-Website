document.addEventListener("DOMContentLoaded", function() {
  // Add Skills to List
  const skillsList = document.querySelector('#skills-table-container ul'); 
  const skills = [
    "Numpy", "Pandas", "NLTK", "Matplotlib", "Seaborn", "Exploratory Data Analysis", "Scikit-Learn",
    "OpenCV", "Python", "Pytorch", "CNN", "YOLO v5/v8", "MLflow", "AI/ML Ops", "Docker", "GitHub",
    "CI/CD", "Azure Cloud", "DevOps", "MongoDB", "STREAMLIT", "LLMs", "Prompt Engg", "GPT, RAG, LlamaIndex",
    "HTML5", "CSS3", "Bootstrap", "React.js", "Node.js", "JavaScript", "REST API"
  ];

  skills.forEach(function(skill) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });

  // Toggle display of Skills
  const skillsTitle = document.getElementById('skills-title');
  const skillsTableContainer = document.getElementById('skills-table-container');

  skillsTitle.addEventListener('click', function() {
    skillsTableContainer.style.display = (skillsTableContainer.style.display === 'none') ? 'block' : 'none';
  });

  // Toggle display of Experience
  const experienceTitle = document.getElementById('experience-title');
  const experienceTableContainer = document.getElementById('experience-table-container');

  experienceTitle.addEventListener('click', function(event) {
    if (!event.target.closest('#experience-table-container')) {
      experienceTableContainer.style.display = (experienceTableContainer.style.display === 'none') ? 'block' : 'none';
    }
  });

  // Toggle display of Educations
  const educationTitle = document.getElementById('education-title');
  const educationTableContainer = document.getElementById('education-table-container');

  educationTitle.addEventListener('click', function() {
    educationTableContainer.style.display = (educationTableContainer.style.display === 'none') ? 'block' : 'none';
  });

  // Add certificates content to list
  const certificatesList = document.querySelector("#certificates-table-container ul");
  const certificates = [
    "Introduction to Python",
    "Machine Learning Certification Course for Beginners",
    "Introduction to Natural Language Processing",
    "Introduction to Generative AI",
    "ChatGPT Prompt Engineering for Developers",
    "Building Systems with the ChatGPT API",
    "The Complete 2023 Web Development Bootcamp",
    "Full Stack Web Development"
  ];

  certificates.forEach(function(certificate) {
    const listItem = document.createElement("li");
    listItem.textContent = certificate;
    certificatesList.appendChild(listItem);
  });

  // Toggle display of certificates
  const certificatesTitle = document.getElementById('certificates-title');
  const certificatesTableContainer = document.getElementById('certificates-table-container');

  certificatesTitle.addEventListener('click', function() {
    certificatesTableContainer.style.display = (certificatesTableContainer.style.display === 'none') ? 'block' : 'none';
  });

  // Toggle display of Experience Table Rows
  const tableRows = document.querySelectorAll("#expandable-table tbody tr");
  
  tableRows.forEach(function(row) {
    row.addEventListener("click", function() {
      const targetId = this.getAttribute("data-target");
      const targetParagraph = document.getElementById(targetId);
      
      targetParagraph.style.display = (targetParagraph.style.display === "none") ? 'block' : 'none';
    });
  });
});
