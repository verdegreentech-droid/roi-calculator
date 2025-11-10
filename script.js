// ROI multipliers based on previous calculations
const hydroverdeStock = {5: 1.25, 10: 2.5, 30: 7.5, 50: 12.5, 150: 37.5};
const hydroverdeProfit = {5: 0.375, 10: 0.75, 30: 2.25, 50: 3.75, 150: 11.25};
const verdantStock = {5: 3.25, 10: 6.5, 30: 19.5, 50: 32.5, 150: 97.5};
const verdantProfit = {5: 0.975, 10: 1.95, 30: 5.85, 50: 9.75, 150: 29.25};

function calculateROI() {
    const investment = parseFloat(document.getElementById('investment').value);
    const facilities = parseInt(document.getElementById('facilities').value);

    if (!investment || investment <= 0) {
        document.getElementById('hv-stock').textContent = 0;
        document.getElementById('hv-profit').textContent = 0;
        document.getElementById('hv-hybrid').textContent = 0;
        document.getElementById('vr-stock').textContent = 0;
        document.getElementById('vr-profit').textContent = 0;
        document.getElementById('vr-hybrid').textContent = 0;
        return;
    }

    // HydroVerde calculations
    const hvStock = investment * hydroverdeStock[facilities];
    const hvProfit = investment * hydroverdeProfit[facilities];
    const hvHybrid = (hvStock + hvProfit) / 2;

    // Verdant Rise calculations
    const vrStock = investment * verdantStock[facilities];
    const vrProfit = investment * verdantProfit[facilities];
    const vrHybrid = (vrStock + vrProfit) / 2;

    // Update UI
    document.getElementById('hv-stock').textContent = hvStock.toLocaleString();
    document.getElementById('hv-profit').textContent = hvProfit.toLocaleString();
    document.getElementById('hv-hybrid').textContent = hvHybrid.toLocaleString();
    document.getElementById('vr-stock').textContent = vrStock.toLocaleString();
    document.getElementById('vr-profit').textContent = vrProfit.toLocaleString();
    document.getElementById('vr-hybrid').textContent = vrHybrid.toLocaleString();
}

// Trigger calculation when inputs change
document.getElementById('investment').addEventListener('input', calculateROI);
document.getElementById('facilities').addEventListener('change', calculateROI);
