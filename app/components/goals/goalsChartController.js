/* dashboard - goal chart  config */
myApp.controller('goalChartController', function ($scope, $rootScope, $location) {
  $scope.goalChartOneConfig = {
    options: {
      tooltip: { enabled: false },
      chart: {
        type: 'gauge',
        backgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        style: {
          fontFamily: 'Lato, sans-serif',
          fontWeight: 'normal',
          color: '#FFF'
        }
      },
      pane: {
        startAngle: -125,
        endAngle: 125,
        background: [{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            plotBackgroundColor: '#ffffff',
            borderWidth: 0,
            outerRadius: '80%'
          }]
      },
      plotOptions: {
        gauge: {
          dataLabels: { borderColor: 'transparent' },
          dial: {
            radius: '60%',
            backgroundColor: '#666666',
            borderWidth: 0,
            baseWidth: 7,
            topWidth: 1,
            baseLength: '90%',
            rearLength: '0%'
          },
          pivot: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            plotBackgroundColor: '#ffffff',
            radius: 3
          }
        }
      }
    },
    tooltip: { enabled: false },
    title: { text: '' },
    yAxis: {
      min: -20,
      max: 20,
      lineColor: 'transparent',
      minorTickInterval: 1,
      minorTickWidth: 0,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 0,
      tickColor: '#666',
      labels: {
        step: 4,
        rotation: 'auto',
        style: { color: '#333' }
      },
      title: { text: null },
      plotBands: [{
          from: -20,
          to: 20,
          innerRadius: '90%',
          outerRadius: '105%',
          color: {
            linearGradient: {
              x0: 1,
              y0: 1,
              x1: 0,
              y1: 0
            },
            stops: [
              [
                0,
                'rgb(223, 83, 83)'
              ],
              [
                0.3,
                '#BF4747'
              ],
              [
                0.5,
                'rgb(221, 223, 13)'
              ],
              [
                0.7,
                '#BEBF0B'
              ],
              [
                1,
                'rgb(85, 191,59)'
              ]
            ]
          }
        }]
    },
    series: [{
        name: '',
        data: [4],
        tooltip: { enabled: false },
        dataLabels: {
          enabled: true,
          y: 15,
          borderWidth: 0,
          useHTML: true,
          formatter: function () {
            if (this.y > 7) {
              goalMessage = '<div style="text-align:center"><span style="font-size:15px;color: ' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'rgb(85, 191,59)') + '">On track</span><br/>' + '<span style="font-size:12px;color:silver"></span></div>';
              return goalMessage;
            } else {
              goalMessage = '<div style="text-align:center"><span style="font-size:15px;color:' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'rgb(223, 83, 83)') + '">Off track</span><br/>' + '<span style="font-size:12px;color:silver"></span></div>';
              return goalMessage;
            }
          }
        }
      }]
  };
  $scope.goalChartTwoConfig = {
    options: {
      chart: {
        tooltip: { enabled: false },
        type: 'gauge',
        backgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        style: {
          fontFamily: 'Lato, sans-serif',
          fontWeight: 'normal',
          color: '#FFF'
        }
      },
      pane: {
        startAngle: -125,
        endAngle: 125,
        background: [{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            plotBackgroundColor: '#ffffff',
            borderWidth: 0,
            outerRadius: '100%'
          }]
      },
      plotOptions: {
        gauge: {
          dataLabels: { borderColor: 'transparent' },
          dial: {
            radius: '70%',
            backgroundColor: '#666666',
            borderWidth: 0,
            baseWidth: 7,
            topWidth: 1,
            baseLength: '90%',
            rearLength: '0%'
          },
          pivot: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            plotBackgroundColor: '#ffffff',
            radius: 3
          }
        }
      }
    },
    title: { text: '' },
    yAxis: {
      min: -20,
      max: 20,
      lineColor: 'transparent',
      minorTickInterval: 1,
      minorTickWidth: 0,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 0,
      tickColor: '#666',
      labels: {
        step: 4,
        rotation: 'auto',
        style: { color: '#333' }
      },
      title: { text: null },
      plotBands: [{
          from: -20,
          to: 20,
          innerRadius: '90%',
          outerRadius: '105%',
          color: {
            linearGradient: {
              x0: 1,
              y0: 1,
              x1: 0,
              y1: 0
            },
            stops: [
              [
                0,
                'rgb(223, 83, 83)'
              ],
              [
                0.3,
                '#BF4747'
              ],
              [
                0.5,
                'rgb(221, 223, 13)'
              ],
              [
                0.7,
                '#BEBF0B'
              ],
              [
                1,
                'rgb(85, 191,59)'
              ]
            ]
          }
        }]
    },
    series: [{
        name: '',
        data: [9],
        dataLabels: {
          enabled: true,
          y: 15,
          borderWidth: 0,
          useHTML: true,
          formatter: function () {
            if (this.y > 7) {
              goalMessage = '<div style="text-align:center"><span style="font-size:15px;color: ' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'rgb(85, 191,59)') + '">On track</span><br/>' + '<span style="font-size:12px;color:silver"></span></div>';
              return goalMessage;
            } else {
              goalMessage = '<div style="text-align:center"><span style="font-size:15px;color:' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'rgb(223, 83, 83)') + '">Off track</span><br/>' + '<span style="font-size:12px;color:silver"></span></div>';
              return goalMessage;
            }
          }
        }
      }]
  };
  $scope.goalChartThreeConfig = {
    options: {
      tooltip: { enabled: false },
      chart: {
        type: 'gauge',
        backgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        style: {
          fontFamily: 'Lato, sans-serif',
          fontWeight: 'normal',
          color: '#FFF'
        }
      },
      pane: {
        startAngle: -125,
        endAngle: 125,
        background: [{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            plotBackgroundColor: '#ffffff',
            borderWidth: 0,
            outerRadius: '100%'
          }]
      },
      plotOptions: {
        gauge: {
          dataLabels: { borderColor: 'transparent' },
          dial: {
            radius: '70%',
            backgroundColor: '#666666',
            borderWidth: 0,
            baseWidth: 7,
            topWidth: 1,
            baseLength: '90%',
            rearLength: '0%'
          },
          pivot: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            plotBackgroundColor: '#ffffff',
            radius: 3
          }
        }
      }
    },
    title: { text: '' },
    yAxis: {
      min: -20,
      max: 20,
      lineColor: 'transparent',
      minorTickInterval: 1,
      minorTickWidth: 0,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 0,
      tickColor: '#666',
      labels: {
        step: 4,
        rotation: 'auto',
        style: { color: '#333' }
      },
      title: { text: null },
      plotBands: [{
          from: -20,
          to: 20,
          innerRadius: '90%',
          outerRadius: '105%',
          color: {
            linearGradient: {
              x0: 1,
              y0: 1,
              x1: 0,
              y1: 0
            },
            stops: [
              [
                0,
                'rgb(223, 83, 83)'
              ],
              [
                0.3,
                '#BF4747'
              ],
              [
                0.5,
                'rgb(221, 223, 13)'
              ],
              [
                0.7,
                '#BEBF0B'
              ],
              [
                1,
                'rgb(85, 191,59)'
              ]
            ]
          }
        }]
    },
    series: [{
        name: '',
        data: [-6],
        dataLabels: {
          enabled: true,
          y: 15,
          borderWidth: 0,
          useHTML: true,
          formatter: function () {
            if (this.y > 2.5) {
              goalMessage = '<div style="text-align:center"><span style="font-size:15px;color: ' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'rgb(85, 191,59)') + '">On track</span><br/>' + '<span style="font-size:12px;color:silver"></span></div>';
              return goalMessage;
            } else {
              goalMessage = '<div style="text-align:center"><span style="font-size:15px;color:' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'rgb(223, 83, 83)') + '">Off track</span><br/>' + '<span style="font-size:12px;color:silver"></span></div>';
              return goalMessage;
            }
          }
        }
      }]
  };
});