import { dossier as d } from '../data/dossier'

export function renderOpenVragen(): string {
  const vragen = d.openVragen.map((v, i) => {
    const nr = String(i + 1).padStart(2, '0')
    return `<div style="display:flex;gap:4mm;"><span style="font-family:var(--font-mono);font-size:18px;font-weight:700;color:var(--c-copper);line-height:1;">${nr}</span><span style="font-size:13.5px;color:#2d2a22;line-height:1.45;">${v}</span></div>`
  }).join('\n')

  return `
<div class="sheet sheet--paper" style="padding:24mm 24mm 20mm;">
  <div class="page-tab" style="background:var(--c-governance);">GOVERNANCE</div>

  <div style="position:relative;z-index:3;">
    <div class="page-header">
      <span>Dossier 2030 · Vanbreda Health Care</span><span>Bewijsstuk 08</span>
    </div>

    <div class="doc-title">
      <div class="doc-title__number">DOCUMENT 08</div>
      <h1 class="doc-title__heading">De open vragen</h1>
      <div class="doc-title__sub">Wat we samen moeten begrijpen om dit toekomstbeeld uitvoerbaar te maken.</div>
    </div>

    <div class="info-card info-card--copper" style="padding:7mm 8mm;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5mm 9mm;">
        ${vragen}
      </div>
      <div style="margin-top:7mm;border-top:1px dashed var(--c-border-dashed);padding-top:4mm;font-family:var(--font-mono);font-size:10.5px;color:var(--c-gold-light);letter-spacing:.04em;">↳ De volledige vragenlijst (16 vragen) zit in het bijgevoegde Excel-bestand.</div>
    </div>

    <!-- Closing -->
    <div style="margin-top:14mm;text-align:center;">
      <div class="stamp" style="display:inline-block;transform:rotate(-2deg);">
        <div class="stamp__year">2030</div>
        <div class="stamp__text">TERUGGESTUURD NAAR 2026 VOOR REALISATIE</div>
      </div>
      <p style="font-family:var(--font-serif);font-size:18px;line-height:1.5;color:#33302a;max-width:140mm;margin:9mm auto 0;">Dit dossier roept de vraag op.<br><b style="color:var(--c-navy);">Het formele voorstel geeft het antwoord.</b></p>
      <img src="/vanbreda-logo.svg" alt="Vanbreda" style="width:38mm;height:auto;margin-top:9mm;opacity:.9;">
    </div>
  </div>

  <div class="page-footer">
    <span>VANBREDA · HEALTH CARE</span><span>VERTROUWELIJK · TERUGGESTUURD UIT 2030</span><span>DOSSIER ${d.displayNr} · 10/10</span>
  </div>
</div>`
}
