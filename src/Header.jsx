const Header = () => {
  return (
    <section className="flex items-center justify-between h-16 p-3 shadow-md">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="flex items-center p-2 gap-8">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            strokeWidth="1"
            stroke="currentColor"
            className="size-8 "
          >
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
            <circle
              strokeLinecap="round"
              strokeLinejoin="round"
              cx="8"
              cy="12"
              r="3"
            />
          </svg>
        </button>

        <div className="flex">
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </button>
          <div className="flex border-4 rounded-full border-customBlue h-1 cursor-pointer"></div>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6l56cC0s4sjp7p-17JHH7mLrdBCJXfslL_2px2wdau8sXlvKTAXZl5luP1meB1xbbGE&usqp=CAU"
          className="size-7 rounded-full object-cover cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Header;
