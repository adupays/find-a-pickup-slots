export default new Promise(function (resolve) {
  setTimeout(function () {
    resolve({
      Auchan: [
        {
          id: 58431,
          name: "SOISY-SOUS-MONTMORENCY",
        },
        {
          id: 54751,
          name: "PARIS ST-CHARLES",
        },
      ],
      Carrefour: [
        {
          id: 12345,
          name: "SANNOIS",
        },
        {
          id: 67890,
          name: "PARIS",
        },
      ],
    });
  }, 300);
});
