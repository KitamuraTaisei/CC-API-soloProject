//function getDiary(){

url = "http://localhost:3000/diary";
diaryInfo = fetch(url);
result = await diaryInfo.json();
document.getElementById("out").innerHTML = result.stringify(json);
//}
