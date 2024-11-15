const Body = () => {
  return (
    <section className="flex flex-col rounded my-3 p-4 w-full h-fit">
      <div className="flex w-full h-12 rounded">
        <span className="text-xl text-customBlue">John Doe</span>
      </div>
      <div className="flex w-full shadow-lg rounded-lg p-3">
        <div className="w-1/4 flex justify-center items-center p-2">
          <div className="h-fit border w-fit p-3 bg-customPurple rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
          </div>
          <div className="h-fit flex flex-col items-center w-fit p-3">
            <span className="font-extralight text-lg">Managed</span>
            <span className="from-neutral-950 text-2xl font-bold">223</span>
          </div>
        </div>

        <div className="h-20 w-fit m-auto flex items-center justify-center">
          <div className="h-full border"></div>
        </div>

        <div className="w-1/4 flex justify-center items-center p-2">
          <div className="h-fit border w-fit p-3 bg-customGreen rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
          </div>
          <div className="h-fit flex flex-col items-center w-fit p-3">
            <span className="font-extralight text-lg">Occupied</span>
            <span className="from-neutral-950 text-2xl font-bold">123</span>
          </div>
        </div>

        <div className="h-20 w-fit m-auto flex items-center justify-center">
          <div className="h-full border"></div>
        </div>

        <div className="w-1/4 flex justify-center items-center p-2">
          <div className="h-fit border w-fit p-3 bg-customYellow rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
          </div>
          <div className="h-fit flex flex-col items-center w-fit p-3">
            <span className="font-extralight text-lg">Vacant</span>
            <span className="from-neutral-950 text-2xl font-bold">100</span>
          </div>
        </div>

        <div className="h-20 w-fit m-auto flex items-center justify-center">
          <div className="h-full border"></div>
        </div>

        <div className="w-1/4 flex justify-center items-center p-2">
          <div className="h-fit border w-fit p-3 bg-customBlu rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div className="h-fit flex flex-col items-center w-fit p-3">
            <span className="font-extralight text-lg">Openings In</span>
            <span className="from-neutral-950 text-2xl font-bold">30</span>
          </div>
        </div>
      </div>
      <div className="flex w-full h-12 rounded mt-3">
        <span className="text-2xl ">Payment Schedules</span>
      </div>
      <div className="flex items-center justify-between w-full rounded-lg p-3 gap-3">
        <div className="w-1/3 h-80 flex flex-col border border-gary-500 rounded-lg overflow-y-auto min-h-60 shadow-xl">
          <div className="w-full h-fit p-1 flex items-center justify-center sticky top-0 bg-white z-10">
            <span className="font-semibold">Today</span>
          </div>
          <table className="w-full h-80">
            <thead className="w-full bg-customBlu">
              <tr className="flex justify-center items-center text-white text-xs p-1 border-y">
                <th className="w-1/3">Amount</th>
                <th className="w-1/3">Tenant Name</th>
                <th className="w-1/3">Phone</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/3 h-80 flex flex-col border border-gary-500 rounded-lg overflow-y-auto min-h-60 shadow-xl">
          <div className="w-full h-fit p-1 flex items-center justify-center sticky top-0 bg-white z-10">
            <span className="font-semibold">Tomorrow</span>
          </div>
          <table className="w-full h-80">
            <thead className="w-full bg-customBlu">
              <tr className="flex justify-center items-center text-white text-xs p-1 border-y">
                <th className="w-1/3">Amount</th>
                <th className="w-1/3">Tenant Name</th>
                <th className="w-1/3">Phone</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/3 h-80 flex flex-col border border-gary-500 rounded-lg overflow-y-auto min-h-60 shadow-xl">
          <div className="w-full h-fit p-1 flex items-center justify-center sticky top-0 bg-white z-10">
            <span className="font-semibold">Upcoming</span>
          </div>
          <table className="w-full h-80">
            <thead className="w-full bg-customBlu">
              <tr className="flex justify-center items-center text-white text-xs p-1 border-y">
                <th className="w-1/3">Amount</th>
                <th className="w-1/3">Tenant Name</th>
                <th className="w-1/3">Phone</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12000 AED</td>
                <td className="w-1/3">John doe</td>
                <td className="w-1/3">9876543210</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex w-full h-12 rounded mt-3">
        <span className="text-2xl ">Inspections</span>
      </div>
      <div className="flex items-start justify-between w-full rounded-lg px-3 gap-3">
        <div className="w-full h-80 flex flex-col border border-gary-500 rounded-lg overflow-y-auto min-h-60 shadow-xl">
          <table className="w-full h-80">
            <thead className="w-full bg-customBlu">
              <tr className="flex justify-start items-start text-white text-xs p-1 border-y">
                <th className="w-1/4">S.NO</th>
                <th className="w-1/4">Date</th>
                <th className="w-1/4">Property</th>
                <th className="w-1/4">Inspector</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">1</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">2</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">3</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">4</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">5</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">6</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">7</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">8</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">9</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">10</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">11</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">12</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">13</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1">
                <td className="w-1/3">14</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center border-y text-sm p-1 bg-blue-50">
                <td className="w-1/3">15</td>
                <td className="w-1/3">2034-Sep-19 08:30 AM</td>
                <td className="w-1/3 flex items-center gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Prop_name
                </td>
                <td className="w-1/3 flex items-center gap-4 justify-center text-customGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span>ins_one</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center w-full p-3 text-sm">
        <div className="flex items-center justify-end">
          <span>Showing 1 to 10 of 57 entries</span>
        </div>
        <div className="flex items-center justify-end">
          <span className="border p-2">Previous</span>
          <span className="border p-2 bg-customBlu">1</span>
          <span className="border p-2">2</span>
          <span className="border p-2">3</span>
          <span className="border p-2">4</span>
          <span className="border p-2">5</span>
          <span className="border p-2">6</span>
          <span className="border p-2">Next</span>
        </div>
      </div>
    </section>
  );
};

export default Body;
