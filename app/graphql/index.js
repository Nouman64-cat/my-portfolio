import { GraphQLClient, gql } from "graphql-request";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const graphqlAPI = new GraphQLClient(URL);

export const fetchProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        id
        projectDescription
        projectTags
        projectTitle
      }
    }
  `;
  try {
    const result = await graphqlAPI.request(query);
    return result.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// New fetchExperiences function
export const fetchExperiences = async () => {
  const query = gql`
    query FetchExperiences {
      experiences {
        id
        experienceLocation
        experienceEndDate
        experienceStartDate
        experienceDesignation
        experienceDescription
        experienceCompany
      }
    }
  `;
  try {
    const result = await graphqlAPI.request(query);
    return result.experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};
