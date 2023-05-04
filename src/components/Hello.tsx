import { HelloProps } from "../types/formDataTypes"

export default function Hello ({firstName,lastName}:HelloProps) {

  return (
    <>
    <h1>
      Good Morning⏅ {firstName} {lastName}
    </h1>
    </>
  )
}