:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f4f0;
  --bg-tertiary: #ebebea;
  --bg-success: #eaf3de;
  --bg-danger: #fcebeb;
  --text-primary: #1a1a18;
  --text-secondary: #5f5e5a;
  --text-success: #3b6d11;
  --text-danger: #a32d2d;
  --border-primary: rgba(0,0,0,0.4);
  --border-secondary: rgba(0,0,0,0.25);
  --border-tertiary: rgba(0,0,0,0.12);
  --radius-md: 8px;
  --radius-lg: 12px;

  --color-background-primary: var(--bg-primary);
  --color-background-secondary: var(--bg-secondary);
  --color-background-tertiary: var(--bg-tertiary);
  --color-background-success: var(--bg-success);
  --color-background-danger: var(--bg-danger);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-success: var(--text-success);
  --color-text-danger: var(--text-danger);
  --color-border-primary: var(--border-primary);
  --color-border-secondary: var(--border-secondary);
  --color-border-tertiary: var(--border-tertiary);
  --border-radius-md: var(--radius-md);
  --border-radius-lg: var(--radius-lg);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a18;
    --bg-secondary: #2c2c2a;
    --bg-tertiary: #222220;
    --bg-success: #27500a;
    --bg-danger: #501313;
    --text-primary: #f1efe8;
    --text-secondary: #b4b2a9;
    --text-success: #c0dd97;
    --text-danger: #f09595;
    --border-primary: rgba(255,255,255,0.4);
    --border-secondary: rgba(255,255,255,0.2);
    --border-tertiary: rgba(255,255,255,0.1);
  }
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.5;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 1.5rem 1rem 3rem;
}

.header { margin-bottom: 1.5rem; }
.header h1 { font-size: 20px; font-weight: 500; margin: 0 0 4px; }
.header p { font-size: 13px; color: var(--text-secondary); margin: 0; }

.card {
  background: var(--bg-primary);
  border: 0.5px solid var(--border-tertiary);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-title { font-size: 14px; font-weight: 500; }

.form-group { margin-bottom: 12px; }
.form-group label { display: block; font-size: 12px; color: var(--text-secondary); margin-bottom: 4px; }

.input {
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  border: 0.5px solid var(--border-secondary);
  border-radius: var(--radius-md);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.15s;
}
.input:focus { outline: none; border-color: var(--border-primary); }
.textarea { resize: vertical; min-height: 110px; line-height: 1.6; }

.btn {
  padding: 7px 14px;
  font-size: 13px;
  border: 0.5px solid var(--border-secondary);
  border-radius: var(--radius-md);
  background: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.1s;
}
.btn:hover { background: var(--bg-tertiary); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-primary { border-color: var(--border-primary); font-weight: 500; }
.btn-sm { padding: 4px 10px; font-size: 12px; }

.img-grid { display: flex; gap: 8px; flex-wrap: wrap; }
.img-thumb { position: relative; width: 64px; height: 64px; }
.img-thumb img { width: 64px; height: 64px; object-fit: cover; border-radius: var(--radius-md); border: 0.5px solid var(--border-secondary); display: block; }
.img-remove {
  position: absolute; top: -4px; right: -4px;
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--bg-danger); color: var(--text-danger);
  border: none; cursor: pointer; font-size: 12px;
  display: flex; align-items: center; justify-content: center; padding: 0; line-height: 1;
}
.img-add {
  width: 64px; height: 64px; border-radius: var(--radius-md);
  border: 0.5px dashed var(--border-secondary); background: var(--bg-secondary);
  cursor: pointer; color: var(--text-secondary);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  font-size: 10px; font-family: inherit;
}
.img-add span { font-size: 20px; line-height: 1; }

.error { font-size: 12px; color: var(--text-danger); margin: 0 0 8px; }

.entry-item { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-top: 0.5px solid var(--border-tertiary); }
.check { color: var(--text-success); }
.entry-name { font-weight: 500; flex: 1; }
.entry-status { font-size: 11px; color: var(--text-secondary); }

.results-grid { display: grid; grid-template-columns: 210px 1fr; gap: 1rem; }
@media (max-width: 640px) { .results-grid { grid-template-columns: 1fr; } }

.panel-label { font-size: 11px; color: var(--text-secondary); margin: 0 0 8px; }

.person-card {
  background: var(--bg-primary); border: 0.5px solid var(--border-tertiary);
  border-radius: var(--radius-md); padding: 10px; margin-bottom: 6px; cursor: pointer;
  transition: background 0.1s, border-color 0.1s;
}
.person-card:hover { background: var(--bg-secondary); }
.person-card.selected { border-color: var(--border-primary); background: var(--bg-secondary); }

.person-header { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.rank { font-size: 10px; color: var(--text-secondary); min-width: 16px; }
.person-name { font-size: 12px; font-weight: 500; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.mini-bars { display: flex; gap: 2px; }
.mini-bar { flex: 1; height: 3px; border-radius: 2px; }

.chip { display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 12px; font-weight: 500; }
.chip-high { background: var(--bg-success); color: var(--text-success); }
.chip-mid { background: var(--bg-secondary); color: var(--text-secondary); }
.chip-low { background: var(--bg-danger); color: var(--text-danger); }
.chip-neutral { font-size: 11px; color: var(--text-secondary); }

.detail-panel { min-height: 200px; }
.empty-state { display: flex; align-items: center; justify-content: center; height: 220px; color: var(--text-secondary); font-size: 13px; }

.detail-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; }
.detail-name { font-size: 16px; font-weight: 500; }
.detail-rank { font-size: 12px; color: var(--text-secondary); }

.charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; }
@media (max-width: 480px) { .charts-grid { grid-template-columns: 1fr; } }

.chart-label { font-size: 10px; color: var(--text-secondary); margin: 0 0 4px; text-align: center; }
.legend { display: flex; gap: 12px; justify-content: center; font-size: 11px; color: var(--text-secondary); margin-top: 4px; }

.dim-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 12px; }
.dim-card { background: var(--bg-secondary); border-radius: var(--radius-md); padding: 6px 8px; }
.dim-label { font-size: 10px; color: var(--text-secondary); margin-bottom: 2px; }
.dim-row { display: flex; justify-content: space-between; align-items: center; }
.dim-score { font-size: 12px; font-weight: 500; }
.dim-comment { font-size: 10px; color: var(--text-secondary); margin-top: 2px; line-height: 1.4; }

.feedback-box { background: var(--bg-secondary); border-radius: var(--radius-md); padding: 12px 14px; }
.feedback-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px; font-weight: 500; }
.feedback-text { font-size: 12px; line-height: 1.7; margin: 0; white-space: pre-wrap; }
.muted { font-size: 12px; color: var(--text-secondary); margin: 0; }
