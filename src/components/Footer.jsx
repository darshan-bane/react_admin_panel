import {Typography} from "antd"

const Footer = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://www.google.com" target="_blank">Privacy Policy</Typography.Link>
      <Typography.Link href="tel://+916132544200">+91 6132544200</Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">Terms And Conditions</Typography.Link>
    </div>
  )
}
export default Footer