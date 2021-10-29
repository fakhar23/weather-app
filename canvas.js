window.onload = function () {
  const chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light2", "dark1", "dark2"
    animationEnabled: true, // change to true
    title: {
      text: "Forecast",
    },
    data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "spline",
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 },
        ],
      },
    ],
  });
  chart.render();
};
