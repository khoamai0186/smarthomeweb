import classnames from "classnames";
export default function Home() {
  return (
    <div className={classnames("h-full ")}>
      {/* Hero */}
      <div
        className={classnames(
          "flex justify-center flex-row items-center gap-12 md:gap-24 md:min-h-[80vh]",
          "bg-[url('/src/assets/SmartHomes2.jpg')] bg-cover bg-center"
        )}
      >
        <div className={classnames("w-[50%] text-right")}>
          <div
            className={classnames(
              "absolute top-[30%] translate-y-[-30%] text-center"
            )}
          >
            <h4
              className={classnames(
                "w-[50%] bg-gradient-to-r from-cyan-500 to-[#203394] border-2 rounded-lg text-[20px] md:text-[18px] lg:text-[32px] font-semibold text-white justify mt-10 mb-10"
              )}
            >
              WE ARE ALL ABOUT
            </h4>
            <h2
              className={classnames(
                "text-[24px] md:text-[36px] lg:text-[48px] font-semibold text-white text-left mt-10 mb-10"
              )}
            >
              TAKE FULL CONTROL OF YOUR HOME
            </h2>
            <button
              className={classnames(
                `Button bg-[#203394] hover:bg-[#27313b] disabled:bg-emerald-900 text-white`,
                `transition-colors ease-in-out duration-50`,
                `rounded-lg flex-row justify-center items-center inline-flex gap-4`,
                "text-base px-4 py-2 w-100",
                "font-semibold md:text-[18px] bg-blue text-white border-lg"
              )}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH  */}
    </div>
  );
}
