// export default {
//     name: "order",
//     title: "Orders",
//     type: "document",
//     fields: [
//       {
//         name: "customerName",
//         title: "Customer Name",
//         type: "string",
//       },
//       {
//         name: "email",
//         title: "Customer Email",
//         type: "string",
//       },
//       {
//         name: "products",
//         title: "Ordered Products",
//         type: "array",
//         of: [{ type: "reference", to: [{ type: "order" }] }],
//         // products
//       },
//       {
//         name: "totalAmount",
//         title: "Total Amount",
//         type: "number",
//       },
//       {
//         name: "status",
//         title: "Order Status",
//         type: "string",
//         options: {
//           list: [
//             { title: "Pending", value: "pending" },
//             { title: "Shipped", value: "shipped" },
//             { title: "Delivered", value: "delivered" },
//           ],
//         },
//       },
//       {
//         name: "orderDate",
//         title: "Order Date",
//         type: "datetime",
//       },
//     ],
//   };
  




export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "email",
      title: "Customer Email",
      type: "string",
    },
    {
      name: "address",
      title: "Shipping Address",
      type: "string", // Address ko string ya text type de sakte hain
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string", // Postal code bhi string ho sakta hai
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
  ],
};


