import { use } from "react";

export default function Card({ promiseTickets }) {
  const ticketsData = use(promiseTickets);
  // console.log(ticketsData);

  return (
    <div className="max-w-11/12 mx-auto mt-8">
      <p>Customer Tickets</p>

      <section className="grid grid-cols-12 gap-6 mt-4">
        {/* Main Content */}
        <section className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ticketsData.map((ticket) => (
              <div
                key={ticket.id}
                className="card w-full bg-white card-sm shadow-sm"
              >
                <div className="card-body">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="card-title">{ticket.title}</h2>
                    <button className={`btn  rounded-3xl text-[16px] ${ticket.span == "Open" ? "text-[#0B5E06] bg-[#10341d]" : ticket.status == "In Progress" ? "text-[#9C7700] bg-[#F8F3B9] " : "text-[#9C7700] bg-[#eeeac3]"}`}>
                      {ticket.status}
                    </button>
                  </div>

                  <p className="line-clamp-2">{ticket.description}</p>

                  <div className="flex justify-between gap-3 card-actions">
                    <div className="flex gap-3 text-sm">
                      <p>{ticket.id}</p>
                      <p  className={`font-bold ${ticket.priority == "High" ? "text-[#F83044]" : ticket.priority == "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{ticket.priority}</p>
                    </div>

                    <div className="flex gap-3 text-sm text-gray-400">
                      <p>{ticket.customer}</p>
                      <p>{ticket.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <section className="col-span-12 lg:col-span-3">
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div>
              <h2 className="text-[24px] font-semibold ">
                Task Status
              </h2>
              <div className="space-y-4">
                <p className="text-[#627382]">
                  Select a ticket to add to Task Status
                </p>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h3 className="font-semibold mb-3">Billing discrepancy</h3>
                  <button className="w-full btn bg-green-500 text-white py-2 rounded-lg">
                    Complete
                  </button>
                </div>
                <h2 className="text-[24px] font-semibold pt-4">
                  Resolved Task
                </h2>
                <p className="text-[#627382]">No resolved tasks yet.</p>
                <div className="bg-blue-200 p-4 rounded-xl">
                  Login issues on mobile
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
