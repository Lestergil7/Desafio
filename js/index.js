(function () {
  var actualizarFecha = function () {
    var fecha = new Date(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      año = fecha.getFullYear();

    var pDiaSemana = document.getElementById("diaSemana"),
      pDia = document.getElementById("dia"),
      pMes = document.getElementById("mes"),
      pAño = document.getElementById("año");

    var semana = [
      "d o m i n g o",
      "l u n e s",
      "m a r t e s",
      "m i e r c o l e s",
      "j u e v e s",
      "v i e r n e s",
      "s a b a d o",
    ];
    pDiaSemana.textContent = semana[diaSemana];

    var meses = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    pMes.textContent = meses[mes];

    pAño.textContent = año;

    pDia.textContent = dia;
  };

  actualizarFecha();
})();


const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all events listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add tasks event
    form.addEventListener('submit', addTask);
    // REMOVE TASK EVENT
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTask);
    
}

// Get Tasks from LS
function getTasks(e) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('div');
        // add class
        li.className = 'collection-item'
            // Create text node and append
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        link.className = 'delete-item ';
        // add icon
        link.innerHTML = ' <button type="button" id="input-delete-tarea"  class= "deleteButton roundBorder" >Eliminar</button>';
        // Append the link to the li
        li.appendChild(link);

        // append li to div
        taskList.appendChild(li);
    })
}

// add task
function addTask(e) {


    // Create li element
    const li = document.createElement('div');
    // add class
    li.className = 'collection-item'
        // Create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item ';
    // add icon
    link.innerHTML = ' <button type="button" id="input-delete-tarea"  class= "deleteButton roundBorder" >Eliminar</button>';
    // Append the link to the li
    li.appendChild(link);

    // append li to div
    taskList.appendChild(li);

    // Store in Local storage
    storeTaskInLocalStorage(taskInput.value);



    // clear input
    taskInput.value = "";
    console.log(li);
    e.preventDefault();


}

// store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Confirmas la eliminacion de la tarea?')) {
            e.target.parentElement.parentElement.remove();

            //Remove from Local Storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        }
    }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// CLEAR BTN TASKS
function clearTask(e) {
    // taskList.innerHTML = '';
    //faster 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // clear from LS
    clearTaskFromLocalStorage();
}
// clear tasks from LS
function clearTaskFromLocalStorage() {
    localStorage.clear();
}


// FetchAPI

  
  const card = document.getElementById('carta')
  const city = document.getElementById('city');
  const tempImg = document.getElementById('temp-img');
  const temp = document.getElementById('temp');
  const weather = document.getElementById('weather');
  const range = document.getElementById('range');
  
  function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = 'images/temp-mid.png';
    if (temp > 26) {
      src = 'images/temp-high.png';
    } else if (temp < 20) {
      src = 'images/temp-low.png';
    }
    tempImg.src = src;
  }

  
 
  function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }
  

let url = 'https://api.openweathermap.org/data/2.5/weather?id=3435907&APPID=b37458221d63f82a358ec6013726ae99'

fetch(url)
   .then(response => response.json())
   .then(data => mostrarData(data))
   .catch(error => console.log(error))

  const mostrarData = (data) =>{
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${toCelsius(data.main.temp)}c`;
    weather.innerHTML = data.weather[0].description;
    range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
    updateImages(data);
   }