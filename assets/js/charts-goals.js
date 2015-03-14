$(window).load(function () {
    $(function () {

      


        var chart;
        $(document).ready(function () {
            
            
            
            
            chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'goalSimulation',
                    backgroundColor: null,
                    type: 'area'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: ['1', '2', '3', '4', '5', '6', ],
                    tickmarkPlacement: 'on',
                    title: {
                        text: 'months'
                    }
                },
                yAxis: {
                    title: {
                        text: '$'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000;
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '' +
                            this.x + ': ' + Highcharts.numberFormat(this.y, 0, ',') + ' hundred';
                    }
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                legend: {
                    align: 'bottom',
                    x: 275,
                    borderColor: null
                },

                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Contributions',
                    color: '#0066FF',
                    data: [500, 500, 500, 500, 500, 500]
            }, {
                    name: 'Cost',
                    data: [100, 120, 140, 160, 180, 200]
            }]
            });
        });


        var min_value = 0;
        var max_value = 5000;

        $('#slider1').slider({

            min: min_value,
            max: max_value,
            step: 100,

            slide: function (event, ui) {
                $('#slider1_value').html(ui.value);
            },
            stop: function (event, ui) {

            }
        });

        var min_value = 0;
        var max_value = 100;

        $('#slider2').slider({

            min: min_value,
            max: max_value,
            step: 5,

            slide: function (event, ui) {
                $('#slider2_value').html('$' + ui.value);
                var newdata = [];
                for (var i = 0; i < 6; i++) {
                    newdata.push(ui.value * i);
                }
                chart.series[0].setData(newdata);
            },
            stop: function (event, ui) {

            }
        });

        $('#slider3').slider({

            min: min_value,
            max: max_value,
            step: 5,

            slide: function (event, ui) {
                $('#slider3_value').html('$' + ui.value);
                var newdata = [];
                for (var i = 0; i < 6; i++) {
                    newdata.push(ui.value * i);
                }
                chart.series[0].setData(newdata);
            },
            stop: function (event, ui) {

            }
        });


    });
});