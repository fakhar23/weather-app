window.onload = function () {
  let now = new Date();

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
          { label: `${now.getDate()}/ ${now.getMonth() + 1}`, y: 10 },
          {
            label: `${dayadder() ? now.getDate() : now.getDate()}/ ${
              now.getMonth() + 1
            }`,
            y: 15,
          },
          {
            label: `${dayadder() ? now.getDate() : now.getDate()}/ ${
              now.getMonth() + 1
            }`,
            y: 25,
          },
          {
            label: `${dayadder() ? now.getDate() : now.getDate()}/ ${
              now.getMonth() + 1
            }`,
            y: 30,
          },
          {
            label: `${dayadder() ? now.getDate() : now.getDate()}/ ${
              now.getMonth() + 1
            }`,
            y: 28,
          },
        ],
      },
    ],
  });
  chart.render();
  function dayadder() {
    now.setDate(now.getDate() + 1);
    return 1;
  }
};
