export const footerSchema = {
    name: "footer",
    title: "Footer Section",
    type: "document",
    fields: [
        {
            name: "heading",
            title: "Main Heading",
            type: "string",
          },
          {
            name: "description",
            title: "Description",
            type: "text", 
          },
          
      {
        name: "company",
        title: "Company",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "help",
        title: "Help",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "faq",
        title: "FAQ",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "resources",
        title: "Resources",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "socialLinks",
        title: "Social Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
            
              { name: "link", title: "Link", type: "url" },
            ],
          },
        ],
      },
      {
        name: "footerText",
        title: "Footer Text",
        type: "string",
      },
      {
        name: "footerImage",
        title: "Footer Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
  export const letterSchema = {
    name: "letter",
    title: "Newsletter Section",
    type: "document",
    fields: [
      {
        name: "heading",
        title: "Heading",
        type: "string",
      },
      {
        name: "placeholderText",
        title: "Placeholder Text",
        type: "string",
      },
      {
        name: "buttonText",
        title: "Button Text",
        type: "string",
      },
      {
        name: "icon",
        title: "Email Icon",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  

