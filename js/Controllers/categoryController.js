import{
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../Services/categoryService.js";

document.addEventListener("DOMContentLoaded",()=>{
    const tableBody = document.querySelector("#categoriesTable tbody"); // tBody - Cuerpo de la tabla
    const form = document.getElementById("categoryForm"); // Formulario dentro del modal
    const modal = new bootstrap.modal(document.getElementById("categoryModal")); // Modal
    const lblModal = document.getElementById("categoryModalLabel"); // Titulo del modal
    const btnAdd = document.getElementById("btnAddCategory"); // Botón para abrir modal

    init(); // Este método permite cargar las categorías en la tabla

    // Acción cuando el botón de agregar Nueva Categoría es presionado(abrir modal)
    btnAdd.addEventListener("click",()=>{});
    form.reset();
    form.categoryId.value = ""; // No enviamos ID, ya que estamos agregando
    lblModal.textContent = "Agregar categoría";
    modal.show();

    
});