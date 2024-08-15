export default function formatSelectData(
  data,
  key_label,
  key_value,
  key_label_2
) {
  let result;

  if (Array.isArray(data)) {
    result = [];

    for (let i = 0; i < data.length; i++) {
      let extra_data = data[i];

      if (key_label_2) {
        result.push({
          value: data[i][key_value],
          label: `${data[i][key_label] + " " + data[i][key_label_2]}`,
          name: `${data[i][key_label] + " " + data[i][key_label_2]}`,
          ...extra_data,
        });
      } else {
        result.push({
          value: data[i][key_value],
          label: data[i][key_label],
          name: data[i][key_label],
          ...extra_data,
        });
      }
    }
  } else {
    let extra_data = data;
    result = {
      value: key_value ? data[key_value] : data,
      label: key_label ? data[key_label] : data,
      name: key_label ? data[key_label] : data,
      ...extra_data,
    };
  }

  return result;
}
