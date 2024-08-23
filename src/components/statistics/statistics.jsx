import './statistics.css';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, LineElement, LineController, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import Table from "../table/table";
Chart.register(LineElement, LineController, ChartDataLabels, ArcElement, Tooltip, Legend, Colors);

const Statistics = (props) => {

    // const {data} = props;
    const data = [
        {categoryId: 1, category: '데이터베이스', count: 100},
        {categoryId: 1, category: '데이터베이스', count: 100},
        {categoryId: 3, category: '알고리즘', count: 95},
        {categoryId: 3, category: '알고리즘', count: 95},
        {categoryId: 3, category: '알고리즘', count: 85},
        {categoryId: 3, category: '디자인패턴', count: 55},
        {categoryId: 3, category: '디자인패턴', count: 30},
        {categoryId: 3, category: '디자인패턴', count: 10},
        {categoryId: 3, category: '디자인패턴', count: 10}
    ];

    const labels = data.map(item => item.category);
    const counts = data.map(item => item.count);
    const total = counts.reduce((sum, count) => sum + count, 0);

    const chartData = {
        labels: labels,
        datasets: [{
            data: counts,
            cutout: '35%'
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {  // Tooltip 플러그인 설정
                enable: true
            },
            datalabels: {
                color: '#1D1D1D',
                font: {
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    const percentage = (value / total * 100).toFixed(1);
                    if (percentage < 5) return '';
                    if (percentage < 10 && label.length > 2) return label.substring(0, 3) + '...';
                    return label;
                }
            }
        }
    };

    return (
        <div className='statistics-box'>
            <div className='statistics-title'>
                <p className='description'>카테고리 분포</p>
                <h2 className='title'>{total} 문제 해결</h2>
            </div>
            <div className='chart-box'>
                <div className='chart'>
                <Doughnut data={chartData} options={options}/>
                </div>
                <div className='chart-table'>
                    <Table/>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
