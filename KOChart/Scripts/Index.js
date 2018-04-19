function DummyViewModel() {
    this.SimpleLineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
              label: 'Data One',
              borderColor: '#FC2525',
              pointBackgroundColor: 'red',
              borderWidth: 1,
              pointBorderColor: 'white',
              backgroundColor: this.gradient,
              bezierCurve: false,
              data: [40, 39, 10, 40, 39, 80, 40]
          },{
              label: 'Data Two',
              borderColor: '#05CBE1',
              pointBackgroundColor: 'white',
              pointBorderColor: 'white',
              borderWidth: 1,
              backgroundColor: this.gradient10,
              bezierCurve: false,
              data: [60, 55, 32, 10, 2, 12, 53]
          }
        ]
};
this.AreaData = {
    datasets: [{
        period: '2010',
        OPD: 0,
        ICU: 0,
    }, {
        period: '2011',
        OPD: 130,
        ICU: 100,
    }, {
        period: '2012',
        OPD: 30,
        ICU: 60,
    }, {
        period: '2013',
        OPD: 30,
        ICU: 200,
    }, {
        period: '2014',
        OPD: 200,
        ICU: 150,
    }, {
        period: '2015',
        OPD: 105,
        ICU: 90,
    },
 {
     period: '2016',
     OPD: 250,
     ICU: 150,
 }],
    xkey: 'period',
    ykeys: ['OPD', 'ICU'],
    labels: ['OPD $', 'ICU $'],
    pointSize: 0,
    fillOpacity: 0.4,
    pointStrokeColors: ['#b4becb', '#00c292'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 0,
    smooth: false,
    hideHover: 'auto',
    lineColors: ['#b4becb', '#00c292'],
    resize: true
};
this.RedValue = ko.observable(300);
this.GreenValue = ko.observable(50);
this.YellowValue = ko.observable(100);
this.DynamicDoughnutData = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
        {
            data: [this.RedValue, this.GreenValue, this.YellowValue],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
}

$(document).ready(function () {
    ko.applyBindings(new DummyViewModel());
});