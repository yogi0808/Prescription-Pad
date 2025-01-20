import React from "react"
import EmailSvg from "@/svg/EmailSvg"
import PhoneSvg from "@/svg/PhoneSvg"
import { getCurrentDate } from "@/utils/helper"

const Pad = async ({ params }) => {
  const { name } = await params

  return (
    <main className="w-full h-full flex p-4 flex-col gap-4">
      <h5 className="text-center">Hariprabodham</h5>
      <header className="flex justify-between w-full border-b-2 border-zinc-200 pb-4 ">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl">VD. Prapti Jivrajani</h2>
          <p className="font-semibold text-zinc-400">(M.D. Ayurveda)</p>
          <p className="text-zinc-600">
            16 - Pruthvi Township, Opp. Tulsiram, <br /> Rambhaikaka Marg.
            Bakrol, Anand
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <h5 className="text-zinc-600">
            <span className="font-bold text-black">data:</span>{" "}
            {getCurrentDate()}{" "}
          </h5>
          <div className="flex flex-col gap-2 text-zinc-600">
            <p className="flex items-center">
              <EmailSvg /> drprapti.009@gmail.com
            </p>
            <p className="flex items-center">
              <PhoneSvg />
              9925200575
            </p>
          </div>
        </div>
      </header>
      <div className="min-h-[700px] flex flex-col justify-between relative">
        <p className="text-zinc-600 capitalize">
          <span className="font-bold text-black">Patient's Name:</span>{" "}
          {name.replace("%20", " ")}
        </p>

        <div className="flex flex-col justify-center items-center gap-2 self-end w-1/3">
          <hr className="w-full border-t-2 border-zinc-200" />
          <p className="font-bold">Signature</p>
        </div>
        <div className="bg-[url(/padBG.svg)] bg-center bg-contain bg-no-repeat bg-opacity-50 absolute top-0 left-0 w-full h-full opacity-[0.1] -z-[1]"></div>
      </div>
    </main>
  )
}

export default Pad
