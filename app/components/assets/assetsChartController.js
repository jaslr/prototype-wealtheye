/* dashboard - assets chart config */
myApp.controller('assetChartController', function ($scope, $rootScope, $location) {
  Highcharts.getOptions().plotOptions.pie.colors = function () {
    var colors = [],
      /*base = Highcharts.getOptions().colors[8],*/
      base = '#EF4949', i;
    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 10).get());
    }
    return colors;
  }();
  $scope.assetChartControllerConfig = {
    options: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      legend: { enabled: false }
    },
    title: { text: '' },
    yAxis: { title: { text: '' } },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: { color: Highcharts.theme && Highcharts.theme.contrastTextColor || 'black' }
        }
      }
    },
    tooltip: {
      formatter: function () {
        // display only if larger than 1
        return this.y > 1 ? '<p>' + this.point.name + ':</p> $' + Highcharts.numberFormat(this.y, 0) : null;
      }
    },
    credits: { enabled: false },
    series: [{
        type: 'pie',
        name: 'Asset collection',
        data: [
          [
            'Property',
            59.5
          ],
          [
            'Other',
            4
          ],
          [
            'Cash',
            4.5
          ],
          [
            'Fixed interest',
            2
          ],
          [
            'Australian shares',
            18
          ],
          [
            'International shares',
            12
          ]
        ]
      }]
  };
});  /* dashboard - assets chart config */