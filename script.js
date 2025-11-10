// Demo ROI multipliers (replace with real projections when ready)
const roiData = {
  hydroverde: { stock: 0.12, profit: 0.08, hybrid: 0.15 },
  verdantRise: { stock: 0.10, profit: 0.07, hybrid: 0.13 }
};

function calculateROI() {
  const investment = parseFloat(document.getElementById("investment").value) || 0;
  const facilityCount = parseInt(document.getElementById("facility").value) || 1;

  const hydroverdeStock = (investment * facilityCount * roiData.hydroverde.stock).toFixed(2);
  const hydroverdeProfit = (investment * facilityCount * roiData.hydroverde.profit).toFixed(2);
  const hydroverdeHybrid = (investment * facilityCount * roiData.hydroverde.hybrid).toFixed(2);

  const verdantStock = (investment * facilityCount * roiData.verdantRise.stock).toFixed(2);
  const verdantProfit = (investment * facilityCount * roiData.verdantRise.profit).toFixed(2);
  const verdantHybrid = (investment * facilityCount * roiData.verdantRise.hybrid).toFixed(2);

  // Update cards — first card (HydroVerde)
  document.querySelector(".result-card:nth-child(1) p:nth-child(2)").textContent = `Stock ROI: $${hydroverdeStock}`;
  document.querySelector(".result-card:nth-child(1) p:nth-child(3)").textContent = `Profit Share: $${hydroverdeProfit}`;
  document.querySelector(".result-card:nth-child(1) p:nth-child(4)").textContent = `Hybrid ROI: $${hydroverdeHybrid}`;

  // Second card (Verdant Rise)
  document.querySelector(".result-card:nth-child(2) p:nth-child(2)").textContent = `Stock ROI: $${verdantStock}`;
  document.querySelector(".result-card:nth-child(2) p:nth-child(3)").textContent = `Profit Share: $${verdantProfit}`;
  document.querySelector(".result-card:nth-child(2) p:nth-child(4)").textContent = `Hybrid ROI: $${verdantHybrid}`;

  // Total projected ROI
  const totalROI = (
    parseFloat(hydroverdeStock) +
    parseFloat(hydroverdeProfit) +
    parseFloat(hydroverdeHybrid) +
    parseFloat(verdantStock) +
    parseFloat(verdantProfit) +
    parseFloat(verdantHybrid)
  ).toFixed(2);

  document.getElementById("summary").textContent = `Total Projected ROI: $${totalROI}`;

  // Progress toward target (adjust target to your benchmarks)
  const targetROI = 100000; // Example target
  const percentage = Math.min((totalROI / targetROI) * 100, 100).toFixed(1);

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

  document.getElementById("summary").textContent = "Total Projected ROI: $0";

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
}

// Event listeners
document.getElementById("calculateBtn").addEventListener("click", calculateROI);
document.getElementById("resetBtn").addEventListener("click", resetCalculator);
