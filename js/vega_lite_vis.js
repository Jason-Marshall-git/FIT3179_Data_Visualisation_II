var spec1 = "js/uni_faculty_count_choropleth_map.json";
vegaEmbed("#choropleth_map_faculty", spec1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec2 = "js/uni_international_students_choropleth_map.json";
vegaEmbed("#choropleth_map_student", spec2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec3 = "js/uni_ranks_bumpchart.json";
vegaEmbed("#bump_chart", spec3)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec4 = "js/uni_score_dotplot.json";
vegaEmbed("#dot_plot", spec4)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec5 = "js/uni_size_pie_chart.json";
vegaEmbed("#pie_chart", spec5)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var spec6 = "js/uni_student_faculty_ratio_barchart.json";
vegaEmbed("#bar_chart", spec6)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
