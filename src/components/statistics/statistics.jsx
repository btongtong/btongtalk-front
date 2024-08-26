import './statistics.css';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, LineElement, LineController, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import Table from "../table/table";
import useStatisticStore from "../../stores/useStatisticStore";
import URLS from "../../constant/url";
import useSetChart from "../../hooks/useSetChart";
Chart.register(LineElement, LineController, ChartDataLabels, ArcElement, Tooltip, Legend, Colors);

const Statistics = (props) => {

    const { customStatistics, statistics, headers} = useStatisticStore();
    const propsData = {
        showPagination: false,
        navigateUrl: URLS.CATEGORY,
        headers: headers,
        data: customStatistics
    }

    const { chartData, options, total } = useSetChart(statistics);

    return (
        <div className='statistics-box'>
            <div className='statistics-title'>
                <p className='description'>카테고리 분포</p>
                <h2 className='title'>{total} 문제 해결</h2>
            </div>
            <div className='chart-box'>
                <div className='chart'>
                    {(total !== 0) ? (<Doughnut data={chartData} options={options}/>) : (<div className='no-chart'>해결한 문제가 없습니다.</div>)}
                </div>
                <div className='chart-table'>
                    <Table propsData={propsData} />
                </div>
            </div>
        </div>
    );
}

export default Statistics;
