import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const MS_PER_DAY = 8.64e7;

export default function Zp() {
  const [money, setMoney] = useState<number>(0);
  const [date, setDate] = useState<string>(String(new Date()));
  const [days, setDays] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const dateDiff: Date = new Date(Number(new Date(date)) - Number(new Date()));
    const dateDiffRounded: number = Math.floor(+dateDiff / MS_PER_DAY) + 1;
    setDays(() => (dateDiffRounded > 0 ? dateDiffRounded : 0));
    setResult(() => (money / dateDiffRounded > 0 && money / dateDiffRounded < Infinity ? money / dateDiffRounded : 0));
  }, [money, date]);

  return (
    <>
      <Head>
        <title>Services | Cost Per Day</title>
      </Head>
      <div className="bg-gray-800 min-h-screen w-screen text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-7 uppercase">Cost per day</h1>
        <div className="w-8/12 flex flex-col items-center">
          <input
            type="text"
            placeholder="money"
            className="outline-none w-56 text-gray-600 p-3 mb-7 rounded"
            value={money}
            onChange={(e) => setMoney(Number(e.target.value))}
          />
          <input
            type="date"
            placeholder="date"
            className="outline-none w-56 text-gray-600 p-3 mb-5 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="text-2xl">Days: {days}</div>
        <div className="text-2xl">Cost: {result}</div>
      </div>
    </>
  );
}
