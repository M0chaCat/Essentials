function createTweak({
  id,
  label,
  description,
  section,
  css,
  helpText,
  previewBefore,
  previewAfter,
  incompatibleWith = []
}) {
  return {
    id,
    label,
    description,
    section,
    css,
    helpText,
    previewBefore,
    previewAfter,
    incompatibleWith
  };
}

module.exports = createTweak; 