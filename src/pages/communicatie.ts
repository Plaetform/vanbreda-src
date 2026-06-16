import { dossier as d } from '../data/dossier'

export function renderCommunicatie(): string {
  return `
<div class="sheet sheet--paper" style="padding:24mm 24mm 20mm;">
  <div class="page-tab" style="background:var(--c-teal);">COMMUNICATIE</div>

  <div style="position:relative;z-index:3;">
    <div class="page-header">
      <span>Dossier 2030 · Vanbreda Health Care</span><span>Bewijsstuk 05</span>
    </div>

    <div class="doc-title">
      <div class="doc-title__number">DOCUMENT 05</div>
      <h1 class="doc-title__heading">Communicatie aan de verzekerde</h1>
      <div class="doc-title__sub">Wat Sophie te horen kreeg — en via welke kanalen.</div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 56mm;gap:8mm;align-items:start;">
      <!-- Letter -->
      <div class="letter">
        <img src="/vanbreda-logo.svg" alt="Vanbreda" style="width:34mm;height:auto;margin-bottom:7mm;">
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:0 0 4mm;">Beste ${d.verzekerde.roepnaam},</p>
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:0 0 4mm;">We hebben je dossier ontvangen en grotendeels kunnen beoordelen.</p>
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:0 0 4mm;"><b>Wat we nu al goedkeuren:</b> de kosten van je spoedopname, operatie, medicatie en nazorgconsult — in totaal ${d.financieel.voorlopigVergoedbaar} (na aftrek eigen risico).</p>
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:0 0 4mm;">Eén onderdeel (de radiologiefactuur van ${d.financieel.radiologie}) kijken we nog na. Dat gaat over de identificatiekoppeling op dat document — een collega bekijkt dit persoonlijk.</p>
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:0 0 4mm;">De premium maaltijddienst (${d.financieel.premiumMaaltijd}) valt helaas niet onder je hospitalisatiedekking.</p>
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:0 0 4mm;">Je hoeft niets opnieuw te bezorgen; we hebben alles wat we nodig hebben. Je hoort binnen drie werkdagen van ons.</p>
        <p style="font-size:13.5px;color:#2d2a22;line-height:1.6;margin:4mm 0 0;">Met vriendelijke groet,<br><b style="color:var(--c-navy);">${d.communicatie.afzender.naam}<br>${d.communicatie.afzender.functie}<br>${d.communicatie.afzender.organisatie}</b></p>
      </div>

      <!-- App preview -->
      <div>
        <div class="app-preview">
          <div class="app-preview__label">VANBREDA APP</div>
          <div class="app-preview__bubble">Je dossier is grotendeels goedgekeurd ✓ Voorlopige vergoeding: ${d.financieel.voorlopigVergoedbaar}. Eén onderdeel kijken we nog na.</div>
          <div class="app-preview__bubble">Je hoeft niets te doen. We laten het weten binnen drie werkdagen.</div>
        </div>
        <div style="margin-top:5mm;background:#fbf6ea;border:1px solid var(--c-border);padding:4mm 5mm;">
          <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--c-gold);margin-bottom:2.5mm;">PRINCIPES</div>
          <ul style="margin:0;padding-left:4mm;font-size:11px;color:#4a4536;line-height:1.7;">
            <li>Begrijpelijke beslissing</li>
            <li>Geen juridisch jargon</li>
            <li>Wat is goedgekeurd, wat nog niet</li>
            <li>Wanneer er antwoord komt</li>
            <li>Geen herhaling nodig</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>VANBREDA · HEALTH CARE</span><span>VERTROUWELIJK · TERUGGESTUURD UIT 2030</span><span>DOSSIER ${d.displayNr} · 07/10</span>
  </div>
</div>`
}
