import { dossier as d } from '../data/dossier'
import { handwrite } from '../utils/handwriting'

export function renderNotitie(): string {
  const memoText = handwrite(d.notitie.tekst, 'memo', 42)
  const signText = handwrite(`— ${d.notitie.auteur}, Claims`, 'signature', 99)
  const quoteText = 'Het dossier lag er al compleet — met voorstel, context en bronnen. Ik hoefde alleen nog de interpretatie te doen en de uitleg aan Sophie te schrijven.'

  return `
<div class="sheet sheet--paper" style="padding:24mm 24mm 20mm;">
  <div class="page-tab" style="background:var(--c-navy);">CLAIMS</div>

  <div style="position:relative;z-index:3;">
    <div class="page-header">
      <span>Dossier 2030 · Vanbreda Health Care</span><span>Bewijsstuk 04</span>
    </div>

    <div class="doc-title">
      <div class="doc-title__number">DOCUMENT 04</div>
      <h1 class="doc-title__heading">Notitie van de medewerker</h1>
      <div class="doc-title__sub">De roltransformatie, in de eigen woorden van wie het werk doet.</div>
    </div>

    <!-- Notepad memo -->
    <div class="memo">
      <div class="memo__margin-line"></div>
      <div class="memo__hole"></div>
      <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;color:var(--c-gold);margin-bottom:5mm;">MEMO · CLAIMSBEHANDELAAR</div>
      <p style="font-size:30px;line-height:8.5mm;color:var(--c-ink-blue);">${memoText}</p>
      <div style="margin-top:9mm;font-size:26px;color:var(--c-ink-blue);">${signText}</div>
    </div>

    <!-- Quote -->
    <div style="margin-top:12mm;display:flex;gap:6mm;align-items:flex-start;">
      <div style="font-family:var(--font-mono);font-size:34px;color:var(--c-teal);line-height:1;">"</div>
      <p style="font-family:var(--font-serif);font-size:15px;line-height:1.55;color:#4a4536;max-width:135mm;">${quoteText}</p>
    </div>
  </div>

  <div class="page-footer">
    <span>VANBREDA · HEALTH CARE</span><span>VERTROUWELIJK · TERUGGESTUURD UIT 2030</span><span>DOSSIER ${d.displayNr} · 06/10</span>
  </div>
</div>`
}
