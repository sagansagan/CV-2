const json_url = 'data.json';
const eduList = document.getElementById('education');
const workList = document.getElementById('work');


async function getResume() {
  let response = await fetch(json_url);


  if (response.ok) {
    let data = await response.json();

    data.education.forEach(function (education) {
      eduList.innerHTML += `<li>${education.schoolName}<br>${education.text}</li>`;
      
    });
    
    data.work.forEach(function (work) {
      workList.innerHTML += `<li>${work.companyName}<br>${work.text}</li>`;
    });
    
  }
  else {
    console.log('HTTP-Error: ' + response.status);
  }
}
getResume();
