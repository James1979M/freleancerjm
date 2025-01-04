
// Función del botón contactar
document.getElementById('scrollButton').addEventListener('click', function () {
  // Encuentra el pie de página
  const footer = document.getElementById('footer');
  // Usa scrollIntoView para el desplazamiento suave
  footer.scrollIntoView({ behavior: 'smooth' });
});

//Funciones del boton contacto modal
document.getElementById('abrir-modal').addEventListener('click', function() {
Swal.fire({
    title: 'Contacto',
    html: `
    <div>
      <p class="abrir_modal">🤵 James Marin</p>
      <p class="abrir_modal">📧 frelancerjm@gmail.com</p>
      <p class="abrir_modal">📞 +34 624845149</p>
    </div>
    `,
    icon: 'info',
    confirmButtonText: 'Cerrar',
    customClass: {
        popup: 'custom-swal-popup'
    }
});
});

//Datos del JSON
console.log('archivo frelancer.js cargado correctamente');

const datafile = 'js/datos.json';

//Selección elementos del DOM
const projectUno = document.getElementById('project-uno');
const projectDos = document.getElementById('project-dos');
const projectTres = document.getElementById('project-tres');
const projectCuatro = document.getElementById('project-cuatro');
const projectCinco = document.getElementById('project-cinco');
const projectSeis = document.getElementById('project-seis');
const readMoreBtn = document.getElementById('read-more-btn');

//Función para cargar datos del archivo
async function loadData(){
try{
  //Carga del archivo json
  const response = await fetch('js/datos.json');
  if(!response.ok){
      throw new Error('No se puede cargar el archivo json');
  }
  const data = await response.json();

  //Cargar los proyectos

  // Crear dinámicamente los proyectos
  data.projectuno.forEach(project1 => {
    const projectItem1 = document.createElement('div');
    projectItem1.classList.add('project-item1');
    projectItem1.innerHTML = `
      <h3>${project1.title}</h3>
      <img src="${project1.img}" alt="calculadora ${project1.title}">
      ${project1.description}
      <span id="more-text-${project1.id}" class="hidden">${project1.longText}</span>
      <button id="read-more-btn-${project1.id}" class="btn">Leer Más</button><br>
      <a href="${project1.link}" target="_blank">Ver Proyecto</a>
    `;
    projectUno.appendChild(projectItem1);

    // Añadir funcionalidad al botón de "Leer Más"
    const readMoreBtn = document.getElementById(`read-more-btn-${project1.id}`);
    const moreText = document.getElementById(`more-text-${project1.id}`);

    readMoreBtn.addEventListener("click", () => {
      if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        readMoreBtn.textContent = "Leer Menos";
      } else {
        moreText.classList.add("hidden");
        readMoreBtn.textContent = "Leer Más";
      }
    });
  });

  data.projectdos.forEach(project2 =>{
    const projectItem2 = document.createElement('div');
    projectItem2.classList.add('project-item2');
    projectItem2.innerHTML = `
      <h3>${project2.title}</h3> 
      <img src="${project2.img}" alt="sistema backend">
      ${project2.description}
     <span id="more-text-${project2.id}" class="hidden">${project2.longText}</span>
      <button id="read-more-btn-${project2.id}" class="btn">Leer Más</button><br>
      <a href="${project2.link}" target="_blank">Ver Proyecto</a>
    `;
    projectDos.appendChild(projectItem2);
  // Añadir funcionalidad al botón de "Leer Más"
  const readMoreBtn = document.getElementById(`read-more-btn-${project2.id}`);
  const moreText = document.getElementById(`more-text-${project2.id}`);

  readMoreBtn.addEventListener("click", () => {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      readMoreBtn.textContent = "Leer Menos";
    } else {
      moreText.classList.add("hidden");
      readMoreBtn.textContent = "Leer Más";
    }
  });
});
  
  data.projecttres.forEach(project3 =>{
    const projectItem3 = document.createElement('div');
    projectItem3.classList.add('project-item3');
    projectItem3.innerHTML = `
      <h3>${project3.title}</h3>
      <img src="${project3.img}" alt="blog">
      ${project3.description}
     <span id="more-text-${project3.id}" class="hidden">${project3.longText}</span>
      <button id="read-more-btn-${project3.id}" class="btn">Leer Más</button><br>
      <a href="${project3.link}" target="_blank">Ver Proyecto</a>
    `;
    projectTres.appendChild(projectItem3);

  // Añadir funcionalidad al botón de "Leer Más"
  const readMoreBtn = document.getElementById(`read-more-btn-${project3.id}`);
  const moreText = document.getElementById(`more-text-${project3.id}`);

  readMoreBtn.addEventListener("click", () => {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      readMoreBtn.textContent = "Leer Menos";
    } else {
      moreText.classList.add("hidden");
      readMoreBtn.textContent = "Leer Más";
    }
  });
});

  data.projectcuatro.forEach(project4 =>{
    const projectItem4 = document.createElement('div');
    projectItem4.classList.add('project-item4');
    projectItem4.innerHTML = `
      <h3>${project4.title}</h3>
      <img src="${project4.img}" alt="agenda">
      ${project4.description}
      <span id="more-text-${project4.id}" class="hidden">${project4.longText}</span>
      <button id="read-more-btn-${project4.id}" class="btn">Leer Más</button><br>
      <a href="${project4.link}">Ver Proyecto</a>
    `;
    projectCuatro.appendChild(projectItem4);

    //Funcionalidad al botón leer mas
    const readMoreBtn = document.getElementById(`read-more-btn-${project4.id}`);
    const moreText = document.getElementById(`more-text-${project4.id}`);

    readMoreBtn.addEventListener("click", () => {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      readMoreBtn.textContent = "Leer Menos";
    } else {
      moreText.classList.add("hidden");
      readMoreBtn.textContent = "Leer Más";
    }
  });
});

  data.projectcinco.forEach(project5 =>{
    const projectItem5 = document.createElement('div');
    projectItem5.classList.add('project-item5');
    projectItem5.innerHTML = `
      <h3>${project5.title}</h3>
      <img src="${project5.img}"alt="gestion de contenido">
      ${project5.description}
      <span id="more-text-${project5.id}" class="hidden">${project5.longText}</span>
      <button id="read-more-btn-${project5.id}" class="btn">Leer Más</button><br>
      <a href="${project5.link}">Ver Proyecto</a>
    `;
    projectCinco.appendChild(projectItem5);

    //Funcionalidad al botón leer mas
    const readMoreBtn = document.getElementById(`read-more-btn-${project5.id}`);
    const moreText = document.getElementById(`more-text-${project5.id}`);

    readMoreBtn.addEventListener("click", () => {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      readMoreBtn.textContent = "Leer Menos";
    } else {
      moreText.classList.add("hidden");
      readMoreBtn.textContent = "Leer Más";
    }
  });
});

  data.projectseis.forEach(project6 =>{
    const projectItem6 = document.createElement('div');
    projectItem6.classList.add('project-item6');
    projectItem6.innerHTML = `
      <h3>${project6.title}</h3>
      <img src="${project6.img}"alt="gestion de contenido">
      ${project6.description}
      <span id="more-text-${project6.id}" class="hidden">${project6.longText}</span>
      <button id="read-more-btn-${project6.id}" class="btn">Leer Más</button><br>
      <a href="${project6.link}">Ver Proyecto</a>
    `;
    projectSeis.appendChild(projectItem6);

    //Funcionalidad al botón leer mas
    const readMoreBtn = document.getElementById(`read-more-btn-${project6.id}`);
    const moreText = document.getElementById(`more-text-${project6.id}`);

    readMoreBtn.addEventListener("click", () => {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      readMoreBtn.textContent = "Leer Menos";
    } else {
      moreText.classList.add("hidden");
      readMoreBtn.textContent = "Leer Más";
    }
  });
});

} catch (error){
  console.log('Error al cargar los datos:', error);
}
}
//Ejecutar la funciòn al cargar la pàgina
document.addEventListener('DOMContentLoaded', loadData);

