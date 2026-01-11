import { mdToPdf } from 'md-to-pdf';

(async () => {
  try {
    const result = await mdToPdf({ path: 'docs/PROJECT_DOCUMENTATION_PT.md' }, { dest: 'docs/PROJECT_DOCUMENTATION_PT.pdf' });
    if (result) {
      console.log('PDF gerado em docs/PROJECT_DOCUMENTATION_PT.pdf');
    }
  } catch (err) {
    console.error('Erro ao gerar PDF:', err);
    process.exit(1);
  }
})();
