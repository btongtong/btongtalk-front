import CHART_CONFIG from "../constant/chartConfig";
import CHART_STATUS from "../constant/chartStatus";

const setChart = (props) => {
    const { labels, counts, total, status } = props;

    const chartData = {
        labels: labels,
        datasets: [{
            data: counts,
            backgroundColor: (status === CHART_STATUS.FLASHCARD ? CHART_CONFIG.CORRECT_WRONG_COLOR : CHART_CONFIG.BACKGROUND_COLOR),
            cutout: CHART_CONFIG.CUTOUT
        }],
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enable: true
            },
            datalabels: {
                color: CHART_CONFIG.FONT_COLOR,
                font: {
                    weight: CHART_CONFIG.FONT_WEIGHT
                },
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    const percentage = (value / total * 100).toFixed(1);
                    if (percentage < CHART_CONFIG.HIDDEN_PERCENT) return '';
                    if (percentage < CHART_CONFIG.SUBSTRING_PERCENT && label.length > CHART_CONFIG.MAX_LENGTH) return label.substring(0, CHART_CONFIG.MAX_LENGTH+1) + CHART_CONFIG.REPLACE;
                    return label;
                }
            }
        }
    }

    return {
        chartData,
        options
    }
};

export default setChart;

