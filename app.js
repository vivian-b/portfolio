// --- Global constants for image preview ---
const imagePreviewDiv = document.getElementById('image-preview-container');
const hoveredImage = document.getElementById('hovered-project-image');
const hoveredProjectName = document.getElementById('hovered-project-name');

const DEFAULT_PREVIEW_IMAGE_SRC = 'ressources/alogo2.gif';
const DEFAULT_PREVIEW_TEXT = 'Hover over a project';

const IMAGE_PREVIEW_TRANSITION_DURATION_MS = 300;
let imagePreviewTransitionTimeoutId = null;

// --- Main application logic ---
document.addEventListener('DOMContentLoaded', () => {
    const tagFiltersContainer = document.getElementById('tag-filters-container');
    const categoryFiltersContainer = document.getElementById('category-filters-container');
    const projectsContainer = document.getElementById('projects-container');

    // --- 1. Unified renderProjects function (with hover logic for details) ---
    function renderProjects(projectsToDisplay) {
        if (!projectsContainer) {
            console.error("Projects container (#projects-container) not found. Cannot render projects.");
            return;
        }
        projectsContainer.innerHTML = '';

        if (hoveredImage) {
            clearTimeout(imagePreviewTransitionTimeoutId);
            hoveredImage.src = DEFAULT_PREVIEW_IMAGE_SRC;
            hoveredImage.alt = 'Project Preview';
            hoveredImage.style.opacity = 1;
        }
        if (hoveredProjectName) {
            hoveredProjectName.textContent = DEFAULT_PREVIEW_TEXT;
        }

        if (!projectsToDisplay || projectsToDisplay.length === 0) {
            projectsContainer.innerHTML = '<p class="no-projects">No projects match your selected filters.</p>';
            return;
        }

        projectsToDisplay.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            let tagsHTML = '';
            if (project.tags && project.tags.length > 0) {
                tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
            }

            const projectName = project.name || 'Unnamed Project';
            const projectYear = project.year || '';
            const projectDesc = project.description || 'No description available.';
            const projectTools = project.tools || 'N/A';

            // MODIFIED PART: Added .project-hover-details wrapper
            //  ${project.src ? `<img src="${project.src}" alt="${projectName} thumbnail">` : ''}
            // 
            card.innerHTML = `
              
                <h3>${projectName} ${projectYear ? `(${projectYear})` : ''}</h3>
                <div class="project-hover-details">
                    <p class="project-description">${projectDesc}</p>
                    <p class="project-tools"><strong>Tools:</strong> ${projectTools}</p>
                </div>
                ${tagsHTML ? `<div class="tags"><strong>Tags:</strong> ${tagsHTML}</div>` : ''}
            `;

            card.addEventListener('mouseenter', () => {
                if (!hoveredImage || !hoveredProjectName) return;
                clearTimeout(imagePreviewTransitionTimeoutId);
                hoveredImage.style.opacity = 0;
                imagePreviewTransitionTimeoutId = setTimeout(() => {
                    if (project.src) {
                        hoveredImage.src = project.src;
                        hoveredImage.alt = `${projectName} Preview`;
                        hoveredProjectName.textContent = projectName;
                    } else {
                        hoveredImage.src = DEFAULT_PREVIEW_IMAGE_SRC;
                        hoveredImage.alt = 'No preview available';
                        hoveredProjectName.textContent = `${projectName} (No Preview)`;
                    }
                    hoveredImage.style.opacity = 1;
                }, IMAGE_PREVIEW_TRANSITION_DURATION_MS);
            });

            card.addEventListener('mouseleave', () => {
                if (!hoveredImage || !hoveredProjectName) return;
                clearTimeout(imagePreviewTransitionTimeoutId);
                hoveredImage.style.opacity = 0;
                imagePreviewTransitionTimeoutId = setTimeout(() => {
                    hoveredImage.src = DEFAULT_PREVIEW_IMAGE_SRC;
                    hoveredImage.alt = 'Project Preview';
                    hoveredProjectName.textContent = DEFAULT_PREVIEW_TEXT;
                    hoveredImage.style.opacity = 1;
                }, IMAGE_PREVIEW_TRANSITION_DURATION_MS);
            });

            projectsContainer.appendChild(card);
        });
    }

    // ... (rest of your JavaScript: getAllUniqueTags, renderTagFilters, handleTagFilterChange, categories, handleCategoryChange, Initialization)
    // The rest of the JS functions remain the same.
    // Make sure to include them here.
    // --- 2. Tag Filtering Logic ---
    function getAllUniqueTags(projectsData) {
        if (!projectsData) return [];
        const allTags = new Set();
        projectsData.forEach(project => {
            if (project.tags && Array.isArray(project.tags)) {
                project.tags.forEach(tag => allTags.add(tag.trim().toLowerCase()));
            }
        });
        return Array.from(allTags).sort();
    }

    function renderTagFilters(uniqueTagsToList) {
        if (!tagFiltersContainer) return;
        tagFiltersContainer.innerHTML = '';
        uniqueTagsToList.forEach(tag => {
            const filterId = `filter-tag-${tag.replace(/\s+/g, '-')}`;
            const div = document.createElement('div');
            div.classList.add('tag-filter');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = filterId;
            checkbox.value = tag;
            checkbox.addEventListener('change', handleTagFilterChange);
            const label = document.createElement('label');
            label.htmlFor = filterId;
            label.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
            div.appendChild(checkbox);
            div.appendChild(label);
            tagFiltersContainer.appendChild(div);
        });
    }

    function handleTagFilterChange() {
        if (typeof projects === 'undefined' || !projects) {
            console.warn("'projects' data not found for tag filtering.");
            renderProjects([]);
            return;
        }
        const selectedTags = [];
        if (tagFiltersContainer) {
            const checkboxes = tagFiltersContainer.querySelectorAll('input[type="checkbox"]:checked');
            checkboxes.forEach(checkbox => {
                selectedTags.push(checkbox.value.toLowerCase());
            });
        }
        const filteredProjects = filterProjectsByMultipleTags(projects, selectedTags);
        renderProjects(filteredProjects);
    }

    // --- 3. Category Filtering Logic ---
    const categories = { // Ensure this 'categories' object is defined
        all: [],
        motion: ["motion graphics", "video editing"],
        print: ["publication", "layout", "typography"],
        web: ["ui", "ux", "web design"],
    };

    function handleCategoryChange() {
        if (typeof projects === 'undefined' || !projects) {
            console.warn("'projects' data not found for category filtering.");
            renderProjects([]);
            return;
        }
        if (!categoryFiltersContainer) {
            console.warn("Category filters container not found.");
        }
        const selectedRadioButton = categoryFiltersContainer ? categoryFiltersContainer.querySelector('input[type="radio"]:checked') : null;
        let tagsForCategory = [];
        if (selectedRadioButton) {
            const selectedCategoryKey = selectedRadioButton.value;
            if (categories[selectedCategoryKey]) {
                tagsForCategory = categories[selectedCategoryKey];
            } else {
                console.warn(`Category key "${selectedCategoryKey}" not found in categories object.`);
            }
        }
        const filteredProjects = filterProjectsByMultipleTags(projects, tagsForCategory);
        renderProjects(filteredProjects);
    }

    // --- 4. Initialization ---
    if (typeof projects === 'undefined' || !projects) {
        console.error("CRITICAL: 'projects' data array is not defined. Cannot initialize.");
        renderProjects([]);
        if (hoveredImage) {
            hoveredImage.src = DEFAULT_PREVIEW_IMAGE_SRC;
            hoveredImage.alt = 'Project Preview';
            hoveredImage.style.opacity = 1;
        }
        if (hoveredProjectName) {
            hoveredProjectName.textContent = DEFAULT_PREVIEW_TEXT;
        }
        return;
    }

    if (tagFiltersContainer) {
        const uniqueTags = getAllUniqueTags(projects);
        renderTagFilters(uniqueTags);
    }

    if (categoryFiltersContainer) {
        const radioButtons = categoryFiltersContainer.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', handleCategoryChange);
        });
        handleCategoryChange();
    } else if (tagFiltersContainer) {
        handleTagFilterChange();
    } else {
        renderProjects(projects);
    }
});

// Ensure 'projects' data and 'filterProjectsByMultipleTags' are globally available.
/*
function filterProjectsByMultipleTags(allProjects, selectedTags) {
    if (!selectedTags || selectedTags.length === 0) {
        return allProjects;
    }
    return allProjects.filter(project => {
        if (!project.tags || project.tags.length === 0) {
            return false;
        }
        return selectedTags.some(tag => project.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()));
    });
}
const projects = [ { name: "P1", src:"img.png", year:"2023", description:"Desc 1", tools:"Tools 1", tags:["web"] }];
*/