function agregarTarea() {
    var inputTarea = document.getElementById("tarea");
    var tareaValue = inputTarea.value.trim();
    if (tareaValue != ""){
        var lista = document.getElementById("listaTareas");
        var nuevoElementoLI = document.createElement("li");
        nuevoElementoLI.innerHTML = `
            <div class="tarea"><span>${tareaValue}</span></div> `
                    lista.appendChild(nuevoElementoLI);
                    inputTarea.value = "";
        }
}