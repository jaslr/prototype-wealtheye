/* dashboard - net worth chart config */
myApp.controller('netWorthChartController', function ($scope, $rootScope, $location) {
  Highcharts.getOptions().plotOptions.area.colors = function () {
    var colors = [],
      /*base = Highcharts.getOptions().colors[8],*/
      base = '#EF4949', i;
    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 10).get());
    }
    return colors;
  };
  $scope.netWorthChartConfig = {
    options: {
      chart: { type: 'area' },
      legend: { enabled: false }
    },
    credits: { enabled: false },
    legend: { enabled: false },
    title: { text: '' },
    subtitle: { text: '' },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value;  // clean, unformatted number for year
        }
      }
    },
    yAxis: {
      title: { text: '' },
      labels: {
        formatter: function () {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: { pointFormat: '{series.name} <b>{point.y:,.0f}</b><br/>{point.x}' },
    plotOptions: {
      area: {
        pointStart: 2013,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: { hover: { enabled: true } }
        }
      }
    },
    series: [{
        name: 'Net worth',
        color: '#0A9DA5',
        data: [
          300000,
          350000,
          500000,
          560000,
          590000,
          600000,
          650000,
          700000,
          785000
        ]
      }]
  };
});  /* dashboard - net worth chart config */