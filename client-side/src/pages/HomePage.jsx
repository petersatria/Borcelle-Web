import { FaBed, FaCoffee, FaUtensils } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 py-10">
        <div className="flex justify-around items-center mt-5">
          <h1 className="text-7xl text-primary-yellow">
            Welcome to our <br /> Restaurant
          </h1>{" "}
          <img
            src="https://cdn.upmenu.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic8.jpg?v=8"
            alt=""
            style={{ width: 400, borderRadius: "80px 0px 80px 0px" }}
          />
        </div>
      </section>
      <section className="bg-neutral-100 py-5">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-evenly">
          <div className="flex flex-col w-60">
            <FaCoffee className="h-24 w-16 self-center text-primary-yellow" />
            <h1 className="text-center text-2xl font-semibold">
              Excellent coffee
            </h1>
            <p className="text-center">
              We offer only the finest coffee from the finest beans.
            </p>
          </div>
          <div className="flex flex-col w-60">
            <FaBed className="h-24 w-16 self-center text-primary-yellow" />
            <h1 className="text-center text-2xl font-semibold">
              Rest comfortably
            </h1>
            <p className="text-center">We offer guest rooms for travelers.</p>
          </div>
          <div className="flex flex-col w-60">
            <FaUtensils className="h-24 w-12 self-center text-primary-yellow" />
            <h1 className="text-center text-2xl font-semibold">
              Delicious food
            </h1>
            <p className="text-center">Original cuisine at will.</p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto p-4 py-8">
        <div className="flex justify-center items-center mt-5">
          <img
            src="https://cdn.upmenu.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8"
            alt=""
            style={{ width: 400, borderRadius: "80px 0px 80px 0px" }}
          />
          <div className="ms-20 w-3/6">
            <h2 className="text-2xl text-primary-yellow font-semibold">
              Taste the world's cuisine
            </h2>
            <h1 className="text-5xl mt-8">It will delight you!</h1>
            <p className="tracking-wide mt-5 leading-5">
              We are not afraid to experiment. Our Chef combines carefully
              selected ingredients and serves them on your plate in an
              out-of-the-ordinary form.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
