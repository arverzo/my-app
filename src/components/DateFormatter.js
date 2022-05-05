import React from "react";

export default function DateFormatter(dateString) {
  const option = { year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, option);
}
