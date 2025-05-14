// filter-logic.js
function filterProjectsByMultipleTags(projectsArray, selectedFilterTags) {
  if (!selectedFilterTags || selectedFilterTags.length === 0) {
    return [...projectsArray];
  }

  const normalizedFilterTags = selectedFilterTags.map(tag => tag.trim().toLowerCase());

  return projectsArray.filter(project => {
    if (!project.tags || !Array.isArray(project.tags)) {
      return false;
    }
    const projectTagsNormalized = project.tags.map(tag => tag.trim().toLowerCase());
    return normalizedFilterTags.every(filterTag =>
      projectTagsNormalized.includes(filterTag)
    );
  });
}