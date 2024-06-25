export default function SuccessModal() {
  return (
    <>
      <div
        // onClick={() => setIsOpen(false)}
        className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
      >
        <div
          //   onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative mx-auto"
        >
          <h1 className="text-center my-auto text-2xl text-green-500">
            Successfully Edited!
          </h1>
        </div>
      </div>
    </>
  );
}
