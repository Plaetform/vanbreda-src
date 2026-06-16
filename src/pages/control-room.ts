import { dossier as d } from '../data/dossier'

export function renderControlRoom(): string {
  return `
<div class="sheet sheet--paper" style="padding:24mm 24mm 20mm;">
  <div class="page-tab" style="background:var(--c-governance);">GOVERNANCE</div>

  <div style="position:relative;z-index:3;">
    <div class="page-header">
      <span>Dossier 2030 · Vanbreda Health Care</span><span>Bewijsstuk 06</span>
    </div>

    <div class="doc-title">
      <div class="doc-title__number">DOCUMENT 06</div>
      <h1 class="doc-title__heading">Control-room rapport</h1>
      <div class="doc-title__sub">De cijfers achter Sophie's dossier — van doorlooptijd tot audit trail.</div>
    </div>

    <!-- KPI tiles -->
    <div class="kpi-grid" style="margin-bottom:5mm;">
      <div class="kpi-tile">
        <div class="kpi-tile__label">AUTONOME STAPPEN</div>
        <div class="kpi-tile__value">6<span>/9</span></div>
      </div>
      <div class="kpi-tile">
        <div class="kpi-tile__label">MENS. INTERVENTIES</div>
        <div class="kpi-tile__value">${d.metrics.menselijkeInterventies}</div>
      </div>
      <div class="kpi-tile">
        <div class="kpi-tile__label">DOORLOOPTIJD</div>
        <div style="font-size:15px;font-weight:700;color:var(--c-navy);margin-top:3mm;line-height:1.3;">${d.metrics.doorlooptijd}</div>
      </div>
      <div class="kpi-tile">
        <div class="kpi-tile__label">KLANTINSPANNING</div>
        <div style="font-size:15px;font-weight:700;color:var(--c-green);margin-top:3mm;line-height:1.3;">1 upload<br>${d.metrics.klantHerhaalvragen} herhaalvragen</div>
      </div>
    </div>

    <!-- Detail grid -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-bottom:6mm;">
      <div style="background:var(--c-card);border:1px solid var(--c-border);padding:5mm 6mm;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--c-gold-light);">DOCUMENTEN</span>
        <b style="font-size:14px;color:var(--c-navy);">${d.metrics.aantalDocumenten}</b>
      </div>
      <div style="background:var(--c-card);border:1px solid var(--c-border);padding:5mm 6mm;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--c-gold-light);">KANALEN</span>
        <b style="font-size:14px;color:var(--c-navy);">${d.metrics.aantalKanalen}</b>
      </div>
      <div style="background:var(--c-card);border:1px solid var(--c-border);padding:5mm 6mm;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--c-gold-light);">EXCEPTION REASON</span>
        <b style="font-size:13px;color:var(--c-red);">Dekkingsinterpretatie</b>
      </div>
      <div style="background:var(--c-card);border:1px solid var(--c-border);padding:5mm 6mm;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--c-gold-light);">AUDIT TRAIL</span>
        <b style="font-size:13px;color:var(--c-green);">${d.metrics.auditTrail} · herleidbaar</b>
      </div>
      <div style="background:var(--c-card);border:1px solid var(--c-border);padding:5mm 6mm;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--c-gold-light);">VOORKOMEN DUBBEL</span>
        <b style="font-size:14px;color:var(--c-navy);">${d.financieel.voorkomDubbel}</b>
      </div>
      <div style="background:var(--c-card);border:1px solid var(--c-border);padding:5mm 6mm;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.06em;color:var(--c-gold-light);">OVERRIDES</span>
        <b style="font-size:13px;color:var(--c-navy);">${d.metrics.menselijkeOverrides}</b>
      </div>
    </div>

    <!-- Besturing block -->
    <div style="background:var(--c-navy);color:#eaf0fb;padding:6mm 7mm;border-radius:2px;">
      <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;color:#9db4e6;margin-bottom:2.5mm;">BESTURING</div>
      <p style="font-family:var(--font-serif);font-size:16px;line-height:1.5;">Elke autonome stap is herleidbaar, elke uitzondering heeft een reden, elke beslissing een eigenaar. Zo wordt een mooie klantflow ook een bestuurbaar proces.</p>
    </div>
  </div>

  <div class="page-footer">
    <span>VANBREDA · HEALTH CARE</span><span>VERTROUWELIJK · TERUGGESTUURD UIT 2030</span><span>DOSSIER ${d.displayNr} · 08/10</span>
  </div>
</div>`
}
