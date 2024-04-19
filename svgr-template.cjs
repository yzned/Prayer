const template = ({ componentName, imports, interfaces, props, jsx }, { tpl }) =>
  tpl`
    ${imports}
    ${interfaces};

    export const ${componentName} = (${props}) => (
      ${jsx}
    );
  `;

module.exports = template;
