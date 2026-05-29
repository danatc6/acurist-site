/* Acurist Portal — sample patient data
   Fake but realistic. Used by portal mock pages. No PHI. */

window.ACURIST_PROVIDER = {
  firstName: "Sarah",
  lastName: "Chen",
  credentials: "MD",
  npi: "1316123456",
  practice: "Pacific Family Medicine",
  practiceCity: "San Diego, CA",
  email: "schen@pacificfamilymed.com",
  role: "Attending Physician",
  initials: "SC"
};

/* Risk categories use the MCI Risk Index 0-100 scale from the marketing site:
   0-30 Low, 31-55 Moderate, 56-80 Elevated, 81-100 High */
function riskCategory(score) {
  if (score == null) return { label: "—", cls: "pill-gray" };
  if (score <= 30) return { label: "Low",      cls: "pill-green" };
  if (score <= 55) return { label: "Moderate", cls: "pill-amber" };
  if (score <= 80) return { label: "Elevated", cls: "pill-amber" };
  return                  { label: "High",     cls: "pill-red"   };
}
window.riskCategory = riskCategory;

/* Memory Performance Index (MPI) — from MCI Screen, scale ~50-100 (90+ healthy) */

window.ACURIST_PATIENTS = [
  {
    id: "p001",
    first: "Margaret", last: "O'Brien",
    sex: "F", dob: "1948-03-12",
    mrn: "PFM-44120",
    phone: "(619) 555-2018",
    email: "margaret.obrien@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2024-09-04",
    status: "active",
    nextAction: "6-mo follow-up due Jun 12",
    flagged: true,
    history: [
      { date: "2024-09-08", type: "Memory Screen", mpi: null,  risk: null, status: "completed" },
      { date: "2024-09-14", type: "MCI Screen",    mpi: 72,    risk: 64,   status: "completed" },
      { date: "2025-03-11", type: "MCI Screen",    mpi: 68,    risk: 71,   status: "completed" },
      { date: "2025-09-09", type: "MCI Screen",    mpi: 64,    risk: 76,   status: "completed" },
      { date: "2026-03-15", type: "MCI Screen",    mpi: 61,    risk: 79,   status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "warn",
      "Vascular Health": "warn",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "warn",
      "Family History": "warn"
    }
  },
  {
    id: "p002",
    first: "Robert", last: "Nguyen",
    sex: "M", dob: "1953-11-22",
    mrn: "PFM-44132",
    phone: "(619) 555-2107",
    email: "rnguyen@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2025-01-18",
    status: "active",
    nextAction: "Awaiting patient signature",
    flagged: false,
    history: [
      { date: "2025-01-22", type: "Memory Screen", mpi: null, risk: null, status: "completed" },
      { date: "2025-07-14", type: "Memory Screen", mpi: null, risk: null, status: "completed" },
      { date: "2026-05-26", type: "MCI Screen",    mpi: null, risk: null, status: "pending" }
    ],
    riskFactors: {
      "Sleep Quality": "good",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "good",
      "Family History": "good"
    }
  },
  {
    id: "p003",
    first: "Lillian", last: "Hartwell",
    sex: "F", dob: "1942-07-08",
    mrn: "PFM-43288",
    phone: "(619) 555-1844",
    email: "lhartwell@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2023-11-02",
    status: "active",
    nextAction: "Refer to neurology — discussed",
    flagged: true,
    history: [
      { date: "2023-11-09", type: "MCI Screen", mpi: 78, risk: 58, status: "completed" },
      { date: "2024-05-13", type: "MCI Screen", mpi: 73, risk: 67, status: "completed" },
      { date: "2024-11-18", type: "MCI Screen", mpi: 65, risk: 78, status: "completed" },
      { date: "2025-05-19", type: "MCI Screen", mpi: 58, risk: 84, status: "completed" },
      { date: "2025-11-24", type: "MCI Screen", mpi: 54, risk: 88, status: "completed" },
      { date: "2026-05-22", type: "MCI Screen", mpi: 51, risk: 91, status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "warn",
      "Vascular Health": "warn",
      "Physical Activity": "warn",
      "Social Engagement": "warn",
      "Hearing": "warn",
      "Family History": "warn"
    }
  },
  {
    id: "p004",
    first: "James", last: "Whitaker",
    sex: "M", dob: "1957-02-26",
    mrn: "PFM-44560",
    phone: "(619) 555-3361",
    email: "jwhitaker@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2025-04-30",
    status: "active",
    nextAction: "Annual screen due Apr 2027",
    flagged: false,
    history: [
      { date: "2025-05-02", type: "Memory Screen", mpi: null, risk: null, status: "completed" },
      { date: "2025-05-09", type: "MCI Screen",    mpi: 94,   risk: 19,   status: "completed" },
      { date: "2026-04-15", type: "MCI Screen",    mpi: 92,   risk: 22,   status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "good",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "good",
      "Family History": "warn"
    }
  },
  {
    id: "p005",
    first: "Eleanor", last: "Park",
    sex: "F", dob: "1951-09-04",
    mrn: "PFM-44712",
    phone: "(619) 555-4490",
    email: "epark@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2024-12-10",
    status: "active",
    nextAction: "Results ready — discuss at next visit",
    flagged: true,
    history: [
      { date: "2024-12-13", type: "Memory Screen", mpi: null, risk: null, status: "completed" },
      { date: "2024-12-20", type: "MCI Screen",    mpi: 81,   risk: 47,   status: "completed" },
      { date: "2025-06-23", type: "MCI Screen",    mpi: 77,   risk: 54,   status: "completed" },
      { date: "2025-12-19", type: "MCI Screen",    mpi: 74,   risk: 60,   status: "completed" },
      { date: "2026-05-19", type: "MCI Screen",    mpi: 71,   risk: 65,   status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "warn",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "warn",
      "Hearing": "good",
      "Family History": "warn"
    }
  },
  {
    id: "p006",
    first: "Daniel", last: "Rivera",
    sex: "M", dob: "1960-05-30",
    mrn: "PFM-44805",
    phone: "(619) 555-5122",
    email: "drivera@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2025-08-22",
    status: "active",
    nextAction: "MCI Screen due (Memory Screen flagged)",
    flagged: true,
    history: [
      { date: "2025-08-25", type: "Memory Screen", mpi: null, risk: null, status: "flagged" }
    ],
    riskFactors: {
      "Sleep Quality": "warn",
      "Vascular Health": "warn",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "good",
      "Family History": "good"
    }
  },
  {
    id: "p007",
    first: "Patricia", last: "Goldberg",
    sex: "F", dob: "1944-08-19",
    mrn: "PFM-43011",
    phone: "(619) 555-6088",
    email: "pgoldberg@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2023-06-14",
    status: "active",
    nextAction: "6-mo follow-up due Aug 8",
    flagged: false,
    history: [
      { date: "2023-06-20", type: "MCI Screen", mpi: 85, risk: 38, status: "completed" },
      { date: "2023-12-22", type: "MCI Screen", mpi: 87, risk: 35, status: "completed" },
      { date: "2024-06-26", type: "MCI Screen", mpi: 84, risk: 40, status: "completed" },
      { date: "2024-12-19", type: "MCI Screen", mpi: 83, risk: 43, status: "completed" },
      { date: "2025-06-23", type: "MCI Screen", mpi: 82, risk: 44, status: "completed" },
      { date: "2025-12-15", type: "MCI Screen", mpi: 80, risk: 48, status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "good",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "warn",
      "Family History": "warn"
    }
  },
  {
    id: "p008",
    first: "Carlos", last: "Mendoza",
    sex: "M", dob: "1955-12-11",
    mrn: "PFM-44619",
    phone: "(619) 555-7314",
    email: "cmendoza@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2025-02-04",
    status: "active",
    nextAction: "Memory Screen invite sent",
    flagged: false,
    history: [
      { date: "2025-02-08", type: "Memory Screen", mpi: null, risk: null, status: "completed" },
      { date: "2025-08-12", type: "Memory Screen", mpi: null, risk: null, status: "completed" },
      { date: "2026-05-28", type: "Memory Screen", mpi: null, risk: null, status: "invited" }
    ],
    riskFactors: {
      "Sleep Quality": "good",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "good",
      "Family History": "good"
    }
  },
  {
    id: "p009",
    first: "Helen", last: "Park-Williams",
    sex: "F", dob: "1949-06-15",
    mrn: "PFM-43901",
    phone: "(619) 555-8217",
    email: "hpw@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2024-03-19",
    status: "active",
    nextAction: "Annual screen due Oct 2026",
    flagged: false,
    history: [
      { date: "2024-03-25", type: "MCI Screen", mpi: 88, risk: 31, status: "completed" },
      { date: "2024-09-18", type: "MCI Screen", mpi: 89, risk: 29, status: "completed" },
      { date: "2025-03-22", type: "MCI Screen", mpi: 87, risk: 32, status: "completed" },
      { date: "2025-09-24", type: "MCI Screen", mpi: 86, risk: 34, status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "good",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "good",
      "Family History": "warn"
    }
  },
  {
    id: "p010",
    first: "Walter", last: "Kowalski",
    sex: "M", dob: "1939-01-17",
    mrn: "PFM-42119",
    phone: "(619) 555-9101",
    email: "wkowalski@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2022-08-30",
    status: "active",
    nextAction: "Neurology referral — appt 6/10",
    flagged: true,
    history: [
      { date: "2022-09-04", type: "MCI Screen", mpi: 76, risk: 62, status: "completed" },
      { date: "2023-03-07", type: "MCI Screen", mpi: 71, risk: 68, status: "completed" },
      { date: "2023-09-12", type: "MCI Screen", mpi: 64, risk: 76, status: "completed" },
      { date: "2024-03-16", type: "MCI Screen", mpi: 60, risk: 82, status: "completed" },
      { date: "2024-09-20", type: "MCI Screen", mpi: 55, risk: 86, status: "completed" },
      { date: "2025-03-25", type: "MCI Screen", mpi: 52, risk: 89, status: "completed" },
      { date: "2025-09-29", type: "MCI Screen", mpi: 49, risk: 92, status: "completed" },
      { date: "2026-04-03", type: "MCI Screen", mpi: 47, risk: 94, status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "warn",
      "Vascular Health": "warn",
      "Physical Activity": "warn",
      "Social Engagement": "warn",
      "Hearing": "warn",
      "Family History": "warn"
    }
  },
  {
    id: "p011",
    first: "Anita", last: "Desai",
    sex: "F", dob: "1956-04-02",
    mrn: "PFM-44488",
    phone: "(619) 555-1209",
    email: "adesai@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2024-10-08",
    status: "active",
    nextAction: "6-mo follow-up scheduled May 30",
    flagged: false,
    history: [
      { date: "2024-10-14", type: "MCI Screen", mpi: 90, risk: 26, status: "completed" },
      { date: "2025-04-21", type: "MCI Screen", mpi: 91, risk: 24, status: "completed" },
      { date: "2025-10-27", type: "MCI Screen", mpi: 89, risk: 28, status: "completed" }
    ],
    riskFactors: {
      "Sleep Quality": "good",
      "Vascular Health": "good",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "good",
      "Family History": "good"
    }
  },
  {
    id: "p012",
    first: "George", last: "Tanaka",
    sex: "M", dob: "1946-10-23",
    mrn: "PFM-43155",
    phone: "(619) 555-2245",
    email: "gtanaka@example.com",
    physician: "Sarah Chen, MD",
    enrolled: "2023-07-19",
    status: "active",
    nextAction: "Results pending (taken yesterday)",
    flagged: true,
    history: [
      { date: "2023-07-25", type: "MCI Screen", mpi: 79, risk: 56, status: "completed" },
      { date: "2024-01-29", type: "MCI Screen", mpi: 76, risk: 60, status: "completed" },
      { date: "2024-07-31", type: "MCI Screen", mpi: 72, risk: 66, status: "completed" },
      { date: "2025-02-04", type: "MCI Screen", mpi: 70, risk: 69, status: "completed" },
      { date: "2025-08-07", type: "MCI Screen", mpi: 67, risk: 72, status: "completed" },
      { date: "2026-05-28", type: "MCI Screen", mpi: null, risk: null, status: "pending" }
    ],
    riskFactors: {
      "Sleep Quality": "warn",
      "Vascular Health": "warn",
      "Physical Activity": "good",
      "Social Engagement": "good",
      "Hearing": "warn",
      "Family History": "good"
    }
  }
];

/* derived helpers */
function ageFromDOB(dob) {
  const d = new Date(dob);
  const t = new Date();
  let a = t.getFullYear() - d.getFullYear();
  const m = t.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && t.getDate() < d.getDate())) a--;
  return a;
}
window.ageFromDOB = ageFromDOB;

function latestScreen(p) {
  const completed = (p.history || []).filter(h => h.status === "completed" && h.mpi != null);
  return completed[completed.length - 1] || null;
}
window.latestScreen = latestScreen;

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
window.formatDate = formatDate;

/* Recent activity feed (last 30 days) — derived */
window.ACURIST_ACTIVITY = [
  { when: "Today, 9:42 AM",     who: "Margaret O'Brien",  what: "6-month follow-up reminder due",         href: "patient.html?id=p001", kind: "amber" },
  { when: "Today, 8:15 AM",     who: "George Tanaka",     what: "MCI Screen submitted — results pending", href: "patient.html?id=p012", kind: "blue"  },
  { when: "Yesterday, 4:31 PM", who: "Eleanor Park",      what: "MCI Screen completed — results ready",   href: "report.html?id=p005",  kind: "green" },
  { when: "Yesterday, 2:08 PM", who: "Lillian Hartwell",  what: "MCI Screen completed — High risk",       href: "report.html?id=p003",  kind: "red"   },
  { when: "Yesterday, 11:50 AM",who: "Carlos Mendoza",    what: "Memory Screen invite sent",              href: "patient.html?id=p008", kind: "gray"  },
  { when: "May 27, 10:14 AM",   who: "Margaret O'Brien",  what: "MCI Screen completed",                   href: "report.html?id=p001",  kind: "green" },
  { when: "May 26, 3:45 PM",    who: "Robert Nguyen",     what: "MCI Screen invite sent",                 href: "patient.html?id=p002", kind: "gray"  },
  { when: "May 22, 9:00 AM",    who: "Lillian Hartwell",  what: "MCI Screen invite sent",                 href: "patient.html?id=p003", kind: "gray"  }
];

window.ACURIST_KPIS = {
  screensThisMonth: { value: 38, delta: "+9 vs Apr",  dir: "up"  },
  reimbursementYTD: { value: "$23,406", delta: "+$1,840 vs prev YTD", dir: "up" },
  patientsFlagged:  { value: 6,  delta: "+2 this week", dir: "up"  },
  pendingResults:   { value: 2,  delta: "Avg 2.1 hrs", dir: "flat" }
};
