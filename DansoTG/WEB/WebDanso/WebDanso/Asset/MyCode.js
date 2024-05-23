$(document).ready(function () {
    const api = '/api.aspx';
    $.post(api, { action: 'LIST_DAN_SO' }, function (data) {

        var json = JSON.parse(data);
        var rawData = json.data;
       
        // Tìm dân số lớn nhất của mỗi quốc gia
        var maxPopulationByCountry = {};
        var populationByCountryAndYear = {};

        rawData.forEach(function (item) {
            var country = item.QUOC_GIA;
            var year = parseInt(item.NAM, 10) + 2;
            var population = parseInt(item.DAN_SO);

            if (!maxPopulationByCountry[country] || maxPopulationByCountry[country] < population) {
                maxPopulationByCountry[country] = population;
            }

            if (!populationByCountryAndYear[country]) {
                populationByCountryAndYear[country] = {};
            }
            populationByCountryAndYear[country][year] = population;
        });

        // Hiển thị bảng dân số lớn nhất của mỗi quốc gia
        var tableHtml = '<table class="table table-bordered"><thead><tr><th>Country</th><th>Max Population</th></tr></thead><tbody>';
        for (var country in maxPopulationByCountry) {
            tableHtml += '<tr><td>' + country + '</td><td>' + maxPopulationByCountry[country] + '</td></tr>';
        }
        tableHtml += '</tbody></table>';
        $('#max_population_table').html(tableHtml);

        // Chuẩn bị dữ liệu cho biểu đồ
        var years = [];
        for (var year in populationByCountryAndYear["World"]) {
            years.push(year);
        }
        years.sort();

        var chartData = [['Year']];
        for (var country in populationByCountryAndYear) {
            chartData[0].push(country);
        }

        years.forEach(function (year) {
            var row = [year];
            for (var country in populationByCountryAndYear) {
                row.push(populationByCountryAndYear[country][year] || 0);
            }
            chartData.push(row);
        });

        // Vẽ biểu đồ dân số qua các năm
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            var data = google.visualization.arrayToDataTable(chartData);

            var options = {
                title: 'Population Over Years',
                curveType: 'function',
                legend: { position: 'bottom' },
                hAxis: {
                    title: 'Year',
                    titleTextStyle: { color: '#333' }
                },
                vAxis: {
                    title: 'Population',
                    minValue: 0
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        });
    })
    
});