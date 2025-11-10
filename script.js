const roiData = {
  hydroverde: { stock: 0.12, profit: 0.08, hybrid: 0.15 },
  verdantRise: { stock: 0.10, profit: 0.07, hybrid: 0.13 }
};

function calculateROI() {
  const investment = parseFloat(document.getElementById("investment").value) || 0;
  const facilityCount = parseInt(document.getElementById("facility").value) || 1;

  // HydroVerde
  const hydroverdeStock = (investment * facilityCount * roiData.hydroverde.stock).toFixed(2);
  const hydroverdeProfit = (investment * facilityCount * roiData.hydroverde.profit).toFixed(2);
  const hydroverdeHybrid = (investment * facilityCount * roiData.hydroverde.hybrid).toFixed(2);

  // Verdant Rise
  const verdantStock = (investment * facilityCount * roiData.verdantRise.stock).toFixed(2);
  const verdantProfit = (investment * facilityCount * roiData.verdantRise.profit).toFixed(2);
  const verdantHybrid = (investment * facilityCount * roiData.verdantRise.hybrid).toFixed(2);

  // Update cards
  document.querySelector(".result-card:nth-child(1) p:nth-child(2)").textContent = `Stock ROI: $${hydroverdeStock}`;
  document.querySelector(".result-card:nth-child(1) p:nth-child(3)").textContent = `Profit Share: $${hydroverdeProfit}`;
  document.querySelector(".result-card:nth-child(1) p:nth-child(4)").textContent = `Hybrid ROI: $${hydroverdeHybrid}`;

  document.querySelector(".result-card:nth-child(2) p:nth-child(2)").textContent = `Stock ROI: $${verdantStock}`;
  document.querySelector(".result-card:nth-child(2) p:nth-child(3)").textContent = `Profit Share: $${verdantProfit}`;
  document.querySelector(".result-card:nth-child(2) p:nth-child(4)").textContent = `Hybrid ROI: $${verdantHybrid}`;

  // Separate totals
  const totalStock = (parseFloat(hydroverdeStock) + parseFloat(verdantStock)).toFixed(2);
  const totalProfit = (parseFloat(hydroverdeProfit) + parseFloat(verdantProfit)).toFixed(2);
  const totalHybrid = (parseFloat(hydroverdeHybrid) + parseFloat(verdantHybrid)).toFixed(2);

  document.querySelector("#totals p:nth-child(1)").textContent = `Total Stock ROI: $${totalStock}`;
  document.querySelector("#totals p:nth-child(2)").textContent = `Total Profit Share ROI: $${totalProfit}`;
  document.querySelector("#totals p:nth-child(3)").textContent = `Total Hybrid ROI: $${totalHybrid}`;

  // Progress bar (example: tied to hybrid ROI)
  const targetROI = 100000;
  const percentage = Math.min((totalHybrid / targetROI) * 100, 100).toFixed(1);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage + "%";
  progressBar.textContent = percentage + "%";
}

function resetCalculator() {
  document.getElementById("investment").value = "";
  document.getElementById("facility").value = "1";

  document.querySelector(".result-card:nth-child(1) p:nth-child(2)").textContent = "Stock ROI: $0";
  document.querySelector(".result-card:nth-child(1) p:nth-child(3)").textContent = "Profit Share: $0";
  document.querySelector(".result-card:nth-child(1) p:nth-child(4)").textContent = "Hybrid ROI: $0";

  document.querySelector(".result-card:nth-child(2) p:nth-child(2)").textContent = "Stock ROI: $0";
  document.querySelector(".result-card:nth-child(2) p:nth-child(3)").textContent = "Profit Share: $0";
  document.querySelector(".result-card:nth-child(2) p:nth-child(4)").textContent = "Hybrid ROI: $0";

  document.querySelector("#totals p:nth-child(1)").textContent = "Total Stock ROI: $0";
  document.querySelector("#totals p:nth-child(2)").textContent = "Total Profit Share ROI: $0";
  document.querySelector("#totals p:nth-child(3)").textContent = "Total Hybrid ROI: $0";

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
}

document.getElementById("calculateBtn").addEventListener("click", calculateROI);
document.getElementById("resetBtn").addEventListener("click", resetCalculator);
