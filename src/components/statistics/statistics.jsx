import './statistics.css';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, LineElement, LineController, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import Table from "../table/table";
import useStatisticStore from "../../stores/useStatisticStore";
import URLS from "../../constant/url";
import useSetChart from "../../hooks/useSetChart";
import CHART_STATUS from "../../constant/chartStatus";
Chart.register(LineElement, LineController, ChartDataLabels, ArcElement, Tooltip, Legend, Colors);

const Statistics = (props) => {

    const { customStatistics, statistics, headers} = useStatisticStore();
    const propsData = {
        showPagination: false,
        navigateUrl: URLS.CATEGORY,
        headers: headers,
        data: customStatistics
    }

    const labels = statistics.map(item => item.name);
    const counts = statistics.map(item => item.count);
    const total = statistics.reduce((sum, item) => sum + item.count, 0);

    const { chartData, options } = useSetChart({labels, counts, total, status:CHART_STATUS.CATEGORY});

    return (
        <div className='statistics-box'>
            <div className='statistics-title'>
                <p className='description'>카테고리 분포</p>
                <h2 className='title'>{total} 문제 해결</h2>
            </div>
            <div className='chart-box'>
                <div className='chart'>
                    {(total !== 0) ? (<Doughnut data={chartData} options={options}/>) :
                        (<div className='no-chart'>
                            <div className='logo'></div>
                            <p className='description'>문제를 풀고 분포도를 확인하세요.</p>
                        </div>)
                    }
                </div>
                <div className='chart-table'>
                    <Table propsData={propsData} />
                </div>
            </div>
        </div>
    );
}

export default Statistics;
