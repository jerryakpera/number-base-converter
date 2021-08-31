function displayConversion(conversion) {
  displayConvertingInfo(conversion.converting);
}

function displayConvertingInfo(converting) {
  const { from, to, numberToConvert } = converting;

  const numberTooltip = makeTooltip(numberToConvert.text, numberToConvert.desc);
  const fromTooltip = makeTooltip(from.text, from.desc);
  const toTooltip = makeTooltip(to.text, to.desc);

  let displayHTML = `
    <h3>
      Converting ${numberTooltip} from ${fromTooltip} to ${toTooltip}
    </h3>
  `;

  document.getElementById('converting').innerHTML = displayHTML;
}

function makeTooltip(text, info) {
  return `
    <span class="tool" data-tip="${info}" tabindex="1">
      ${text}
    </span>
  `;
  const tooltip = document.createElement('SPAN');

  const textnode = document.createTextNode(text);

  tooltip.classList.add('tool');
  tooltip.setAttribute('data-tip', info);
  tooltip.setAttribute('tabindex', 1);

  tooltip.innerHTML = text;

  return tooltip;
}
