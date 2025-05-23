// --- Global constants for image preview ---
const imagePreviewDiv = document.getElementById("image-preview-container");
const hoveredProjectLink = document.getElementById("hovered-project-link"); // NEW
const hoveredImage = document.getElementById("hovered-project-image");
const hoveredProjectName = document.getElementById("hovered-project-name");

const DEFAULT_PREVIEW_IMAGE_SRC = "ressources/alogo2.gif";
const DEFAULT_PREVIEW_TEXT = "";
const IMAGE_PREVIEW_TRANSITION_DURATION_MS = 300;
let imagePreviewTransitionTimeoutId = null;

// --- Main application logic ---
document.addEventListener("DOMContentLoaded", () => {
  const tagFiltersContainer = document.getElementById("tag-filters-container");
  const categoryFiltersContainer = document.getElementById(
    "category-filters-container"
  );
  const projectsContainer = document.getElementById("projects-container");

  // --- 1. Unified renderProjects function (with hover logic for details) ---
  function renderProjects(projectsToDisplay) {
    if (!projectsContainer) {
      console.error(
        "Projects container (#projects-container) not found. Cannot render projects."
      );
      return;
    }
    projectsContainer.innerHTML = "";

    if (hoveredImage) {
      clearTimeout(imagePreviewTransitionTimeoutId);
      hoveredImage.src = DEFAULT_PREVIEW_IMAGE_SRC;
      hoveredImage.alt = "Project Preview";
      hoveredImage.style.opacity = 1;
    }
    if (hoveredProjectName) {
      hoveredProjectName.textContent = DEFAULT_PREVIEW_TEXT;
    }
    if (hoveredProjectLink) {
      // Reset link
      hoveredProjectLink.href = "#";
      hoveredProjectLink.style.cursor = "default"; // Reset cursor
    }

    if (!projectsToDisplay || projectsToDisplay.length === 0) {
      projectsContainer.innerHTML =
        '<p class="no-projects">No projects match your selected filters.</p>';
      return;
    }

    projectsToDisplay.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      const hasLink = project.links && project.links !== "none" && project.links.trim() !== "";
        if (hasLink) {
        card.classList.add("project-card-clickable"); // For CSS styling (e.g., cursor)
        card.addEventListener("click", (e) => {
          // Prevent click if a text selection is happening or a nested link/button was clicked
          if (window.getSelection().toString() || e.target.closest('a, button')) {
            return;
          }
          window.open(project.links, "_blank", "noopener,noreferrer");
        });
      }

      let tagsHTML = "";
      if (project.tags && project.tags.length > 0) {
        tagsHTML = project.tags
          .map((tag) => `<span class="tag-item">${tag}</span>`)
          .join("");
      }

      const projectName = project.name || "Unnamed Project";
      const projectYear = project.year || "";
      const projectDesc = project.description || "No description available.";
      const projectTools = project.tools || "N/A";

      //  ${project.src ? `<img src="${project.src}" alt="${projectName} thumbnail">` : ''}
      card.innerHTML = `
               <h3>${projectName}</h3>
                <div class="project-hover-details">
                    <p class="project-year">${
                      projectYear ? `${projectYear}` : ""
                    } </p>
                    <p class="project-description">${projectDesc}</p>
                    <p class="project-tools"><strong>Tools:</strong> ${projectTools}</p>
                </div>
                ${
                  tagsHTML
                    ? `<div class="tag-grouping"><div class="tags">${tagsHTML}</div></div>`
                    : ""
                }
            `;

      card.addEventListener("mouseenter", () => {
        if (!hoveredImage || !hoveredProjectName || !hoveredProjectLink) return; // Check for link element too
        clearTimeout(imagePreviewTransitionTimeoutId);
        hoveredImage.style.opacity = 0;
        hoveredProjectLink.href = "#";
        hoveredProjectLink.style.cursor = "default";

        imagePreviewTransitionTimeoutId = setTimeout(() => {
          if (project.src) {
            hoveredImage.src = project.src;
            hoveredImage.alt = `${projectName} Preview`;
            hoveredProjectName.textContent = projectName;
          } else {
            hoveredImage.src = DEFAULT_PREVIEW_IMAGE_SRC;
            hoveredImage.alt = "No preview available";
            hoveredProjectName.textContent = `${projectName} (No Preview)`;
          }
             if (project.links && project.links !== "none" && project.links.trim() !== "") {
            hoveredProjectLink.href = project.links;
            hoveredProjectLink.style.cursor = "pointer"; // Indicate it's clickable
          } else {
            hoveredProjectLink.href = "#"; // Or "javascript:void(0);" to prevent page jump
            hoveredProjectLink.style.cursor = "default"; // Not clickable
          }
          hoveredImage.style.opacity = 1;
        }, IMAGE_PREVIEW_TRANSITION_DURATION_MS);
      });

       card.addEventListener("mouseleave", () => {
        if (!hoveredImage || !hoveredProjectName || !hoveredProjectLink) return;
        clearTimeout(imagePreviewTransitionTimeoutId);
        imagePreviewTransitionTimeoutId = setTimeout(() => {

          hoveredImage.style.opacity = 0.5;
        }, IMAGE_PREVIEW_TRANSITION_DURATION_MS);
      });

      projectsContainer.appendChild(card);
    });
  }


  // --- 2. Tag Filtering Logic ---
  function getAllUniqueTags(projectsData) {
    if (!projectsData) return [];
    const allTags = new Set();
    projectsData.forEach((project) => {
      if (project.tags && Array.isArray(project.tags)) {
        project.tags.forEach((tag) => allTags.add(tag.trim().toLowerCase()));
      }
    });
    return Array.from(allTags).sort();
  }

  function renderTagFilters(uniqueTagsToList) {
    if (!tagFiltersContainer) return;
    tagFiltersContainer.innerHTML = "";
    uniqueTagsToList.forEach((tag) => {
      const filterId = `filter-tag-${tag.replace(/\s+/g, "-")}`;
      const div = document.createElement("div");
      div.classList.add("tag-filter");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = filterId;
      checkbox.value = tag;
      checkbox.addEventListener("change", handleTagFilterChange);
      const label = document.createElement("label");
      label.htmlFor = filterId;
      label.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
      div.appendChild(checkbox);
      div.appendChild(label);
      tagFiltersContainer.appendChild(div);
    });
  }

  // --- 3. Category Filtering Logic ---

  // Keep this for individual tag checkbox filtering if you want AND logic for them
  function filterProjectsByMultipleTags(projectsArray, selectedFilterTags) {
    if (!selectedFilterTags || selectedFilterTags.length === 0) {
      return [...projectsArray];
    }
    const normalizedFilterTags = selectedFilterTags.map((tag) =>
      tag.trim().toLowerCase()
    );
    return projectsArray.filter((project) => {
      if (!project.tags || !Array.isArray(project.tags)) {
        return false;
      }
      const projectTagsNormalized = project.tags.map((tag) =>
        tag.trim().toLowerCase()
      );
      return normalizedFilterTags.every(
        (
          filterTag // AND logic
        ) => projectTagsNormalized.includes(filterTag)
      );
    });
  }

  // NEW function for category filtering (OR logic)
  function filterProjectsByCategoryTags(projectsArray, categoryTags) {
    if (!categoryTags || categoryTags.length === 0) {
      // This handles the "all" category, or if a category has no specific tags defined
      return [...projectsArray];
    }
    const normalizedCategoryTags = categoryTags.map((tag) =>
      tag.trim().toLowerCase()
    );
    return projectsArray.filter((project) => {
      if (!project.tags || !Array.isArray(project.tags)) {
        return false;
      }
      const projectTagsNormalized = project.tags.map((tag) =>
        tag.trim().toLowerCase()
      );
      // Use some() for OR logic: project must have at least one of the category tags
      return normalizedCategoryTags.some((catTag) =>
        projectTagsNormalized.includes(catTag)
      );
    });
  }

  const categories = {
    all: [], // An empty array here means "no specific tags to filter by", so all projects show
    cases: ["case study"],
    motion: ["motion graphics", "video editing"],
    branding: ["branding", "logo design"],
    web: ["ui", "ux","ui/ux", "web design", "html / css"], 
      uiux: ["ui", "ux","ui/ux"], 

  };

  function updateCategoryHighlight() {
    if (!categoryFiltersContainer) return;

    const allCategoryDivs =
      categoryFiltersContainer.querySelectorAll(".category-filter");
    allCategoryDivs.forEach((div) => {
      div.classList.remove("selected");
    });

    const selectedRadioButton = categoryFiltersContainer.querySelector(
      'input[type="radio"]:checked'
    );
    if (selectedRadioButton) {
      // Find the parent .category-filter div and add the 'selected' class
      const parentDiv = selectedRadioButton.closest(".category-filter");
      if (parentDiv) {
        parentDiv.classList.add("selected");
      }
    }
  }

  function handleCategoryChange() {
    if (typeof projects === "undefined" || !projects) {
      console.warn("'projects' data not found for category filtering.");
      renderProjects([]);
      return;
    }
    if (!categoryFiltersContainer) {
      console.warn("Category filters container not found.");
    }

    updateCategoryHighlight(); // Call the highlight function

    const selectedRadioButton = categoryFiltersContainer
      ? categoryFiltersContainer.querySelector('input[type="radio"]:checked')
      : null;
    let tagsForCategory = [];
    // Using 'all' as a special case. If category not found, default to all.
    if (selectedRadioButton) {
      const selectedCategoryKey = selectedRadioButton.value;
      if (categories[selectedCategoryKey]) {
        tagsForCategory = categories[selectedCategoryKey];
      } else if (selectedCategoryKey !== "all") {
        // 'all' has empty tagsForCategory
        console.warn(
          `Category key "${selectedCategoryKey}" not found in categories object. Showing all projects.`
        );
      }
      // For 'all', tagsForCategory remains [] which means show all projects when passed to filter.
    }

    const filteredProjects = filterProjectsByCategoryTags(
      // or filterProjectsByMultipleTags
      projects,
      tagsForCategory
    );
    renderProjects(filteredProjects);
  }

  // --- 4. Initialization ---
  if (typeof projects === "undefined" || !projects) {
    // ... (your existing critical error handling) ...
    return;
  }

  if (tagFiltersContainer) {
    const uniqueTags = getAllUniqueTags(projects);
    renderTagFilters(uniqueTags); // Ensure renderTagFilters sets up its own event listeners
    // to call applyAllFilters or handleTagFilterChange
  }

  if (categoryFiltersContainer) {
    const radioButtons = categoryFiltersContainer.querySelectorAll(
      'input[type="radio"]'
    );
    radioButtons.forEach((radio) => {
      // Also add click listener to the parent div for better UX if radios are hidden
      const parentDiv = radio.closest(".category-filter");
      if (parentDiv) {
        parentDiv.addEventListener("click", () => {
          if (!radio.checked) {
            // Only if it's not already checked
            radio.checked = true;
            // Manually dispatch a change event so our listener picks it up
            const event = new Event("change", { bubbles: true });
            radio.dispatchEvent(event);
          }
        });
      }
      radio.addEventListener("change", handleCategoryChange); // This will now also update highlight
    });
    handleCategoryChange(); // Initial call to set filter and highlight based on default checked
  } else if (tagFiltersContainer) {
    // handleTagFilterChange(); // Or applyAllFilters();
  } else {
    renderProjects(projects);
  }
});

// cursor
document.addEventListener("DOMContentLoaded", () => {
  const customCursor = document.getElementById("custom-text-cursor");
  const targetElements = document.querySelectorAll(".hoverInteraction"); // Your target class

  if (!customCursor) {
    console.error("Custom cursor element not found!");
    return;
  }

  const defaultCursorBgColor = getComputedStyle(customCursor).backgroundColor;
  const defaultCursorTextColor = getComputedStyle(customCursor).color;

  targetElements.forEach((targetEl) => {
    targetEl.addEventListener("mouseenter", (e) => {
      const cursorText = targetEl.getAttribute("data-cursor-text") || "Action";
      const cursorBgColor = targetEl.getAttribute("data-cursor-bg-color");
      const cursorTextColor = targetEl.getAttribute("data-cursor-text-color"); // Optional

      customCursor.textContent = cursorText;

      // Set background color
      if (cursorBgColor) {
        customCursor.style.backgroundColor = cursorBgColor;
      } else {
        customCursor.style.backgroundColor = defaultCursorBgColor; // Revert to default
      }

      // Set text color (optional)
      if (cursorTextColor) {
        customCursor.style.color = cursorTextColor;
      } else {
        customCursor.style.color = defaultCursorTextColor; // Revert to default
      }

      customCursor.style.display = "block";
      targetEl.style.cursor = "none";
      updateCursorPosition(e);
    });

    targetEl.addEventListener("mouseleave", () => {
      customCursor.style.display = "none";
      targetEl.style.cursor = "auto";
    });

    targetEl.addEventListener("mousemove", (e) => {
      if (customCursor.style.display === "block") {
        updateCursorPosition(e);
      }
    });
  });

  function updateCursorPosition(event) {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
  }
});
