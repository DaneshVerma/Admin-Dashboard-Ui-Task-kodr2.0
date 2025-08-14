export const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 190, 300, 250, 320, 400, 450],
      fill: true,
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0,0,0,200);
        gradient.addColorStop(0, 'rgba(34,197,94,0.5)');
        gradient.addColorStop(1, 'rgba(34,197,94,0)');
        return gradient;
      },
      borderColor: 'rgb(34,197,94)',
      tension: 0.3,
    },
  ],
};
