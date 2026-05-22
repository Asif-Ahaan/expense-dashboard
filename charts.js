// charts.js — Chart.js 4 renderers

const D = window.DASHBOARD_DATA;

// ── Shared defaults ──────────────────────────────────────────────
Chart.defaults.color = '#7c8494';
Chart.defaults.borderColor = 'rgba(255,255,255,0.07)';
Chart.defaults.font.family = "'JetBrains Mono', monospace";
Chart.defaults.font.size = 11;

const PALETTE = ['#22d3ee','#3b9eff','#a855f7','#ff3b5c','#ff7b35','#f5c842','#2ecc8f','#f43f5e','#06b6d4','#8b5cf6'];

function fmtINR(val) {
  if (val >= 1e12) return '₹' + (val/1e12).toFixed(1) + 'T';
  if (val >= 1e9)  return '₹' + (val/1e9).toFixed(1) + 'B';
  if (val >= 1e6)  return '₹' + (val/1e6).toFixed(0) + 'M';
  return '₹' + val.toFixed(0);
}

// ── Monthly Trend ────────────────────────────────────────────────
function renderMonthly() {
  const ctx = document.getElementById('monthlyChart');
  if (!ctx) return;
  const labels = D.monthly.map(d => d.month);
  const data   = D.monthly.map(d => d.spend / 1e9);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Spend (₹B)',
        data,
        borderColor: '#22d3ee',
        backgroundColor: 'rgba(34,211,238,0.06)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 5,
        tension: 0.35,
        fill: true
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + fmtINR(ctx.raw * 1e9)
          }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { maxRotation: 45, autoSkip: true, maxTicksLimit: 12 } },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { callback: v => '₹' + v + 'B' }
        }
      }
    }
  });
}

// ── Dept Bar Chart ───────────────────────────────────────────────
function renderDept() {
  const ctx = document.getElementById('deptChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: D.dept_spend.map(d => d.dept),
      datasets: [{
        data: D.dept_spend.map(d => d.spend),
        backgroundColor: PALETTE,
        borderWidth: 2,
        borderColor: '#13161b',
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: {
          position: 'right',
          labels: { padding: 10, boxWidth: 10, font: { size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + fmtINR(ctx.raw) + '  (' + ctx.label + ')'
          }
        }
      }
    }
  });
}

// ── Vendor Bar ───────────────────────────────────────────────────
function renderVendors() {
  const ctx = document.getElementById('vendorChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: D.top_vendors.map(d => d.vendor),
      datasets: [{
        label: 'Spend',
        data: D.top_vendors.map(d => d.spend / 1e9),
        backgroundColor: D.top_vendors.map((d, i) =>
          d.vendor === 'UNKNOWN' ? 'rgba(255,59,92,0.7)' : 'rgba(34,211,238,0.55)'
        ),
        borderColor: D.top_vendors.map(d =>
          d.vendor === 'UNKNOWN' ? '#ff3b5c' : '#22d3ee'
        ),
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + fmtINR(ctx.raw * 1e9)
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { callback: v => '₹' + v + 'B' }
        },
        y: { grid: { display: false } }
      }
    }
  });
}

// ── Currency Donut ───────────────────────────────────────────────
function renderCurrency() {
  const ctx = document.getElementById('currencyChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: D.currency_mix.map(d => d.currency),
      datasets: [{
        data: D.currency_mix.map(d => d.spend),
        backgroundColor: ['#3b9eff','#a855f7','#22d3ee','#f5c842','#ff7b35','#2ecc8f'],
        borderWidth: 2,
        borderColor: '#13161b',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 8, boxWidth: 10, font: { size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + fmtINR(ctx.raw) + ' (' + (ctx.raw / D.summary.total_spend_inr * 100).toFixed(1) + '%)'
          }
        }
      }
    }
  });
}

// ── Issues Bar ───────────────────────────────────────────────────
function renderIssues() {
  const ctx = document.getElementById('issuesChart');
  if (!ctx) return;

  const colors = ['#ff3b5c','#ff7b35','#f5c842','#a855f7','#3b9eff','#22d3ee'];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: D.issues.map(d => d.label),
      datasets: [{
        label: 'Count',
        data: D.issues.map(d => d.count),
        backgroundColor: colors.map(c => c + '88'),
        borderColor: colors,
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + ctx.raw.toLocaleString() + ' transactions'
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { callback: v => v.toLocaleString() }
        },
        y: { grid: { display: false }, ticks: { font: { size: 10 } } }
      }
    }
  });
}

// Init all charts on first render
window.initCharts = function () {
  renderMonthly();
  renderDept();
  renderVendors();
  renderCurrency();
  renderIssues();
};
