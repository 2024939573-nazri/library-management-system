const ctx = document.getElementById('bookChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Computer Science',
            'Business',
            'Engineering',
            'Technology',
            'Literature'
        ],
        datasets: [{
            label: 'Number of Books',
            data: [40, 25, 30, 35, 20],
            backgroundColor: [
                '#0d6efd',
                '#198754',
                '#ffc107',
                '#dc3545',
                '#6f42c1'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,

        animation: {
            duration: 2500,
            easing: 'easeOutBounce'
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});