export const orderStatusColor = (status?: string) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";

    case "ON_THE_WAY":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";

    case "WORKING":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";

    case "DONE":
      return "bg-green-500/20 text-green-400 border-green-500/30";

    case "CANCELLED":
      return "bg-red-500/20 text-red-400 border-red-500/30";

    default:
      return "bg-slate-500/20 text-slate-400 border-slate-500/30";
  }
};