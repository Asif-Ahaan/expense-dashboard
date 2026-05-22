// Pre-computed from cleaned_expenses.csv (14,618 transactions, FY2024–2026)
window.DASHBOARD_DATA = {
  summary: {
    total_spend_inr: 390844948741.61,
    total_transactions: 14618,
    flagged_count: 1380,
    personal_spend_inr: 28873862890.42,
    no_receipt_count: 5722,
    missing_submitter: 1298,
    missing_cc: 4807,
    pending_count: 13238,
    rejected_count: 1380,
    lag_issues: 495,
    zero_approved: true
  },

  dept_spend: [
    { dept: "Engineering", spend: 147642713973.70, count: 5905 },
    { dept: "Sales",       spend: 101895623667.09, count: 3232 },
    { dept: "Product",     spend:  54466200707.05, count: 1758 },
    { dept: "Finance",     spend:  44499979361.16, count: 1795 },
    { dept: "Operations",  spend:  39870568255.07, count: 1701 },
    { dept: "Legal",       spend:    893676538.00, count:   47 }
  ],

  monthly: [
    { month: "Jan '24", spend: 10341025712.93 },
    { month: "Feb '24", spend:  7712900084.86 },
    { month: "Mar '24", spend:  8638420695.14 },
    { month: "Apr '24", spend:  8116581593.98 },
    { month: "May '24", spend: 19810048257.41 },
    { month: "Jun '24", spend:  9759766878.97 },
    { month: "Jul '24", spend: 11219628141.67 },
    { month: "Aug '24", spend:  6503436651.04 },
    { month: "Sep '24", spend: 12237340695.38 },
    { month: "Oct '24", spend:  8389334285.38 },
    { month: "Nov '24", spend: 15684678200.66 },
    { month: "Dec '24", spend:  7191889689.35 },
    { month: "Jan '25", spend:  8833689605.61 },
    { month: "Feb '25", spend: 14525784315.39 },
    { month: "Mar '25", spend:  8399740495.29 },
    { month: "Apr '25", spend: 13913132301.59 },
    { month: "May '25", spend: 14755005268.64 },
    { month: "Jun '25", spend:  9433488271.55 },
    { month: "Jul '25", spend: 17231251874.23 },
    { month: "Aug '25", spend: 10635066568.18 },
    { month: "Sep '25", spend:  8132711678.44 },
    { month: "Oct '25", spend:  6999681392.47 },
    { month: "Nov '25", spend: 15200707490.84 },
    { month: "Dec '25", spend:  9284380078.61 },
    { month: "Jan '26", spend: 10704107724.92 },
    { month: "Feb '26", spend:  7105338260.66 },
    { month: "Mar '26", spend:  8484963863.33 },
    { month: "Apr '26", spend: 10282409202.30 },
    { month: "May '26", spend:  9865430205.26 },
    { month: "Jun '26", spend: 16833496070.61 },
    { month: "Jul '26", spend: 14295229267.87 },
    { month: "Aug '26", spend:  8700043381.47 },
    { month: "Sep '26", spend:  6908109109.05 },
    { month: "Oct '26", spend:  6866762804.35 },
    { month: "Nov '26", spend: 11352037536.48 },
    { month: "Dec '26", spend: 14880898597.70 }
  ],

  top_vendors: [
    { vendor: "UNKNOWN",            spend: 9943863235.03, count: 369 },
    { vendor: "Uber",               spend: 9519157173.37, count: 258 },
    { vendor: "Razorpay",           spend: 7982433964.37, count: 215 },
    { vendor: "Zoom",               spend: 7528402694.26, count: 210 },
    { vendor: "Swiggy",             spend: 6993571721.86, count: 138 },
    { vendor: "IndiGo",             spend: 5557832375.42, count: 211 },
    { vendor: "Amazon Web Services",spend: 5556659993.06, count: 189 },
    { vendor: "Flipkart",           spend: 5141079242.37, count: 192 },
    { vendor: "Notion",             spend: 5015044094.57, count: 221 },
    { vendor: "Adobe",              spend: 4815496667.20, count: 161 }
  ],

  currency_mix: [
    { currency: "USD", spend: 216399848191.82 },
    { currency: "GBP", spend:  80822091639.58 },
    { currency: "EUR", spend:  65279311510.86 },
    { currency: "SGD", spend:  18063945733.82 },
    { currency: "AED", spend:   7039249718.11 },
    { currency: "INR", spend:   3240501947.42 }
  ],

  issues: [
    { label: "Pending (never approved)", count: 13238 },
    { label: "Missing receipts",         count: 5722  },
    { label: "Missing cost center",      count: 4807  },
    { label: "Personal expenses",        count: 1380  },
    { label: "Missing submitter",        count: 1298  },
    { label: "Date lag >30 days",        count: 495   }
  ]
};
