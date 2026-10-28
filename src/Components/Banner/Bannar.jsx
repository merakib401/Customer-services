export default function Bannar() {
  return (
    <div className="flex max-w-11/12 mx-auto justify-between gap-4 mt-5">
      <div className="relative mx-auto w-full overflow-hidden rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-16 text-center text-white">
        {/* Curved Line Image */}
        <img
          src="/src/assets/vector1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-120 w-full object-cover pointer-events-none"
        />
        <img
          src="/src/assets/vector1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-120 w-full -scale-x-100 object-cover"
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl font-normal">In-Progress</h2>

          <p className="mt-4 text-6xl font-bold">0</p>
        </div>
      </div>


      <div className="relative mx-auto w-full overflow-hidden rounded-lg bg-linear-to-r from-[#54CF68]  to-[#00827A] px-4 py-16 text-center text-white">
        {/* Curved Line Image */}
        <img
          src="/src/assets/vector1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-120 w-full object-cover pointer-events-none"
        />
        <img
          src="/src/assets/vector1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-120 w-full -scale-x-100 object-cover"
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl font-normal">Resolved</h2>

          <p className="mt-4 text-6xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
