/* dashboard - cashflow */
myApp.controller('cashflowController', function ($scope, $rootScope, $location) {
  Highcharts.getOptions().plotOptions.pie.colors = function () {
    var colors = [], base = '#EF4949', i;
    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 10).get());
    }
    return colors;
  }();
  $scope.cashflowChartConfig = {
    options: {
      chart: {
        type: 'pie',
        backgroundColor: null,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: '280',
        spacing: [
          10,
          10,
          25,
          10
        ],
        style: { fontFamily: 'Lato, arial, sans-serif' }
      },
      tooltip: {
        shared: true,
        enabled: true,
        zIndex: 15000,
        borderColor: 'black',
        borderRadius: 1,
        borderWidth: 0,
        useHTML: true,
        backgroundColor: '#3C4650',
        style: {
          zIndex: 9999,
          padding: 10,
          color: '#FFFFFF'
        },
        shadow: false
      },
      legend: { enabled: false }
    },
    title: { text: null },
    yAxis: {
      title: { text: '' },
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: Highcharts.theme && Highcharts.theme.textColor || 'red'
        }
      }
    },
    plotOptions: {
      pie: {
        shadow: false,
        borderWidth: 0
      }
    },
    credits: { enabled: false },
    series: [{
        name: 'Outgoing',
        data: [
          [
            'Rent',
            2520
          ],
          [
            'Spending money',
            1572
          ],
          [
            'Travel',
            1325
          ],
          [
            'Home',
            1142
          ],
          [
            'Personal',
            949
          ],
          [
            'Groceries',
            577
          ],
          [
            'Car',
            469
          ],
          [
            'Clothing',
            415
          ],
          [
            'Gifts',
            391
          ],
          [
            'Entertainment',
            310
          ],
          [
            'Other',
            1280
          ]
        ],
        innerSize: '60%',
        showInLegend: true,
        dataLabels: { enabled: false }
      }],
    func: function (chart) {
      var circleradius = '10px';
      chart.innerText = chart.renderer.html('Expenses').addClass('donut-innerText').add();
      $scope.chartConfig = { title: { text: 'fucker yo' } };  /*$legend = $('#customLegend');
            $.each(chart.series[0].data, function (j, data) {
                $legend.append('<div class="item"><div class="symbol" style="background-color:' + data.color + '"></div><div class="serieName" id="">' + data.name + '</div></div>');

            });*/
    }
  };
});  /* dashboard - cashflow monthly */