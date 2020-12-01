const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  const query = `{
    projects:allSanityProject {
        edges {
          node {
            description
            title
            slug {
              current
            }
            
          }
          next {
            title
            description
            slug {
              current
            }
          }
        }
      }
    }
    `;

  const result = await graphql(query);

  if (result.errors) {
    throw result.errors 
 }


 
  const projects = result.data.projects.edges;

  const createProjectPage = project => {
    const next = project.next || projects[0].node;
    createPage({
      path: `/projects/${project.node.slug.current}`,
      component: projectTemplate,
      context: {
        // currentProject: project,
        title: project.node.title,
        slug: project.node.slug.current,
        nextSlug: next.slug.current,
        nextProject: next
        //...project.node
      }
    });
  };

  projects.forEach(createProjectPage);
};