/* dashboard - cashflow */
myApp.controller('cashflowControllerYearly', function ($scope, $rootScope, $location) {
  Highcharts.getOptions().plotOptions.column.colors = function () {
    var colors = [], base = '#EF4949', i;
    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 10).get());
    }
    return colors;
  }();
  $scope.cashflowControllerYearlyConfig = {
    options: {
      chart: {
        type: 'column',
        style: { fontFamily: 'Lato' },
        height: '200'
      },
      legend: { enabled: false },
      plotOptions: { column: { grouping: false } },
      tooltip: {
        shared: true,
        enabled: true,
        borderColor: 'black',
        borderRadius: 1,
        borderWidth: 0,
        useHTML: true,
        backgroundColor: '#3C4650',
        zIndex: 5000,
        style: {
          zIndex: 9999,
          padding: 10
        },
        shadow: false,
        formatter: function () {
          if (this.points[1].y <= this.points[0].y) {
            var s = this.points[0].y - this.points[1].y;
            s = '<strong class="tooltip-contrast">' + this.points[0].x + '</strong><br/><strong class="text-success">$' + '' + this.points[0].y + ' income</strong><br/><strong class="text-danger">$' + this.points[1].y + ' expense</strong><br/><strong class="text-info">$' + s + ' remaining</span>';
            return s;
          } else if (this.points[0].y <= this.points[1].y) {
            var t = this.points[1].y - this.points[0].y;
            t = '<strong class="tooltip-contrast">' + this.points[0].x + '</strong><br/><strong class="text-success">$' + '' + this.points[0].y + ' income</strong><br/><strong class="text-danger">$' + this.points[1].y + ' expense</strong><br/><strong class="text-info">$' + t + ' outstanding</span>';
            return t;
          } else {
            var u = this.points[1].y - this.points[0].y;
            u = '-$' + u;
            return u;
          }
        }
      }
    },
    title: { text: '' },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: { text: '' },
      stackLabels: {
        enabled: true,
        useHTML: true,
        zIndex: -1,
        backgroundColor: 'rgba(255,255,255,0)',
        style: {
          fontWeight: 'bold',
          color: Highcharts.theme && Highcharts.theme.textColor || 'gray'
        },
        formatter: function () {
          if (this.axis.series[0].yData[this.x] > this.axis.series[1].yData[this.x]) {
            s = this.axis.series[0].yData[this.x] - this.axis.series[1].yData[this.x];
            s = '<strong class="text-success">' + s + '</strong>';
            return s;
          } else {
            s = this.axis.series[0].yData[this.x] - this.axis.series[1].yData[this.x];
            s = '<strong class="text-danger">' + s + '</strong>';
            return s;
          }
        },
        positioner: function (labelWidth, labelHeight, point) {
          return {
            x: point.plotX + 30,
            y: 40
          };
        }
      }
    },
    credits: { enabled: false },
    series: [
      {
        name: 'Income',
        color: 'rgba(15, 157, 88, 0.95)',
        zIndex: 1,
        dataLabels: {
          overflow: false,
          enabled: false,
          crop: false
        },
        data: [
          12000,
          15000,
          13000,
          11000,
          22000,
          16000,
          13000,
          19000,
          21000,
          25000,
          14000,
          16000
        ]
      },
      {
        name: 'Expenses',
        color: 'rgba(239, 73, 73, 0.95)',
        zIndex: 2,
        dataLabels: {
          overflow: false,
          enabled: false,
          crop: false,
          grouped: true
        },
        groupPadding: 0.5,
        pointWidth: 15,
        data: [
          16000,
          12000,
          15000,
          14000,
          19000,
          21000,
          9000,
          8000,
          17000,
          26000,
          3000,
          1000
        ]
      }
    ]
  };
});