export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="max-w-4xl mx-auto p-8 text-white text-center    ">        
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-3 text-green-600">Thank you!</h1>
        <h2 className="text-2xl text-black">You successfully sent</h2>

        <div className="bg-gray-950 p-4 rounded-lg shadow-md text-white mt-6 text-4xl font-bold w-full max-w-sm mx-auto">
          ${amount}
        </div>
      </div>
    </main>
  );
}


  