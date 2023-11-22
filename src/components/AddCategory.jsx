import React from "react";

export const AddCategory = ({ onAddCategory }) => {

    const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    const newCategory = e.target.elements.category.value.trim();

    if (newCategory.length <= 1) return;

    onAddCategory(newCategory);
    e.target.reset(); // Reiniciar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        placeholder="Nueva categoría"
        autoComplete="off"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
