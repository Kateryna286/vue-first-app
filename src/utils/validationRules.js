export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Заполни это поле",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Превышен лимит",
});
