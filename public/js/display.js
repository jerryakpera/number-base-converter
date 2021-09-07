function displayConversion(conversion) {
  displayConvertingInfo(conversion.converting);
  displayAnswer(conversion.finalAnswer);
  displayNotes(conversion.notes);
  displaySteps(conversion.steps);
}

function displayConvertingInfo(converting) {
  const { from, to, numberToConvert } = converting;

  const numberTooltip = makeTooltip(numberToConvert.text, numberToConvert.desc);
  const fromTooltip = makeTooltip(from.text, from.desc);
  const toTooltip = makeTooltip(to.text, to.desc);

  let displayHTML = `
    <h5>
      Converting ${numberTooltip} from ${fromTooltip} to ${toTooltip}
    </h5>
  `;

  document.getElementById('converting').innerHTML = displayHTML;
  document.getElementById('converting').style.display = 'block';
}

function makeTooltip(text, info) {
  return `
    <span class="tool" data-tip="${info}" tabindex="1">
      ${text}
    </span>
  `;
}

function displayAnswer(answer) {
  const answerDisplay = `
    <h5>
      <i class="las la-check-circle icon white left"></i>
      ${answer}
    </h5>
  `;
  document.getElementById('answer').innerHTML = answerDisplay;
  document.getElementById('answer').style.display = 'block';
}

function displayNotes(notes) {
  const notesParagraphs = notes
    .map((note, i) => {
      return `
      <p>
        ${note}
      </p>
    `;
    })
    .join('');

  document.getElementById('notes').innerHTML = notesParagraphs;
  document.getElementById('notes').style.display = 'block';
}

function displaySteps(steps) {
  let stepsDisplay = steps
    .map((step) => {
      let stepTitle = getStepTitle(step.title, step.name);
      let stepHint = step.hint ? makeTooltip('Hint', step.hint) : null;
      let stepExample = step.example ? getStepExample(step.example) : null;
      let stepRows = getStepRows(step.rows);
      let stepNotes = step.notes ? getStepNotes(step.notes) : null;
      let stepSummary = step.summary ? getStepSummary(step.summary) : null;

      return `
        <div class="step">
          <div class="step-title">
            ${stepTitle}
          </div>
          <div class="step-body">
            ${stepHint ? stepHint : ''}
            <p>${step.description}</p>
            <div class="rows">
              ${stepExample ? stepExample : ''}
              ${stepRows}
            </div>
            ${stepNotes ? stepNotes : ''}
            ${stepSummary ? stepSummary : ''}
          </div>
        </div>
    `;
    })
    .join(' ');

  // Get steps
  document.getElementById('steps').innerHTML = stepsDisplay;
}

function getStepTitle(title, name) {
  return `
    <h5>
      ${title} - ${name}
    </h5>
  `;
}

function getStepExample(example) {
  return `
    <div class="example">
      eg. ${example}
    </div>
  `;
}

function getStepRows(rows) {
  if (!Array.isArray(rows)) {
    return `
      <div class="row">
        ${rows}
      </div>
      `;
  }

  return rows
    .map((row) => {
      return `
      <div class='row'>${row}</div>
    `;
    })
    .join(' ');
}

function getStepNotes(notes) {
  return `
    <p class="notes">
      <i class="las la-sticky-note"></i>
      ${notes}
    </p>
  `;
}

function getStepSummary(summary) {
  return `
    <p class="summary">
      <i class="las la-compress"></i>
      ${summary}
    </p>
  `;
}
