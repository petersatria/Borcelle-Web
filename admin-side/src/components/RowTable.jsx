import { Link } from "react-router-dom";

export default function RowTable({
  category,
  index,
  handleEdit,
  handleDelete,
  item,
}) {
  return category ? (
    <tr
      className={`${
        index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
      } whitespace-nowrap`}
    >
      <td className="py-3 px-4 text-sm font-medium">{++index}</td>
      <td className="py-3 px-4 text-sm font-medium">{category.name}</td>
      <td className="py-3 px-4 text-sm font-medium">
        <Link
          onClick={() => handleEdit(category.id)}
          className="cursor-pointer text-yellow-600 mr-4"
        >
          Edit
        </Link>
        <Link
          onClick={() => handleDelete(category.id)}
          className="cursor-pointer text-red-500"
        >
          Delete
        </Link>
      </td>
    </tr>
  ) : (
    <tr
      className={`${
        index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
      } whitespace-nowrap`}
    >
      <td className="py-3 px-4 text-sm font-medium">{++index}</td>
      <td className="py-3 px-4 text-sm font-medium">{item.name}</td>
      <td className="py-3 px-4 text-sm font-medium">{item.description}</td>
      <td className="py-3 px-4 text-sm font-medium">{item.price}</td>
      <td>
        <img
          src={item.imgUrl}
          alt="img_item"
          style={{ width: 250, height: 150, objectFit: "cover" }}
        />
      </td>
      <td className="py-3 px-4 text-sm font-medium">{item.Category.name}</td>
      <td className="py-3 px-4 text-sm font-medium">
        <ol>
          {item.Ingredients.slice(0)
            .reverse()
            .map((e, i) => {
              return (
                <li key={e.id}>
                  {++i}. {e.name}
                </li>
              );
            })}
        </ol>
      </td>
      <td className="py-3 px-4 text-sm font-medium">{item.User.email}</td>
      <td className="py-3 px-4 text-sm font-medium">
        <Link
          onClick={() => handleEdit(item.id)}
          className="cursor-pointer text-yellow-600"
        >
          Edit
        </Link>
        <Link
          onClick={() => handleDelete(item.id)}
          className="cursor-pointer text-red-500 ml-4"
        >
          Delete
        </Link>
      </td>
    </tr>
  );
}
