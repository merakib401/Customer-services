import { use } from "react";

export default function Card({
  promiseTickets,
  inProgress,
  setInProgress,
  resolved,
  setResolved,
}) {
  const ticketsData = use(promiseTickets);

  const visibleTickets = ticketsData.filter(
    (t) => !resolved.some((r) => r.id === t.id),
  );


  const handleClick = (ticket) => {
    const alreadyAdded = inProgress.some((item) => item.id === ticket.id);
    if (alreadyAdded) return;

    setInProgress([...inProgress, ticket]);
  };

  
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((item) => item.id !== ticket.id));
    setResolved([...resolved, ticket]);
  };

  return (
    <div className="max-w-11/12 mx-auto mt-8">
      <p className="text-2xl font-semibold">Customer Tickets</p>

      <section className="grid grid-cols-12 gap-6 mt-4">
        {/* Main Content */}
        <section className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="card w-full bg-white card-sm shadow-sm "
                onClick={() => handleClick(ticket)}
              >
                <div className="card-body">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="card-title">{ticket.title}</h2>
                    <button
                      className={`btn  rounded-3xl text-[16px] ${ticket.span == "Open" ? "text-[#0B5E06] bg-[#10341d]" : ticket.status == "In Progress" ? "text-[#9C7700] bg-[#F8F3B9] " : "text-[#9C7700] bg-[#eeeac3]"}`}
                    >
                      {ticket.status}
                    </button>
                  </div>

                  <p className="line-clamp-2">{ticket.description}</p>

                  <div className="flex justify-between gap-3 card-actions">
                    <div className="flex gap-3 text-sm">
                      <p>{ticket.id}</p>
                      <p
                        className={`font-bold ${ticket.priority == "High" ? "text-[#F83044]" : ticket.priority == "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}
                      >
                        {ticket.priority}
                      </p>
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
              <h2 className="text-[24px] font-semibold ">Task Status</h2>
              <div className="space-y-4">
                {inProgress.length === 0 ? (
                  <p className="text-[#627382]">
                    Select a ticket to add to Task Status
                  </p>
                ) : (
                  inProgress.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="rounded-lg bg-gray-50 p-4 shadow-sm"
                    >
                      <h3 className="font-semibold">{ticket.title}</h3>

                      <button
                        className="mt-3 w-full rounded-lg bg-green-600 py-2 text-white"
                        onClick={() => handleComplete(ticket)}
                      >
                        Complete
                      </button>
                    </div>
                  ))
                )}
                <h2 className="pt-4 text-2xl font-semibold">Resolved Task</h2>

                {resolved.length === 0 ? (
                  <p className="text-[#627382]">No resolved tasks yet.</p>
                ) : (
                  resolved.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="rounded-lg bg-green-50 p-4 shadow-sm"
                    >
                      <h3 className="font-semibold">{ticket.title}</h3>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
