export default function Sidebar({ currentPage, navigationHandler }) {
  return (
    <div className="w-64 flex h-screen flex-col justify-between border-e bg-yellow-500 fixed">
      <div className="px-4 py-6">
        <span className="grid h-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              onClick={() => navigationHandler("dashboard")}
              className={`cursor-pointer block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide ${
                currentPage === "dashboard" ? "bg-yellow-600" : ""
              }`}
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              onClick={() => navigationHandler("items")}
              className={`cursor-pointer block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide ${
                currentPage === "items" ? "bg-yellow-600" : ""
              }`}
            >
              Items
            </a>
          </li>

          <li>
            <a
              onClick={() => navigationHandler("categories")}
              className={`cursor-pointer block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide ${
                currentPage === "categories" ? "bg-yellow-600" : ""
              }`}
            >
              Categories
            </a>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Username</strong>

              <span> email </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
