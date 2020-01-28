/* functions */
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/* ============================================== */


/* classes */
class User {
  constructor(id, name, email){
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
/* ============================================== */

/* variables */
const div = document.getElementById("main");
let x;
let text = "";
/* ============================================== */


for ( i=0; i < 1000; i++ ) {
  x = getRndInteger(1000, 1000000);
  text += `
    &nbsp;{<br>
      &nbsp;&nbsp;&nbsp;"Num": ${i},<br>
      &nbsp;&nbsp;&nbsp;"NameEn": "Ahmed ${x}",<br>
      &nbsp;&nbsp;&nbsp;"NameAr": "أحمد ${x}",<br>
      &nbsp;&nbsp;&nbsp;"Branch": "فرع ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"Department": "الادارة ${x-10}",<br>
      &nbsp;&nbsp;&nbsp;"Section": "القسم ${x+100}",<br>
      &nbsp;&nbsp;&nbsp;"SortOfWorkingTime": "الدوام ${x+20}",<br>
      &nbsp;&nbsp;&nbsp;"Jop": "الوظيفة ${x+200}",<br>
      &nbsp;&nbsp;&nbsp;"IDSort": "الهوية رقم ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"IDNumber": "${x+1500}",<br>
      &nbsp;&nbsp;&nbsp;"Email": "Ahmed${x}@gmail.com",<br>
      &nbsp;&nbsp;&nbsp;"Nationality": "بلد ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"Mobile": "0${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"Task": "مهمة ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"Project": "المشروع ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"Address": "${i} شارع ${x+10} الدور ${x-500}",<br>
      &nbsp;&nbsp;&nbsp;"Gender": "ذكر ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"Religion": "مسلم ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"EducationalQualification": "كلية ${x+10}",<br>
      &nbsp;&nbsp;&nbsp;"EmployeeStatus": "نشيط ${x-500}"<br>
    &nbsp;},
    <br>
  `;
}


div.innerHTML = `
  [<br>
    ${text}
  ]
`;
