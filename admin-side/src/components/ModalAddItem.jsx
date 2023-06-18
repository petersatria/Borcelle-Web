import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoriesAction";
import { postItem, updateItem } from "../store/actions/itemsAction";
import toast, { Toaster } from "react-hot-toast";

export default function ModalAddItem({ open, onClose, itemEdit }) {
  const [input, setInput] = useState([""]);
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: "",
  });
  const [ingredients, setIngredients] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => {
    return state.categories;
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    if (itemEdit) {
      const ingredients = itemEdit.Ingredients.slice(1).map((e) => e.name);
      setItem(itemEdit);
      setIngredients(itemEdit.Ingredients[0]?.name);
      setInput(ingredients);
      setIsEdit(true);
    }
  }, [itemEdit]);

  const handleAddInput = (e) => {
    e.preventDefault();
    const newInput = [...input, ""];
    setInput(newInput);
  };

  const handleValueChange = (e, i) => {
    const inputValue = [...input];
    inputValue[i] = e.target.value;
    setInput(inputValue);
  };

  const handleDeleteInput = (e, i) => {
    e.preventDefault();
    const deleteInput = [...input];
    deleteInput.splice(i, 1);
    setInput(deleteInput);
  };

  const handleOnChangeForm = (e) => {
    let value = e.target.value;
    if (e.target.name === "price" || e.target.name === "categoryId") {
      value = +e.target.value;
    }
    setItem({
      ...item,
      [e.target.name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const payload = {
      ...item,
      ingredients: [ingredients, ...input],
    };
    if (isEdit) {
      dispatch(updateItem(itemEdit.id, payload));
    } else {
      dispatch(postItem(payload));
    }
    if (
      !item.name ||
      !item.description ||
      !item.price ||
      !item.categoryId ||
      !item.imgUrl ||
      !ingredients ||
      input.length == 0
    )
      return;
    input.forEach((e) => {
      if (!e) throw "Ingredients is required";
    });
    setItem({
      name: "",
      description: "",
      price: "",
      imgUrl: "",
      categoryId: "",
    });
    setIngredients("");
    setInput([]);
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
    setItem({
      name: "",
      description: "",
      price: "",
      imgUrl: "",
      categoryId: "",
    });
    setInput([""]);
    setIngredients("");
    setIsEdit(false);
  };

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex justify-between">
          <h1>Create new item</h1>
          <button
            onClick={handleCloseModal}
            className="text-gray-400 bg-white hover:text-gray-600"
          >
            X
          </button>
        </div>

        <form className="flex flex-col mt-5" onSubmit={handleSubmitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="name"
            onChange={handleOnChangeForm}
            value={item.name}
          />

          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="description"
            onChange={handleOnChangeForm}
            value={item.description}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="price"
            onChange={handleOnChangeForm}
            value={item.price}
          />
          <label htmlFor="categoryId">Category</label>
          <select
            name="categoryId"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            onChange={handleOnChangeForm}
            value={item.categoryId}
          >
            <option disabled value={""}>
              -- Select Category --
            </option>
            {categories &&
              categories.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
          </select>
          <label htmlFor="imgUrl">Image Url</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="imgUrl"
            onChange={handleOnChangeForm}
            value={item.imgUrl}
          />
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
          />

          {input &&
            input.map((data, i) => {
              return (
                <div className="flex" key={i}>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-full mr-4 mb-2"
                    name="ingredients"
                    onChange={(e) => handleValueChange(e, i)}
                    value={data}
                  />
                  {isEdit ? (
                    ""
                  ) : (
                    <button
                      onClick={(e) => handleDeleteInput(e, i)}
                      className="text-red-500"
                    >
                      remove
                    </button>
                  )}
                </div>
              );
            })}
          <div className="flex justify-between">
            {isEdit ? (
              ""
            ) : (
              <button
                onClick={handleAddInput}
                className="px-3 py-2 rounded-lg bg-primary-yellow text-white hover:bg-yellow-600"
              >
                Add Ingredients
              </button>
            )}
            <button className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
