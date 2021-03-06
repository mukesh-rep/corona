function parseCasesData(data) {
  return {
      labels: Object.keys(data.get("uk").data.timeline.cases),
      datasets: generateDatasets(data)
  }
}
  
function generateDatasets(data) {
  let datasetArray = [];

  for (let country of data.keys()) {
    datasetArray.push({
      label: data.get(country).name,
      fill: false,
      data: Object.values(data.get(country).data.timeline.cases),
    });
  }

  return datasetArray;
}

export default parseCasesData;