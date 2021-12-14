var employeeArray = ["Employee1"];
var salesArr = ["1000"];
var token = 0;
 
function onSubmit(){
    var empName = document.getElementById("empName").value;
    employeeArray.push(empName);
    var sales = document.getElementById("sales").value;
    salesArr.push(sales);
    // on the first run, instantiate chart with arrays
    // on subsequent runs, don't instantiate another chart or else breaks
    if (token == 0){
        employeeArray.pop(0);
        salesArr.pop(0);
 
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: employeeArray,
            datasets: [{
                label: '# of Votes',
                data: salesArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
 
 
token++;
var doc = document.getElementById('myChart');
doc.render();
 
}
