const roiData = {
  hydroverde: { stock: 0.12, profit: 0.08, hybrid: 0.15 },
  verdantRise: { stock: 0.10, profit: 0.07, hybrid: 0.13 }
};

function calculateROI() {
  const investment = parseFloat(document.getElementById("investment").value) || 0;
  const facilityCount = parseInt(document.getElementById("facility").value) || 5;

  // HydroVerde
  const hydroverdeStock = investment * facilityCount * roiData.hydroverde.stock;
  const hydroverdeProfit = investment * facilityCount * roiData.hydroverde.profit;
  const hydroverdeHybrid = investment * facilityCount * roiData.hydroverde.hybrid;

  // Verdant Rise
  const verdantStock = investment * facilityCount * roiData.verdantRise.stock;
  const verdantProfit = investment * facilityCount * roiData.verdantRise.profit;
  const verdantHybrid = investment * facilityCount * roiData.verdantRise.hybrid;

  // Update cards
  document.querySelector(".result-card:nth-child(1) p:nth-child(2)").textContent = `Stock ROI: $${hydroverdeStock.toFixed(2)}`;
  document.querySelector(".result-card:nth-child(1) p:nth-child(3)").textContent = `Profit Share: $${hydroverdeProfit.toFixed(2)}`;
  document.querySelector(".result-card:nth-child(1) p:nth-child(4)").textContent = `Hybrid ROI: $${hydroverdeHybrid.toFixed(2)}`;

  document.querySelector(".result-card:nth-child(2) p:nth-child(2)").textContent = `Stock ROI: $${verdantStock.toFixed(2)}`;
  document.querySelector(".result-card:nth-child(2) p:nth-child(3)").textContent = `Profit Share: $${verdantProfit.toFixed(2)}`;
  document.querySelector(".result-card:nth-child(2) p:nth-child(4)").textContent = `Hybrid ROI: $${verdantHybrid.toFixed(2)}`;

  // Separate totals
  const totalStock = hydroverdeStock + verdantStock;
  const totalProfit = hydroverdeProfit + verdantProfit;
  const totalHybrid = hydroverdeHybrid + verdantHybrid;

  document.querySelector("#totals p:nth-child(1)").textContent = `Total Stock ROI: $${totalStock.toFixed(2)}`;
  document.querySelector("#totals p:nth-child(2)").textContent = `Total Profit Share ROI: $${totalProfit.toFixed(2)}`;
  document.querySelector("#totals p:nth-child(3)").textContent = `Total Hybrid ROI: $${totalHybrid.toFixed(2)}`;

  // Progress bar (example: tied to Hybrid ROI)
  const targetROI = 100000;
  const percentage = Math.min((totalHybrid / targetROI) * 100, 100).toFixed(1);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage + "%";
  progressBar.textContent = percentage + "%";
}

function resetCalculator() {
  document.getElementById("investment").value = "";
  document.getElementById("facility").value = "5";

  // Reset cards
  document.querySelector(".result-card:nth-child(1) p:nth-child(2)").textContent = "Stock ROI: $0";
  document.querySelector(".result-card:nth-child(1) p:nth-child(3)").textContent = "Profit Share: $0";
  document.querySelector(".result-card:nth-child(1) p:nth-child(4)").textContent = "Hybrid ROI: $0";

  document.querySelector(".result-card:nth-child(2) p:nth-child(2)").textContent = "Stock ROI: $0";
  document.querySelector(".result-card:nth-child(2) p:nth-child(3)").textContent = "Profit Share: $0";
  document.querySelector(".result-card:nth-child(2) p:nth-child(4)").textContent = "Hybrid ROI: $0";

  // Reset totals
  document.querySelector("#totals p:nth-child(1)").textContent = "Total Stock ROI: $0";
  document.querySelector("#totals p:nth-child(2)").textContent = "Total Profit Share ROI: $0";
  document.querySelector("#totals p:nth-child(3)").textContent = "Total Hybrid ROI: $0";

  // Reset progress bar
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
}

document.getElementById("calculateBtn").addEventListener("click", calculateROI);
document.getElementById("resetBtn").addEventListener("click", resetCalculator);
