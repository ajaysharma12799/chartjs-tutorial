const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Python", "JavaScript", "Java", "C#", "Ruby"],
        datasets: [
            {
                label: "Programming Language",
                data: [15, 25, 45, 65, 75],
                backgroundColor: ["red", "blue", "purple", "orange", "hotpink"],
                borderColor: ["hotpink", "orange", "red", "blue", "purple"],
                borderWidth: 5
            },
        ]
    },
    options: {
        responsive: false,
        layout: {
            padding: {
                top: 50,
                left: 50,
                bottom: 0,
                right: 50
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Programming Language Chart",
                // position: "bottom"
            },
            legend: {
                display: true,
                position: "bottom"
            }
        }
    }
});
