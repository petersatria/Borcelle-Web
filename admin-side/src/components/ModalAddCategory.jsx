import { useEffect, useState } from "react";
import axios from "axios";

export default function ModalAddCategory({
  open,
  onClose,
  categoryEdit,
  fetchData,
}) {
  const [category, setCategory] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (categoryEdit) {
      setCategory(categoryEdit.name);
      setIsEdit(true);
    }
  }, [categoryEdit]);

  const handleOnChangeForm = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (!category) {
        setIsInputValid(false);
        throw "Error";
      } else {
        setIsInputValid(true);
      }
      if (isEdit) {
        await axios({
          method: "PUT",
          url: "http://localhost:3000/categories/" + categoryEdit.id,
          data: { name: category },
        });
      } else {
        await axios({
          method: "POST",
          url: "http://localhost:3000/categories",
          data: { name: category },
        });
      }
      setCategory("");
      fetchData();
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsEdit(false);
    }
  };

  const handleCloseModal = () => {
    onClose();
    setIsInputValid(true);
    setCategory("");
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
          {isEdit ? <h1>Edit category</h1> : <h1>Create new category</h1>}
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
            value={category}
          />
          {!isInputValid && <p className="text-red-500">Name is required</p>}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
