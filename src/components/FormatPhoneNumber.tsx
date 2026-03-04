export default function FormatPhoneNumber({
  phoneNumberString,
}: {
  phoneNumberString: string;
}) {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "");
  // console.log(cleaned.length);

  let match: RegExpMatchArray | null = null;
  if (cleaned.length == 10) {
    match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  else if (cleaned.length == 11) {
    // console.log("11 digits");
    match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
    if (match) return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }

  return "";
}