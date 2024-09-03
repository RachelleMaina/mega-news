import Link from "next/link"

const Copyright = () => {
    return (
      <div className="flex flex-row justify-between p-3 m-5 rounded-r-lg pl-20" style={{
          backgroundColor:"rgba(62, 50, 50, 0.05)"
        }}>
        <div className="flex flex-row justify-between gap-1 text-black-75 text-xs">
          <Link href={""} className="hover:underline">
            Privacy Policy
          </Link>
          |
          <Link href={""} className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
        <span className="text-black-75 text-xs">
          All Copyright &copy; 2022 Reserved.
        </span>
      </div>
    )
}
export default Copyright