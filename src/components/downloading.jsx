import { useState } from "react";
import { motion } from "framer-motion";

const Poll = () => {
  const [votes, setVotes] = useState([
    {
      title: "Am i good developer?!!",
      votes: 2,
      color: "bg-[#FFA38F]",
    },
    {
      title: "Or maybe im not😵",
      votes: 1,
      color: "bg-[#F4A261]",
    },
    
  ]);

  return (
    <section className="bg-black px-4 py-12">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
        <Options votes={votes} setVotes={setVotes} />
        <Bars votes={votes} />
      </div>
    </section>
  );
};

const Options = ({ votes, setVotes }) => {

  const handleIncrementVote = (vote) => {
    const newVote = { ...vote, votes: vote.votes + 1 };

    setVotes((pv) => pv.map((v) => (v.title === newVote.title ? newVote : v)));
  };

  return (
    <div className="col-span-1 py-12">
      
      <div className="mb-6 space-y-2">
        {votes.map((vote) => {
          return (
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleIncrementVote(vote)}
              key={vote.title}
              className={`w-full rounded-full ${vote.color} py-2 font-medium text-white`}
            >
              {vote.title}
            </motion.button>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          onClick={() => {
            setVotes((pv) => pv.map((v) => ({ ...v, votes: 0 })));
          }}
          className="rounded-full bg-slate-700 px-2 py-1.5 text-sm font-medium text-slate-200"
        >
          Reset count
        </motion.button>
      </div>
    </div>
  );
};

const Bars = ({ votes }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  return (
    <div
      className="col-span-1 grid min-h-[200px] gap-2"
      style={{
        gridTemplateColumns: `repeat(${votes.length}, minmax(0, 1fr))`,
      }}
    >
      {votes.map((vote) => {
        const height = vote.votes
          ? ((vote.votes / totalVotes) * 100).toFixed(2)
          : 0;
        return (
          <div key={vote.title} className="col-span-1">
            <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.span
                animate={{ height: `${height}%` }}
                className={`relative z-0 w-full ${vote.color}`}
                transition={{ type: "spring" }}
              />
              <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                <b>{vote.title}</b>
                <br></br>
                <span className="text-xs text-slate-200">
                  {vote.votes} votes
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Poll;