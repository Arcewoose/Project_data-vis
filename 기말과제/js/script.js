$(document).ready(function () {
    Highcharts.chart("container", {
        chart: {

            type: "column",
            backgroundColor: "transparent",
            borderColor: "#335cad"
        },
        title: {
            text: "분기별 세계 시장 판매량",
            style: {
                color: "white",
                fontSize: "36px",
                fontFamily: "'Noto Sans KR', sans-serif;",
                fontWeight: "bold"
            }
        },
        subtitle: {
            text: "2020-2분기 ~ 2022-2분기",
            style: {
                color: "white",
                fontFamily: "'Noto Sans KR', sans-serif;",
                fontSize: "18px"
            }
        },
        xAxis: {
            categories: [
                "2020-2",
                "2020-3",
                "2020-4",
                "2021-1",
                "2021-2",
                "2021-3",
                "2021-4",
                "2022-1",
                "2022-2"
            ],
            crosshair: true,
            labels: {
                style: {
                    color: "white",
                    fontSize: "18px"
                }
            }
        },
        yAxis: {
            gridLineColor: 'transparent',

            crosshair: true,
            title: {
                text: "점유율 (%)",
                style: {
                    color: "white"
                }
            },
            labels: {

                style: {
                    color: "white"
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:18px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="' +
                    'padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.15,
                borderWidth: 0
            }
        },

        legend: {
            itemStyle: {
                color: '#fff'
            }
        },
        series: [

            {
                name: "Samsung",

                data: [
                    20,
                    22,
                    16,
                    22,
                    18,
                    20,
                    19,
                    23

                ],
                color: '#8e7cc3'
            }, {
                name: "OPPO",
                data: [
                    8,
                    9,
                    8,
                    9,
                    11,
                    10,
                    10,
                    9
                ],
                color: '#c27ba0'
            }, {
                name: "Xiaomi",
                data: [
                    10,
                    13,
                    11,
                    14,
                    16,
                    13,
                    12,
                    12
                ],
                color: '#3e2394'
            }
        ]
    });

    Highcharts.chart("container-2", {
        chart: {

            type: "column",
            backgroundColor: "transparent"
        },
        title: {
            text: "분기별 세계 시장 판매량",
            style: {
                color: "black",
                fontSize: "36px"
            }
        },
        subtitle: {

            text: "2020-2분기 ~ 2022-2분기",
            style: {
                color: "black",
                fontFamily: "'Noto Sans KR', sans-serif;",
                fontSize: "18px"
            }
        },
        xAxis: {
            categories: [
                "2020-2",
                "2020-3",
                "2020-4",
                "2021-1",
                "2021-2",
                "2021-3",
                "2021-4",
                "2022-1",
                "2022-2"
            ],
            crosshair: true,
            labels: {
                style: {
                    color: "black",
                    fontSize: "18px"
                }
            }
        },
        yAxis: {

            gridLineColor: 'transparent',
            min: 0,
            title: {
                text: "점유율(%)",
                style: {
                    color: "black"
                }
            },
            labels: {
                style: {
                    color: "black"
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="' +
                    'padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.15,
                borderWidth: 0
            }
        },
        series: [

            {
                name: "Apple",
                data: [
                    14,
                    11,
                    21,
                    17,
                    15,
                    14,
                    22,
                    18
                ],
                color: '#92ca7e'
            }, {
                name: "OPPO",
                data: [
                    8,
                    9,
                    8,
                    9,
                    11,
                    10,
                    10,
                    9
                ],
                color: '#c27ba0'
            }, {
                name: "Xiaomi",
                data: [
                    10,
                    13,
                    11,
                    14,
                    16,
                    13,
                    12,
                    12
                ],
                color: '#3e2394'
            }
        ]
    });

    Highcharts.chart('container_5', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent"
        },
        title: {
            text: '국내 점유율',
            style: {
                color: "white",
                fontWeight: 'bold'
            },

            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: 10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '26px',
                        borderWidth: "0px"
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: [
                    '50%', '75%'
                ],
                size: '90%'
            }
        },
        series: [
            {
                type: 'pie',
                name: '점유율',
                fontWeight: 'bold',
                innerSize: '80%',
                data: [
                    [
                        '삼성', 58.9
                    ],
                    [
                        '애플', 13.29
                    ]
                ]
            }
        ]
    });

    Highcharts.chart('container_6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent"
        },
        title: {
            text: '해외 점유율',

            style: {
                color: "white",
                fontWeight: 'bold'
            },

            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: 10,
                    style: {
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '26px'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: [
                    '50%', '75%'
                ],
                size: '90%'
            }
        },
        series: [
            {
                type: 'pie',
                name: '점유율',
                fontWeight: 'bold',
                innerSize: '80%',
                data: [
                    [
                        '삼성', 27
                    ],
                    [
                        '애플', 50
                    ]
                ]
            }
        ]
    });

    //multi class

    var app_icon = `<div class=i_icon></div>`;
    var sam_icon = `<div class=g_icon></div>`;
    for (var i = 0; i < 50; i++) {

        $(".icon_container").append(sam_icon);
        $(".icon_container").append(app_icon);
    }

    for (var z = 0; z < 30; z++) {}
    //scroll event

    $(document).ready(function () {
        $(document).on("scroll", function () {
            var scrollValue = $(document).scrollTop(); //스크롤 값
            var windowHeight = $(window).height();
            var boxPosition = $(".frame_g").offset().top; 
            var boxPosition2 = $(".frame_a") .offset().top;
            
            var imgPosition = $(".img_l")
                .offset()
                .top;
            var textPosition = $(".n_text")
                .offset()
                .top;
            var textPosition2 = $(".f_ani1")
                .offset()
                .top;
            var textPosition3 = $(".f_ani4")
                .offset()
                .top;

            var imgPosition2 = $(".sam01")
                .offset()
                .top;
            var imgPosition3 = $(".apple01")
                .offset()
                .top;

            //renderer position
            var renPosition = $(".i_rendering")
                .offset()
                .top;
            var renPosition2 = $(".g_rendering")
                .offset()
                .top;

            //img position
            var samPosition = $(".jyl")
                .offset()
                .top;
            var s_textPosition = $(".jf_ani1")
                .offset()
                .top;
            var s_logoPosition = $(".sam_logo")
                .offset()
                .top;

            var appPosition = $(".cook")
                .offset()
                .top;
            var a_textPosition = $(".kf_ani1")
                .offset()
                .top;
            var a_logoPosition = $(".app_logo")
                .offset()
                .top;

            //chart bar position
            var barPosition = $(".chart_bar01")
                .offset()
                .top;
            var barPosition2 = $(".chart_bar05")
                .offset()
                .top;
            console.log("scroll", scrollValue, boxPosition);

            if(scrollValue > boxPosition / 4 ){
                $(".frame_g").css("opacity", 1);
                $(".frame_a").css("opacity", 1);
            }
            if (scrollValue > 5000) {

                $(".frame_g").css("opacity", 0);
                $(".frame_a").css("opacity", 0);
            }
            if(scrollValue < boxPosition / 4  + windowHeight/2){
                $(".frame_g").css("opacity", 0);
                $(".frame_a").css("opacity", 0);
            }


            if (scrollValue > imgPosition / 2) {

                $(".img_l").css("opacity", 1);
                $(".img_r").css("opacity", 1);
            }

            if (scrollValue < imgPosition / 2) {

                $(".img_l").css("opacity", 0);
                $(".img_r").css("opacity", 0);
            }

            if (scrollValue > textPosition2 / 4) {

                $(".f_ani1").css("opacity", 0.4);
            }

            if (scrollValue < textPosition2 / 4) {

                $(".f_ani1").css("opacity", 0);
            }

            if (scrollValue > textPosition2 / 6) {

                $(".f_ani2").css("opacity", 0.6);
            }

            if (scrollValue < textPosition2 / 6) {

                $(".f_ani2").css("opacity", 0);
            }

            if (scrollValue > textPosition2 / 8) {

                $(".f_ani3").css("opacity", 0.8);
            }

            if (scrollValue < textPosition2 / 8) {

                $(".f_ani3").css("opacity", 0);
            }

            /* 4,5,6 */

            if (scrollValue > textPosition3 / 4) {

                $(".f_ani4").css("opacity", 0.4);
            }

            if (scrollValue < textPosition3 / 4) {

                $(".f_ani4").css("opacity", 0);
            }

            if (scrollValue > textPosition3 / 6) {

                $(".f_ani5").css("opacity", 0.6);
            }

            if (scrollValue < textPosition3 / 6) {

                $(".f_ani5").css("opacity", 0);
            }

            if (scrollValue > textPosition3 / 8) {

                $(".f_ani6").css("opacity", 0.8);
            }

            if (scrollValue < textPosition3 / 8) {

                $(".f_ani6").css("opacity", 0);
            }

            if (scrollValue > textPosition / 2) {

                $(".n_text").css("opacity", 1);
                $(".n_text2").css("opacity", 1);
            }

            if (scrollValue < textPosition / 2) {

                $("n_text").css("opacity", 0);
                $(".n_text2").css("opacity", 0);
            }

            /*sam, app img*/
            if (scrollValue > imgPosition2 / 1.5) {
                $(".sam01").css("opacity", 1);
            }

            if (scrollValue > imgPosition2) {
                $(".sam02").css("opacity", 1);
            }
            if (scrollValue > imgPosition3 / 2) {
                $(".apple01").css("opacity", 1);
            }

            if (scrollValue > imgPosition3 / 1.5) {
                $(".apple02").css("opacity", 1);
            }

            if (scrollValue > imgPosition2) {
                $(".sam02").css("opacity", 1);
            }
            if (scrollValue > imgPosition3 / 2) {
                $(".apple01").css("opacity", 1);
            }

            if (scrollValue > imgPosition3) {
                $(".apple02").css("opacity", 1);
            }

            if (scrollValue > barPosition / 2) {
                $(".chart_bar01").css("width", 679);
                $(".chart_bar02").css("width", 636);
                $(".chart_bar03").css("width", 630);
                $(".chart_bar04").css("width", 643);

                $(".chart_bar01").css("opacity", 1);
                $(".chart_bar02").css("opacity", 1);
                $(".chart_bar03").css("opacity", 1);
                $(".chart_bar04").css("opacity", 1);
            }

            if (scrollValue < barPosition - windowHeight / 2) {
                $(".chart_bar01").css("width", 600);
                $(".chart_bar02").css("width", 600);
                $(".chart_bar03").css("width", 600);
                $(".chart_bar04").css("width", 600);

                $(".chart_bar01").css("opacity", 0);
                $(".chart_bar02").css("opacity", 0);
                $(".chart_bar03").css("opacity", 0);
                $(".chart_bar04").css("opacity", 0);
            }
            //apple chart
            if (scrollValue > barPosition2 / 2) {
                $(".chart_bar05").css("width", 689);

                $(".chart_bar06").css("width", 540);

                $(".chart_bar07").css("width", 679);

                $(".chart_bar08").css("width", 621);

                $(".chart_bar05").css("opacity", 1);
                $(".chart_bar06").css("opacity", 1);
                $(".chart_bar07").css("opacity", 1);
                $(".chart_bar08").css("opacity", 1);
            }

            if (scrollValue < barPosition - windowHeight / 2) {
                $(".chart_bar05").css("width", 500);
                $(".chart_bar06").css("width", 600);
                $(".chart_bar07").css("width", 600);
                $(".chart_bar08").css("width", 600);

                $(".chart_bar05").css("opacity", 0);
                $(".chart_bar06").css("opacity", 0);
                $(".chart_bar07").css("opacity", 0);
                $(".chart_bar08").css("opacity", 0);
            }

            //page3
            if (scrollValue > samPosition / 1.5) {
                $(".jyl").css("opacity", 1);
                $(".cook").css("opacity", 1);

            }

            if (scrollValue > s_textPosition / 1.5) {
                $(".jf_ani3").css("opacity", 1);
                $(".kf_ani3").css("opacity", 1);

            }

            if (scrollValue > s_textPosition / 2) {

                $(".jf_ani2").css("opacity", 0.6);
                $(".kf_ani2").css("opacity", 0.6);
            }

            if (scrollValue > s_textPosition / 4) {

                $(".jf_ani1").css("opacity", 0.4);
                $(".kf_ani1").css("opacity", 0.4);
            }

        });
    });
    var ran1 = Math.floor(Math.random() * 10);
    console.log(ran1);

    //class click event
    $(".sam-btn").on("click", function () {
        $(".sam-btn").css("background-color", "#fff");
        $(".app-btn").css("background-color", "#333");
        //graph
        $("#container_5").css("opacity", 1);
        $("#container_5").css("opacity", 1);
        $("#container_6").css("opacity", 0);

        $(".i_rendering").css("transform", "scale(0.4");
        $(".g_rendering").css("transform", "scale(0.7");

    });

    $(".app-btn").on("click", function () {

        $(".sam-btn").css("background-color", "#333");
        $(".app-btn").css("background-color", "#fff");

        $("#container_5").css("opacity", 0);
        $("#container_6").css("opacity", 1);

        $(".i_rendering").css("transform", "scale(0.7");
        $(".g_rendering").css("transform", "scale(0.4");

    });

});
