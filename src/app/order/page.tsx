// "use client";
// import { useState } from "react";

// export default function OrderForm() {
//   const [customerName, setCustomerName] = useState("");
//   const [email, setEmail] = useState("");
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [address, setAddress] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(""); // Clear previous error

//     try {
//       const response = await fetch("/api/placeOrder", {
//         method: "POST",
//         body: JSON.stringify({
//           customerName,
//           email,
//           totalAmount,
//           address,
//           postalCode,
//         }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//         throw new Error(`Server Error: ${response.status}`);
//       }

//       // Ensure response is valid JSON
//       const text = await response.text();
//       try {
//         const data = JSON.parse(text);
//         alert(data.message);
//       } catch (jsonError) {
//         console.error("Invalid JSON response:", text);
//         throw new Error("Invalid JSON response from server");
//       }
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//         setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4 mt-10 mb-10 border border-black"
//     >
//       <h2 className="text-2xl font-bold text-center text-gray-800">Place Your Order</h2>

//       <input
//         type="text"
//         value={customerName}
//         onChange={(e) => setCustomerName(e.target.value)}
//         placeholder="Full Name"
//         required
//         className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//       />

//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email Address"
//         required
//         className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//       />

//       <input
//         type="number"
//         value={totalAmount}
//         onChange={(e) => setTotalAmount(Number(e.target.value))}
//         placeholder="Total Amount"
//         required
//         className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//       />

//       <textarea
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Shipping Address"
//         required
//         rows={3}
//         className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//       />

//       <input
//         type="text"
//         value={postalCode}
//         onChange={(e) => setPostalCode(e.target.value)}
//         placeholder="Postal Code"
//         required
//         className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//       />

//       <button
//         type="submit"
//         disabled={loading}
//         className={`w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300 ${loading && "cursor-not-allowed opacity-50"}`}
//       >
//         Place Order
//       </button>

//       {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//     </form>
//   ); 
// }





"use client";
import { useState } from "react";

export default function OrderForm() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error

    try {
      const response = await fetch("/api/placeOrder", {
        method: "POST",
        body: JSON.stringify({
          customerName,
          email,
          totalAmount,
          address,
          postalCode,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      // Ensure response is valid JSON
      const text = await response.text();
      try {
        const data = JSON.parse(text);
        alert(data.message);

        
        setCustomerName("");
        setEmail("");
        setTotalAmount(0);
        setAddress("");
        setPostalCode("");
      } catch (jsonError) {
        console.error("Invalid JSON response:", text);
        throw new Error("Invalid JSON response from server");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4 mt-10 mb-10 border border-black"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Place Your Order</h2>

      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Full Name"
        required
        className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="number"
        value={totalAmount}
        onChange={(e) => setTotalAmount(Number(e.target.value))}
        placeholder="Total Amount"
        required
        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Shipping Address"
        required
        rows={3}
        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder="Postal Code"
        required
        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300 ${loading && "cursor-not-allowed opacity-50"}`}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </form>
  );
}








