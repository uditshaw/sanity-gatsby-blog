export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "630df6ea386b0542da941eea",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-keqtxxet",
                  apiId: "52e199df-393c-4414-8c5c-dfefaa583ce8",
                },
                {
                  buildHookId: "630df6ea3174f0430d6e246f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-vj5swthf",
                  apiId: "15f3fb5b-fc1c-48af-a593-d8ad6d145858",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/uditshaw/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-vj5swthf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
