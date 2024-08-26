import CHART_CONFIG from "../constant/chartConfig";

const useSetChart = (data) => {
    const labels = data.map(item => item.name);
    const counts = data.map(item => item.count);
    const total = data.reduce((sum, item) => sum + item.count, 0);

    const chartData = {
        labels: labels,
        datasets: [{
            data: counts,
            backgroundColor: CHART_CONFIG.BACKGROUND_COLOR,
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
        total,
        chartData,
        options
    }
};

export default useSetChart;

