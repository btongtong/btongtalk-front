import './flashcardStatistics.css'
import {Doughnut} from "react-chartjs-2";
import useStatisticStore from "../../stores/useStatisticStore";
import setChart from "../../hooks/setChart";
import CHART_STATUS from "../../constant/chartStatus";

const FlashcardStatistics = (props) => {
    const { statistics } = useStatisticStore();

    const labels = statistics.map(item => item.name);
    const counts = statistics.map(item => item.count);
    const total = statistics.reduce((sum, item) => sum + item.count, 0);

    const { chartData, options } = setChart({labels, counts, total, status:CHART_STATUS.FLASHCARD});

    return (
        <div className='flashcard-chart-box'>
            <p className='title'>지금까지의 결과</p>
            <div className='flashcard-chart'>
                <section className='doughnut-chart-box'>
                    <Doughnut data={chartData} options={options}/>
                </section>
                <section className='bar-chart-box'>
                    <div className='known bar'>맞은 문제 <span className='known'>{counts[0]}</span></div>
                    <div className='unknown bar'>틀린 문제 <span className='unknown'>{counts[1]}</span></div>
                    <div className='norecord bar'>안 푼 문제 <span>{counts[2]}</span></div>
                </section>
            </div>
        </div>
    )
}

export default FlashcardStatistics;