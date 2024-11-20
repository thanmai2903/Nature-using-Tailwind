import React from "react";

function Facts() {
  return (
    <div className="p-8 bg-green-100 text-left">
      <div className="text-3xl mb-10 text-center">Did You Know?</div>
      <div className="max-w-4xl mx-auto text-sm leading-loose">
        <div className="bg-gray-50 p-3 rounded-xl mb-4 text-center">
          Over 70% of the Earth's surface is covered by water.
        </div>
        <div className="bg-gray-50 p-3 rounded-xl mb-4 text-center">
          Trees can communicate and share nutrients through underground fungi.
        </div>
        <div className="bg-gray-50 p-3 rounded-xl mb-4 text-center pl-1">
          Rainforests are home to over 50% of the world's species.
        </div>
        <div className="bg-gray-50 p-3 rounded-xl mb-4 text-center">
          The Amazon rainforest produces 20% of the world's oxygen.
        </div>
        <div className="bg-gray-50 p-3 rounded-xl mb-4 text-center">
          Coral reefs are the largest living structures on Earth.
        </div>
      </div>
    </div>
  );
}

export default Facts;
