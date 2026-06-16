import { dossier as d } from '../data/dossier'

export function renderCoverAlt(): string {
  return `
<div class="sheet sheet--karton" style="font-family:Arial,Helvetica,sans-serif;">
  <div class="sheet__texture"></div>
  <div class="sheet__border-outer"></div>
  <div class="sheet__border-inner"></div>

  <!-- Binder clip -->
  <div class="binder-clip">
    <div class="binder-clip__ring binder-clip__ring--left"></div>
    <div class="binder-clip__ring binder-clip__ring--right"></div>
    <div class="binder-clip__body"></div>
  </div>

  <!-- Tab index -->
  <div class="tab-index">
    <div class="tab-index__tab tab-index__tab--claims">CLAIMS</div>
    <div class="tab-index__tab tab-index__tab--comm">COMMUNICATIE</div>
    <div class="tab-index__tab tab-index__tab--b2b">B2B&nbsp;·&nbsp;B2I</div>
    <div class="tab-index__tab tab-index__tab--gov">GOVERNANCE</div>
  </div>

  <div style="position:relative;padding:24mm 26mm 18mm;min-height:297mm;display:flex;flex-direction:column;z-index:3;">

    <!-- Logos — warm, dossier-achtig -->
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <img src="/vanbreda-logo.svg" alt="Vanbreda" style="width:36mm;height:auto;opacity:.4;filter:sepia(.6) saturate(.4);">
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2mm;opacity:.5;">
        <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;color:#8a7a4e;">OPGESTELD DOOR</div>
        <div style="background:#f5efe2;border:1px solid #d4c9a8;padding:3mm 5mm;transform:rotate(.6deg);">
          <img src="/ae-logo.png" alt="AE" style="width:18mm;height:auto;display:block;filter:sepia(.5) saturate(.3);">
        </div>
      </div>
    </div>

    <!-- Classificatie -->
    <div style="margin-top:8mm;font-family:var(--font-mono);font-size:9px;letter-spacing:.22em;color:#8a6a3e;">VERTROUWELIJK</div>

    <!-- De foto: verfrommelde formulieren — het oude systeem -->
    <div style="margin-top:6mm;position:relative;overflow:hidden;border-radius:2px;box-shadow:0 8px 24px rgba(0,0,0,.35);">
      <img src="/img-zo-nooit-meer.png" alt="" style="width:100%;height:auto;display:block;filter:sepia(.2) contrast(1.05);">
      <div style="position:absolute;bottom:0;left:0;right:0;height:50%;background:linear-gradient(to top,rgba(0,0,0,.65),transparent);"></div>
      <div style="position:absolute;bottom:6mm;left:7mm;right:7mm;">
        <div style="font-family:var(--font-serif);font-size:13px;color:rgba(255,255,255,.6);line-height:1.4;">Declaratieoverzicht · AFGEWEZEN · NOG NIET COMPLEET · BEL SNEL</div>
      </div>
    </div>

    <!-- DOSSIER 2030 — warme bruintinten, geen blauw -->
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 2mm;">
      <h1 style="font-weight:900;color:#2a2215;font-size:108px;line-height:.88;letter-spacing:-.03em;margin:0;">DOSSIER<br>2030</h1>
      <div style="margin-top:10mm;">
        <div style="font-family:var(--font-serif);font-size:34px;color:#3a2f15;line-height:1.2;font-style:italic;">Wat als Sophie niets opnieuw<br>had hoeven bezorgen?</div>
      </div>
      <div style="margin-top:8mm;font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;color:#8a7a4e;">${d.displayNr}</div>
    </div>

    <!-- Onderaan -->
    <div style="font-family:var(--font-mono);font-size:10px;color:#6b5a33;letter-spacing:.06em;">
      Teruggestuurd naar 2026 voor realisatie.
    </div>

  </div>

  <!-- Stempel — rechtsonder, uit de weg van de tekst -->
  <div style="position:absolute;bottom:34mm;right:28mm;transform:rotate(-8deg);z-index:5;border:3.5px solid #c2473a;color:#c2473a;border-radius:4px;padding:6mm 10mm;font-family:var(--font-mono);text-align:center;mix-blend-mode:multiply;opacity:.7;">
    <div style="font-size:11px;letter-spacing:.25em;border-bottom:2px solid #c2473a;padding-bottom:2mm;margin-bottom:2mm;">TERUGGESTUURD</div>
    <div style="font-size:28px;font-weight:900;letter-spacing:.03em;line-height:1;">NAAR 2026</div>
    <div style="font-size:11px;letter-spacing:.18em;margin-top:1.5mm;">VOOR REALISATIE</div>
  </div>
</div>`
}
