import { HelloProps } from "../types/formDataTypes"

export default function Hello ({firstName,lastName}:HelloProps) {

  return (
    <>
    <h1>
      Good Afternoon⏅ {firstName} {lastName}
    </h1>
    </>
  )
}