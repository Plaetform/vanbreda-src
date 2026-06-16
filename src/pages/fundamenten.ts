import { dossier as d } from '../data/dossier'
import { handwrite } from '../utils/handwriting'

export function renderFundamenten(): string {
  const items = d.fundamenten.map(f => `
    <div class="checkbox-item">
      <span class="checkbox-item__box"></span>
      <div>
        <div class="checkbox-item__title">${f.titel}</div>
        <div class="checkbox-item__desc">${f.beschrijving}</div>
      </div>
    </div>`).join('')

  // Last item spans full width
  const lastItem = d.fundamenten[d.fundamenten.length - 1]
  const mainItems = d.fundamenten.slice(0, -1).map(f => `
    <div class="checkbox-item">
      <span class="checkbox-item__box"></span>
      <div>
        <div class="checkbox-item__title">${f.titel}</div>
        <div class="checkbox-item__desc">${f.beschrijving}</div>
      </div>
    </div>`).join('')

  const closingNote = handwrite('Alles hangt samen — begin bij de data-laag ↗', 'accent', 777)

  return `
<div class="sheet sheet--paper" style="padding:24mm 24mm 20mm;">
  <div class="page-tab" style="background:var(--c-governance);">GOVERNANCE</div>

  <div style="position:relative;z-index:3;">
    <div class="page-header">
      <span>Dossier 2030 · Vanbreda Health Care</span><span>Bewijsstuk 07</span>
    </div>

    <div class="doc-title">
      <div class="doc-title__number">DOCUMENT 07</div>
      <h1 class="doc-title__heading">Wat moest hiervoor waar zijn?</h1>
      <div class="doc-title__sub">Wat er moet kloppen voordat Sophie's dossier zo kan verlopen.</div>
    </div>

    <div class="checkbox-grid">
      ${mainItems}
      <div class="checkbox-item" style="grid-column:1 / -1;">
        <span class="checkbox-item__box"></span>
        <div>
          <div class="checkbox-item__title">${lastItem.titel}</div>
          <div class="checkbox-item__desc">${lastItem.beschrijving}</div>
        </div>
      </div>
    </div>

    <div style="margin-top:8mm;display:flex;align-items:center;gap:5mm;font-size:23px;color:var(--c-copper);">
      <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;color:var(--c-gold-light);">→</span>
      ${closingNote}
    </div>
    <!-- Architecture sketch reference -->
    <div style="margin-top:5mm;display:flex;align-items:center;gap:5mm;background:var(--c-card);border:1px solid var(--c-border);padding:3mm 4mm;">
      <img src="/img-architecture.png" alt="architectuur" style="width:28mm;height:auto;opacity:.7;border-radius:1px;">
      <div style="font-family:var(--font-mono);font-size:9.5px;color:#8a8069;">↳ architectuurschets — zie bijlage schets 02</div>
    </div>
  </div>

  <div class="page-footer">
    <span>VANBREDA · HEALTH CARE</span><span>VERTROUWELIJK · TERUGGESTUURD UIT 2030</span><span>DOSSIER ${d.displayNr} · 09/10</span>
  </div>
</div>`
}
